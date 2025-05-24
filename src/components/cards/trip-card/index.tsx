import { Flex, theme, Image, Typography } from "antd";

import Home from "src/assets/home-1.png";
import Location from "src/assets/Location-Pin.png";

import Stay from "src/assets/vectors/stay.svg";
import Car from "src/assets/vectors/car.svg";
import Flag from "src/assets/vectors/flag.svg";
import Restaurant from "src/assets/vectors/restaurant.svg";
import Flight from "src/assets/vectors/flight.svg";
const vectors: string[] = [Flight, Stay, Car, Flag, Restaurant];
const TripCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        //  background: "yellow",
        height: "100%",
        borderRadius: token.borderRadiusLG * 2,
        padding: token.paddingLG,
        backgroundImage: `url(${Home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      align="end"
    >
      <Flex
        flex={1}
        style={{
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG,
          padding: 10,
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
              <span style={{ fontWeight: token.fontWeightStrong }}>$769</span>
              /person
            </Typography>
          </Flex>
        </Flex>
        <Flex gap={1}>
          {vectors.map((item, index) => (
            <Flex
              align="center"
              style={{
                borderRadius: "50%",
                padding: 12,
                background: "#3D2482",
                marginLeft: -10,
                border: "1px solid #fff",
                zIndex: vectors.length - index,
              }}
              key={index}
            >
              <Image src={item} height={25} width={25} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default TripCard;
