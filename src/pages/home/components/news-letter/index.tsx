import { RightOutlined } from "@ant-design/icons";
import { Flex, Typography, theme, Input, Button } from "antd";
const NewsLetter = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      justify="center"
      align="center"
      vertical
      gap={30}
      style={{
        padding: 20,
        paddingTop: 90,
        paddingBottom: 90,
        position: "relative",
      }}
    >
      <Flex vertical gap={10} align="center">
        <Typography.Text
          style={{
            // color: "#fff",
            fontSize: token.fontSizeHeading2,
            fontWeight: token.fontWeightStrong,
          }}
        >
          Join Our Newsletter
        </Typography.Text>
        <Typography.Text
          style={{
            //color: "#fff",
            fontSize: token.fontSizeHeading5,
          }}
        >
          Receive travel updates, exclusive insights, and more.
        </Typography.Text>
      </Flex>
      <Flex vertical flex={1} className="w-full" align="center" gap={20}>
        <Input
          placeholder="Name *"
          style={{
            width: "40%",
            backgroundColor: "#F5F1FF",
            padding: 10,
            borderRadius: 15,
          }}
          size="large"
          variant="borderless"
        />
        <Input
          placeholder="Email *"
          style={{
            width: "40%",
            backgroundColor: "#F5F1FF",
            padding: 10,
            borderRadius: 15,
          }}
          size="large"
          variant="borderless"
        />
        {/* <Flex
            flex={1}
            style={{ position: "absolute", bottom: 45, left: 510 }}
          >
            <Checkbox>Check all</Checkbox>
          </Flex> */}
        <Button
          size="large"
          icon={<RightOutlined />}
          iconPosition="end"
          style={{
            color: "#fff",
            backgroundColor: "#3D2482",
            borderRadius: 20,
            padding: 20,
          }}
        >
          Join Newsletter
        </Button>
      </Flex>
    </Flex>
  );
};
export default NewsLetter;
