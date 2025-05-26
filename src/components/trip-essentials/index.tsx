import { Button, Flex, theme, Typography } from "antd";
import { sidebarData, tripData } from "./constants";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Requirements } from "src/utils/types";
import TripRequirementCard from "../cards/trip-requirement-card";

const TripEssentials = () => {
  const { token } = theme.useToken();
  const [selectedItem, setSelectedItem] = useState<Requirements>(
    Requirements.FLIGHT
  );
  const handleItemClick = useCallback((value: Requirements) => {
    setSelectedItem(value);
  }, []);
  const cardData = useMemo(() => {
    return tripData.find((item) => item.type === selectedItem);
  }, [selectedItem]);
  useEffect(() => {}, [selectedItem]);
  return (
    <Flex gap={10} flex="1">
      <Flex style={{ width: "20%" }}>
        <Flex
          vertical
          style={{
            borderRadius: token.borderRadiusLG,
            backgroundColor: "#F5F1FF",
            padding: token.paddingXS,
            width: "100%",
            height: "fit-content",
          }}
          gap={5}
        >
          {sidebarData.map((item) => (
            <Flex
              flex={"1"}
              key={item.id}
              justify={item.value == selectedItem ? "center" : "flex-start"}
              style={{
                padding: token.paddingSM,
                borderRadius: token.borderRadiusLG * 2.5,
                cursor: "pointer",
                backgroundColor:
                  item.value === selectedItem ? "#3D2482" : "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3D2482";
                e.currentTarget.style.justifyContent = "center";
                e.currentTarget.querySelector("span")!.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                if (item.value !== selectedItem) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.justifyContent = "flex-start";
                  e.currentTarget.querySelector("span")!.style.color = "#000";
                }
              }}
              onClick={() => handleItemClick(item.value)}
            >
              <Typography.Text
                style={{
                  fontSize: token.fontSizeHeading5,
                  color: item.value === selectedItem ? "#fff" : "#000",
                }}
              >
                {item.label}
              </Typography.Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {cardData && (
        <Flex
          vertical
          flex={1}
          gap={10}
          style={{
            boxSizing: "content-box",
            paddingInline: token.paddingXS,
            minHeight: 500,
          }}
        >
          <Typography.Text style={{ fontSize: token.fontSizeHeading4 }}>
            Stays - 4 nights - September 5 - 9
          </Typography.Text>
          <Flex align="center" justify="center" gap={10}>
            <TripRequirementCard {...cardData} />
            <TripRequirementCard {...cardData} />
          </Flex>
          <Flex align="center" justify="center">
            <Button
              style={{
                backgroundColor: "#FFE07D",
                width: "100%",
                borderColor: "#FFE07D",
              }}
              size="large"
            >
              <Typography.Text
                style={{
                  fontSize: token.fontSizeHeading5,
                  fontWeight: token.fontWeightStrong,
                }}
              >
                View More
              </Typography.Text>
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default TripEssentials;
