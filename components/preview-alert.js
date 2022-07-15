import { Alert } from "react-bootstrap";

const PreviewAlert = () => {
  return (
    <Alert variant={"danger"}>
      Та preview горимд байна{" "}
      <Alert.Link href="/api/preview-exit">энд дарж </Alert.Link> энэ горимоос
      гарна уу
    </Alert>
  );
};
export default PreviewAlert;
