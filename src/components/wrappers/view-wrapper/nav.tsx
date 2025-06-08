import { Flex, theme, Typography } from "antd";
import { ArrowLeft } from "lucide-react";

interface WrapperNavProps {
  label: string;
  children: React.ReactNode;
}
const WrapperNav = ({ label, children }: WrapperNavProps) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        maxHeight: "fit-content",

        padding: token.paddingXS,
      }}
      gap={10}
      align="center"
      justify="space-between"
    >
      <Flex flex="1" align="center" gap={20}>
        <Flex
          style={{
            padding: token.paddingXS,
            borderRadius: token.borderRadiusLG,
            backgroundColor: "#F5F1FF",
          }}
        >
          <ArrowLeft />
        </Flex>
        <Typography.Text
          style={{ fontWeight: 500, fontSize: token.fontSizeHeading2 }}
        >
          {label}
        </Typography.Text>
      </Flex>
      <Flex flex={1} justify="flex-end">
        {children}
      </Flex>
    </Flex>
  );
};
export default WrapperNav;
