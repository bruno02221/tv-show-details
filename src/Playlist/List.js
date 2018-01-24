import React from "react";

const List = ({ episodes }) => {
  return (
    <div>
      <ul>
        {episodes.map(ep => {
          return <li key={ep.id}>{ep.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
