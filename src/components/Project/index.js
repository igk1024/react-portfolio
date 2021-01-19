import React from 'react';


function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">

      <a href={props.deployed}>
          <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <ul className="list-group list-group-flush">
<li><a href={props.deployed} target="_blank">{props.name}</a></li>
          <li
            className="list-group-item" href={props.repo}>
            <a href={props.repo}>
             Github Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;
