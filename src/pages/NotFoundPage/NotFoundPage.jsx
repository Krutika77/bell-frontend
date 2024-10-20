import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <div className="notFound-container">
      <h1>Error 404: Page Not Found</h1>
      <p>
        Click
        <Link to="/">
          <a className="link"> here </a>
        </Link>
        to be redirected to the Home Page
      </p>
    </div>
  );
}

export default NotFoundPage;
