import React from "react";

const View = ({ data }) => {
  return (
    <div>
      <p>ID: {data?.id}</p>
      <p>Type: {data?.type}</p>
    </div>
  );
};

export default View;