import React from "react";
import ContentLoader from "react-content-loader";

const HomePostLoading = (props) => (
  <ContentLoader
    speed={3}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#666666"
    foregroundColor="#ececec"
    {...props}
  >
    <rect x="379" y="56" rx="0" ry="0" width="9" height="0" />
    <rect x="68" y="14" rx="0" ry="0" width="179" height="136" />
    <rect x="101" y="105" rx="0" ry="0" width="79" height="20" />
    <rect x="105" y="108" rx="0" ry="0" width="80" height="17" />
    <rect x="187" y="125" rx="0" ry="0" width="2" height="0" />
    <rect x="91" y="87" rx="0" ry="0" width="104" height="30" />
  </ContentLoader>
);

export default HomePostLoading;
