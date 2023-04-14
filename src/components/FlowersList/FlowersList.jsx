import {  ListWrapper } from "./FlowersList.styled";

import FlowersItem from "./FlowersItem";

const FlowersList = ({ flowers, onShowItem }) => {
  return (
    <ListWrapper>
      {flowers
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({ title, url, description, date, _id }) => (
          <FlowersItem
            onShowItem={onShowItem}
            description={description}
            key={_id}
            id={_id}
            title={title}
            url={url}
            date={date}
          />
        ))}
    </ListWrapper>
  );
};

export default FlowersList;
