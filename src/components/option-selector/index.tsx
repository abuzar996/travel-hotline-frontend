import { ConfigProvider, Flex, Segmented, theme, Typography } from "antd";
import type { SegmentedProps } from "antd";
import { useState } from "react";
import { TripOptionType } from "src/utils/types";

const OptionSelector = () => {
  const { token } = theme.useToken();
  const [activeOption, setActiveOption] = useState<TripOptionType>(
    TripOptionType.SAVE
  );

  const items: SegmentedProps["options"] = [
    {
      label: (
        <Flex
          flex={1}
          justify="center"
          align="center"
          style={{
            padding: token.paddingXS,
            boxSizing: "border-box",
            borderBottom:
              activeOption === TripOptionType.SAVE
                ? "2px solid #3D2482"
                : "none",
          }}
          className="select-none"
        >
          <Typography
            style={{
              background: "transparent",
              fontSize: token.fontSizeHeading5,
              fontWeight: token.fontWeightStrong,
            }}
          >
            Saves
          </Typography>
        </Flex>
      ),
      value: TripOptionType.SAVE,
    },
    {
      label: (
        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{
            padding: token.paddingXS,
            boxSizing: "border-box",
            borderBottom:
              activeOption === TripOptionType.ITINERARY
                ? "2px solid #3D2482"
                : "none",
          }}
          className="select-none"
        >
          <Typography
            style={{
              background: "transparent",
              fontSize: token.fontSizeHeading5,
              fontWeight: token.fontWeightStrong,
            }}
          >
            Itinerary
          </Typography>
        </Flex>
      ),
      value: TripOptionType.ITINERARY,
    },
    {
      label: (
        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{
            padding: token.paddingXS,
            boxSizing: "border-box",
            borderBottom:
              activeOption === TripOptionType.CART
                ? "2px solid #3D2482"
                : "none",
          }}
          className="select-none"
        >
          <Typography
            style={{
              background: "transparent",
              fontSize: token.fontSizeHeading5,
              fontWeight: token.fontWeightStrong,
            }}
          >
            Cart
          </Typography>
        </Flex>
      ),
      value: TripOptionType.CART,
    },
  ];

  return (
    <Flex
      flex="1"
      justify="center"
      style={{
        padding: token.paddingSM,
        borderRadius: token.borderRadiusLG,
        backgroundColor: "#F5F1FF",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              trackBg: "#F5F1FF",
              itemActiveBg: "#F5F1FF",
              itemHoverBg: "#F5F1FF",
              itemSelectedBg: "#F5F1FF",
              boxShadowTertiary: "none",
              boxShadowSecondary: "none",
            },
          },
        }}
      >
        <Segmented
          options={items}
          style={{ width: "100%" }}
          block
          value={activeOption}
          onChange={(value) => setActiveOption(value as TripOptionType)}
        />
      </ConfigProvider>
    </Flex>
  );
};

export default OptionSelector;
