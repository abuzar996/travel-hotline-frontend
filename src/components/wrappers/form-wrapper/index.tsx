import { Flex, Typography, theme } from "antd";
import { ArrowLeft } from "lucide-react";
import { useCallback, type FC, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface FormWrapperProps {
  children: ReactNode;
  label: string;
  description: string;
}
const FormWrapper: FC<FormWrapperProps> = ({
  children,
  label,
  description,
}) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Flex
      flex="1"
      className=" scroll-hidden"
      style={{ height: "100%", overflowY: "scroll", padding: token.paddingLG }}
      vertical
      gap={20}
    >
      <Flex align="center" style={{ paddingTop: 30 }} gap={40}>
        <Flex
          style={{
            background: "#F5F1FF",
            padding: token.paddingSM,
            borderRadius: token.borderRadiusLG,
          }}
          onClick={onBackClick}
        >
          <ArrowLeft />
        </Flex>
        <Flex vertical gap={0}>
          <Typography
            style={{ fontSize: token.fontSizeHeading2, fontWeight: "400" }}
          >
            {label}
          </Typography>
          <Typography
            style={{
              fontSize: token.fontSizeHeading5,
              color: "#757575",
            }}
          >
            {description}
          </Typography>
        </Flex>
      </Flex>
      <Flex
        flex={1}
        style={{
          backgroundColor: "#F5F1FF",
          borderRadius: token.borderRadiusLG * 2,
          padding: token.paddingLG,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
export default FormWrapper;
