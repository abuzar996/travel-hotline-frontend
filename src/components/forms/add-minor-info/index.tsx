// import { useState } from "react";
import {
  Flex,
  Input,
  Typography,
  theme,
  DatePicker,
  Radio,
  Button,
} from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { type MinorInfoFormType, minorInfoSchema } from "./schema";
import "react-phone-input-2/lib/style.css";

import type { CheckboxGroupProps } from "antd/es/checkbox";

const genderOptions: CheckboxGroupProps<string>["options"] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const MinorInfoForm = () => {
  const { token } = theme.useToken();

  const {
    control,
    // handleSubmit,
    formState: { errors },

    // watch,
  } = useForm<MinorInfoFormType>({
    mode: "onSubmit",
    resolver: zodResolver(minorInfoSchema),
  });

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
        </Flex>
        <Flex align="center" gap={20}>
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
            // onClick={handleSubmit()}
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
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MinorInfoForm;
