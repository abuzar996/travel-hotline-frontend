import { Flex, theme } from "antd";
import IntroCard from "./intro";
import ViewSelector from "./view-selector";
import TripDiscriptor from "./discriptor";
const TripInfoCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        backgroundColor: "#ffffff",
        padding: token.paddingSM,
        borderRadius: token.borderRadiusLG,
      }}
      align="center"
      justify="space-between"
      gap={10}
    >
      <IntroCard />
      <ViewSelector />
      <TripDiscriptor />
    </Flex>
  );
};
export default TripInfoCard;
