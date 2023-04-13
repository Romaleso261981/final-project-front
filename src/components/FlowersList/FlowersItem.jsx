import { format } from "date-fns";

import {
  OneFlowers,
  FlowersLine,
  FlowersTitle,
  FlowersDescr,
  FlowersContainer,
  FlowersDate,
  FlowersLink,
} from "./FlowersList.styled";

const FlowersItem = ({ title, url, description, date }) => {
  return (
    <OneFlowers>
      <FlowersLine />
      <FlowersTitle>{title}</FlowersTitle>
      {description ? (
        <FlowersDescr>{description}</FlowersDescr>
      ) : (
        <FlowersDescr>
          Для ознайомлення з новиною натисніть <b>Read more</b>.
        </FlowersDescr>
      )}

      <FlowersContainer>
        {/* <FlowersDate>{format(new Date(date), "dd/MM/yyyy")}</FlowersDate> */}
        <FlowersLink href={url} target="_blank">
          Read more
        </FlowersLink>
      </FlowersContainer>
    </OneFlowers>
  );
};

export default FlowersItem;
