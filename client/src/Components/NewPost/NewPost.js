import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import "megadraft/dist/css/megadraft.css";
import NewPostRules from "./NewPostRules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormErrorHandler from "../FormErrorHandling";
import * as yup from "yup";
import FinishNewPost from "./FinishNewPost";
import PostTags from "./PostTags";
const NewPost = () => {
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required("can not be empty"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [state, setState] = React.useState({
    editorState: editorStateFromRaw(null),
  });

  const onChange = (editorState) => {
    setState({ editorState });
  };

  const onSubmit = (values) => {
    setShow(true);
    console.log(values);
  };


  return (
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs="12" md="8" className="new-post">
          <h2 className="d-block my-2 text-light moon">Write New Post</h2>
          <NewPostRules />
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <dragAndDropUpload />
            <input
              type="text"
              name="title"
              className="title-post"
              placeholder="enter your post title"
              ref={register}
            />
            <FormErrorHandler errors={errors} name="title" />
            <br />
            <br />
            <MegadraftEditor
              editorState={state.editorState}
              onChange={onChange}
              placeholder="Add some text here"
            />
            <br />
            <PostTags />
            <br />
            <br />

            <button type="submit" className="btn btn-sm btn-success moon">
              Posting
            </button>
            &nbsp;
            <button className="btn btn-sm btn-danger moon">Reset</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPost;
