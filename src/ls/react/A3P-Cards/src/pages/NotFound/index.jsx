import { StyledSection, StyledH1, StyledList, StyledListItem } from "./styles";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1> Sorry </h1>
      <h2>Page not found</h2>
      <p>
        Go back to <Link to="/">Tasks</Link>.
      </p>
    </>
  );
}

export default NotFound;
