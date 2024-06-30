import { CompetitionItem } from "../CompetitionItem"; // Adjust the path as needed

export default {
  title: "Components/CompetitionItem",
  component: CompetitionItem,
};

const Template = (args) => <CompetitionItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
  location: "Pyeongchang, Gangwon-do, Korea",
  date: "YYYY-MM-DD ~ YYYY-MM-DD",
  onPress: (title) => alert(`Clicked on ${title}`),
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
  location: "Pyeongchang, Gangwon-do, Korea",
  date: "YYYY-MM-DD ~ YYYY-MM-DD",
  onPress: (title) => alert(`Clicked on ${title}`),
  selected: true,
};
