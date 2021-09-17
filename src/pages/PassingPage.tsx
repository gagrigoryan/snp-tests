import React, { useEffect, useState } from "react";
import styles from "./passingPage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useParams } from "react-router-dom";
import { TTest } from "../types/test";
import { useDispatch, useSelector } from "react-redux";
import { testsFetchedSelector, testsSelector } from "../models/tests/selectors";
import { checkStringIsNumeric } from "../utils/checkStringIsNumeric";
import { getCurrentTest } from "../models/tests/slice";
import { getTestById } from "../utils/getTestById";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Question from "../components/question/Question";
import { getResultOfPassingTest } from "../utils/getResultOfPassingTest";
import TestPassingPopup from "../components/popup/TestPassingPopup";
import { Link } from "react-router-dom";

interface ParamsType {
    id: string;
}

const PassingPage: React.FC = () => {
    const { id } = useParams<ParamsType>();
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isFetched = useSelector(testsFetchedSelector);
    const [currentTest, setCurrentTest] = useState<TTest>();
    const { control, handleSubmit, register } = useForm({
        mode: "onTouched",
    });
    const [error, setError] = useState<boolean>(false);
    const [correctAnswers, setCorrectAnswers] = useState<number>();

    useEffect(() => {
        if (checkStringIsNumeric(id) && !isFetched) {
            dispatch(getCurrentTest(+id));
        }
    }, [dispatch, id, isFetched]);

    useEffect(() => {
        if (tests.length > 0 && checkStringIsNumeric(id)) {
            setCurrentTest(getTestById(+id, tests));
        }
    }, [tests, id]);

    const onSubmit = (data: any) => {
        setCorrectAnswers(getResultOfPassingTest(currentTest!.questions, data));
        setError(false);
    };

    const onError = (error: any) => {
        console.log(error);
        setError(true);
    };

    return (
        <>
            <PageLayout title={`Прохождение теста №${currentTest ? currentTest.id : ""}`}>
                {currentTest && (
                    <div className={styles.container}>
                        {currentTest.questions.length === 0 ? (
                            <div className={styles.emptyContainer}>
                                <h3 className={styles.emptyTitle}>В тесте отсутствуют вопросы :(</h3>
                                <Link to="/">
                                    <Button outlined>На главную</Button>
                                </Link>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
                                {currentTest.questions.map((question) => (
                                    <Question
                                        question={question}
                                        name={`${question.id}`}
                                        control={control}
                                        // @ts-ignore
                                        register={register}
                                    />
                                ))}
                                {error && <p className={styles.error}>Ответьте на все вопросы</p>}
                                <Button type="submit">Сохранить</Button>
                            </form>
                        )}
                    </div>
                )}
            </PageLayout>
            {correctAnswers !== undefined && (
                <TestPassingPopup
                    onClose={() => setCorrectAnswers(undefined)}
                    result={`${correctAnswers}/${currentTest!.questions.length}`}
                />
            )}
        </>
    );
};

export default PassingPage;
