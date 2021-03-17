import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import image from "assets/image.svg";
import "./style.css";

interface IUploader {
  handleUpload: (file: File) => void;
}

export default function Uploader({ handleUpload }: IUploader) {
  const onDrop = useCallback((acceptedFiles) => {
    handleUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="Uploader">
      <h1 className="Uploader__title">Upload your image</h1>
      <h4 className="Uploader__description">File should be Jpeg, Png,...</h4>
      <div className="Uploader__drag-zone" {...getRootProps()}>
        <input {...getInputProps()} />
        <img className="Uploader__image" src={image} alt="upload placeholder" />
        <h3 className="Uploader__drag-zone-description">
          Drag & Drop your image here
        </h3>
      </div>
      <h3 className="Uploader__divider">Or</h3>
      <button>Choose a file</button>
    </div>
  );
}
