import { Flex, theme, Typography, Image, Divider } from "antd";
import type { FC } from "react";
interface AvailabilityContainerProps {
  checkinImage: string;
  checkoutImage: string;
  checkinDate: string;
  checkoutDate: string;
}
const AvailabilityContainer: FC<AvailabilityContainerProps> = ({
  checkinImage,
  checkinDate,
  checkoutDate,
  checkoutImage,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        padding: token.paddingXS,
        backgroundColor: "#fff",
        borderRadius: token.borderRadiusLG,
      }}
      gap={10}
    >
      <Flex
        style={{
          //   padding: token.paddingXS,
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG,
        }}
        vertical
        justify="space-between"
      >
        <Flex align="center" gap={10}>
          <Image preview={false} src={checkinImage} />
          <Typography.Text
            style={{ fontWeight: 200, fontSize: 14, color: "#757575" }}
          >
            Check in
          </Typography.Text>
        </Flex>
        <Typography.Text style={{ fontWeight: 500, fontSize: 18 }}>
          {checkinDate}
        </Typography.Text>
      </Flex>

      <Divider type="vertical" style={{ height: "100%" }} />
      <Flex
        style={{
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG,
        }}
        vertical
        justify="space-between"
      >
        <Flex align="center" gap={10}>
          <Image preview={false} src={checkoutImage} />
          <Typography.Text
            style={{ fontWeight: 200, fontSize: 14, color: "#757575" }}
          >
            Check out
          </Typography.Text>
        </Flex>
        <Typography.Text style={{ fontWeight: 500, fontSize: 18 }}>
          {checkoutDate}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
export default AvailabilityContainer;
