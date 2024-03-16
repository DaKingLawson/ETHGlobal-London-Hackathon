import { React, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Resize, scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import LoginCard from "./components/LoginCard";
import { init } from "./utils/login";
import "./App.css";
// import RPC from './ethersRPC' // for using ethers.js

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const description =
    "Imagine a world where communities come together effortlessly to support their own.";

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dosguo3sg",
    },
  });
  const myImage = cld.image("hackathon/cnz5nwtobk1xfebzd3ko");
  myImage.resize(Resize.scale().width(100));

  const loggedOutView = (
    <div className="flex flex-row h-screen bg-eggshell">
      <div className="flex min-w-[50%]">
        <AdvancedImage
          cldImg={myImage}
          alt="Your Image Description"
          className="w-full h-full object-cover"
        />
      </div>

      <LoginCard
        heading="Hey, Neighbor!"
        description={description}
        handleClick={handleClick}
      />
    </div>
  );

  const loggedInView = <div></div>;

  return loggedIn ? loggedInView : loggedOutView;
};

export default App;
