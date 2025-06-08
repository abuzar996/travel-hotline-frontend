import { Flex, Image, theme, Typography } from "antd";
import FlightSchedule from "./flight-schedult";
import FlightRouteImg from "src/assets/flight-route.png";
const FlightRoute = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingLG,
        borderRadius: token.borderRadiusLG,

        maxHeight: "fit-content",
      }}
      vertical
    >
      <FlightSchedule
        code="DPT"
        time="06:30 AM"
        date="Sept 05"
        align="flex-start"
        children
      />
      <Flex align="center" vertical style={{}}>
        <Typography.Text>8h 30m</Typography.Text>
        <Image src={FlightRouteImg} preview={false} />
      </Flex>
      <FlightSchedule
        code="DPT"
        time="06:30 AM"
        date="Sept 05"
        align="flex-end"
        children
      />
    </Flex>
  );
};
export default FlightRoute;
