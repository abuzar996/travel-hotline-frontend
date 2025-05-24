import { Flex, Image, theme } from "antd";
import React from "react";
import Facebook from "src/assets/facebook.png";
import Instagram from "src/assets/insta.png";
import Twitter from "src/assets/twitter.png";
import LinkedIn from "src/assets/linkedin.png";
const images: string[] = [Facebook, Twitter, LinkedIn, Instagram];
const Footer: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{ padding: token.paddingSM, background: "#DED2FF" }}
      justify="center"
      align="center"
    >
      <Flex style={{ width: "80%" }} justify="space-between" align="center">
        <Image src={"src/assets/logo.png"} height={60} />
        <Flex gap={15}>
          {images.map((item, index) => (
            <Image src={item} key={index} preview={false} height={35} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
