import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, theme, Radio, Typography, Image, Switch } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import CreditCard from "src/assets/card-credit.png";
import DebitCard from "src/assets/vectors/debit.svg.svg";

import Paypal from "src/assets/vectors/logos_paypal.svg";
const PaymentDetails = () => {
  const { token } = theme.useToken();
  const cardOption: CheckboxGroupProps<string>["options"] = [
    {
      label: (
        <Flex
          flex={1}
          vertical
          style={{ minWidth: window.innerWidth / 2, padding: token.paddingSM }}
          gap={20}
        >
          <Flex
            style={{
              padding: token.paddingXS,
              maxHeight: "fit-content",
              minWidth: "100%",
              border: "1px solid #000 ",
              borderRadius: token.borderRadiusLG,
            }}
            flex={1}
            justify="space-btween"
          >
            <Flex vertical flex={1}>
              <Typography.Text
                style={{ fontWeight: "500", fontSize: 14, color: "#000" }}
              >
                Visa-4567
              </Typography.Text>
              <Typography.Text
                style={{ fontWeight: "400", fontSize: 12, color: "#757575" }}
              >
                Default Card
              </Typography.Text>
            </Flex>
            <DownOutlined />
          </Flex>
          <Image src={CreditCard} preview={false} style={{ height: "170px" }} />
        </Flex>
      ),
      value: "current",
    },
    {
      label: (
        <Flex
          flex={1}
          vertical
          style={{ minWidth: window.innerWidth / 2, padding: token.paddingSM }}
          gap={20}
        >
          <Flex
            style={{
              padding: token.paddingSM,
              maxHeight: "fit-content",
              minWidth: "100%",

              borderRadius: token.borderRadiusLG,
              backgroundColor: "#DED2FF",
            }}
            flex={1}
            justify="space-btween"
          >
            <Flex vertical flex={1} style={{}}>
              <Typography.Text
                style={{ fontWeight: "500", fontSize: 14, color: "#000" }}
              >
                Master Card
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      ),
      value: "new",
    },
  ];
  return (
    <Flex
      vertical
      flex="1"
      style={{ maxHeight: "fit-content" }}
      gap={20}
      justify="space-between"
    >
      <Radio.Group
        options={cardOption}
        defaultValue={"current"}
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      />
      <Flex flex={1} style={{ paddingInline: 40 }} justify="space-between">
        <Flex flex="1" vertical>
          <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
            Add new card or payment method
          </Typography.Text>
          <Typography.Text
            style={{ fontSize: 16, fontWeight: 300, textWrap: "wrap" }}
          >
            Payment method would be used for all your trips and itineraries
          </Typography.Text>
        </Flex>
        <Switch />
      </Flex>
      <Flex flex={1} vertical>
        <Flex
          flex={1}
          style={{ padding: token.paddingSM }}
          justify="space-between"
          align="center"
        >
          <Flex gap={20} align="center">
            <Image src={DebitCard} preview={false} />
            <Flex vertical>
              <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                Credit/Debit card
              </Typography.Text>
              <Typography.Text>Add card details</Typography.Text>
            </Flex>
          </Flex>
          <div style={{ backgroundColor: "#3D2482", padding: 2 }}>
            <PlusOutlined style={{ color: "#fff" }} />
          </div>
        </Flex>

        <Flex
          flex={1}
          style={{ padding: token.paddingSM }}
          justify="space-between"
          align="center"
        >
          <Flex gap={20} align="center">
            <Image src={Paypal} preview={false} />
            <Flex vertical>
              <Typography.Text style={{ fontSize: 16, fontWeight: 500 }}>
                PayPal
              </Typography.Text>
              <Typography.Text>Sign in on next screen</Typography.Text>
            </Flex>
          </Flex>
          <div style={{ backgroundColor: "#3D2482", padding: 2 }}>
            <PlusOutlined style={{ color: "#fff" }} />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PaymentDetails;
