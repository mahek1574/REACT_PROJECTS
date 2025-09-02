import { useState, useEffect } from "react";

export default function Dogapi() {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("akita"); 
  const [image, setImage] = useState("");


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
      });


    fetch(`https://dog.ceo/api/breed/akita/images/random`)
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []); 

  const handleBreedSelect = (breed) => {
    setSearch(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🐶 Dog API Project</h1>

      <input
        className="input-field"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <ul className="search">
          {filteredBreeds.map((breed) => (
            <li
              className="breadlist"
              key={breed}
              onClick={() => handleBreedSelect(breed)}
            >
              {breed}
            </li>
          ))}
        </ul>
      )}

      {image && (
        <div>
          <img className="image" src={image} alt={search} />
        </div>
      )}
    </div>
  );
}
