import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SingleStar(active) {
  let colorStar = "stars star-inactive ";
  if (active.star) {
    colorStar = "stars star-active";
  }
  return <FontAwesomeIcon icon={faStar} className={colorStar} />;
}

export default SingleStar;
