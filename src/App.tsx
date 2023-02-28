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
    <>
      <form className="flex justify-center mt-10" >
        <div className="flex gap-5 items-end">
          <div>
            <label className="label font-bold">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-warning max-w-xs w-44">
              <option>Cheese</option>
            </select>
          </div>

          <div>
            <label className="label font-bold">
              <span className="label-text">How many questions?</span>
            </label>
            <input type="number" placeholder="" min="1" max="10" step="1" defaultValue={10} className="input input-bordered input-warning max-w-xs w-44" />
          </div>

          <div>
            <button className="btn btn-outline btn-warning">Go</button>
          </div>

        </div>

      </form>
      <div className="max-w-screen-2xl">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>

  );
}




export default App;
