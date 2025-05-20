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
          Divider: {
            margin: 0,
            verticalMarginInline: 0,
            marginLG: 4,
            colorSplit: "#3D2482",
            textPaddingInline: 0,
            orientationMargin: 12,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Config;
