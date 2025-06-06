import "./product.css";
import styles from "./Product.module.css"


const Product = (props) => {
    const rating = props.ele.rating;

    const ratingcondition =
      rating >= 8.5
        ? "ratingHigh"
        : rating >= 6.5
        ? "ratingMedium"
        : "ratingLow";

  return (
    <div className="col-3">
      <div className="product-item">
        <div className="product-image">
          <div className="image-wrapper">
            <img src={props.ele.image} alt="furniture image" />
            <h4>{props.ele.title}</h4>
            <h3 className={ratingcondition}> {props.ele.rating}</h3>
            <h4>${props.ele.price}</h4>
            <p>{props.ele.description}</p>
            <button className={styles.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
 