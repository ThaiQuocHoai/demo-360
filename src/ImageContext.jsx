import { createContext } from "react";
import benpha from "./assests/images/benpha.png";
import culaoanbinh from "./assests/images/culaoanbinh.png";
import congbietthu from "./assests/images/congbietthu.png";
import vuonbietthu from "./assests/images/vuonbietthu.png";
import sanhtret from "./assests/images/sanhtret.png";
import sanhtret1 from "./assests/images/sanhtret1.png";
import lau1 from "./assests/images/lau1.png";
import lau2 from "./assests/images/lau2.png";
import lau3 from "./assests/images/lau3.png";
import arrowv2 from "./assests/arrow_ver_2.png";
import arrowUp from "./assests/flycam.png";
import arrowDown from "./assests/arrow_down.png";

export const ImageContext = createContext();
export const ImageProvider = ({ children }) => {
  const imageList = [
    {
      name: "benpha",
      url: benpha,
      pitch: 12.082479071538534,
      yaw: -4.189053413590142,
      hfov: 120,
      hotspots: [
        {
          type: "custom",
          pitch: 10.300741085178082,
          yaw: 0.2593520308306245,
          width: "60",
          height: "60",
          argName: "culaoanbinh",
          url: arrowv2,
        },
      ],
    },
    {
      name: "culaoanbinh",
      pitch: 12.082479071538534,
      yaw: -4.189053413590142,
      url: culaoanbinh,
      hotspots: [
        {
          type: "custom",
          pitch: -3.7752028479181243,
          yaw: 84.49435260500346,
          width: "60",
          height: "60",
          argName: "benpha",
          text: "Ben pha",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -1.816443877318858,
          yaw: -6.188499700129507,
          width: "60",
          height: "60",
          argName: "congbietthu",
          url: arrowv2,
        },
      ],
    },
    {
      name: "congbietthu",
      pitch: 12.082479071538534,
      yaw: -4.189053413590142,
      url: congbietthu,
      hotspots: [
        {
          type: "custom",
          pitch: -3.7752028479181243,
          yaw: 84.49435260500346,
          width: "60",
          height: "60",
          argName: "culaoanbinh",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -20.8530541907766,
          yaw: -0.3789166563032449,
          width: "60",
          height: "60",
          argName: "vuonbietthu",
          url: arrowv2,
        },
      ],
    },
    {
      name: "vuonbietthu",
      pitch: 14.580148698417151,
      yaw: -136.77696449258627,
      url: vuonbietthu,
      hotspots: [
        {
          type: "custom",
          pitch: -1.2454891904891259,
          yaw: -130.07865796663953,
          width: "60",
          height: "60",
          argName: "sanhtret",
          url: arrowv2,
        },
        {
          type: "info",
          pitch: -2.8630296548981633,
          yaw: -179.3534044467558,
          width: "60",
          height: "60",
          argName: "culaoanbinh",
          text: "Bảng tên của anh Chiến",
        },
        {
          type: "custom",
          pitch: -6.4361387295859,
          yaw: -0.3789166563032449,
          width: "60",
          height: "60",
          argName: "congbietthu",
          url: arrowv2,
        },
      ],
    },
    {
      name: "sanhtret",
      pitch: 1.5353792821701884,
      yaw: -61.54053107207641,
      hfov: 120,
      url: sanhtret,
      hotspots: [
        {
          type: "custom",
          pitch: -13.619240542271584,
          yaw: -129.55800175965754,
          width: "60",
          height: "60",
          argName: "sanhtret1",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -6.4361387295859,
          yaw: -0.3789166563032449,
          width: "60",
          height: "60",
          argName: "sanhtret1",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -24.242867731934567,
          yaw: 91.18620160665766,
          width: "60",
          height: "60",
          argName: "vuonbietthu",
          url: arrowv2,
        },
      ],
    },
    {
      name: "lau1",
      pitch: -9.287737186663861,
      yaw: -6.216777293188101,
      hfov: 150,
      url: lau1,
      hotspots: [
        {
          type: "custom",
          pitch: -39.63908680895828,
          yaw: 140.61231488081916,
          width: "45",
          height: "45",
          argName: "sanhtret1",
          url: arrowDown,
        },
        {
          type: "custom",
          pitch: 4.127071148553962,
          yaw: 148.3160260386441,
          width: "45",
          height: "45",
          argName: "lau2",
          url: arrowUp,
        },
      ],
    },
    {
      name: "sanhtret1",
      pitch: -9.287737186663861,
      yaw: -6.216777293188101,
      hfov: 150,
      url: sanhtret1,
      hotspots: [
        {
          type: "custom",
          pitch: -29.559986239968648,
          yaw: 169.9593855821712,
          width: "60",
          height: "60",
          argName: "sanhtret",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -27.611075355807046,
          yaw: 27.187192145274935,
          width: "60",
          height: "60",
          argName: "sanhtret",
          url: arrowv2,
        },
        {
          type: "custom",
          pitch: -11.2298067766298,
          yaw: -99.91100358990144,
          width: "45",
          height: "45",
          argName: "lau1",
          url: arrowUp,
        },
      ],
    },
    {
      name: "lau3",
      pitch: -9.287737186663861,
      yaw: -6.216777293188101,
      hfov: 150,
      url: lau3,
      hotspots: [
        {
          type: "custom",
          pitch: -13.683624285680684,
          yaw: -164.01530291490218,
          width: "45",
          height: "45",
          argName: "lau2",
          url: arrowDown,
        },
        {
          type: "info",
          pitch: -42.908595320786134,
          yaw: 12.151819315200182,
          width: "60",
          height: "60",
          argName: "culaoanbinh",
          text: "Lầu 2",
        },
      ],
    },
    {
      name: "lau2",
      pitch: -9.287737186663861,
      yaw: -6.216777293188101,
      hfov: 150,
      url: lau2,
      hotspots: [
        {
          type: "custom",
          pitch: -8.553186844456212,
          yaw: -41.19833711383157,
          width: "45",
          height: "45",
          argName: "lau1",
          url: arrowDown,
        },
        {
          type: "custom",
          pitch: 47.452973399804705,
          yaw: -8.706472114234888,
          width: "45",
          height: "45",
          argName: "lau3",
          url: arrowUp,
        },
      ],
    },
  ];

  const getImageByName = (name) => {
    return imageList.find((s) => s.name === name);
  };

  return (
    <ImageContext.Provider value={{ imageList, getImageByName }}>
      {children}
    </ImageContext.Provider>
  );
};
