import { CalendarOutlined } from "@ant-design/icons";
import { Flex, theme, Image, Typography, Button } from "antd";
import Location from "src/assets/Location-Pin.png";
const IntroCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={2}
      style={{
        backgroundColor: "#F5F1FF",
        borderRadius: token.borderRadiusLG,
        padding: token.paddingLG,
      }}
      justify="space-between"
      className="max-lg:w-[100%] max-sm:flex-col max-sm:gap-[10px] items-center max-sm:items-start"
    >
      <Flex gap={5}>
        <Flex>
          <Image src={Location} preview={false} height={35} width={35} />
        </Flex>
        <Flex className="flex-col ">
          <Typography
            style={{
              fontWeight: "500",
              fontSize: token.fontSizeHeading4,
            }}
          >
            Thailand
          </Typography>
          <Typography
            style={{
              fontSize: token.fontSizeHeading5,
            }}
          >
            <span style={{ fontWeight: token.fontWeightStrong }}>$720</span>
            /person
          </Typography>
        </Flex>
      </Flex>
      <Flex>
        <Button
          icon={<CalendarOutlined />}
          iconPosition="start"
          style={{ backgroundColor: "#DED2FF" }}
        >
          <Typography.Text>Sept 5-9</Typography.Text>
        </Button>
      </Flex>
    </Flex>
  );
};
export default IntroCard;
