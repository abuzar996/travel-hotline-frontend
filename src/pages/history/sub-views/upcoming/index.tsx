import { Flex, theme } from "antd";
import TripInfoHistoryCard from "src/components/cards/trip-history-info-card";

const UpcomingTrips = () => {
  const { token } = theme.useToken();
  return (
    <Flex wrap="wrap" gap={10} style={{ padding: token.paddingXS }}>
      {[...Array(20)].map((_, idx) => (
        <div key={idx} style={{ flex: "0 0 calc(50% - 5px)" }}>
          <TripInfoHistoryCard />
        </div>
      ))}
    </Flex>
  );
};
export default UpcomingTrips;
