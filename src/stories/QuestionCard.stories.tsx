import { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import QuestionCard from "../components/question-card/QuestionCard";
import { QuestionTypesEnum } from "../types/question";

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
    question_type: QuestionTypesEnum.Multiple,
};

export const Green = Template.bind({});
Green.args = {
    title: "Вопрос номер №21",
    question_type: QuestionTypesEnum.Number,
};
