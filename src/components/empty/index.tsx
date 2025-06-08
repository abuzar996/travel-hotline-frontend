import { Button, Flex, theme, Typography, Image } from "antd";
import Location from "src/assets/Location-1.png";

const Empty = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{ padding: token.paddingSM }}
      align="center"
      justify="center"
      gap={10}
    >
      <Flex flex={1} vertical align="center" gap={10}>
        <Typography.Text style={{ fontSize: 22, fontWeight: 500 }}>
          No Saved trips
        </Typography.Text>
        <Typography.Text style={{ fontSize: 18, fontWeight: 400 }}>
          You don’t have any Saved trips at the moment
        </Typography.Text>
        <Button size="large" style={{ background: "#3D2482", color: "#fff" }}>
          Plan a trip
        </Button>
      </Flex>
      <Flex flex={1} align="center" justify="center">
        <Image src={Location} preview={false} />
      </Flex>
    </Flex>
  );
};
export default Empty;
