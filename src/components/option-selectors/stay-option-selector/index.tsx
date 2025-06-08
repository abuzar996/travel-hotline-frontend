// import { useState } from "react";
import { Flex, theme, Typography } from "antd";
import FilterItem from "src/components/cards/filter-item-card";
import Counters from "src/components/counters";
import {
  amenitiesfilterItems,
  propertyfilterItems,
  cancelationfilterItems,
} from "./constants";

const StayOptionSelector = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingSM,
        backgroundColor: "#F5F1FF",
        borderRadius: token.borderRadiusLG,
        height: "fit-content",
      }}
      vertical
      gap={10}
    >
      <Counters />
      <Flex flex={1} vertical gap={5}>
        <Typography.Text style={{ color: "#757575", fontSize: 15 }}>
          Amenities
        </Typography.Text>
        {amenitiesfilterItems.map((item) => (
          <FilterItem key={item.id} {...item} />
        ))}
      </Flex>
      <Flex flex={1} vertical gap={5}>
        <Typography.Text style={{ color: "#757575", fontSize: 15 }}>
          Property
        </Typography.Text>
        {propertyfilterItems.map((item) => (
          <FilterItem key={item.id} {...item} />
        ))}
      </Flex>
      <Flex flex={1} vertical gap={5}>
        <Typography.Text style={{ color: "#757575", fontSize: 15 }}>
          Cancelation
        </Typography.Text>
        {cancelationfilterItems.map((item) => (
          <FilterItem key={item.id} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};
export default StayOptionSelector;
