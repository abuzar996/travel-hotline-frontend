import { Flex, theme } from "antd";
import DiscoverImage from "src/assets/home-1.png";
import TripActionCard from "../trip-actions-card";
import TripInfoCard from "../trip-info-card";
const TripOverviewCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex flex={1}>
      <Flex
        style={{
          width: "100%", // Ensure full width
          height: window.innerHeight / 2.5,
          borderRadius: token.borderRadiusLG * 2,
          padding: token.paddingSM,
          backgroundImage: `url(${DiscoverImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // ✅ Center the image
        }}
        flex="1"
        vertical
        justify="space-between"
      >
        <TripActionCard />
        <TripInfoCard />
      </Flex>
    </Flex>
  );
};
export default TripOverviewCard;
