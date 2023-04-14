import { format } from "date-fns";
import { useState } from "react";

import {
  OneFlowers,
  FlowersLine,
  FlowersTitle,
  FlowersDescr,
  FlowersImgContainer,
  Image,
  FlowersDate,
  FlowersLink,
} from "./FlowersList.styled";

const FlowersItem = ({ title, url, description, onShowItem }) => {
  const [isShow, setIsShow] = useState(true);

  // const toggle = (e) => {
  //   setIsShow(!isShow);
  // };
  return (
    <>
      <OneFlowers
        onClick={(e) => {
          console.log(e);
        }}
      >
        <FlowersLine />
        <FlowersTitle>{title}</FlowersTitle>
        {/* <FlowersDate>{format(new Date(date), "dd/MM/yyyy")}</FlowersDate> */}
        <Image src={url} alt={title} onClick={onShowItem} />

        <FlowersDescr>{description}</FlowersDescr>
        <FlowersLink onClick={onShowItem}>Замовити</FlowersLink>
      </OneFlowers>
    </>
  );
};

export default FlowersItem;
