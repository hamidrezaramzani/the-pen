import React from "react";
import ContentLoader from "react-content-loader";

const ProfileSkeletonLoading = (props) => (
  <div className="profile-skeleton-loading">
      <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#151515"
    foregroundColor="#191919"
    {...props}
  >
    <rect x="379" y="56" rx="0" ry="0" width="9" height="0" /> 
    <rect x="80" y="125" rx="0" ry="0" width="226" height="30" /> 
    <circle cx="190" cy="68" r="46" />
  </ContentLoader>
    <br />
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#151515"
      foregroundColor="#191919"
      {...props}
    >
      <rect x="31" y="23" rx="0" ry="0" width="339" height="30" />
      <rect x="379" y="56" rx="0" ry="0" width="9" height="0" />
      <rect x="30" y="64" rx="0" ry="0" width="339" height="30" />
      <rect x="31" y="105" rx="0" ry="0" width="339" height="30" />
    </ContentLoader>
  </div>
);

export default ProfileSkeletonLoading;
