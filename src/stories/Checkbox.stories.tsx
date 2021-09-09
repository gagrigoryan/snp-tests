import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox from "../components/checkbox/Checkbox";

export default {
    title: "Checkbox/Checkbox",
} as Meta;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;

export const Base = Template.bind({});
Base.args = {
    label: "Подтверждаю, что у меня нет конфликта интересов.",
};
