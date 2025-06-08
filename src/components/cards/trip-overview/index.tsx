import { Flex, theme } from "antd";
import DiscoverImage from "src/assets/home-1.png";
import TripActionCard from "../trip-actions-card";
import TripInfoCard from "../trip-info-card";
import type { Dispatch, FC, SetStateAction } from "react";
import type { ViewType } from "src/utils/types";
const TripOverviewCard: FC<
  | {
      interactive: true;
      activeItem: ViewType;
      setActiveView: Dispatch<SetStateAction<ViewType>>;
    }
  | { interactive: false }
> = (props) => {
  const { token } = theme.useToken();
  return (
    <Flex flex={1}>
      <Flex
        style={{
          width: "100%", // Ensure full width
          height: props.interactive
            ? window.innerHeight / 2.5
            : window.innerHeight / 3.5,
          borderRadius: token.borderRadiusLG * 2,
          padding: token.paddingSM,
          backgroundImage: `url(${DiscoverImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // ✅ Center the image
        }}
        flex="1"
        vertical
        justify={props.interactive ? "space-between" : "flex-end"}
      >
        {props.interactive === true && <TripActionCard />}

        {props.interactive == true ? (
          <TripInfoCard
            activeItem={props.activeItem}
            setActiveView={props.setActiveView}
          />
        ) : (
          <TripInfoCard />
        )}
      </Flex>
    </Flex>
  );
};
export default TripOverviewCard;
