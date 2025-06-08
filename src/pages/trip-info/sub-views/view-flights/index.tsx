import ViewWrapper from "src/components/wrappers/view-wrapper";
import FlightSelector from "src/components/selectors/flight-selector";
import FlightOptionSelector from "src/components/option-selectors/flight-option-selector";
import { Flex, theme } from "antd";
import SelectFlightCard from "src/components/cards/select-flight-card";
const ViewFlights = () => {
  const { token } = theme.useToken();
  return (
    <ViewWrapper
      navChild={
        <FlightSelector
          source="Los Angeles"
          sourceCode="LAX"
          destinationCode="SAMUI"
          destination="Bangkok"
          tripType="Round"
          flightType="Economy"
          month="Sept"
          days="05 - 09"
        />
      }
      optionSelector={<FlightOptionSelector />}
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
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
        <div style={{ width: "calc(50% - 5px)" }}>
          <SelectFlightCard />
        </div>
      </Flex>
    </ViewWrapper>
  );
};
export default ViewFlights;
