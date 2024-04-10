import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

function Item({ itemData }) {
  const urlParam = itemData.title
    .toLowerCase()
    .replace("(", "")
    .replace(")", "")
    .split(" ")
    .join("-");

  return (
    <div className="item">
      <Link to={`/store/products/${urlParam}`} className="no-link-style">
        <img src={`https:${itemData.img}`} alt={itemData.title} />
        <div className="item-detail center-align">
          <div>
            {itemData.status && <Badge>{itemData.status.toUpperCase()}</Badge>}

            {itemData.availability && (
              <Badge>{itemData.availability.toUpperCase()}</Badge>
            )}
          </div>
          <div>{itemData.title}</div>
          <div>{itemData.price}</div>
        </div>
      </Link>
    </div>
  );
}

Item.propTypes = {
  itemData: propTypes.object,
};

export default Item;