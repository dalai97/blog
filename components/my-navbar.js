import { useTheme } from "hooks/use-theme";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
export default function MyNavbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Navbar
      collapseOnSelect
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
      variant={theme.type}
    >
      <Container fluid>
        <Navbar.Brand className="fj-navbar-brand">
          <Link href="/">
            <a
              style={{
                textDecoration: "none",
                color: theme.fontColor,
              }}
            >
              Маржаахай
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ display: "flex", justifyContent: "right" }}
        >
          <Nav className="ml-auto">
            <label style={{ paddingTop: 5 }}>
              {/* <span>Switch with default style</span> */}
              <Switch
                onChange={toggleTheme}
                checked={theme.type === "dark"}
                offColor="#000"
                onColor="#000"
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 15,
                      paddingRight: 2,
                    }}
                  >
                    <FontAwesomeIcon inverse icon={faSun} />
                  </div>
                }
                checkedIcon={
                  // <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                  //   <circle r={3} cx={5} cy={5} />
                  // </svg>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 15,
                      paddingRight: 2,
                    }}
                  >
                    <FontAwesomeIcon icon={faMoon} />
                  </div>
                }
              />
            </label>
            <Link href="/">
              <a
                className="fj-navbar-item fj-navbar-link"
                style={{ color: theme.fontColor, marginTop: 5 }}
              >
                НҮҮР
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
