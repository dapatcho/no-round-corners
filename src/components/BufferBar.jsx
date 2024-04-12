import React from "react";

const BufferBar = ({ accentColor }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const bufferStyle = {
    width: "15rem",
    height: "16px",
    backgroundColor: accentColor,
    marginTop: "30px",
    marginBottom: "30px",
  };

  return (
    <div style={containerStyle}>
      <div style={bufferStyle}></div>
    </div>
  );
};

export default BufferBar;
