import { Flex, theme } from "antd";
import IntroCard from "./intro";
import ViewSelector from "./view-selector";
import TripDiscriptor from "./discriptor";
import type { Dispatch, FC, SetStateAction } from "react";
import type { ViewType } from "src/utils/types";
const TripInfoCard: FC<{
  activeItem: ViewType;
  setActiveView: Dispatch<SetStateAction<ViewType>>;
}> = ({ activeItem, setActiveView }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{
        backgroundColor: "#ffffff",
        padding: token.paddingSM,
        borderRadius: token.borderRadiusLG,
      }}
      align="center"
      justify="space-between"
      gap={10}
      className="max-lg:flex-col overflow-y-scroll scroll-hidden"
    >
      <IntroCard />
      <ViewSelector activeItem={activeItem} setActiveView={setActiveView} />
      <TripDiscriptor />
    </Flex>
  );
};
export default TripInfoCard;
