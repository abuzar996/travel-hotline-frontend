import { Checkbox, Flex, theme, Typography } from "antd";
import type { FC } from "react";
interface FilterItemProps {
  label: string;
  checked: boolean;
}
const FilterItem: FC<FilterItemProps> = ({ label, checked }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      align="center"
      justify="space-between"
      style={{ paddingInline: token.paddingXS }}
    >
      <Typography.Text>{label}</Typography.Text>
      <Checkbox checked={checked} />
    </Flex>
  );
};
export default FilterItem;
