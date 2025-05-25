import { Flex, Typography, theme } from "antd";
import { ChevronRight } from "lucide-react";
import { useCallback, type FC } from "react";
import { useNavigate } from "react-router-dom";
import TripCard from "src/components/cards/trip-card";
import type { TripOption } from "src/utils/types";
const TripBanner: FC<TripOption> = ({ name, list }) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const handleItemClick = useCallback(
    (id: string) => {
      navigate(`/trip-info/${id}`);
    },
    [navigate]
  );
  return (
    <Flex vertical gap={10} style={{ paddingBottom: 50 }}>
      {" "}
      <Flex
        flex="1"
        justify="space-between"
        align="center"
        style={{ paddingInline: token.paddingXS }}
      >
        <Typography.Text
          style={{ fontSize: token.fontSizeHeading3, fontWeight: "600" }}
        >
          {name}
        </Typography.Text>
        <Flex gap="10" align="center">
          <Typography.Text
            style={{
              fontSize: token.fontSizeHeading5,
              color: "#757575",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            View All
          </Typography.Text>
          <ChevronRight color="#757575" size="18" />
        </Flex>
      </Flex>
      <Flex
        flex={1}
        gap={10}
        style={{ overflowX: "scroll" }}
        className="scroll-hidden"
      >
        {list.map((item) => (
          <Flex
            style={{
              height: 300,
              minWidth: window.innerWidth / 3 - 17,
              maxWidth: window.innerWidth / 3 - 17,
            }}
            flex={1}
            key={item.id}
          >
            <TripCard {...item} onClick={handleItemClick} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
export default TripBanner;
