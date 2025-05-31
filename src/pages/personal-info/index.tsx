import PersonalInfoForm from "src/components/forms/add-personal-info";
import FormWrapper from "src/components/wrappers/form-wrapper";

const PersonalInfo = () => {
  return (
    <FormWrapper
      label="Personal information"
      description="Your information is always safe with us."
    >
      <PersonalInfoForm />
    </FormWrapper>
  );
};
export default PersonalInfo;
