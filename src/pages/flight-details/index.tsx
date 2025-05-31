import { Flex } from "antd";
import FormWrapper from "src/components/wrappers/form-wrapper";
import Card from "./card";
import DetailCard from "./detail-card";

const FlightDetails = () => {
  return (
    <FormWrapper label="Flight to NYC" description="Flight Summary">
      <Flex flex={1} align="center">
        <Flex
          flex={1}
          justify="space-evenly"
          gap={20}
          style={{ height: "fit-content" }}
        >
          <Card />
          <Card />
          <DetailCard />
        </Flex>
      </Flex>
    </FormWrapper>
  );
};
export default FlightDetails;
