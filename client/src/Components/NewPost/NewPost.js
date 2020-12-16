import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import "megadraft/dist/css/megadraft.css";
import NewPostRules from "./NewPostRules";
const NewPost = () => {
  const [state, setState] = React.useState({
    editorState: editorStateFromRaw(null),
  });

  const onChange = (editorState) => {
    setState({ editorState });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs="12" md="8" className="new-post">
          <h2 className="d-block my-2 text-light moon">Write New Post</h2>
          <br />
          <NewPostRules />
          <br />
          <form>
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
            <input
              type="text"
              name="content"
              className="title-post"
              placeholder="enter your post title"
            />
            <MegadraftEditor
              editorState={state.editorState}
              onChange={onChange}
              placeholder="Add some text here"
            />
            <button className="btn btn-sm btn-success moon">Posting</button>
            &nbsp;
            <button className="btn btn-sm btn-danger moon">Reset</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPost;
