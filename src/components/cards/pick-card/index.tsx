import { Flex, theme, Button, Typography, Image } from "antd";
import type { FC } from "react";
interface PickCardProps {
  label: string;
  image: string;
}
const PickCard: FC<PickCardProps> = ({ label, image }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        height: "100%",
        width: "100%",
        padding: token.paddingXS,
        borderRadius: token.borderRadiusLG,
        backgroundColor: "#F5F1FF",
      }}
      vertical
      gap={10}
    >
      <Flex
        flex={1}
        align="center"
        justify="center"
        style={{ background: "#fff", borderRadius: token.borderRadiusLG }}
      >
        <Flex vertical gap={10} align="center">
          <Image src={image} preview={false} />
          <Typography style={{ fontWeight: "600", fontSize: 22 }}>
            {label}
          </Typography>
        </Flex>
      </Flex>
      <Button
        size="large"
        style={{ borderColor: "#FFE07D", backgroundColor: "#FFE07D" }}
      >
        <Typography.Text
          style={{
            fontWeight: 500,
            color: "#000",
            fontSize: token.fontSizeHeading5,
          }}
        >
          View more
        </Typography.Text>
      </Button>
    </Flex>
  );
};
export default PickCard;
