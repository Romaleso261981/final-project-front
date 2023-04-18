import { format } from "date-fns";
import { useState } from "react";

import {
  OneFlowers,
  FlowersLine,
  FlowersTitle,
  FlowersDescr,
  FlowersLineVertRight,
  FlowersLineVertLeft,
  Image,
  FlowersDate,
  FlowersLink,
} from "./FlowersList.styled";

const FlowersItem = ({
  category,
  instructions,
  name,
  photo,
  price,
  id,
  onShowItem,
}) => {
  return (
    <>
      <OneFlowers
        onClick={() => {
          onShowItem({ id });
        }}
      >
        {/* <FlowersLine /> */}
        {/* <FlowersLineVertRight /> */}
        <FlowersTitle>{name}</FlowersTitle>
        <FlowersTitle>{category}</FlowersTitle>
        <FlowersTitle>{price} $</FlowersTitle>
        {/* <FlowersDate>{format(new Date(date), "dd/MM/yyyy")}</FlowersDate> */}
        <Image src={photo} alt={name} onClick={onShowItem} />
        <FlowersDescr>{instructions}</FlowersDescr>
        {/* <FlowersLineVertLeft /> */}
        <FlowersLink>Замовити</FlowersLink>
        {/* <FlowersLine /> */}
      </OneFlowers>
    </>
  );
};

export default FlowersItem;
