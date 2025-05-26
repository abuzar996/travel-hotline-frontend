import { Flex, theme, Typography } from "antd";
import TripOverviewCard from "src/components/cards/trip-overview";
import Footer from "src/components/footer";
import OptionSelector from "src/components/option-selector";
import TripEssentials from "src/components/trip-essentials";
// import { useParams } from "react-router-dom";

const TripInfo = () => {
  //   /const { id } = useParams();
  const { token } = theme.useToken();
  return (
    <Flex vertical justify="space-between" flex={1}>
      <Flex
        style={{ padding: token.paddingLG, height: "100%" }}
        flex={1}
        vertical
        gap={20}
      >
        <TripOverviewCard />
        <OptionSelector />
        <Typography.Text style={{ fontSize: token.fontSizeHeading3 }}>
          Recommended for you
        </Typography.Text>
        <TripEssentials />
      </Flex>
      <Footer />
    </Flex>
  );
};
export default TripInfo;
