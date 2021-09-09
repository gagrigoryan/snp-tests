import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Select, { TSelectItem } from "../components/select/Select";

export default {
    title: "Select",
} as Meta;

const Template: Story<ComponentProps<typeof Select>> = (args) => <Select {...args} />;

const selectItems: TSelectItem[] = [
    {
        label: "Some label 1",
        value: 1,
    },
    {
        label: "Some label 2",
        value: 2,
    },
    {
        label: "Some label 3",
        value: 3,
    },
    {
        label: "Some label 4",
        value: 4,
    },
];

export const Base = Template.bind({});
Base.args = {
    items: selectItems,
    onSelect: (item) => console.log(item),
};

export const WithDefaultItem = Template.bind({});
WithDefaultItem.args = {
    items: selectItems,
    defaultItem: selectItems[0],
};
