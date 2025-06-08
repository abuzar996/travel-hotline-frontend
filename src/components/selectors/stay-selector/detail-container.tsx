import { Flex, theme, Typography, Image } from "antd";
import type { FC } from "react";
interface DetailsContainerProps {
  image: string;
  label: string;
  value: string | number;
}
const DetailsContainer: FC<DetailsContainerProps> = ({
  image,
  label,
  value,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        padding: token.paddingXS,
        backgroundColor: "#fff",
        borderRadius: token.borderRadiusLG,
      }}
      vertical
      justify="space-between"
    >
      <Flex align="center" gap={10}>
        <Image preview={false} src={image} />
        <Typography.Text
          style={{ fontWeight: 200, fontSize: 14, color: "#757575" }}
        >
          {label}
        </Typography.Text>
      </Flex>
      <Typography.Text style={{ fontWeight: 500, fontSize: 18 }}>
        {value}
      </Typography.Text>
    </Flex>
  );
};
export default DetailsContainer;
