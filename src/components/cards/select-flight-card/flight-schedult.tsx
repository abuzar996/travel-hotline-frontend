import { Flex, Typography, type FlexProps, theme } from "antd";
import type { FC } from "react";
interface FlightScheduleProps extends FlexProps {
  time: string;
  code: string;
  date: string;
}
const FlightSchedule: FC<FlightScheduleProps> = ({
  align,
  time,
  date,
  code,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      align={align}
      vertical
      gap={0}
      style={{
        padding: token.paddingXS,

        maxHeight: "fit-content",
      }}
    >
      <Typography.Text style={{ color: "#000", fontWeight: 400, fontSize: 12 }}>
        {time}
      </Typography.Text>
      <Typography.Text style={{ color: "#000", fontWeight: 500, fontSize: 20 }}>
        {code}
      </Typography.Text>
      <Typography.Text style={{ color: "#000", fontWeight: 400, fontSize: 12 }}>
        {date}
      </Typography.Text>
    </Flex>
  );
};
export default FlightSchedule;
