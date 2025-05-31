import { Flex, Image, theme, Typography } from "antd";
import Delta from "src/assets/vectors/delta.svg";
import FlightRoute from "src/assets/flight-route.png";

import Seat from "src/assets/vectors/seat.svg";

import Item from "src/assets/vectors/item.svg";
import Users from "src/assets/vectors/users.svg";

import Plane from "src/assets/vectors/plane.svg";
import Bag from "src/assets/vectors/bag.svg";
import CheckedBg from "src/assets/vectors/checked-bg.svg";
import CarSeat from "src/assets/vectors/car-seat.svg";
import Pets from "src/assets/vectors/pdog.svg";
const data = [
  {
    id: "2",
    value: "Stop",
    label: "Nonstop",
    icon: <Image src={Plane} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "3",
    label: "Basic Economy",
    value: "Class Type",
    icon: <Image src={Seat} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "4",
    label: "01/person",
    value: "Personal Item",
    icon: <Image src={Item} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "8",
    label: "01/person",
    value: "Carry on",
    icon: <Image src={Bag} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "7",
    label: "2 bags - $250",
    value: "Checked bag",
    icon: <Image src={CheckedBg} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "6",
    label: "03 Seats",
    value: "Seat Selection",
    icon: <Image src={CarSeat} style={{ height: 20, width: 20 }} />,
  },
  {
    id: "5",
    label: "$25+",
    value: "Pets",
    icon: <Image src={Pets} style={{ height: 20, width: 20 }} />,
  },
];
const Card = () => {
  const { token } = theme.useToken();
  return (
    <Flex flex="1" vertical gap={10}>
      <Flex
        flex={1}
        justify="space-betweer"
        style={{
          backgroundColor: "#DED2FF",
          maxHeight: "fit-content",
          borderRadius: token.borderRadiusLG,
          padding: token.paddingXS,
        }}
        align="center"
      >
        <Flex gap={10} align="center">
          <Image src={Delta} preview={false} />
          <Typography.Text
            style={{ fontSize: "23px", fontWeight: "400", color: "#000" }}
          >
            Delta
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex
        style={{
          borderRadius: token.borderRadiusLG,
          maxHeight: "fit-content",
          backgroundColor: "#FFFFFF",

          padding: token.paddingSM,
        }}
        vertical
      >
        <Flex
          vertical
          style={{ maxHeight: "fit-content", width: "100%" }}
          flex={1}
          gap={5}
        >
          <Typography.Text
            style={{ color: "#000", fontSize: 14, fontWeight: 400 }}
          >
            Mon 13, 06:00 AM
          </Typography.Text>
          <Typography.Text
            style={{ color: "#000", fontSize: 20, fontWeight: 600 }}
          >
            JFK
          </Typography.Text>
          <Typography.Text
            style={{ color: "#757575", fontSize: 14, fontWeight: 400 }}
          >
            New York City
          </Typography.Text>
        </Flex>
        <Flex flex={1} align="center" justify="center" vertical>
          <Typography.Text style={{ fontSize: 8, color: "#000" }}>
            8h 30m
          </Typography.Text>

          <Image
            src={FlightRoute}
            preview={false}
            style={{ minWidth: "200px" }}
          />
        </Flex>

        <Flex
          vertical
          style={{ maxHeight: "fit-content", width: "100%" }}
          flex={1}
          gap={5}
          align="flex-end"
        >
          <Typography.Text
            style={{ color: "#000", fontSize: 14, fontWeight: 400 }}
          >
            Mon 13, 06:00 AM
          </Typography.Text>
          <Typography.Text
            style={{ color: "#000", fontSize: 20, fontWeight: 600 }}
          >
            JFK
          </Typography.Text>
          <Typography.Text
            style={{ color: "#757575", fontSize: 14, fontWeight: 400 }}
          >
            New York City
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex
        flex={1}
        style={{
          background: "#fff",
          maxHeight: "fit-content",
          borderRadius: token.borderRadiusLG,
          padding: token.paddingSM,
        }}
        vertical
      >
        {data.map((item) => (
          <Flex
            key={item.id}
            style={{ alignItems: "center" }}
            justify="space-between"
            gap={5}
          >
            <Flex gap={10} align="center">
              <Flex justify="center" style={{ padding: 10 }}>
                {item.icon}
              </Flex>
              <Typography.Text>{item.value}</Typography.Text>
            </Flex>
            <Typography.Text>{item.label}</Typography.Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
export default Card;
