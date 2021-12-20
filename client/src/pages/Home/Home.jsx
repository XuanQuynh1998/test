import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Video from "../../components/video/Video";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Video />
    </div>
  );
}
