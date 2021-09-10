import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TestCard from "../components/test-card/TestCard";

export default {
    title: "TestCard",
} as Meta;

const Template: Story<ComponentProps<typeof TestCard>> = (args) => <TestCard {...args} />;

export const Base = Template.bind({});
Base.args = {
    title: "Тест номер №663121546",
};

export const Editable = Template.bind({});
Editable.args = {
    title: "Тест номер №663121546",
    editable: true,
};
