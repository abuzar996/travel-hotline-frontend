import { useState } from "react";
import { Flex, Typography } from "antd";
import CounterButton from "../button/counter-button";
const Counters = () => {
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setchildrenCount] = useState<number>(0);
  return (
    <Flex flex={1} vertical gap={10}>
      <Typography.Text style={{ color: "#757575", fontSize: 15 }}>
        Guests
      </Typography.Text>
      <CounterButton
        label="Adults"
        count={adultCount}
        setCounter={setAdultCount}
      />
      <CounterButton
        label="Children"
        count={childrenCount}
        setCounter={setchildrenCount}
      />
    </Flex>
  );
};
export default Counters;
