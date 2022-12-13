import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";

// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// import { Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { base64toBlob } from "../js/base64toBlob";
import { Document, Page } from "react-pdf";
// import PDF from "react-pdf";
// import Embed from "react-embed";
// var toUint8Array = require("base64-to-uint8array");
var toUint8Array = require("base64-to-uint8array");

const ContentViewer = () => {
  const [pdf, setPdf] = useState("");
  const { task_uuid } = useParams();
  // const [url, setUrl] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    fetchFromAPI(
      `task/task_file/get_file?field_key=menu&task_uuid=${task_uuid}`
    ).then((res) => {
      console.log(res);
      setPdf(res.content);
      console.log(pdf);
    });
    // const convertDataURIToBinary = async (data) => {
    //   const base64Response = await fetch(`data:image/jpeg;base64,${data}`);
    //   const blob = await base64Response.blob();
    //   const url = URL.createObjectURL(blob);
    //   return url;
    // };

    // convertDataURIToBinary(pdf).then((res) => {
    //   console.log(res);
    //   setUrl(res);
    // });
  }, [task_uuid]);

  var arr = toUint8Array(pdf);
  console.log(arr);
  console.log(typeof arr);

  var url = arr;
  return (
    <div
    // style={{
    //   border: "1px solid rgba(0, 0, 0, 0.3)",
    //   height: "100%",
    // }}
    >
      {/* <Viewer fileUrl={url} /> */}

      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        <Viewer fileUrl={url} plugins={[zoomPluginInstance]} />
      </Worker> */}
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* <Embed
        src={`data:application/pdf;base64,${pdf}`}
        type="application/pdf"
        width="100%"
      ></Embed> */}
    </div>
  );
};

export default ContentViewer;
