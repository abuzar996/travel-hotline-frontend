import { Flex, theme, Image, Typography } from "antd";
import type { FC } from "react";
//import type { UpcomingTripItemType } from "src/utils/types";
import Success from "src/assets/vectors/success.svg";
import Flight from "src/assets/Place.png";
import { CloseCircleFilled, EditOutlined } from "@ant-design/icons";

const UpcommingItenarayCard: FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingXS,
        backgroundColor: "#F5F1FF",
        borderRadius: token.borderRadiusLG,
        height: "fit-content",
      }}
      gap={10}
      vertical
    >
      <Flex
        flex={1}
        style={{ padding: token.paddingXS }}
        align="center"
        justify="space-between"
      >
        <Typography.Text style={{ fontWeight: 500, fontSize: 22 }}>
          6:00 AM
        </Typography.Text>
        <Flex gap={10}>
          <Flex
            style={{
              padding: token.paddingXS,
              borderRadius: token.borderRadiusLG,
              backgroundColor: "#DED2FF",
            }}
            align="center"
            gap={5}
          >
            <EditOutlined />
            <Typography.Text style={{ fontWeight: 400, fontSize: 13 }}>
              Edit
            </Typography.Text>
          </Flex>
          <Flex
            style={{
              padding: token.paddingXS,
              borderRadius: token.borderRadiusLG,
              backgroundColor: "#DED2FF",
            }}
            align="center"
            gap={5}
          >
            <CloseCircleFilled style={{ fill: "red", color: "#3D2482" }} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flex={1}
        style={{
          padding: token.paddingXS,
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG,
        }}
        gap={10}
      >
        <Flex>
          <Image
            src={Flight}
            preview={false}
            style={{ height: 180, width: 180 }}
          />
        </Flex>
        <Flex
          flex={1}
          style={{ padding: token.paddingSM }}
          justify="space-between"
        >
          <Flex flex={1} justify="space-evenly" vertical>
            <Typography.Text style={{ fontWeight: 500, fontSize: 22 }}>
              Flight Lands at SJU
            </Typography.Text>
            <Typography.Text style={{ fontWeight: 400, fontSize: 18 }}>
              5757 Wayne Newton Blvd,
            </Typography.Text>
            <Typography.Text style={{ fontWeight: 400, fontSize: 18 }}>
              Las Vegas, NV 89119
            </Typography.Text>
          </Flex>
          <Flex align="center">
            <Image preview={false} src={Success} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default UpcommingItenarayCard;
