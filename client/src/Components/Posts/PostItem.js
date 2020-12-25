import moment from "moment";
const PostItem = ({ title, content, createAt }) => {
  console.log(createAt);
  return (
    <li>
      <h3>{title}</h3>
      <p>{content.substr(0, 120)}...</p>
      <span>{moment.unix(createAt).format("YYYY/MM/DD h:mm:ss a")}</span>
    </li>
  );
};

export default PostItem;
