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
      align="center"
    >
      <Flex gap={5}>
        <Flex>
          <Image src={Location} preview={false} height={35} width={35} />
        </Flex>
        <Flex vertical>
          <Typography
            style={{
              fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading5,
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
