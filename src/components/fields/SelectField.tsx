import React, { useEffect } from "react";
import Select, { SelectProps } from "../select/Select";
import { QuestionTypesEnum } from "../../types/question";
import { getQuestionTypeAsText } from "../../utils/getQuestionTypeAsText";

export type QuestionSelectItem = {
    label: string;
    value: QuestionTypesEnum;
};

export const SELECT_FIELD_ITEMS: QuestionSelectItem[] = [
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Single),
        value: QuestionTypesEnum.Single,
    },
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Multiple),
        value: QuestionTypesEnum.Multiple,
    },
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Number),
        value: QuestionTypesEnum.Number,
    },
];

export const getItemByValue = (value: QuestionTypesEnum) => {
    switch (value) {
        case QuestionTypesEnum.Single:
            return SELECT_FIELD_ITEMS[0];
        case QuestionTypesEnum.Multiple:
            return SELECT_FIELD_ITEMS[1];
        case QuestionTypesEnum.Number:
            return SELECT_FIELD_ITEMS[2];
    }
};

type SelectFieldProps = Omit<SelectProps, "items">;

const SelectField: React.FC<SelectFieldProps> = ({ defaultItem, onSelect, ...props }) => {
    useEffect(() => {
        if (defaultItem) {
            onSelect && onSelect(defaultItem);
        }
    }, [defaultItem, onSelect]);

    return (
        <Select
            {...props}
            defaultItem={defaultItem ? getItemByValue(defaultItem.value) : SELECT_FIELD_ITEMS[0]}
            items={SELECT_FIELD_ITEMS}
            onSelect={onSelect}
        />
    );
};

export default SelectField;
