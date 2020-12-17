import { FiUpload } from "react-icons/fi";

const dragAndDropUpload = () => {
  return (
    <div className="drag-drop-upload">
      <h2>Drag and Drop Cover here to upload</h2>
      <br />
      <div className="upload-cover-box">
        <h5>
          <FiUpload /> Browse Files
        </h5>
        <input type="file" className="cover" />
      </div>
    </div>
  );
};

export default dragAndDropUpload;
