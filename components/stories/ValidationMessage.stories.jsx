import { ValidationMessage } from "../ValidationMessage";

export default {
  title: "Components/ValidationMessage",
  component: ValidationMessage,
};

const Template = (args) => <ValidationMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "This is a validation message",
};

export const EmptyMessage = Template.bind({});
EmptyMessage.args = {
  message: "",
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message:
    "This is a very long validation message that should still be displayed correctly and handle any layout issues that may arise from its length.",
};
