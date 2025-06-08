import { Carousel, Typography, Flex, theme, Button } from "antd";
import { homeData } from "src/utils/data";
import "@fontsource/qwitcher-grypen/400.css";
import { useCallback, useState } from "react";
import SurveyModal from "src/components/modals/survey-modal";
const CustomCarousal = () => {
  const [isModalOpen, togleModal] = useState<boolean>(false);
  const { token } = theme.useToken();
  const handleCompleteProfileClick = useCallback(() => {
    togleModal((isOpen) => !isOpen);
  }, []);
  return (
    <div
      style={{ width: "100%", overflow: "hidden", position: "relative" }}
      className="select-none"
    >
      {isModalOpen && (
        <SurveyModal
          isOpen={isModalOpen}
          togleOpen={handleCompleteProfileClick}
        />
      )}
      <Carousel autoplay autoplaySpeed={3000} dots={false}>
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
          // left: 50,
          width: "100%",
          height: "100%",
          zIndex: 10,
          color: "#fff",
          justifyContent: "center",
        }}
        vertical
        gap={40}
        className="max-sm:items-center sm:left-[50px]"
      >
        <Flex vertical>
          <Typography.Text
            style={{
              //textAlign: "center",
              fontSize: token.fontSizeHeading1 * 1.5,
              fontWeight: 400,
              color: "#fff",
            }}
            className="max-sm:text-center"
          >
            Explore
          </Typography.Text>
          <Typography.Text
            style={{
              marginTop: -40,
              fontSize: token.fontSizeHeading1 * 3,
              fontFamily: "Qwitcher Grypen, cursive",
              color: "#FFE07D",
            }}
            className="max-sm:text-center"
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
            className="max-sm:text-center"
          >
            Discover
          </Typography.Text>
          <Typography.Text
            style={{ fontWeight: 200, color: "#fff", fontSize: 20 }}
            className="max-sm:text-center"
          >
            Your next adventure is just a few clicks away.
          </Typography.Text>
          <Typography.Text
            className="max-sm:text-center"
            style={{ fontWeight: 200, color: "#fff", fontSize: 20 }}
          >
            Build your perfect trip with us — tailored to your dreams,
          </Typography.Text>
          <Typography.Text
            className="max-sm:text-center"
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
            onClick={handleCompleteProfileClick}
          >
            <Typography.Text
              style={{
                color: "#fff",
                fontWeight: 400,
                fontSize: 20,
              }}
            >
              Complete <span className="max-sm:hidden">Travel Personality</span>{" "}
              Profile
            </Typography.Text>
          </Button>
        </div>
      </Flex>
    </div>
  );
};
export default CustomCarousal;
