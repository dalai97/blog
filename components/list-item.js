import { Card, Image } from "react-bootstrap";

export default () => (
  <Card className={`fj-card fj-card-list`}>
    <div className="card-body-wrapper">
      <Card.Header className="d-flex flex-row">
        <Image
          src={"https://source.unsplash.com/user/erondu/150x150"}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        <div style={{ marginLeft: "1rem" }}>
          <Card.Title className="font-weight-bold mb-1">
            Алтан Эрдэнэдалай
          </Card.Title>
          <Card.Text className="card-date">2022 оны 06 сарын 30</Card.Text>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-main-title">
          JAMstack архитектурын тухай
        </Card.Title>
        <Card.Text>Статик сайт</Card.Text>
      </Card.Body>
    </div>
  </Card>
);
