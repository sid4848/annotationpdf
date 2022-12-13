import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";
import "../css/contenLoader.css";

const ContentLoader = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchFromAPI(`get_app_tasks?app_id=menu_parser`).then((res) => {
      setDocuments(res.tasks);
    });
  }, []);

  return (
    <div className="contentLoader">
      {documents.map((item, index) => (
        <ul key={index}>
          <li>
            <Link to={`/pdfViewer/${item.task_uuid}`}>
              Sample_Document_{index + 1}.pdf
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContentLoader;
