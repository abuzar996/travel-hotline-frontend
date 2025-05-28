import { Flex, theme, Image } from "antd";

import React from "react";

import DiscoverImage from "src/assets/home-3.png";
import TripBanner from "src/components/banners/trip-banner";
import Discovery from "src/components/discovery";
import Footer from "src/components/footer";
import { tripData } from "src/utils/data";

const Discover: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex gap={10} vertical justify="center">
      <Flex
        style={{
          borderRadius: token.borderRadiusLG * 2,
          padding: token.paddingSM,
        }}
        flex="1"
      >
        <Image
          src={DiscoverImage}
          preview={false}
          style={{
            height: 300,
            width: window.innerWidth,
            objectFit: "fill",
            borderRadius: token.borderRadiusLG * 2,
          }}
        />
      </Flex>
      <Flex
        vertical
        style={{ padding: token.paddingSM, paddingBottom: 150 }}
        gap={20}
      >
        <Discovery />
        {tripData.map((item) => (
          <TripBanner {...item} key={item.id} />
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
};
export default Discover;
