import { Flex, Image, Typography } from "antd";
import type { FC } from "react";
interface FlightExtrasProps {
  image: string;
  label: string;
  amount: string;
}
const FlightsExtra: FC<FlightExtrasProps> = ({ image, label, amount }) => {
  return (
    <Flex flex={1} justify="space-between" align="center">
      <Flex gap={10} align="center">
        <Image src={image} />
        <Typography.Text>{label}</Typography.Text>
      </Flex>
      <Typography.Text>${amount}</Typography.Text>
    </Flex>
  );
};
export default FlightsExtra;
