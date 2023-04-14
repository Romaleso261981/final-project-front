import {  ListWrapper } from "./FlowersList.styled";

import FlowersItem from "./FlowersItem";

const FlowersList = ({ flowers, onShowItem, setIsFullItem }) => {
  return (
    <ListWrapper>
      {flowers
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({ title, url, description, date, _id }) => (
          <FlowersItem
            setIsFullItem={setIsFullItem}
            onShowItem={onShowItem}
            key={_id}
            title={title}
            url={url}
            description={description}
            date={date}
          />
        ))}
    </ListWrapper>
  );
};

export default FlowersList;
