import React, {useState,useRef} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


const ImageUploadFunction =(props)=> {
    const [success,setSuccess]=useState(false)
    const [fileSelected,setFileSelected]=useState(false)
    const refContainer = useRef(null);

    const handleChange = (ev) => {
        setFileSelected(true)
    }

    const handleUpload = (event) => {

        const file = refContainer.current.files[0];
        console.log('file, ',refContainer.current.files[0])
        const fileParts = file.name.split('.');
        const fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("https://uk5p4uqkgi.execute-api.eu-west-1.amazonaws.com/dev/requestUploadURL",{
            fileType : fileType
        })
            .then(response => {

                const returnData = response.data;
                const signedRequest = returnData.uploadURL;
                console.log(returnData)
                const dataParts = signedRequest.split('?');
                const url = dataParts[0]
                props.setImage(url)
                console.log("Recieved a signed request " + signedRequest);
                const options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };

                axios.put(signedRequest,file,options)
                    .then(result => {
                        console.log("Upload completed")
                        setSuccess(true)
                    })
                    .catch(error => {
                        alert("ERROR " + JSON.stringify(error));
                    })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            })
    }

        const ThumbImage = () =>(
                <Col md="auto"><Image src={props.image} width={250}/></Col>
        )
        return (
            <div>
                {success? <ThumbImage/>:<Col md="auto"><Image src={props.image} width={250}/></Col>}
                <input type="file"className={"button-variant:dark"} onChange={handleChange} ref={refContainer}/>
                <br/>
                {fileSelected ? <Button variant="dark"
                                                   style={{marginTop: 15,marginBottom:15}}
                                                   onClick={handleUpload}>Lataa</Button> : null}
            </div>
        );
    }

export default ImageUploadFunction;
