
import axios from 'axios';
import {useState} from 'react'
function GoogleDriveFileUploader() {
    const [url, setUrl] = useState("");
    const [file, setFile] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("file", file.data);
      console.log(formData);
      // const response = await axios.post("http://localhost:3600/product/upload-file-to-google-drive", formData);
  
      // const responseWithBody = await response.json();
      // if (response) setUrl(responseWithBody.publicUrl);
    };
  
    const handleFileChange = (e) => {
      const file = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };
      setFile(file);
    };
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1voFalSBQ_5uX8-rxk6Py2IW3_5km0wb4' alt='no image' height='100px' width='70px' />
        </div>
      </>
      
    );
  }
  
  export default GoogleDriveFileUploader;