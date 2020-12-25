import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useMutation } from "react-query";
import NewPostRules from "./NewPostRules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormErrorHandler from "../FormErrorHandling";
import * as yup from "yup";
import PostTags from "./PostTags";
import { newPost } from "../requests";
import SelectCover from "./SelectCover";
import FormLoading from "../FormLoading";
import swal from "../swal";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const NewPost = () => {
  const history = useHistory();
  const [newPostMutation, { isLoading }] = useMutation(newPost, {
    onSuccess: (res) => {
      swal.fire({
        title: "success",
        html: "Post Added",
        icon: "success",
        onClose: () => {
          history.push("/");
        },
      });
    },
    onerror: (err) => {
      swal.fire({
        title: "error",
        html: "we have an error on server",
        icon: "error",
      });
    },
  });

  const [cover, setCover] = useState(null);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const schema = yup.object().shape({
    title: yup.string().required("can not be empty"),
    description: yup.string().required("can not be empty"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("content", content);
    data.append("tags", JSON.stringify(tags));
    data.append("cover", cover);
    data.append("description", values.description);
    await newPostMutation(data);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs="12" md="8" className="new-post">
          <h2 className="d-block my-2 text-light moon">
            Write New Post
            <Link className="btn btn-sm btn-warning float-right" to="/posts">
              Posts
            </Link>
          </h2>
          <br />
          <NewPostRules />
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <SelectCover setCover={setCover} />
            <input
              type="text"
              name="title"
              className="title-post"
              placeholder="enter your post title"
              ref={register}
            />
            <FormErrorHandler errors={errors} name="title" />
            <input
              type="text"
              name="description"
              className="description-post"
              placeholder="enter your post description"
              ref={register}
            />
            <FormErrorHandler errors={errors} name="description" />
            <br />
            <br />
            <CKEditor
              editor={ClassicEditor}
              data=""
              onChange={(_, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
            <br />
            <PostTags tags={tags} setTags={setTags} />
            <br />
            <br />
            <button type="submit" className="btn btn-sm btn-info moon ">
              Register
              <FormLoading isLoading={isLoading} />
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
