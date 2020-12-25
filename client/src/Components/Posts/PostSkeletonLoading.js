import React from "react";
import ContentLoader from "react-content-loader";

const PostSkeletonLoading = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#666666"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="42" rx="3" ry="3" width="88" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="3" y="86" rx="3" ry="3" width="71" height="6" />
  </ContentLoader>
);

export default PostSkeletonLoading;
