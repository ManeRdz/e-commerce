import { NavLink } from "react-router-dom";

const Product = ({ ...e }) => {
  return (
    <>
      <div className="producto">
        <h3>{e.name}</h3>
        <h4>${e.price}</h4>
        <img src={e.image} alt="product-image" />
        <NavLink
          onClick={() => window.scrollTo({ top: 0 })}
          to={`/product/${e.id}`}
          className="moreinfo"
        >
          More info +
        </NavLink>
      </div>
    </>
  );
};

export default Product;
