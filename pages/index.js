import styles from "../styles/Home.module.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
export default function Home() {
  return (
    <div className={styles.container}>
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          Button #1
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button as={Col} variant="danger">
          Button #3
        </Button>
      </Row>
    </div>
  );
}
