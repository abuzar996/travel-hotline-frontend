import { Flex, Image, theme } from "antd";
import type { FC } from "react";
interface IconButtonProps {
  image: string;
}
const IconButton: FC<IconButtonProps> = ({ image }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        padding: token.paddingSM,
        background: "#f5f5ff",
        borderRadius: token.borderRadiusLG,
      }}
      justify="center"
      align="center"
    >
      <Image preview={false} src={image} />
    </Flex>
  );
};
export default IconButton;
