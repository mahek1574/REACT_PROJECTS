const Product = (props) => {
  return (
    <div className="col-3">
      <div className="product-item">
        <div className="product-img">
          <div className="image-wrapper">
            <img src={props.ele.image} alt="" />
            <h4>{props.ele.location}</h4>
            <h3>{props.ele.season}</h3>
            <p>{props.ele.description}</p>
            <h4>{props.ele.fact}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
