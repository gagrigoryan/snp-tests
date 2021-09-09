import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import RadioButton from "../components/radio-button/RadioButton";

export default {
    title: "RadioButton",
} as Meta;

const Template: Story<ComponentProps<typeof RadioButton>> = (args) => <RadioButton {...args} />;

export const Base = Template.bind({});
Base.args = {
    label: "Подтверждаю, что у меня нет конфликта интересов.",
};
