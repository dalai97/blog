import { Card, Image } from "react-bootstrap";

export default () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="logo.jpg"
      alt="Generic placeholder"
    />
    <Card.Body>
      <h4 className="font-weight-bold mb-1">1234.mn - Онлайн видео сургалт</h4>
      <p className="card-date">
        Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн сонирхолтой
        мэдээллүүдийг энэхүү блогоор хүргэж байна.
      </p>
    </Card.Body>
  </div>
);
