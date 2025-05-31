import { Button, Flex, theme, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
const DetailCard = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //alert();
  return (
    <Flex
      flex="1"
      style={{
        padding: token.paddingSM,
        borderRadius: token.borderRadiusLG * 2,
        backgroundColor: "#fff",
      }}
      vertical
      gap={10}
    >
      <Flex style={{ paddingBottom: 20 }}>
        <Typography.Text style={{ fontSize: token.fontSizeHeading2 }}>
          Price breakdown
        </Typography.Text>
      </Flex>
      <Flex flex={1} vertical justify="space-between">
        <Flex vertical flex="1" gap={10}>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Ticket price x2
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $50
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Personal item x1
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $100
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Carry-on bag x2
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $100
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Base Fare
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $480
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Travel Insurance
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $32
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Taxes & Fees
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $54
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex vertical gap={50}>
          <Flex
            flex="1"
            style={{ maxHeight: "fit-content" }}
            align="center"
            justify="space-between"
          >
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 400, color: "#757575" }}
            >
              Total
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: "18px", fontWeight: 500, color: "#000000" }}
            >
              $666.6
            </Typography.Text>
          </Flex>
          <Button
            size="large"
            style={{
              borderRadius: token.borderRadiusLG * 2,
              backgroundColor: "#3d2482",
              color: "#fff",
            }}
            onClick={() => {
              pathname === "/payment-details"
                ? navigate("/flight-summary")
                : navigate("/payment-details");
            }}
          >
            {pathname === "/payment-details" ? "Proceed Payment" : "Pay Now"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DetailCard;
