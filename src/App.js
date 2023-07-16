import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as PANOLENS from "panolens";
import { Pannellum, PannellumVideo } from "pannellum-react";
import "./App.css";
import { PannellumDemo } from "./demo/PannellumDemo";
import { ImageProvider } from "./ImageContext";

function App() {
  // useEffect(() => {
  //   const panorama = new PANOLENS.ImagePanorama("/view360-1.jpeg");
  //   const panorama2 = new PANOLENS.ImagePanorama("/view360-2.jpeg");
  //   const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
  //   infospot.position.set(-100, -500, -5000);
  //   infospot.addHoverText("The Story", 40);
  //   infospot.addEventListener("click", function () {
  //     viewer.setPanorama(panorama2);
  //   });
  //   panorama.add(infospot);
  //   const viewer = new PANOLENS.Viewer({
  //     container: document.querySelector(".image-container"),
  //   });
  //   viewer.add(panorama, panorama2);
  // }, []);

  return (
    <div className="App">
      <ImageProvider>
        <PannellumDemo />
      </ImageProvider>
    </div>
  );
}

export default App;
