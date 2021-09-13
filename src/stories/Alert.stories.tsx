import { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Alert from "../components/alert/Alert";
import { AlertTypeEnum } from "../types/alert";

export default {
    title: "Alert",
} as Meta;

const Template: Story<ComponentProps<typeof Alert>> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
    type: AlertTypeEnum.Success,
    message: "Успешно",
};

export const Loading = Template.bind({});
Loading.args = {
    type: AlertTypeEnum.Loading,
    message: "Загрузка...",
};

export const Error = Template.bind({});
Error.args = {
    type: AlertTypeEnum.Error,
    message: "Какая-то ошибка",
};
