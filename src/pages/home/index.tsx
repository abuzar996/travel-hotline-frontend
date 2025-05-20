import {
  Button,
  Carousel,
  Flex,
  Typography,
  theme,
  Input,
  ConfigProvider,
} from "antd";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import Location from "src/assets/location.png";
import Phone from "src/assets/phone.png";
import Map from "src/assets/map.png";
import { homeData } from "src/utils/data";
import "@fontsource/qwitcher-grypen/400.css";
import Card from "src/components/card";
// const { Search } = Input;

const Home = () => {
  const { token } = theme.useToken();
  return (
    <Flex vertical>
      <div
        style={{ width: "100%", overflow: "hidden", position: "relative" }}
        className="select-none"
      >
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots={false}

          //style={{ userSelect: "none" }}
        >
          {homeData.map((item) => (
            <div key={item.id}>
              <img
                src={item.value}
                alt=""
                style={{
                  width: window.innerWidth,
                  height: "700px",
                  objectFit: "fill",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          ))}
        </Carousel>
        <Flex
          style={{
            position: "absolute",
            top: 0,
            left: 50,
            width: "100%",
            height: "100%",
            zIndex: 10,
            color: "#fff",
            justifyContent: "center",
          }}
          vertical
          gap={40}
        >
          <Flex vertical>
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading1 * 1.5,
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Explore
            </Typography.Text>
            <Typography.Text
              style={{
                marginTop: -40,
                fontSize: token.fontSizeHeading1 * 3,
                fontFamily: "Qwitcher Grypen, cursive", // Use font family explicitly
                color: "#FFE07D",
              }}
            >
              Dream
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading1 * 1.5,
                fontWeight: 300,
                color: "#fff",
                marginTop: -40,
              }}
            >
              Discover
            </Typography.Text>
            <Typography.Text
              style={{ fontWeight: 200, color: "#fff", fontSize: 20 }}
            >
              Your next adventure is just a few clicks away.
            </Typography.Text>
            <Typography.Text
              style={{ fontWeight: 200, color: "#fff", fontSize: 20 }}
            >
              Build your perfect trip with us — tailored to your dreams,
            </Typography.Text>
            <Typography.Text
              style={{ fontWeight: 200, color: "#fff", fontSize: 20 }}
            >
              crafted with care.
            </Typography.Text>
          </Flex>
          <div>
            <Button
              style={{
                backgroundColor: "#3D24b2",
                borderRadius: 20,
                color: "#fff",
                borderColor: "#3D24b2",
                padding: token.paddingMD,
                zIndex: 1000,
              }}
              onClick={() => alert("hello")}
            >
              <Typography.Text
                style={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: 20,
                }}
              >
                Complete Travel Personality Profile
              </Typography.Text>
            </Button>
          </div>
        </Flex>
      </div>
      <Flex
        flex="1"
        style={{ padding: token.paddingXS, paddingTop: 40 }}
        justify="center"
        align="center"
        gap={10}
        vertical
      >
        <Typography.Text style={{ fontSize: token.fontSizeHeading1 }}>
          Discover Your Adventures
        </Typography.Text>
        <Typography.Text style={{ fontSize: token.fontSizeHeading5 }}>
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
                  Select Dates
                </Button>
                <Button
                  size="large"
                  style={{ backgroundColor: "#DED2FF" }}
                  onClick={() => alert("Button 2 clicked")}
                >
                  Budget
                </Button>
              </Flex>
            }
            style={{
              width: 800,
              border: "1px solid #DADADA",
              borderRadius: 10,
              padding: 5,
              backgroundColor: "#F5F1FF",
            }}
          />
        </ConfigProvider>
      </Flex>
      <Flex
        flex="1"
        style={{ padding: token.paddingXS, paddingTop: 40, paddingBottom: 40 }}
        justify="center"
        align="center"
        gap={10}
        vertical
      >
        <Typography.Text style={{ fontSize: token.fontSizeHeading1 }}>
          Why Travel with Us?
        </Typography.Text>
        <Typography.Text style={{ fontSize: token.fontSizeHeading5 }}>
          Explore trips designed for your next adventure.
        </Typography.Text>
      </Flex>
      <Flex
        flex={1}
        justify="center"
        align="center"
        vertical
        gap={30}
        style={{ padding: 20 }}
      >
        <Card
          backgroundColor="#FFE07D"
          label="Personalized Itineraries"
          image={Location}
          description="Trips tailored to your style and interests."
        />
        <Card
          backgroundColor="#DED2FF"
          label="Book it All in One Place"
          image={Phone}
          description="Handpicked flights, stays, cars, and experiences for your perfect trip."
        />
        <Card
          backgroundColor="#FFE07D"
          label="Seamless Planning"
          image={Map}
          description="Stress-free bookings and detailed travel support."
        />
      </Flex>
    </Flex>
  );
};

export default Home;
