import ViewWrapper from "src/components/wrappers/view-wrapper";
import FlightSelector from "src/components/selectors/car-selector";
import CarOptionSelector from "src/components/option-selectors/car-option-selector";
import { Flex, theme } from "antd";
import SelectCarCard from "src/components/cards/select-car-card";
const ViewCars = () => {
  const { token } = theme.useToken();
  return (
    <ViewWrapper
      mainLabel="Select your Car"
      navChild={
        <FlightSelector
          source="Los Angeles"
          sourceCode="LAX"
          destinationCode="SAMUI"
          destination="Bangkok"
          date="Fri, 12 Jun"
          time="12pm"
        />
      }
      optionSelector={<CarOptionSelector />}
    >
      <Flex
        flex={1}
        wrap="wrap"
        style={{
          background: "#F5F1FF",
          padding: token.paddingXS,
          borderRadius: token.borderRadiusLG,
        }}
        gap={10}
      >
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectCarCard />
        </div>
      </Flex>
    </ViewWrapper>
  );
};
export default ViewCars;
