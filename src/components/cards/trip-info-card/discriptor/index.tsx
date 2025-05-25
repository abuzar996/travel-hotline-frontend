import { Flex, theme, Image, Typography } from "antd";
import { vectorData } from "./constants";

const TripDiscriptor = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        padding: token.paddingSM,
        backgroundColor: "#F5F1FF",
        borderRadius: token.borderRadiusLG,
      }}
      align="center"
      gap={10}
      flex={2}
    >
      <Flex vertical gap={5} align="center">
        <Flex>
          {vectorData.map((item, index) => (
            <Flex key={index} style={{ marginLeft: -7 }}>
              <Image src={item} />
            </Flex>
          ))}
        </Flex>
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading4,
            fontWeight: token.fontWeightStrong,
            textWrap: "nowrap",
          }}
        >
          Thailand Trip
        </Typography.Text>
      </Flex>
      <Flex
        style={{
          padding: token.paddingXS,
          textWrap: "wrap",
          background: "#fff",
          borderRadius: token.borderRadiusLG,
        }}
      >
        <Typography
          style={{ fontSize: token.fontSizeHeading5, color: "#757575" }}
        >
          Experience the vibrant culture, stunning landscapes, and rich history
          of Thailand on an unforgettable journey through its bustling cities,
          serene temples, and breathtaking beaches.
        </Typography>
      </Flex>
    </Flex>
  );
};
export default TripDiscriptor;
