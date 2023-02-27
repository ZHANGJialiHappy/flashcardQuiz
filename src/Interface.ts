export interface IFlashcard {
    id: string,
    question: string,
    correct_answer: string,
    answer: string,

    incorrect_answers: string[],
    options: string[],
}