import { LayoutOutlined, OrderedListOutlined } from "@ant-design/icons";
import { ConfigProvider, Flex, theme, Segmented } from "antd";
import type { SegmentedProps } from "antd";
import { useState } from "react";
import { ViewType } from "src/utils/types";

const ViewSelector = () => {
  const { token } = theme.useToken();
  const [activeItem, setActiveItem] = useState<ViewType>(ViewType.LIST);
  const items: SegmentedProps["options"] = [
    {
      label: activeItem === ViewType.LIST ? "List View" : "",
      value: ViewType.LIST,
      icon: <OrderedListOutlined />,
    },
    {
      label: activeItem === ViewType.TAB ? "Tab View" : "",
      value: ViewType.TAB,
      icon: <LayoutOutlined />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemActiveBg: "#3D2482",
            colorInfoActive: "#fff",
            itemSelectedBg: "#3D2482",
            itemSelectedColor: "#fff",
            borderRadius: 40,
            trackBg: " #F5F1FF",
          },
        },
      }}
    >
      <Flex align="center" justify="center">
        <Flex
          align="center"
          justify="center"
          style={{
            background: "#F5F1FF",
            padding: token.paddingXS,
            borderRadius: token.borderRadiusLG,
          }}
        >
          <Segmented
            options={items}
            size="large"
            value={activeItem}
            onChange={(value) => setActiveItem(value as ViewType)}
          />
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};
export default ViewSelector;
