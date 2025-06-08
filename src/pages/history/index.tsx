import { Flex, theme, Typography } from "antd";
import { SidebarItems } from "./constants";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

const History = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { token } = theme.useToken();

  const sidbarData = useMemo(() => {
    return SidebarItems.map((item) =>
      item.route === pathname
        ? { ...item, active: true }
        : { ...item, active: false }
    );
  }, [pathname]);
  const handleSidbarItemClick = useCallback(
    (route: string) => {
      navigate(route);
    },
    [navigate]
  );
  return (
    <Flex
      style={{
        padding: token.paddingSM,
        backgroundColor: "#F5F1FF",
        minHeight: "100%",
        overflowY: "hidden",
      }}
      flex={1}
    >
      <Flex
        justify="flex-start"
        vertical
        style={{
          background: "#fff",
          padding: token.paddingLG,
          borderTopLeftRadius: token.borderRadiusLG,
          borderBottomLeftRadius: token.borderRadiusLG,
          maxHeight: "fit-content",
        }}
        gap={10}
      >
        {sidbarData.map(({ active, id, label, route }) => (
          <Flex
            justify="center"
            key={id}
            style={{
              padding: token.paddingSM,
              backgroundColor: active ? "transparent" : "#DED2FF",
              borderRadius: token.borderRadiusLG,
              cursor: "pointer",
            }}
            className="select-none"
            onClick={handleSidbarItemClick.bind(this, route)}
          >
            <Typography.Text style={{ fontSize: token.fontSizeHeading4 }}>
              {label}
            </Typography.Text>
          </Flex>
        ))}
      </Flex>
      <Flex
        style={{
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG,
          borderTopLeftRadius: 0,
          padding: token.paddingSM,
          height: window.innerHeight - 90,
          overflowY: "scroll",
        }}
        vertical
        flex={1}
        className="scroll-hidden"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
export default History;
