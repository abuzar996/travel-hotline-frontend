import { CalendarOutlined } from "@ant-design/icons";
import { Flex, Typography, Image } from "antd";
import type { FC } from "react";
import LocationPin from "src/assets/Location-Pin.png";
interface DetailsContainerProps {
  locationName: string;
  locationCode: string;
  label: string;
  date: string;
  time: string;
}
const DetailsContainer: FC<DetailsContainerProps> = ({
  locationName,
  locationCode,
  label,
  date,
  time,
}) => {
  return (
    <Flex flex={1} gap={20}>
      <Flex align="center">
        <Typography.Text style={{ fontWeight: 500 }}>{label}</Typography.Text>
      </Flex>
      <Flex flex={1} vertical>
        <Flex flex={1} gap={10}>
          <CalendarOutlined />
          <Typography.Text>
            {date} at {time}
          </Typography.Text>
        </Flex>
        <Flex flex={1} gap={10}>
          <Image
            src={LocationPin}
            preview={false}
            style={{ width: 17, height: 20 }}
          />
          <Typography.Text>
            {locationCode}: {locationName}
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DetailsContainer;
