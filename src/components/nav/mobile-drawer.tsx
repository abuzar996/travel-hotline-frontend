import { ConfigProvider, Divider, Drawer, Flex, Typography, theme } from "antd";
import type { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
import type { ItemType } from "src/utils/types";
import NavItem from "./nav-item";
interface MobileDrawerProps {
  isOpen: boolean;
  togleDrawer: () => void;
  items: ItemType[];
  handleItemSelect: (id: string) => void;
}
const MobileDrawer: FC<MobileDrawerProps> = ({
  isOpen,
  togleDrawer,
  handleItemSelect,
  items,
}) => {
  const { token } = theme.useToken();
  return (
    <Drawer
      open={isOpen}
      onClose={togleDrawer}
      className="sm:hidden"
      closeIcon={<CloseOutlined color="#000" style={{ color: "#000" }} />}
      title={
        <Flex flex={1} justify="flex-end">
          <Typography.Text
            style={{
              fontWeight: "normal",
              fontSize: token.fontSizeHeading4,
            }}
          >
            Menu
          </Typography.Text>
        </Flex>
      }
    >
      <Flex vertical>
        {items.map((item) => (
          <Flex key={item.id} flex={1} vertical>
            <NavItem {...item} handleItemSelect={handleItemSelect} />
            <ConfigProvider
              theme={{
                components: {
                  Divider: { marginLG: 10 },
                },
              }}
            >
              <Divider />
            </ConfigProvider>
          </Flex>
        ))}
      </Flex>
    </Drawer>
  );
};
export default MobileDrawer;
