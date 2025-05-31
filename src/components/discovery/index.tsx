import { Flex, ConfigProvider, Typography, theme, Input, Button } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Discovery = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      className="select-none"
      style={{ padding: token.paddingXS, paddingTop: 40 }}
      justify="center"
      align="center"
      gap={10}
      vertical
    >
      <Typography.Text
        style={{ fontSize: token.fontSizeHeading1, textAlign: "center" }}
      >
        Discover Your Adventures
      </Typography.Text>
      <Typography.Text
        style={{ fontSize: token.fontSizeHeading5, textAlign: "center" }}
      >
        Explore trips designed for your next adventure.
      </Typography.Text>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              addonBg: "#000",
            },
          },
        }}
      >
        <Flex
          flex={1}
          style={{ width: "100%" }}
          justify="center"
          align="center"
          gap={10}
        >
          <Input
            prefix={<SearchOutlined style={{ color: "#DADADA" }} />}
            size="large"
            variant="borderless"
            placeholder="Search for Destination"
            addonAfter={
              <Flex style={{ borderLeft: "none", paddingLeft: 0 }} gap={10}>
                <Button
                  style={{ backgroundColor: "#DED2FF" }}
                  onClick={() => alert("Button 1 clicked")}
                  icon={<CalendarOutlined />}
                  iconPosition="end"
                  size="large"
                >
                  <Typography.Text className="max-sm:hidden">
                    Select Dates
                  </Typography.Text>
                </Button>
                <Button
                  size="large"
                  style={{ backgroundColor: "#DED2FF" }}
                  icon={<DollarOutlined className="sm:hidden" />}
                  onClick={() => alert("Button 2 clicked")}
                >
                  <Typography.Text className="max-sm:hidden">
                    Budget
                  </Typography.Text>
                </Button>
              </Flex>
            }
            style={{
              padding: 5,
              borderRadius: 10,
              backgroundColor: "#F5F1FF",
              border: "1px solid #DADADA",
            }}
            className="sm:w-[50%]"
          />
          <Flex
            style={{
              height: "100%",
              borderRadius: "20%",
              backgroundColor: "#3D2482",
              maxWidth: "fit-content",
              padding: 10,
            }}
            onClick={() => {
              navigate("/discover");
            }}
          >
            <SearchOutlined style={{ color: "#fff" }} />
          </Flex>
        </Flex>
      </ConfigProvider>
    </Flex>
  );
};
export default Discovery;
