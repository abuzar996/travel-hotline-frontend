import { Flex, Typography, theme, Image } from "antd";
import FormWrapper from "src/components/wrappers/form-wrapper";
import Card from "../flight-details/card";
import DetailCard from "../flight-details/detail-card";
import MasterCard from "src/assets/Mastercard.png";
const FlightSummary = () => {
  const { token } = theme.useToken();
  return (
    <FormWrapper label="Flight to NYC" description="Flight Summary">
      <Flex flex={1} align="center">
        <Flex
          flex={1}
          justify="space-evenly"
          gap={20}
          style={{ height: "fit-content" }}
        >
          <Flex flex="1.5" vertical gap={10}>
            <Flex flex={1} gap={10}>
              <Card />
              <Card />
            </Flex>
            <Flex style={{ padding: token.paddingXS }} vertical gap={10}>
              <Flex flex={1} align="center" justify="space-between">
                <Typography.Text style={{ fontSize: token.fontSizeHeading4 }}>
                  Using Card
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: token.fontSizeHeading4,
                    textDecoration: "underline",
                    color: "#3D2482",
                  }}
                >
                  Change Card?
                </Typography.Text>
              </Flex>
              <Flex
                style={{
                  backgroundColor: "#fff",
                  padding: token.paddingSM,
                  borderRadius: token.borderRadiusLG,
                }}
                flex={1}
              >
                <Flex vertical flex={1} gap={10}>
                  <Flex flex={1} justify="space-between">
                    <Typography.Text>XXXX XXXX XXXX 9999</Typography.Text>
                    <Image src={MasterCard} preview={false} />
                  </Flex>
                  <Typography.Text>OLIVIA RHYE</Typography.Text>
                  <Typography.Text>12/27</Typography.Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex={1}>
            <DetailCard />
          </Flex>
        </Flex>
      </Flex>
    </FormWrapper>
  );
};
export default FlightSummary;
