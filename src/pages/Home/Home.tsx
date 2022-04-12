import React, { FC, ChangeEvent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GalleryItem } from "../../components/GalleryItem/GalleryItem";

interface Props {
  imageData: object[];
}

export const Home: FC<Props> = ({ imageData }) => {
  return (
    <div className="mt-5">
      <Container>
        <div className="page-component-title">
          <h1>80 CAPRICHOS</h1>
          <p className="home-title-translation">
            <em>(Eighty Caprices)</em>
          </p>
        </div>
        <Row>
          {imageData.map((image: any) => (
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
