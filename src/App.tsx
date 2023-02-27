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

          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map(a=>decodeString(a)), 
            answer]
          return{
            id:`${index} - ${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(()=> Math.random() - .5),
          }
        }))
      })
  }, [])

  function decodeString (str: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }
  // how to search online

  return (
    <div className="max-w-screen-2xl">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}




export default App;
