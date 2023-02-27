import { useEffect, useState } from "react";
import FlashcardList from "./components/FlashcardList";
import { IFlashcard } from "./Interface";
import axios from "axios";


function App() {
  const [flashcards, setFlashcards] = useState<IFlashcard[]>([])

  useEffect(()=> {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(res=>{
        setFlashcards(res.data.results.map((questionItem:IFlashcard, index:string)=>{
          // IFlashcard

          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers, answer]
          return{
            id:`${index} - ${Date.now()}`,
            question: questionItem.question,
            answer: answer,
            options: options.sort(()=> Math.random() - .5),
          }
        }))
      })
  }, [])

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}




export default App;
