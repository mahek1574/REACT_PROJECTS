export default function Card() {
const information = {
  Image:
    "https://img.freepik.com/free-photo/portrait-young-smiling-man_171337-11976.jpg",
  Name: "herry",
  description:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, libero deleniti? Officiis itaque neque cum beatae possimus, iste dolorem pariatu.",
Age:29
};

let names = ["mango","banana","lichi"]
  return (
    <>
      <div className="main">
        {names.map((name)=>{
          console.log(name);
        })}
        <div className="image">
          <img src={information.Image} />
        </div>
        <div className="info">
<h3>{information.Name}</h3>
<p>{information.description}</p>
    <button>View More</button> 

  
    

     
        </div>
      </div>
    </>
  );
}
