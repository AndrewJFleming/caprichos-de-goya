import { FC } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  thumbUrl: string;
  title: string;
  imageId: string;
}

export const GalleryItem: FC<Props> = ({ thumbUrl, title, imageId }) => {
  return (
    <Col className="gallery-col" xs="6" sm="4" md="4" lg="3" xl="2">
      <Link to={`/caprichos/${imageId}`}>
        <img src={thumbUrl} alt={`${title}, square thumbnail`} />
      </Link>
      <p className="gallery-item-title">
        <span className="print-id">No. {imageId},&nbsp;</span>
        <Link to={`/caprichos/${imageId}`}>
          {title.length <= 13 ? title : `${title.substring(0, 14)}...`}
        </Link>
      </p>
    </Col>
  );
};
