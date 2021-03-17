import React from "react";
import "./style.css";

export default function Loading() {
  return (
    <div className="Loading">
      <h1 className="Loading__title">Uploading...</h1>
      <div className="Loading__progress">
        <div className="Loading__progress-bar" />
      </div>
    </div>
  );
}
