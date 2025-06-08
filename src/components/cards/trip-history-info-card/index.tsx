import { Flex, theme, Image, Typography, Button } from "antd";
import Img from "src/assets/Card.png";

import { TripInfoData } from "./constants";
const TripInfoHistoryCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingXS,
        borderRadius: token.borderRadiusLG,
        height: "fit-content",
        backgroundColor: "#F5F1FF",
      }}
      align="center"
      gap={10}
    >
      <Image
        src={Img}
        style={{
          borderRadius: token.borderRadiusLG * 2,
          height: 160,
          width: 170,
        }}
        preview={false}
      />
      <Flex flex={1} vertical style={{ minHeight: "100%" }} gap={10}>
        <Typography.Text style={{ fontWeight: 500, fontSize: 22 }}>
          Thailand Trip
        </Typography.Text>
        {TripInfoData.map((item) => (
          <Flex flex={1} align="center" key={item.id} gap={10}>
            <Image src={item.icon} width={20} height={20} />
            {item.label && (
              <Typography.Text style={item.style}>{item.label}</Typography.Text>
            )}
            <Typography.Text style={item.style}>{item.value}</Typography.Text>
          </Flex>
        ))}
        <Button
          style={{
            backgroundColor: "#3D2482",
            borderRadius: token.borderRadiusLG,
            color: "#fff",
          }}
        >
          View Details
        </Button>
      </Flex>
    </Flex>
  );
};
export default TripInfoHistoryCard;
