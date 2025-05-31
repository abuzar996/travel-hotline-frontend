import { Button, Flex, Modal, theme, Typography } from "antd";
import { useCallback, useState, type FC } from "react";
import { planeSeatsData } from "src/utils/data";
import { seatsData } from "./constants";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  switchModal: () => void;
}
const SeatSelectorModal: FC<ModalProps> = ({ isOpen, switchModal }) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [seatsPlan, setSeatsPlan] = useState(seatsData);
  const onItemClick = useCallback((index1: number, index2: number) => {
    setSeatsPlan((prev) => {
      const updated = prev.map((row) => [...row]); // deep copy
      updated[index1][index2] ^= 1; // toggle 0 ↔ 1
      return updated;
    });
  }, []);
  const onSaveClick = useCallback(() => {
    switchModal();
    navigate("/personal-info");
  }, [switchModal, navigate]);

  return (
    <Modal
      open={isOpen}
      footer={null}
      title={null}
      closeIcon={null}
      onCancel={switchModal}
    >
      <Flex vertical flex={1} gap={20}>
        <Flex justify="center" align="center" flex={1} gap={10}>
          {planeSeatsData.map(({ id, color, text, status }) => (
            <Flex
              key={id}
              style={{
                padding: token.paddingXS,
                borderRadius: token.borderRadiusLG,
                backgroundColor: color,
                color: text,
              }}
            >
              <Typography.Text
                style={{ color: text, fontWeight: 400, fontSize: 15 }}
              >
                {status}
              </Typography.Text>
            </Flex>
          ))}
        </Flex>
        <Flex flex={1} justify="center" vertical gap={10} align="space-evenly">
          {["A", "B", "C", "D", "E", "F", "G"].map((item, index) => (
            <Flex
              key={index}
              gap={10}
              justify="space-evenly"
              align="center"
              flex={1}
            >
              {[1, 2, 3, 4, 5, 6].map((val, i) => (
                <Flex
                  key={i}
                  flex={1}
                  justify="space-evenly"
                  align="center"
                  className="select-none"
                  style={{
                    padding: token.paddingXS,
                    backgroundColor:
                      seatsPlan[index][i] === 0
                        ? "#fff"
                        : seatsPlan[index][i] === 1
                        ? "#3D2482"
                        : "#757575",
                    borderRadius: token.borderRadiusLG * 1.5,
                    marginLeft: i === 3 ? "40px" : 0, // ⬅️ add space before 4th item
                    color: seatsPlan[index][i] === 0 ? "#757575" : "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onItemClick(index, i);
                  }}
                >
                  {item}
                  {val}
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex flex={1} justify="center">
          <Button
            size="large"
            style={{
              backgroundColor: "#3D2482",
              color: "#fff",
              borderRadius: token.borderRadiusLG,
            }}
            onClick={onSaveClick}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
export default SeatSelectorModal;
