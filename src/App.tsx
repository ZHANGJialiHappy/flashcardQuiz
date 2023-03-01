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

type CategoriesResponse = {
  id: number;
  name: string;
}

function App() {
  const [flashcards, setFlashcards] = useState<FlashcardState[]>([]);
  const [categories, setCategories] = useState<CategoriesResponse[]>([]);
  const [categoryId, setCategoryId] = useState<number>();
  const [amount, setAmount] = useState<number | string>(10);

  function decodeString(str: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res: { data: { trivia_categories: CategoriesResponse[] } }) => {
        const categoryArray = res.data.trivia_categories;
        const id = categoryArray[0].id;
        setCategories(categoryArray);
        setCategoryId(id);
        getQustionsByCategory(id);
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getQustionsByCategory = (categoryId: number | undefined) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`;
    axios
      .get(url)
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
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    getQustionsByCategory(categoryId);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (value) {
      setAmount(Number(value))
    } else {
      setAmount('')
      return
    }
  }

  return (
    <>
      <form className="flex justify-center mt-10 gap-5 items-end" onSubmit={handleSubmit} >
        <div>
          <label className="label font-bold">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-warning w-48" value={categoryId} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryId(Number(e.target.value))}>
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </div>

        <div>
          <label className="label font-bold">
            <span className="label-text">How many questions?</span>
          </label>
          <input type="number" min="1" max="50" step="1" value={amount} className="input input-bordered input-warning w-48"
            onChange={handleChange} />
        </div>

        <div>
          <button className="btn btn-outline btn-warning">Go</button>
        </div>

      </form>

      <div className="max-w-screen-2xl">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>

  );
}




export default App;
