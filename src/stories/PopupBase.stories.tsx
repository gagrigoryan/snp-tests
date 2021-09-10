import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PopupBase from "../components/popup/PopupBase";

export default {
    title: "Popups/BasePopup",
} as Meta;

const Template: Story<ComponentProps<typeof PopupBase>> = (args) => <PopupBase {...args} />;

export const Base = Template.bind({});
Base.args = {
    title: "Заголовок попапа",
};
