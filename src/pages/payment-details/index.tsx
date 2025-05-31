import FormWrapper from "src/components/wrappers/form-wrapper";
import { Flex, theme } from "antd";
import Card from "./card";
import DetailCard from "../flight-details/detail-card";
const PaymentDetails = () => {
  const { token } = theme.useToken();
  return (
    <FormWrapper label="Saved Cards" description="Your Cards">
      <Flex style={{ padding: token.paddingSM }} gap="10">
        <Card />
        <Flex flex={1} style={{ minWidth: "60%" }}>
          <DetailCard />
        </Flex>
      </Flex>
    </FormWrapper>
  );
};
export default PaymentDetails;
