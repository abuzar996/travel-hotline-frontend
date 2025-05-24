import { Flex, Image, theme, Typography } from "antd";
import Symbol from "src/assets/symbol.png";
import Calender from "src/assets/calender.png";

import type { FC } from "react";
interface BlogItemProps {
  label: string;
  description: string;
  date: string;
  image: string;
}
const BlogItem: FC<BlogItemProps> = ({ label, description, date, image }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      vertical
      style={{
        borderRadius: token.borderRadiusLG * 2,
        backgroundColor: "#fff",
        objectFit: "contain",
        padding: token.paddingMD,
        gap: 15,
        objectPosition: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
      className="max-sm:w-[95%] sm:w-[400px]"
      flex={1}
    >
      <Image preview={false} src={Symbol} style={{ height: 20, width: 20 }} />
      <Typography.Text
        style={{
          fontSize: token.fontSizeHeading2,
          fontWeight: token.fontWeightStrong,
        }}
      >
        {label}
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: token.fontSizeHeading4,
        }}
      >
        {description}
      </Typography.Text>
      <Flex align="flex-end" gap={10} flex={1}>
        <Image src={Calender} style={{ width: 30, height: 30 }} />
        <Typography.Text style={{ color: "#3D2482", fontSize: 20 }}>
          {date}
        </Typography.Text>
      </Flex>

      <Image
        src={image}
        preview={false}
        style={{
          maxHeight: 200,

          objectFit: "fill",
          objectPosition: "center",
          display: "block",
        }}
      />
      {/* </Flex> */}
    </Flex>
  );
};
export default BlogItem;
