import { Button, Flex, theme, Typography } from "antd";
import { itemData, sidebarData, tripData } from "./constants";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import { Requirements, ViewType } from "src/utils/types";
import TripRequirementCard from "../cards/trip-requirement-card";
import PickCard from "../cards/pick-card";

const TripEssentials: FC<{ activeView: ViewType }> = ({ activeView }) => {
  console.log(activeView);
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

  const itemToShow = useMemo(() => {
    return itemData.find((item) => item.type === selectedItem);
  }, [selectedItem]);
  useEffect(() => {}, [selectedItem]);
  return (
    <Flex gap={10} flex="1" className="max-lg:flex-col max-lg:gap-[10px]">
      <Flex
        className="w-[20%] max-lg:w-[100%]"
        style={{ display: activeView === ViewType.TAB ? "flex" : "none" }}
      >
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
      {activeView === ViewType.TAB ? (
        cardData && (
          <Flex
            vertical
            flex={1}
            gap={15}
            style={{
              boxSizing: "content-box",
              paddingInline: token.paddingXS,
              minHeight: 500,
            }}
          >
            <Typography.Text style={{ fontSize: token.fontSizeHeading4 }}>
              {cardData.headLabel}
            </Typography.Text>
            <Flex
              align="center"
              justify="center"
              gap={10}
              className="max-lg:flex-col"
            >
              <TripRequirementCard {...cardData} />
              {selectedItem === Requirements.CAR ||
              selectedItem === Requirements.FLIGHT ? (
                <PickCard label={itemToShow!.label} image={itemToShow!.image} />
              ) : (
                <TripRequirementCard {...cardData} />
              )}

              {/*  */}
            </Flex>
            {selectedItem !== Requirements.CAR &&
              selectedItem !== Requirements.FLIGHT && (
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
              )}
          </Flex>
        )
      ) : (
        <Flex
          vertical
          flex={1}
          gap={45}
          style={{
            boxSizing: "content-box",
          }}
        >
          {tripData.map((item) => (
            <Flex key={item.id} vertical gap={10}>
              <Typography.Text
                style={{ fontSize: token.fontSizeHeading4, fontWeight: "500" }}
              >
                {item.headLabel}
              </Typography.Text>
              <Flex
                align="center"
                justify="center"
                gap={10}
                className="max-lg:flex-col"
              >
                <TripRequirementCard {...item} />

                {item.type === Requirements.CAR ||
                item.type === Requirements.FLIGHT ? (
                  <PickCard
                    label={itemToShow!.label}
                    image={itemToShow!.image}
                  />
                ) : (
                  <TripRequirementCard {...item} />
                )}

                {/*  */}
              </Flex>
              {item.type !== Requirements.CAR &&
                item.type !== Requirements.FLIGHT && (
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
                )}
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
export default TripEssentials;
