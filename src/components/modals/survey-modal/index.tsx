import {
  Flex,
  Modal,
  theme,
  Progress,
  Typography,
  Button,
  Input,
  Image,
} from "antd";
import { useCallback, useMemo, useState, type FC } from "react";
import { iconData, surveyData } from "./constants";
import AppStore from "src/assets/App store.png";
import Thumbe from "src/assets/thumb.png";
interface SurveyModalProps {
  isOpen: boolean;
  togleOpen: () => void;
}
const SurveyModal: FC<SurveyModalProps> = ({ isOpen, togleOpen }) => {
  const [step, setStep] = useState<number>(1);
  const { token } = theme.useToken();
  const progressStatus = useMemo(() => {
    return (step / 10) * 100;
  }, [step]);

  const handleNextClick = useCallback(() => {
    if (step < 10) {
      setStep(step + 1);
    } else {
      togleOpen();
    }
  }, [step, togleOpen]);

  return (
    <Modal
      open={isOpen}
      styles={{
        content: {
          left: 400,
          top: 150,

          borderRadius: token.borderRadiusLG * 4,
          width: 370,
        },
        body: {
          height: 380,
        },
      }}
      footer={null}
      title={null}
      closeIcon={null}
    >
      <Flex flex={1} vertical style={{ height: "100%" }} gap={10}>
        <Flex>
          <Progress showInfo={false} percent={progressStatus} />
        </Flex>
        <Flex flex={1} justify="space-between">
          {step <= 8 && (
            <Flex flex={1} justify="space-between" vertical gap={10}>
              <Flex>
                <Typography.Text
                  style={{ fontWeight: 600, textAlign: "start", fontSize: 20 }}
                >
                  {surveyData[step - 1].label}
                </Typography.Text>
              </Flex>
              {step === 8 && (
                <Input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Enter Budget"
                />
              )}
              <Flex gap={10} style={{ flexWrap: "wrap" }}>
                {surveyData[step - 1].options.map((label) => (
                  <Flex
                    key={label.id}
                    style={{
                      cursor: "pointer",
                      height: "fit-content",
                      padding: token.paddingXS,
                      borderRadius: token.borderRadiusLG * 4,
                      backgroundColor: "#DED2FF",
                      paddingInline: 20,
                    }}
                  >
                    {label.value}
                  </Flex>
                ))}
              </Flex>
              <Button
                style={{ borderRadius: 30, backgroundColor: "#FFE07D" }}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Flex>
          )}
          {step == 9 && (
            <Flex flex={1} vertical>
              <Flex>
                <Typography.Text
                  style={{ fontWeight: 400, textAlign: "start", fontSize: 20 }}
                >
                  {surveyData[step - 1].label}
                </Typography.Text>
              </Flex>
              <Flex
                style={{ height: 240, overflowY: "scroll" }}
                // className="scroll-hidden"
                wrap="wrap"
              >
                {iconData.map((item) => (
                  <div
                    style={{
                      width: "25%", // 100 / 4 = 25% for 4 items per row
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      boxSizing: "border-box",
                    }}
                    key={item.label} // Always add a unique key when mapping
                  >
                    <Image src={item.icon} style={{ width: 30, height: 30 }} />
                    <Typography.Text
                      style={{
                        fontWeight: 200,
                        fontSize: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </Typography.Text>
                  </div>
                ))}
              </Flex>

              <Button
                style={{ borderRadius: 30, backgroundColor: "#FFE07D" }}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Flex>
          )}

          {step == 10 && (
            <Flex flex={1} vertical justify="space-between">
              <Flex justify="center">
                <Image src={Thumbe} />
              </Flex>
              <Flex>
                <Typography.Text
                  style={{ fontWeight: 400, textAlign: "center", fontSize: 20 }}
                >
                  {surveyData[step - 1].label}
                </Typography.Text>
              </Flex>
              <Flex>
                <Typography.Text
                  style={{ fontWeight: 400, textAlign: "center", fontSize: 17 }}
                >
                  Say goodbye to travel stress! Enjoy seamless, handpicked
                  itineraries tailored to your taste.
                </Typography.Text>
              </Flex>

              <Button
                size="large"
                style={{
                  borderRadius: 30,
                  backgroundColor: "#3D2482",
                  color: "#fff",
                }}
                onClick={handleNextClick}
              >
                Start Planning your trip
              </Button>
            </Flex>
          )}

          {/* {step == 11 && (
            <Flex flex={1} vertical justify="space-between">
              <Flex>
                <Typography.Text
                  style={{ fontWeight: 400, textAlign: "start", fontSize: 20 }}
                >
                  {surveyData[step - 1].label}
                </Typography.Text>
              </Flex>
              <Flex justify="center">
                <Image src={AppStore} style={{ width: 150, height: 50 }} />
              </Flex>

              <Button
                size="large"
                style={{
                  borderRadius: 30,
                  backgroundColor: "#3D2482",
                  color: "#fff",
                }}
                onClick={handleNextClick}
              >
                Download the App
              </Button>
            </Flex>
          )} */}
        </Flex>
      </Flex>
    </Modal>
  );
};
export default SurveyModal;
