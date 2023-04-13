import { List } from "./FlowersList.styled";
import { Container } from "../Container/Container";

import FlowersItem from "./FlowersItem";

const FlowersList = ({ flowers }) => {
  return (
    <Container>
      <List>
        {flowers
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map(({ title, url, description, date, _id }) => (
            <FlowersItem
              key={_id}
              title={title}
              url={url}
              description={description}
              date={date}
            />
          ))}
      </List>
    </Container>
  );
};

export default FlowersList;
