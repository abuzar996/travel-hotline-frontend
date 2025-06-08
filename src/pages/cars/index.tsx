import { Checkbox, Divider, Flex, Image, theme, Typography } from "antd";
import TripRequirementCard from "src/components/cards/trip-requirement-card";
import FormWrapper from "src/components/wrappers/form-wrapper";
import { tripData } from "src/components/trip-essentials/constants";
import { useState } from "react";
import {
  CalendarOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import LocationPin from "src/assets/Location-Pin.png";
const Cars = () => {
  const { token } = theme.useToken();
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  return (
    <Flex flex={1} gap={10} className="select-none p-2">
      <Flex flex={3.5}>
        <FormWrapper label="Select your Car">
          <Flex
            wrap="wrap"
            style={{ height: 670, overflowY: "scroll" }}
            className="scroll-hidden"
          >
            {tripData.map((_, index) => (
              <div
                key={index}
                style={{
                  width: "50%", // Two items per row
                  padding: 10, // Optional spacing
                  boxSizing: "border-box",
                }}
              >
                <TripRequirementCard {...tripData[1]} />
              </div>
            ))}
          </Flex>
        </FormWrapper>
      </Flex>
      <Flex flex={1} vertical gap={10}>
        <Flex
          vertical
          style={{
            borderRadius: token.borderRadiusLG * 2,
            backgroundColor: "#F5F1FF",
            padding: token.paddingSM,
          }}
        >
          <Flex align="center" gap={10} justify="space-between">
            <Typography.Text
              style={{ color: "#000000", fontSize: 14, fontWeight: 500 }}
            >
              Pick up
            </Typography.Text>
            <Flex vertical>
              <Flex flex={1} gap={10} align="center">
                <CalendarOutlined />
                <Typography.Text
                  style={{ color: "#000000", fontSize: 14, fontWeight: 400 }}
                >
                  Fri, 12 Jun at 12pm
                </Typography.Text>
              </Flex>
              <Flex flex={1} gap={10} align="center">
                <Image
                  preview={false}
                  src={LocationPin}
                  style={{ width: 15 }}
                />
                <Typography.Text
                  style={{ color: "#000000", fontSize: 14, fontWeight: 400 }}
                >
                  GDN: Gdansk Rubiein in terminal
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider />
          <Flex align="center" gap={10} justify="space-between">
            <Typography.Text
              style={{ color: "#000000", fontSize: 14, fontWeight: 500 }}
            >
              Drop off
            </Typography.Text>
            <Flex vertical>
              <Flex flex={1} gap={10} align="center">
                <CalendarOutlined />
                <Typography.Text
                  style={{ color: "#000000", fontSize: 14, fontWeight: 400 }}
                >
                  Fri, 12 Jun at 12pm
                </Typography.Text>
              </Flex>
              <Flex flex={1} gap={10} align="center">
                <Image
                  preview={false}
                  src={LocationPin}
                  style={{ width: 15 }}
                />
                <Typography.Text
                  style={{ color: "#000000", fontSize: 14, fontWeight: 400 }}
                >
                  GDN: Gdansk Rubiein in terminal
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          vertical
          style={{
            borderRadius: token.borderRadiusLG * 2,
            backgroundColor: "#F5F1FF",
            padding: token.paddingSM,
          }}
          gap={10}
        >
          <Typography.Text style={{ color: "#757575", fontSize: 14 }}>
            Guests
          </Typography.Text>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              Adults
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
              <div
                onClick={() => {
                  if (adultCount > 0) {
                    setAdultCount((count) => count - 1);
                  }
                }}
              >
                <MinusOutlined />
              </div>
              <div style={{ paddingInline: 5, backgroundColor: "#3D2482" }}>
                <Typography.Text style={{ color: "#fff" }}>
                  {adultCount}
                </Typography.Text>
              </div>
              <div
                onClick={() => {
                  setAdultCount((count) => count + 1);
                }}
              >
                <PlusOutlined style={{ fontWeight: token.fontWeightStrong }} />
              </div>
            </Flex>
          </Flex>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              Children
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
              <div
                onClick={() => {
                  if (childrenCount > 0) {
                    setChildrenCount((count) => count - 1);
                  }
                }}
              >
                <MinusOutlined />
              </div>
              <div style={{ paddingInline: 5, backgroundColor: "#3D2482" }}>
                <Typography.Text style={{ color: "#fff" }}>
                  {childrenCount}
                </Typography.Text>
              </div>
              <div
                onClick={() => {
                  setChildrenCount((count) => count + 1);
                }}
              >
                <PlusOutlined style={{ fontWeight: token.fontWeightStrong }} />
              </div>
            </Flex>
          </Flex>
          <Typography.Text style={{ color: "#757575", fontSize: 14 }}>
            Filters
          </Typography.Text>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              Car
            </Typography.Text>
            <Checkbox checked />
          </Flex>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              SUV
            </Typography.Text>
            <Checkbox />
          </Flex>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              Van
            </Typography.Text>
            <Checkbox />
          </Flex>
          <Flex
            flex={1}
            style={{ padding: token.paddingXS }}
            justify="space-between"
            align="center"
          >
            <Typography.Text style={{ color: "#000000", fontSize: 14 }}>
              Convertible
            </Typography.Text>
            <Checkbox />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Cars;
