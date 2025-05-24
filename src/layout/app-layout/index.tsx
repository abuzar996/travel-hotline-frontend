import { useRef, useLayoutEffect, useState } from "react";
import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "src/components/nav";
import Config from "src/components/config";
import TripCard from "src/components/cards/trip-card";

const AppLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef.current!.offsetHeight);
    }
  }, []);

  return (
    <Config>
      <Flex className="h-screen vertical w-screen bg-[blue]" vertical flex={1}>
        <Flex style={{ width: "100%" }} ref={headerRef}>
          <Navbar />
        </Flex>
        {height !== 0 && (
          <div
            style={{
              //padding: token.paddingXS,
              minHeight: `calc(100vh - ${height}px)`,
              backgroundColor: "#fff",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
            className="scroll-hidden"
          >
            {/* <Outlet /> */}
            <div style={{ height: 300, width: 450 }}>
              <TripCard />
            </div>
          </div>
        )}
      </Flex>
    </Config>
  );
};
export default AppLayout;
