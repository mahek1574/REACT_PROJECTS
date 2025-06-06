
import "./counter.css";
import styles from "./Product.module.css";



import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(0);

    function incrCount(){
        setCount(count+1);
    }

    function descCount(){
        setCount(count-1);
    }


    const headingStyle = {
      color: "green",
      fontSize: "28px",
      textAlign: "center",
    };

    return (
      <>
        <section className="counter">
          <h1 style={headingStyle}> {count}</h1>
          <button className={styles.addToCartBtn} onClick={incrCount} >incr</button>
          <button className={styles.addToCartBtn}onClick={descCount}>desc</button>
        </section>
      </>
    );
};

export default Counter;