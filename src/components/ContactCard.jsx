import React from "react";

function ContactCard(props) {
  return (
    <div className="eachContact">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p> {props.tel} </p>
      <p> {props.email} </p>
    </div>
  );
}

export default ContactCard;
