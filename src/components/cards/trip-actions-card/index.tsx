import { Flex, theme } from "antd";
import IconButton from "src/components/button/icon-button";
import Back from "src/assets/vectors/back-arrow.svg";
import Chat from "src/assets/vectors/chat.svg";
import Fork from "src/assets/vectors/fork.svg";
import Fav from "src/assets/vectors/fav.svg";
import Menu from "src/assets/vectors/menu.svg";
const TripActionCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex style={{ padding: token.paddingSM }} justify="space-between">
      <Flex>
        <IconButton image={Back} />
      </Flex>
      <Flex gap={20} align="center">
        <IconButton image={Chat} />
        <IconButton image={Fork} />
        <IconButton image={Fav} />
        <IconButton image={Menu} />
      </Flex>
    </Flex>
  );
};
export default TripActionCard;
