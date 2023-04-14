import { format } from "date-fns";
import { useState } from "react";

const title = "Букет 25 белых тюльпанов";
const url = "https://flowers.ua/images/Flowers/2635.jpg";
const description =
  "Нежная охапка белых весенних тюльпанов не оставит равнодушной ни одну представительницу прекрасного пола! Состав: 25 белых тюльпанов, оформление.";
const date = "25.06.2022";
const id = "1";
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

const FlowersItem = () => {
  // const [isShow, setIsShow] = useState(true);

  // const toggle = (e) => {
  //   setIsShow(!isShow);
  // };
  return (
    <>
      <OneFlowers onClick={onShowItem}>
        <FlowersLine />
        <FlowersTitle>{title}</FlowersTitle>
        {/* <FlowersDate>{format(new Date(date), "dd/MM/yyyy")}</FlowersDate> */}
        <Image src={url} alt={title} onClick={onShowItem} />

        <FlowersDescr>{description}</FlowersDescr>
        <FlowersLink>Замовити</FlowersLink>
      </OneFlowers>
    </>
  );
};

export default FlowersItem;
