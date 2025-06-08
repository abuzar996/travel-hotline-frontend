import { Divider, Flex, theme, Typography } from "antd";
import type { FC } from "react";
import LocationIdentifier from "./location-identifier";
import { EditOutlined } from "@ant-design/icons";
interface FlightSelectorProps {
  source: string;
  sourceCode: string;
  destination: string;
  destinationCode: string;
  tripType: "Round" | "One-Way";
  days: string;
  month: string;
  flightType: "Business" | "First-Class" | "Economy";
}

const FlightSelector: FC<FlightSelectorProps> = ({
  source,
  sourceCode,
  destination,
  destinationCode,
  tripType,
  days,
  month,
  flightType,
}) => {
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
      justify="space=between"
    >
      <Flex flex={1} vertical gap={5}>
        <Flex flex={1} gap={10} align="center">
          <LocationIdentifier locationCode={sourceCode} locationName={source} />
          -
          <LocationIdentifier
            locationCode={destinationCode}
            locationName={destination}
          />
        </Flex>
        <Flex gap={10} align="center">
          <Typography.Text style={{ color: "#757575" }}>
            {tripType} trip
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text style={{ color: "#757575" }}>
            {month} {days}
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text style={{ color: "#757575" }}>
            {flightType}
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex
        style={{
          borderRadius: token.borderRadiusLG,
          backgroundColor: "#fff",
          padding: token.paddingXS,
          height: "fit-content",
        }}
      >
        <EditOutlined />
      </Flex>
    </Flex>
  );
};
export default FlightSelector;
