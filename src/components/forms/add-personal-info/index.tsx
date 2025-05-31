import { useState } from "react";
import {
  Flex,
  Input,
  Typography,
  theme,
  DatePicker,
  Radio,
  Checkbox,
  Button,
} from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { type PersonalInfoFormType, personalInfoSchema } from "./schema";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import type { CheckboxChangeEvent, CheckboxGroupProps } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";

const genderOptions: CheckboxGroupProps<string>["options"] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const [checked, setChecked] = useState(false);

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },

    watch,
  } = useForm<PersonalInfoFormType>({
    mode: "onSubmit",
    resolver: zodResolver(personalInfoSchema),
  });
  //const navigate=useNavigate()
  const watcher = watch();
  const onSubmit = (data: PersonalInfoFormType) => {};
  const onButtonClick = () => {
    navigate("/flight-details");
  };
  console.log(errors);
  return (
    <Flex
      flex={1}
      vertical
      gap={20}
      justify="flex-start"
      style={{
        minHeight: "100%",
      }}
      className="select-none"
    >
      <Flex
        vertical
        gap={20}
        flex={1}
        style={{
          padding: token.paddingLG * 2,
          backgroundColor: "#fff",
          borderRadius: token.borderRadiusLG * 2,
        }}
        justify="space-evenly"
      >
        <Flex align="center" gap={20}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  Current Email*
                </Typography.Text>
                <Input
                  className="bg-[#F5F1FF]"
                  type="email"
                  value={value}
                  onChange={onChange}
                  size="large"
                />
              </Flex>
            )}
          />
          <Controller
            control={control}
            name="first_name"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  First Name*
                </Typography.Text>
                <Input
                  value={value}
                  onChange={onChange}
                  size="large"
                  className="bg-[#F5F1FF]"
                />
              </Flex>
            )}
          />
        </Flex>
        <Flex align="center" gap={20}>
          <Controller
            control={control}
            name="middle_name"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  Middle Name
                </Typography.Text>
                <Input
                  value={value}
                  onChange={onChange}
                  size="large"
                  className="bg-[#F5F1FF]"
                />
              </Flex>
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  Last Name*
                </Typography.Text>
                <Input
                  value={value}
                  onChange={onChange}
                  size="large"
                  className="bg-[#F5F1FF]"
                />
              </Flex>
            )}
          />
        </Flex>
        <Flex align="center" gap={20}>
          <Controller
            control={control}
            name="birth_date"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  Birth Date*
                </Typography.Text>
                <DatePicker
                  placeholder="MM/DD/YYYY"
                  onChange={onChange}
                  value={value}
                  size="large"
                  className="bg-[#F5F1FF] placeholder:text-[black]"
                />
              </Flex>
            )}
          />
          <Controller
            control={control}
            name="mobile_number"
            render={({ field: { onChange, value } }) => (
              <Flex flex="1" vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontWeight: "400" }}
                >
                  Mobile Number*
                </Typography.Text>
                <PhoneInput
                  country={"us"} // default country
                  value={value}
                  onChange={onChange}
                  placeholder="Enter phone number"
                  inputStyle={{
                    backgroundColor: "#f5f1ff", // light purple
                    width: "100%",
                    flex: 1,
                    height: "38px", // gets full height of flex parent
                    borderRadius: token.borderRadiusLG,
                  }}
                  buttonStyle={{
                    backgroundColor: "#f5f1ff",
                    height: "38px",
                    borderRadius: token.borderRadiusLG,
                    borderRight: "none", // 🚫 Remove right border
                  }} // Change flag area color
                />
              </Flex>
            )}
          />
        </Flex>
        <Flex>
          <Controller
            control={control}
            name="gender"
            render={({ field: { value, onChange } }) => (
              <Flex vertical gap={5}>
                <Typography.Text
                  style={{ color: "#757575", fontSize: 14, fontWeight: "400" }}
                >
                  {" "}
                  Gender on Travel document
                </Typography.Text>
                <Radio.Group
                  value={value}
                  onChange={onChange}
                  options={genderOptions}
                />
              </Flex>
            )}
          />
        </Flex>
        <Checkbox checked={checked} onChange={onChange}>
          <Typography.Text
            style={{ color: "#3D2482", fontSize: 14, fontWeight: 400 }}
          >
            Receive text alerts about this trip. Message and data rates may
            apply
          </Typography.Text>
        </Checkbox>
        <Flex style={{ width: "100%" }} justify="center" gap={20}>
          <Button
            size="large"
            style={{
              borderRadius: token.borderRadiusLG * 2.5,
              backgroundColor: "#3D2482",
              color: "#fff",
              width: "40%",
            }}
            htmlType="submit"
            onClick={onButtonClick}
          >
            Continue
          </Button>
          <Button
            size="large"
            style={{
              borderRadius: token.borderRadiusLG * 2.5,
              backgroundColor: "#fff",

              width: "40%",
            }}
            onClick={() => navigate("/minor-info")}
          >
            Add Child to Ticket
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PersonalInfoForm;
