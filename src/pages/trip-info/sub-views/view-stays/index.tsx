import ViewWrapper from "src/components/wrappers/view-wrapper";

import { Flex, theme } from "antd";
import SelectCarCard from "src/components/cards/select-car-card";
import StayOptionSelector from "src/components/option-selectors/stay-option-selector";
import StaySelector from "src/components/selectors/stay-selector";
const ViewStays = () => {
  const { token } = theme.useToken();
  return (
    <ViewWrapper
      mainLabel="Select your Stay"
      navChild={<StaySelector location="Thailand" rooms={1} />}
      optionSelector={<StayOptionSelector />}
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
export default ViewStays;
