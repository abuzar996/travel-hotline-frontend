import { Button, Flex, Image, Tag, theme, Typography } from "antd";
import Add from "src/assets/vectors/add.svg";
import Close from "src/assets/vectors/close.svg";
import CarImg from "src/assets/car-img.png";
import type { FC } from "react";
import { Requirements, type TripEssentialType } from "src/utils/types";
import Route from "src/assets/route.png";

const TripRequirementCard: FC<TripEssentialType> = ({
  label,
  price,
  stats,
  offers,
  image,
  type,
}) => {
  const { token } = theme.useToken();

  return (
    <Flex
      flex={1}
      style={{
        width: "100%",
        padding: token.paddingXS,
        borderRadius: token.borderRadiusLG,
        backgroundColor: "#F5F1FF",
      }}
      vertical
      gap={10}
    >
      <Flex flex="1" align="center" justify="space-between">
        <Flex vertical gap={1}>
          <Typography.Text
            style={{ fontSize: token.fontSizeHeading4, fontWeight: 500 }}
          >
            {label}
          </Typography.Text>
          <Typography.Text
            style={{ fontSize: token.fontSizeHeading5, fontWeight: 500 }}
          >
            {price}
            <span style={{ color: "#757575", fontWeight: "lighter" }}>
              person
            </span>
          </Typography.Text>
        </Flex>
        <Flex gap={15} align="center">
          <Image src={Add} preview={false} />
          <Image src={Close} preview={false} />
        </Flex>
      </Flex>
      <Image src={image} preview={false} style={{ height: 180 }} />
      <Flex flex={1} style={{ flexWrap: "wrap", gap: 10 }}>
        {stats.map((item) => (
          <Tag color="#DED2FF" key={item.id}>
            <Flex align="center" gap={10}>
              {item.icon}
              <Typography.Text style={{ fontSize: 15, fontWeight: "lighter" }}>
                {item.label}
              </Typography.Text>
            </Flex>
          </Tag>
        ))}
      </Flex>
      <Flex
        style={{
          borderRadius: token.borderRadiusLG,
          backgroundColor: "#fff",
          padding: token.paddingXS,
          position: "relative",
        }}
        vertical
        gap={10}
      >
        {type !== Requirements.FLIGHT ? (
          <>
            {offers.map((item) => (
              <Flex
                flex={1}
                align="center"
                justify="space-between"
                key={item.id}
              >
                <Flex align="center" gap={10}>
                  {item.icon}
                  <Typography.Text>{item.label}</Typography.Text>
                </Flex>
                {type !== Requirements.CAR && (
                  <Typography.Text style={{ color: "#757575" }}>
                    {item.value}
                  </Typography.Text>
                )}
              </Flex>
            ))}
            {type === Requirements.CAR && (
              <Image
                src={CarImg}
                style={{
                  height: 80,
                  width: 100,
                  position: "absolute",
                  right: 20,
                  top: -70,
                }}
              />
            )}
          </>
        ) : (
          <>
            <Flex gap={5} align="center" justify="space-between">
              <Flex vertical gap={0}>
                <Typography.Text style={{ fontSize: 14, fontWeight: 400 }}>
                  Mon 12, 06:00 AM
                </Typography.Text>
                <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
                  JFK
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                  New york
                </Typography.Text>
              </Flex>
              <Flex vertical gap={0} justify="center">
                <Image src={Route} />
              </Flex>
              <Flex vertical gap={0}>
                <Typography.Text style={{ fontSize: 14, fontWeight: 400 }}>
                  Tue 13, 02:00 AM
                </Typography.Text>
                <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
                  LAS
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Las Vegas
                </Typography.Text>
              </Flex>
            </Flex>
            <Flex gap={5} align="center" justify="space-between">
              <Flex vertical gap={0}>
                <Typography.Text style={{ fontSize: 14, fontWeight: 400 }}>
                  Mon 18, 06:00 AM
                </Typography.Text>
                <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
                  LAS
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Las Vegas
                </Typography.Text>
              </Flex>
              <Flex vertical gap={0} justify="center">
                <Image src={Route} />
              </Flex>
              <Flex vertical gap={0}>
                <Typography.Text style={{ fontSize: 14, fontWeight: 400 }}>
                  Tue 19, 02:00 AM
                </Typography.Text>
                <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
                  LHR
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                  London
                </Typography.Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
      <Button
        style={{ borderColor: "#3D2482", backgroundColor: "#3D2482" }}
        size="large"
      >
        <Typography.Text
          style={{
            fontWeight: 500,
            color: "#fff",
            fontSize: token.fontSizeHeading5,
          }}
        >
          View Details
        </Typography.Text>
      </Button>
    </Flex>
  );
};
export default TripRequirementCard;
