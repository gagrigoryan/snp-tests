import React, { useEffect, useState } from "react";
import MultipleAnswerField from "../fields/MultipleAnswerField";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import styles from "./draggableAnswers.module.scss";
import { TAnswer } from "../../types/answer";
import { Control } from "react-hook-form";
import clsx from "clsx";
import { reorderList } from "../../utils/reorderList";

type DraggableAnswersProps = {
    answers: TAnswer[];
    onAnswerChange: (data: TAnswer) => void;
    onPositionChange: (id: number, startPosition: number, endPosition: number) => void;
    onDelete: (id: TAnswer) => void;
    control: Control;
    multiple?: boolean;
};

const DraggableAnswers: React.FC<DraggableAnswersProps> = ({ answers, onPositionChange, ...props }) => {
    const [currentAnswers, setCurrentAnswers] = useState<TAnswer[]>(answers);

    useEffect(() => {
        setCurrentAnswers(answers);
    }, [answers]);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        setCurrentAnswers(reorderList<TAnswer>(currentAnswers, result.source.index, result.destination.index));
        onPositionChange(+result.draggableId, result.source.index, result.destination.index);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableId">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={clsx(styles.container, snapshot.isDraggingOver && styles.dragContainer)}>
                        {currentAnswers.map((item, index) => (
                            <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={styles.answer}>
                                        <MultipleAnswerField {...item} {...props} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DraggableAnswers;
