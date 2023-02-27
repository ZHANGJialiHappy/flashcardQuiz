import { useEffect, useState } from "react";
import FlashcardList from "./components/FlashcardList";
import axios from "axios";

type AnswerResponse = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type FlashcardState = {
  id: string;
  question: string;
  answer: string;
  options: string[];
}


function App() {
  const [flashcards, setFlashcards] = useState<FlashcardState[]>([])

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res: { data: { results: AnswerResponse[] } }) => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          // IFlashcard

          const answer: string = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map(a => decodeString(a)),
            answer]
          return {
            id: `${index} - ${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5),
          }
        }))
      })
  }, [])

  function decodeString(str: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }
  // how to search online

  return (
    <div className="max-w-screen-2xl">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}




export default App;
