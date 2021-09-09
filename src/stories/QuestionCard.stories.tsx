import { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import QuestionCard, { QuestionTypesEnum } from "../components/question-card/QuestionCard";

export default {
    title: "QuestionCard",
} as Meta;

const Template: Story<ComponentProps<typeof QuestionCard>> = (args) => <QuestionCard {...args} />;

export const Pink = Template.bind({});
Pink.args = {
    title: "Вопрос номер №21",
};

export const Purple = Template.bind({});
Purple.args = {
    title: "Вопрос номер №21",
    type: QuestionTypesEnum.Multiple,
};

export const Green = Template.bind({});
Green.args = {
    title: "Вопрос номер №21",
    type: QuestionTypesEnum.Number,
};
