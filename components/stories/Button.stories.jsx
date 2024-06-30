import {
  ArrowLeftIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import { Feather } from "@expo/vector-icons";
import { Button } from "../Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Button",
  onPress: () => {},
};

export const WithStartDecorator = Template.bind({});
WithStartDecorator.args = {
  title: "Button with Start Icon",
  onPress: () => {},
  startDecorator: ArrowRightEndOnRectangleIcon,
  startDecoratorColor: "white",
};

export const WithEndDecorator = Template.bind({});
WithEndDecorator.args = {
  title: "Button with End Icon",
  onPress: () => {},
  endDecorator: ArrowRightIcon,
  endDecoratorColor: "white",
};

export const WithCustomStartDecorator = Template.bind({});
WithCustomStartDecorator.args = {
  title: "Button with Custom Start Icon",
  onPress: () => {},
  startDecorator: ArrowLeftIcon,
  startDecoratorColor: "white",
};

export const WithCustomEndDecorator = Template.bind({});
WithCustomEndDecorator.args = {
  title: "Button with Custom End Icon",
  onPress: () => {},
  endDecorator: "default",
  endDecoratorColor: "white",
};
