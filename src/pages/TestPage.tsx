import React, { useEffect, useRef, useState } from "react";
import styles from "./testPage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { testsFetchedSelector, testsSelector } from "../models/tests/selectors";
import { getCurrentTest, updateTest } from "../models/tests/slice";
import { TTest } from "../types/test";
import { getTestById } from "../utils/getTestById";
import TestForm from "../components/form/TestForm";
import QuestionCard from "../components/question-card/QuestionCard";
import QuestionWidget from "../components/question-widget/QuestionWidget";
import { TQuestion } from "../types/question";
import { createQuestion, updateQuestion } from "../models/questions/slice";
import { checkStringIsNumeric } from "../utils/checkStringIsNumeric";

interface ParamsType {
    id: string;
}

const TestPage: React.FC = () => {
    const { id } = useParams<ParamsType>();
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isFetched = useSelector(testsFetchedSelector);
    const widgetRef = useRef<HTMLDivElement | null>(null);
    const [currentTest, setCurrentTest] = useState<TTest>();
    const [currentQuestion, setCurrentQuestion] = useState<TQuestion>();

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

    const onEditClick = (question: TQuestion) => {
        setCurrentQuestion(question);
        widgetRef.current?.scrollIntoView();
    };

    const onSubmit = (data: TTest) => {
        currentTest &&
            dispatch(
                updateTest({
                    ...data,
                    id: currentTest.id,
                })
            );
    };

    const onQuestionSubmit = (data: TQuestion) => {
        if (currentTest) {
            if (currentQuestion) {
                dispatch(
                    updateQuestion({
                        testId: currentTest.id,
                        question: {
                            ...data,
                            id: currentQuestion.id,
                        },
                    })
                );
            } else {
                dispatch(
                    createQuestion({
                        testId: currentTest.id,
                        question: data,
                    })
                );
            }
            setCurrentQuestion(undefined);
        }
    };

    return (
        <PageLayout title={`Страница теста №${currentTest?.id}`}>
            {currentTest && (
                <div className={styles.container}>
                    <div className={styles.contentWrapper}>
                        <h2 className={styles.title}>Редактирование теста</h2>
                        <TestForm defaultValues={currentTest} onSubmit={onSubmit} />
                        <div className={styles.questionWrapper}>
                            {currentTest.questions.map((question) => (
                                <QuestionCard
                                    className={styles.question}
                                    key={question.id}
                                    onEditClick={() => onEditClick(question)}
                                    testId={currentTest.id}
                                    {...question}
                                />
                            ))}
                        </div>
                    </div>
                    <div ref={widgetRef} className={styles.questionWidget}>
                        <QuestionWidget
                            testId={+id}
                            onReset={() => setCurrentQuestion(undefined)}
                            defaultValues={currentQuestion}
                            onSubmit={onQuestionSubmit}
                        />
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default TestPage;
