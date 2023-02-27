export interface IFlashcard {
    id: string,
    question: string,
    answer: string,
    options: string[],
}

export interface IFlashcard2 {
    id: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    options: string[],
}