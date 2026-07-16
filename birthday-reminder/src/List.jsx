import React from "react";

export default function List({ people }) {
  return (
    <div>
      {people.map((person, index) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
