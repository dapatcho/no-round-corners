import React from "react";

const BufferBar = ({ accentColor }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const bufferStyle = {
    width: "100px",
    height: "15px",
    backgroundColor: accentColor,
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={bufferStyle}></div>
    </div>
  );
};

export default BufferBar;
