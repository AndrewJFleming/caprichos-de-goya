import { FC } from "react";

import { Container, Row } from "react-bootstrap";
import { GalleryItem } from "../../components/GalleryItem/GalleryItem";

import { ImageData } from "../../interfaces";
import "./Home.css";

interface Props {
  imageData: ImageData[];
}

export const Home: FC<Props> = ({ imageData }) => {
  return (
    <div className="page-comp-wrapper">
      <Container>
        <div className="page-component-title">
          <h1>
            <span style={{ color: "#5d9cd6" }}>CAPRICHOS</span> de GOYA
          </h1>
          <p className="home-title-translation">
            <em>(Eighty Caprices)</em>
          </p>
        </div>
        <Row>
          {imageData.map((image: ImageData) => (
            <GalleryItem
              thumbUrl={image.squareUrl}
              title={image.title}
              imageId={image.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};
