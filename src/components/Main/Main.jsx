import React, { useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import ArticleCard from "../ArticleCard";
import "./main.css";

const Main = () => {
  const [key, setKey] = useState("recommended");
  const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <main className="main-section">
        <div className="topic">
          <button><i className="bi bi-plus"></i></button>
          <span>Keep up with the latest in any topic</span>
        </div>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-5">
          <Tab eventKey="following" title="Following">
            <div className="text-center">
              <p>Stories from the writers you follow will appear here.</p>
              <Button variant="success" className="">Browse recommended stories</Button>
            </div>
          </Tab>
          <Tab eventKey="recommended" title="Recommended">
            {articles.map((article) => (
              <ArticleCard key={article}/>
            ))}
          </Tab>
        </Tabs>
      </main>
    </>
  );
};

export default Main;
