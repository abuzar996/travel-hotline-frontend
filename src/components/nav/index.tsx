import { useCallback, useEffect, useState } from "react";
import { Flex, theme, Image } from "antd";
import Logo from "src/assets/logo.png";
import { navItems } from "src/utils/data";
import NavItem from "./nav-item";
import { MenuOutlined } from "@ant-design/icons";
import MobileDrawer from "./mobile-drawer";
import type { ItemType } from "src/utils/types";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, togleDrawer] = useState<boolean>(false);

  const [menuItems, setMenuItems] = useState<ItemType[]>(navItems);
  const handleMenuClicked = useCallback(() => {
    togleDrawer((isOpen) => !isOpen);
  }, []);

  useEffect(() => {
    const actualPath = menuItems.find(
      (item) => item.route === location.pathname
    )?.route;
    if (actualPath) {
      setMenuItems((items) =>
        items.map((item) =>
          item.route === actualPath
            ? { ...item, active: true }
            : { ...item, active: false }
        )
      );
    }
  }, [location]);
  const handleItemSelect = useCallback(
    (id: string) => {
      setMenuItems((items) =>
        items.map((item) =>
          item.id === id
            ? { ...item, active: true }
            : { ...item, active: false }
        )
      );
      const route = menuItems.find((item) => item.id === id);
      navigate(route!.route);
    },
    [navigate]
  );
  return (
    <Flex
      flex={1}
      style={{ backgroundColor: "#fff", padding: token.paddingXS }}
      align="center"
      justify="center"
    >
      <Flex
        className="max-sm:w-[95%] sm:w-[80%]"
        justify="space-between"
        align="center"
      >
        <Image src={Logo} width={60} height={50} preview={false} />
        <Flex flex={"1"} justify="center" gap={40} className="max-sm:hidden">
          {menuItems.map((item) => (
            <NavItem
              {...item}
              handleItemSelect={handleItemSelect}
              key={item.id}
            />
          ))}
        </Flex>
        <Flex className="sm:hidden" align="center">
          <MenuOutlined onClick={handleMenuClicked} />
          <MobileDrawer
            handleItemSelect={handleItemSelect}
            isOpen={isDrawerOpen}
            togleDrawer={handleMenuClicked}
            items={menuItems}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Navbar;
