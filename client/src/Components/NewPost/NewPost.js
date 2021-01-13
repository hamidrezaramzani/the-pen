import React, { useContext, useState } from "react";
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
import { UsersContext } from "../../Context/UsersProvider";
import NewPostTitle from "./NewPostTitle";
import NewPostInput from "./NewPostInput";
const NewPost = () => {
  const history = useHistory();
  const user = useContext(UsersContext);
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
    try {
      const data = new FormData();
      data.append("title", values.title);
      data.append("content", content);
      data.append("tags", JSON.stringify(tags));
      data.append("cover", cover);
      data.append("description", values.description);
      data.append("user_id", user.state.user._id);
      await newPostMutation(data);
    } catch (error) {
      console.log(error);
      swal.fire({
        title: "error",
        html: "we have an error on server",
        icon: "error",
      });
    }
  };

  const onChange = (_, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center p-5">
        <Col xs="12" md="8" className="new-post">
          <NewPostTitle />
          <NewPostRules />
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <SelectCover setCover={setCover} />
            <NewPostInput
              name="title"
              placeholder="Enter your post title"
              className="title-post"
              errors={errors}
            />
            <NewPostInput
              name="description"
              placeholder="Enter your post description"
              className="description-post"
              errors={errors}
            />
            <CKEditor editor={ClassicEditor} onChange={onChange} />
            <PostTags tags={tags} setTags={setTags} />
            <button type="submit" className="btn btn-sm btn-info moon ">
              Register
              <FormLoading isLoading={isLoading} />
            </button>
            <button className="btn btn-sm btn-warning moon mx-2">draft</button>
            &nbsp;
            <button className="btn btn-sm btn-danger moon">Reset</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default NewPost;
