import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import plastic from "../../../assets/images/materials/plastic.jpg";
import metal from "../../../assets/images/materials/metal.jpg";
import glass from "../../../assets/images/materials/glass.jpg";
import cardboard from "../../../assets/images/materials/cardboard.jpg";
import garbage from "../../../assets/images/materials/garbage.jpg";
import others from "../../../assets/images/materials/others.jpg";

import "../../../scss/HomeMaterials.scss";

export default function HomeMaterials() {
  return (
    <Row className="home-materials">
      <Col lg={24} className="home-materials__title">
        <h2>Consulta precios de compra y recolección</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-materials">
          <Col md={6}>
            <CardCourse
              image={plastic}
              title="Plásticos"
              subtitle="PET"
              link="https://www.supraciclaje.com/compra/plastico/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={glass}
              title="Vidrio"
              subtitle="Afines"
              link="https://www.supraciclaje.com/compra/vidrio/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={metal}
              title="Metal"
              subtitle="Diversos"
              link="https://www.sgm.gob.mx/SINEMGobMx/precio_metales.jsp"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={garbage}
              title="Desperdicio"
              subtitle="Recolección"
              link="https://www.supraciclaje.com/reciclaje/residencial/"
            />
          </Col>
        </Row>
        <Row className="row-materials">
          <Col md={6}>
            <CardCourse
              image={others}
              title="Otros"
              subtitle="No reciclable"
              link="https://www.ecoter.com.mx/productos"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cardboard}
              title="Cartón"
              subtitle="Reciclaje de polipapel"
              link="https://www.supraciclaje.com/compra/carton/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-materials__more">
        <Link to="/appinfo">
          <Button>Información RC</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-materials__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
