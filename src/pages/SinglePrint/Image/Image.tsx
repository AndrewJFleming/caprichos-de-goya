import { FC } from "react";

import "./Image.css";

interface Props {
  isZoomedIn: boolean;
  filteredImage: any;
  setIsZoomedIn: any;
}

export const Image: FC<Props> = ({
  isZoomedIn,
  filteredImage,
  setIsZoomedIn,
}) => {
  return (
    <img
      className={`single-image ${isZoomedIn && "enlarged"}`}
      src={isZoomedIn ? filteredImage.fullsizeUrl : filteredImage.largeUrl}
      alt={`${filteredImage.title}, from ${
        isZoomedIn ? "fullsize url" : "large size url"
      }`}
      onClick={() => setIsZoomedIn(!isZoomedIn)}
    />
  );
};
