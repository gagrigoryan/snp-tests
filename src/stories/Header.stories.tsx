import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header from "../components/header/Header";

export default {
    title: "Header",
} as Meta;

const Template: Story<ComponentProps<typeof Header>> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
    username: "Admin Username",
};
