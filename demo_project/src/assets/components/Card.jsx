function Card({image}){
    const cardItem = {
        name:"screchers",
        price:"10000",

    };
    const isAdult = false;

    const test = ()=>{
        return 10+20;
    };
    
    return(
        <div className="col-3">
            <div className="card-item">
<div className="card-item">
    
    <img src={image} alt="" />
     </div>
     <h3>{cardItem.name}</h3>
     <p>Rs{cardItem.price}</p>
     <div>{test()}</div>
            </div>
        </div>
    )
}

export default Card;