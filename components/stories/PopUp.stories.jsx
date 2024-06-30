import { Popup } from "../PopUp";

export default {
  title: "Components/Popup",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onClose: () => console.log("Closed"),
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  onClose: () => console.log("Closed"),
};
