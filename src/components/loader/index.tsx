import { Spin, Flex } from "antd";

const Loader = () => {
  return (
    <Flex
      flex={1}
      justify="center"
      align="center"
      className="h-full"
      style={{ background: "rgba(0,0,0,0.45)" }}
    >
      <Spin size="large" />
    </Flex>
  );
};
export default Loader;
