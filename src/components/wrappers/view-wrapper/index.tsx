import { useLayoutEffect, useRef, useState } from "react";
import { Flex, Spin, theme } from "antd";
import WrapperNav from "./nav";

import type { FC } from "react";
interface ViewWrapperProps {
  navChild: React.ReactNode;
  children: React.ReactNode;
  optionSelector: React.ReactNode;
  mainLabel: string;
}
const ViewWrapper: FC<ViewWrapperProps> = ({
  navChild,
  children,
  optionSelector,
  mainLabel,
}) => {
  const { token } = theme.useToken();
  const WrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (WrapperRef) {
      if (WrapperRef.current?.clientHeight) {
        setHeight(WrapperRef.current?.clientHeight);
      }
    }
  }, []);
  return (
    <Flex
      flex="1"
      style={{ padding: token.paddingXS, height: "100%" }}
      vertical
      className="select-none"
    >
      <Flex ref={WrapperRef}>
        <WrapperNav label={mainLabel}>{navChild}</WrapperNav>
      </Flex>
      {height > 0 ? (
        <Flex
          flex={1}
          style={{
            padding: token.paddingXS,
            maxHeight: `calc(100% -  ${height}px)`,
          }}
          gap={10}
        >
          <Flex
            flex={2.5}
            vertical
            style={{
              overflowY: "scroll",
            }}
            className="scroll-hidden"
          >
            {children}
          </Flex>
          <Flex flex={1}>{optionSelector}</Flex>
        </Flex>
      ) : (
        <Flex flex={1} justify="center" align="center">
          <Spin />
        </Flex>
      )}
    </Flex>
  );
};
export default ViewWrapper;
