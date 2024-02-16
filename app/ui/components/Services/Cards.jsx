import React from "react";
import card from "../../../../public/styles/services.module.css";
import IconCheck from "./elements/IconCheck";
import { services } from "@/app/lib/dataServices";
const Cards = () => {
  const service = services.item;
  return (
      <ul className={card.card_container_service}>
        {service.map((item) => (
          <li key={item.id}>
            <IconCheck />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
  );
};

export default Cards;
