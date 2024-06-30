import { Input } from "../Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  value: "",
  onChangeText: () => {},
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  label: "Input with Error",
  value: "",
  onChangeText: () => {},
  errorMessage: "This is an error message",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password",
  value: "",
  onChangeText: () => {},
  isPassword: true,
};

export const PasswordInputWithErrors = Template.bind({});
PasswordInputWithErrors.args = {
  label: "Password",
  value: "",
  onChangeText: () => {},
  isPassword: true,
  passwordErrorMessages: [
    {
      text: "At least 8 letters",
      status: true,
    },
    {
      text: "Include at least 3 uppercase letters, lowercase letters, number, or special letters",
      status: true,
    },
  ],
};
