import MinorInfoForm from "src/components/forms/add-minor-info";

import FormWrapper from "src/components/wrappers/form-wrapper";

const MinorInfo = () => {
  return (
    <FormWrapper
      label="Minor Passenger Information"
      description="Please provide the following details exactly as they appear on the minor's travel document."
    >
      <MinorInfoForm />
    </FormWrapper>
  );
};
export default MinorInfo;
