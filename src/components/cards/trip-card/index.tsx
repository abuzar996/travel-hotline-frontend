import { Flex, theme, Image, Typography } from "antd";
import Location from "src/assets/Location-Pin.png";
import { vectors } from "./constant";
import { useCallback, type FC } from "react";
import type { TripItem } from "src/utils/types";
const TripCard: FC<TripItem & { onClick: (id: string) => void }> = ({
  place,
  price,
  image,
  id,
  onClick,
}) => {
  const { token } = theme.useToken();

  const handleItemClick = useCallback(() => {
    onClick(id);
  }, [id]);
  return (
    <Flex
      flex={1}
      style={{
        height: "100%",
        borderRadius: token.borderRadiusLG * 2,
        padding: token.paddingLG,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      align="end"
      onClick={handleItemClick}
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
              {place}
            </Typography>
            <Typography
              style={{
                fontSize: token.fontSizeHeading5,
              }}
            >
              <span style={{ fontWeight: token.fontWeightStrong }}>
                ${price}
              </span>
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
