import React from "react";
import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      id="cursor-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CanvasCursor;
