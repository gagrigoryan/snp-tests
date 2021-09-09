import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button from "../components/button/Button";
import { action } from "@storybook/addon-actions";

export default {
    title: "Button",
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
    children: "Новая заявка",
    onClick: () => action("Action"),
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Назад",
    disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: "Новая заявка",
    outlined: true,
};
