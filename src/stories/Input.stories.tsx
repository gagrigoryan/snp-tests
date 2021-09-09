import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Input from "../components/input/Input";

export default {
    title: "Input",
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
    placeholder: "Имя пользователя",
};

export const WithError = Template.bind({});
WithError.args = {
    error: "Заполните поле",
};
