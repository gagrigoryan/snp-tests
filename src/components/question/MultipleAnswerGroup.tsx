import React from "react";
import styles from "./question.module.scss";
import { TAnswer } from "../../types/answer";
import { UseFormRegisterReturn } from "react-hook-form";
import Checkbox, { CheckboxProps } from "../checkbox/Checkbox";
import RadioButton, { RadioButtonProps } from "../radio-button/RadioButton";

type MultipleAnswerGroupProps = Omit<Extract<CheckboxProps, RadioButtonProps>, "label"> & {
    name: string;
    answers: TAnswer[];
    register: UseFormRegisterReturn;
    multiple?: boolean;
};

const MultipleAnswerGroup: React.FC<MultipleAnswerGroupProps> = ({ name, answers, register, multiple, ...props }) => {
    return (
        <div className={styles.group}>
            {answers.map((answer) => (
                <>
                    {multiple ? (
                        <Checkbox
                            className={styles.field}
                            key={`${answer.id}`}
                            {...props}
                            id={`${answer.id}`}
                            value={answer.id}
                            label={answer.text}
                            large
                            // @ts-ignore
                            {...register(name, { validate: (v) => v && v.length > 0 })}
                        />
                    ) : (
                        <RadioButton
                            className={styles.field}
                            key={`${answer.id}`}
                            {...props}
                            id={`${answer.id}`}
                            name={name}
                            value={answer.id}
                            label={answer.text}
                            large
                            // @ts-ignore
                            {...register(name, { validate: (v) => !!v })}
                        />
                    )}
                </>
            ))}
        </div>
    );
};

export default MultipleAnswerGroup;
