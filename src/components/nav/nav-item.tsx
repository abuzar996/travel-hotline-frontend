import { Typography, Flex, theme, Divider } from "antd";
import React, { useCallback } from "react";
import type { ItemType } from "src/utils/types";

const NavItem: React.FC<
  ItemType & { handleItemSelect: (id: string) => void }
> = ({ label, active, icon, id, handleItemSelect }) => {
  const { token } = theme.useToken();
  const handleItemClick = useCallback(() => {
    handleItemSelect(id);
  }, [id]);
  return (
    <Flex
      gap={10}
      onClick={handleItemClick}
      style={{ cursor: "pointer" }}
      className="select-none"
    >
      <div
        className="sm:hidden "
        style={{
          color: active ? "#3D2482" : "#757575",
        }}
      >
        {icon}
      </div>
      <Flex vertical>
        <Typography.Text
          style={{
            color: active ? "#3D2482" : "#757575",
            fontWeight: active ? token.fontWeightStrong : "",
          }}
        >
          {label}
        </Typography.Text>
        {active && <Divider size="large" className="max-sm:hidden" />}
      </Flex>
    </Flex>
  );
};
export default NavItem;
