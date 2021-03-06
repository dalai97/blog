import { Card, Image } from "react-bootstrap";

export default function Intro() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        roundedCircle
        width={64}
        height={64}
        className="mr-3"
        src="profile.jpeg"
        alt="Generic placeholder"
      />
      <Card.Body>
        <h4 className="font-weight-bold mb-1">МАРЖААХАЙ БЛОГ</h4>
        <p className="card-date">
          Төрөл бүрийн сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
      </Card.Body>
    </div>
  );
}
