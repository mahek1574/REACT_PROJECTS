import Card from "./assets/components/card";
import'./App.css';
function App(){
  const products =[{}]
    return(
        <>
        <section className="card">
            <div className="container">
                <div className="row">
                    <card image={img1}/>
                    <card image={img2}/>
                    <card image={img3}/>
                    <card image={img4}/>

                </div>
            </div>
        </section>
        </>
    );
};

