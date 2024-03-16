import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Resize, scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import LoginCard from "./components/LoginCard";

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dosguo3sg",
    },
  });

  const description =
    "Imagine a world where communities come together effortlessly to support their own.";

  const myImage = cld.image("hackathon/cnz5nwtobk1xfebzd3ko");
  myImage.resize(Resize.scale().width(100));
  return (
    <div className="flex flex-row h-screen bg-eggshell">
      <div className="flex min-w-[50%]">
        <AdvancedImage
          cldImg={myImage}
          alt="Your Image Description"
          className="w-full h-full object-cover"
        />
      </div>

      <LoginCard heading="Hey, Neighbor!" description={description} />
    </div>
  );
};

export default App;
