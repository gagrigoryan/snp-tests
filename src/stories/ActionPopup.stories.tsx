import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ActionPopup from "../components/popup/ActionPopup";

export default {
    title: "Popups/ActionPopup",
} as Meta;

const Template: Story<ComponentProps<typeof ActionPopup>> = (args) => <ActionPopup {...args} />;

export const Base = Template.bind({});
Base.args = {
    title: "Вы точно хотите удалить вопрос?",
    onClose: () => console.log("close"),
    onSuccess: () => console.log("success"),
};
