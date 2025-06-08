import { Button, Flex, Image, Tag, theme, Typography } from "antd";
import RentalImage from "src/assets/rental-1.png";
import Car from "src/assets/car.png";
const SelectCarCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        borderRadius: token.borderRadiusLG,
        padding: token.paddingXS,
        backgroundColor: "#fff",
      }}
      vertical
      gap={10}
    >
      <Image
        src={RentalImage}
        preview={false}
        style={{ height: 40, width: 110 }}
      />
      <Flex flex={1} align="center" justify="space-between">
        <Typography.Text style={{ fontSize: 22, fontWeight: 500 }}>
          Toyota Camry
        </Typography.Text>
        <Typography.Text style={{ fontSize: 22, fontWeight: 500 }}>
          $25<span style={{ fontSize: 18, fontWeight: 300 }}>/day</span>
        </Typography.Text>
      </Flex>
      <Image src={Car} preview={false} />
      <Flex flex={1} wrap="wrap" gap={5}>
        <Tag style={{ backgroundColor: "#DED2FF" }}>4.8/5</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Automatic</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Unlimited mileage</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>4 doors</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>5 People</Tag>
        <Tag style={{ backgroundColor: "#DED2FF" }}>Air condition</Tag>
      </Flex>
      <Flex
        style={{
          padding: token.paddingSM,
          backgroundColor: "#F5F1FF",
          borderRadius: token.borderRadiusLG,
        }}
        vertical
        gap={10}
      >
        <Flex flex={1} justify="space-between">
          <Flex gap={10} align="center">
            <Typography.Text>Air conditioning</Typography.Text>
          </Flex>
          <Typography.Text>Yes</Typography.Text>
        </Flex>
      </Flex>
      <Button
        style={{ backgroundColor: "#3D2482", color: "#fff" }}
        size="large"
      >
        Select Car
      </Button>
    </Flex>
  );
};
export default SelectCarCard;
