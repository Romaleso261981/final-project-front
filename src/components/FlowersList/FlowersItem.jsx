import { useDispatch } from "react-redux";
import { onAddFlower } from "redux/flowers/flowersOperations";

import {
  OneFlowers,
  FlowersLine,
  FlowersTitle,
  FlowersDescr,
  Image,
  FlowersLink,
} from "./FlowersList.styled";

const FlowersItem = ({ instructions, name, photo, price, id, onShowItem }) => {
  const dispatch = useDispatch();
  const addFlower = () => {
    dispatch(onAddFlower(id));
    // setShowAddModal(!showAddModal);
  };
  return (
    <>
      <OneFlowers>
        <FlowersLine />
        <FlowersTitle>{name}</FlowersTitle>
        <FlowersTitle>{price} $</FlowersTitle>
        <Image
          src={photo}
          alt={name}
          onClick={() => {
            onShowItem(id);
          }}
        />
        <FlowersDescr>{instructions}</FlowersDescr>
        <FlowersLink onClick={addFlower}>Замовити</FlowersLink>
      </OneFlowers>
    </>
  );
};

export default FlowersItem;
