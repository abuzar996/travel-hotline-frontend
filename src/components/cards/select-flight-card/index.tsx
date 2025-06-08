import { Button, Flex, Image, Tag, theme, Typography } from "antd";
import Delta from "src/assets/Delta_logo.png";
import FlightRoute from "./route";
// import Seat from "src/assets/sr"
import Pets from "src/assets/vectors/pdog.svg";
import FlightsExtra from "./flights-extra";
const SelectFlightCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingXS,
        borderRadius: token.borderRadiusLG,
        backgroundColor: "#fff",
      }}
      vertical
      gap={10}
    >
      <Flex
        flex={1}
        style={{ padding: token.paddingXS }}
        align="center"
        gap={10}
      >
        <Image src={Delta} />
        <Typography.Text style={{ fontWeight: 500 }}>DELTA</Typography.Text>
      </Flex>
      <FlightRoute />
      <Flex style={{ flexWrap: "wrap", height: "fit-content" }} gap={10}>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Nonstop</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Economy</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Personal item</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Carry on</Tag>
      </Flex>
      <Flex
        style={{
          backgroundColor: "#F5F1FF",
          padding: token.paddingSM,
          borderRadius: token.borderRadiusLG,
        }}
      >
        <Flex
          flex={1}
          style={{
            padding: token.paddingXS,
            borderRadius: token.borderRadiusLG,
            backgroundColor: "#fff",
          }}
          vertical
          gap={10}
        >
          <FlightsExtra label="Pets" image={Pets} amount="35" />
          <FlightsExtra label="Pets" image={Pets} amount="35" />
        </Flex>
      </Flex>
      <Flex
        style={{
          backgroundColor: "#F5F1FF",
          padding: token.paddingSM,
          borderRadius: token.borderRadiusLG,
        }}
        justify="center"
      >
        <Typography.Text style={{ fontSize: 18, fontWeight: 500 }}>
          $125/<span style={{ fontWeight: 200, fontSize: 16 }}>person</span>
        </Typography.Text>
      </Flex>
      <Button
        style={{ backgroundColor: "#3D2482", color: "#fff" }}
        size="large"
      >
        View Details
      </Button>
    </Flex>
  );
};
export default SelectFlightCard;
