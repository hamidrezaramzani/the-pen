import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import swal from "../swal";
const SelectCover = ({ setCover }) => {
  const SUPPORTED_FORMATS = ["jpg", "png", "jpeg"];
  const [filename, setFileName] = useState("");
  const onChange = (e) => {
    const file = e.target.files[0];
    const format = file.name.split(".")[1];
    if (SUPPORTED_FORMATS.includes(format.toLowerCase())) {
      setFileName(file.name);
      setCover(file);
    } else {
      setCover(null);
      swal.fire({
        title: "Error",
        html: "Please select an image",
        icon: "error",
      });
    }
    console.log(format);
  };
  return (
    <div className="drag-drop-upload">
      <h2>Drag and Drop Cover here to upload</h2>
      <br />
      <p>{filename}</p>
      <div className="upload-cover-box">
        <h5>
          <FiUpload /> Browse Files
        </h5>
        <input type="file" onChange={onChange} className="cover" />
      </div>
    </div>
  );
};

export default SelectCover;
