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
        //width: "45%",
        borderRadius: token.borderRadiusLG * 2,
        padding: token.paddingMD,
        backgroundColor: backgroundColor, //,
      }}
      align="center"
      className="sm:w-[45%] max-sm:w-[90%] sm:max-md:w-[70%] max-sm:flex-col-reverse max-sm:items-center"
    >
      <Flex flex={"1"} vertical className="max-sm:items-center ">
        <Typography.Text
          style={{ fontSize: token.fontSizeHeading2 }}
          className="max-sm:text-center"
        >
          {label}
        </Typography.Text>
        <Typography.Text
          style={{ fontSize: token.fontSizeHeading5 }}
          className="max-sm:text-center"
        >
          {description}
        </Typography.Text>
      </Flex>
      <Flex className="max-sm:justify-center max-sm:w-[100%]">
        <Image src={image} style={{ height: 70, width: 70 }} preview={false} />
      </Flex>
    </Flex>
  );
};
export default Card;
