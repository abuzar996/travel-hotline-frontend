import { Flex, theme, Typography } from "antd";
import Card from "src/components/cards/card";
import Location from "src/assets/location.png";
import Phone from "src/assets/phone.png";
import Map from "src/assets/map.png";
const WhyTravel = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Flex
        flex="1"
        style={{ padding: token.paddingXS, paddingTop: 40, paddingBottom: 40 }}
        justify="center"
        align="center"
        gap={10}
        vertical
        //className="max-sm:jusify-center"
      >
        <Typography.Text
          style={{ fontSize: token.fontSizeHeading1, textAlign: "center" }}
        >
          Why Travel with Us?
        </Typography.Text>
        <Typography.Text
          style={{ fontSize: token.fontSizeHeading5, textAlign: "center" }}
        >
          Explore trips designed for your next adventure.
        </Typography.Text>
      </Flex>
      <Flex
        flex={1}
        justify="center"
        align="center"
        vertical
        gap={30}
        style={{ padding: 20, paddingBottom: 60 }}
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
    </>
  );
};
export default WhyTravel;
