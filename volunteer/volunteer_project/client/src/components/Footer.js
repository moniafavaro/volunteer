import { Card } from "react-bootstrap";
import "../styles/main.scss";
import GitHubLogo from "../images/github-icon.png";
import LinkedinLogo from "../images/linkedin-logo.png";

const Footer = () => {
  return (
    <Card.Footer className="text-center">
      <Card.Text>
        Created by Monia Favaro{" "}
        <a
          className="a"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/moniafavaro"
        >
          <img src={GitHubLogo} alt="github" style={{ width: "25px" }}></img>
        </a>
        <a
          className="a"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/moniafavaro/"
        >
          <img src={LinkedinLogo} alt="github" style={{ width: "35px" }}></img>
        </a>
      </Card.Text>
    </Card.Footer>
  );
};

export default Footer;

//  <Card.Text>
