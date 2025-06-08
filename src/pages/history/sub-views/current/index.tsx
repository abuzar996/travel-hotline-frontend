import { Button, Flex, theme, Typography } from "antd";
import TripOverviewCard from "src/components/cards/trip-overview";
import UpcommingItenarayCard from "src/components/cards/upcomming-itinerary-card";
import OptionSelector from "src/components/option-selector";
export const TripDays: { date: string; dayCount: string; active: boolean }[] = [
  { date: "Sept 05", dayCount: "01", active: true },
  { date: "Sept 06", dayCount: "02", active: false },
  { date: "Sept 07", dayCount: "03", active: false },
  { date: "Sept 08", dayCount: "04", active: false },
  { date: "Sept 09", dayCount: "05", active: false },
  { date: "Sept 10", dayCount: "06", active: false },
  { date: "Sept 11", dayCount: "07", active: false },
];

const CurrentTrips = () => {
  const { token } = theme.useToken();
  return (
    <Flex flex={1} vertical gap={10} style={{ overflow: "hidden" }}>
      <Flex flex={1} style={{ maxHeight: "fit-content" }}>
        <TripOverviewCard interactive={false} />
      </Flex>

      <Flex flex={1} style={{ maxHeight: "fit-content" }}>
        <OptionSelector />
      </Flex>
      <Flex flex={1} gap={10}>
        <Flex
          vertical
          gap={10}
          style={{
            height: window.innerHeight - 480,
            overflowY: "scroll",
            padding: token.paddingXS,
          }}
          className="scroll-hidden"
        >
          {TripDays.map((item) => (
            <Flex
              key={item.dayCount}
              style={{
                width: 150,
                padding: token.paddingXS,
                borderRadius: token.borderRadiusLG,
                backgroundColor: item.active ? "#DED2FF" : "#F5F1FF",
              }}
              vertical
            >
              <Typography.Text style={{ fontWeight: "400", fontSize: 20 }}>
                Day {item.dayCount}
              </Typography.Text>
              <Typography.Text style={{ fontWeight: "200", fontSize: 16 }}>
                {item.date}
              </Typography.Text>
            </Flex>
          ))}
        </Flex>
        <Flex
          flex={1}
          vertical
          gap={10}
          style={{ height: window.innerHeight - 480, overflowY: "scroll" }}
          className="scroll-hidden"
        >
          <Flex>
            <UpcommingItenarayCard />
          </Flex>
          <Flex>
            <UpcommingItenarayCard />
          </Flex>
          <Flex>
            <UpcommingItenarayCard />
          </Flex>
          <Flex flex={1}>
            <Button
              size="large"
              style={{
                width: "100%",
                backgroundColor: "#3D2482",
                color: "#fff",
                borderRadius: 40,
              }}
            >
              Add More Activities
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CurrentTrips;
