import { Divider, Flex, theme } from "antd";
import type { FC } from "react";

import DetailsContainer from "./detail-container";
interface CarSelectorProps {
  source: string;
  sourceCode: string;
  destination: string;
  destinationCode: string;
  date: string;
  time: string;
}

const CarSelector: FC<CarSelectorProps> = ({
  source,
  sourceCode,
  //   destination,
  //   destinationCode,
  date,
  time,
}) => {
  console.log(time);
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        borderRadius: token.borderRadiusLG,
        padding: token.paddingSM,
        backgroundColor: "#F5F1FF",
      }}
      gap={10}
      justify="space-between"
      vertical
    >
      <DetailsContainer
        locationCode={sourceCode}
        locationName={source}
        date={date}
        time={time}
        label={"Pick up"}
      />
      <Divider />
      <DetailsContainer
        locationCode={sourceCode}
        locationName={source}
        date={date}
        time={time}
        label={"Drop off"}
      />
    </Flex>
  );
};
export default CarSelector;
