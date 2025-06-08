import { ConfigProvider } from "antd";
import type { FC } from "react";
interface ConfigProps {
  children: React.ReactNode;
}
const Config: FC<ConfigProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3D2482",
          fontFamily: "Poppins",
        },
        components: {
          Modal: {
            colorBgContainer: "#F5F1FF",
            contentBg: "#F5F1FF",
            // paddingLG: 0,
            //padding: 0,
          },
          Checkbox: {
            controlInteractiveSize: 26,
          },
          Divider: {
            margin: 0,
            verticalMarginInline: 0,
            marginLG: 4,
            colorSplit: "#3D2482",
            textPaddingInline: 0,
            orientationMargin: 12,
          },
          Progress: { defaultColor: "#3D2482", remainingColor: "#DED2FF" },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Config;
