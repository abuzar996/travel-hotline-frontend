import { Flex, Image, theme, Typography } from "antd";
import type { FC } from "react";

interface CardProps {
  image: string;
  description: string;
  label: string;
  backgroundColor: string;
}
const Card: FC<CardProps> = ({
  image,
  description,
  label,
  backgroundColor,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        width: "45%",
        borderRadius: token.borderRadiusLG * 2,
        padding: token.paddingMD,
        backgroundColor: backgroundColor, //,
      }}
      align="center"
    >
      <Flex flex={"1"} vertical>
        <Typography.Text style={{ fontSize: token.fontSizeHeading2 }}>
          {label}
        </Typography.Text>
        <Typography.Text style={{ fontSize: token.fontSizeHeading5 }}>
          {description}
        </Typography.Text>
      </Flex>
      <Flex>
        <Image src={image} />
      </Flex>
    </Flex>
  );
};
export default Card;
