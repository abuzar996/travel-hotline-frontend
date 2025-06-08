import { Flex, theme, Button } from "antd";
import { SlidersVertical } from "lucide-react";
import type { FC } from "react";
import LocationPin from "src/assets/Location-Pin.png";
import Room from "src/assets/vectors/room.png";
import DetailsContainer from "./detail-container";
import AvailabilityContainer from "./availability-container";
import CheckIn from "src/assets/vectors/checkin.png";
import CheckOut from "src/assets/vectors/checkout.png";

interface StaySelectorProps {
  location: string;
  rooms: number;
}

const StaySelector: FC<StaySelectorProps> = ({ location, rooms }) => {
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
    >
      <DetailsContainer image={LocationPin} label="Location" value={location} />
      <DetailsContainer image={Room} label="Room" value={rooms} />
      <AvailabilityContainer
        checkinDate="Sept 05"
        checkinImage={CheckIn}
        checkoutDate="Sept 07"
        checkoutImage={CheckOut}
      />
      <Flex justify="flex-end" align="center" flex={1}>
        <Button icon={<SlidersVertical size={14} />} type="text">
          Filters
        </Button>
      </Flex>
    </Flex>
  );
};
export default StaySelector;
