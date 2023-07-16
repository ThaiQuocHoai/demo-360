import React, { Component, useContext, useEffect, useState } from "react";
import { Pannellum } from "pannellum-react";
import { ImageContext } from "../ImageContext";

export const PannellumDemo = () => {
  const ref = React.createRef();

  const { getImageByName } = useContext(ImageContext);
  const [image, setImage] = useState({});
  useEffect(() => {
    setImage(getImageByName("benpha"));
  }, []);
  const hanldeClickImage = (evt, args) => {
    console.log(args.name);
    setImage(getImageByName(args.name));
  };

  return (
    <div className="image_main">
      <div className="pannellum_div">
        <Pannellum
          ref={ref}
          width="100%"
          height="100vh"
          image={image.url}
          pitch={image.pitch}
          yaw={image.yaw}
          hfov={image.hfov}
          autoLoad
          author={""}
          orientationOnByDefault={false}
          hotspotDebug={false}
          title=""
        >
          {image?.hotspots?.map((hotspot) =>
            hotspot.type === "custom" ? (
              <Pannellum.Hotspot
                type="custom"
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                tooltip={(hotSpotDiv, args) => {
                  const imageDiv = document.createElement("img");
                  imageDiv.setAttribute("width", hotspot.width);
                  imageDiv.setAttribute("height", hotspot.height);
                  imageDiv.setAttribute("src", hotspot.url);
                  hotSpotDiv.appendChild(imageDiv);
                }}
                handleClick={(evt, args) => hanldeClickImage(evt, args)}
                handleClickArg={{ name: hotspot.argName }}
              />
            ) : (
              <Pannellum.Hotspot
                type="info"
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                text={hotspot.text}
                URL=""
              />
            )
          )}
          {/* <Pannellum.Hotspot
            type="info"
            pitch={11}
            yaw={-167}
            text="Info Hotspot Text 3"
            URL="https://github.com/farminf"
          /> */}
        </Pannellum>
      </div>
    </div>
  );
};
