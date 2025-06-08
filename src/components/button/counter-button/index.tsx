import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, theme, Typography } from "antd";
import {
  useCallback,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
interface CounterButtonProps {
  label: string;
  count: number;
  setCounter: Dispatch<SetStateAction<number>>;
}
const CounterButton: FC<CounterButtonProps> = ({
  count,
  setCounter,
  label,
}) => {
  const { token } = theme.useToken();

  const handleIncreaseCounter = useCallback(() => {
    setCounter((count) => count + 1);
  }, [setCounter]);

  const handleDecreaseCount = useCallback(() => {
    if (count > 0) {
      setCounter((count) => count - 1);
    }
  }, [count, setCounter]);
  return (
    <Flex
      flex={1}
      style={{ padding: token.paddingXS }}
      justify="space-between"
      align="center"
    >
      <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
        {label}
      </Typography.Text>
      <Flex
        align="center"
        style={{
          padding: token.paddingXS,
          borderRadius: token.borderRadiusSM,
          backgroundColor: "#DED2FF",
        }}
        gap={2}
      >
        <div onClick={handleDecreaseCount}>
          <MinusOutlined />
        </div>
        <div style={{ paddingInline: 5, backgroundColor: "#3D2482" }}>
          <Typography.Text style={{ color: "#fff" }}>{count}</Typography.Text>
        </div>
        <div onClick={handleIncreaseCounter}>
          <PlusOutlined style={{ fontWeight: token.fontWeightStrong }} />
        </div>
      </Flex>
    </Flex>
  );
};
export default CounterButton;
