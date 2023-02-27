import { useEffect, useState } from "react";
import FlashcardList from "./components/FlashcardList";
import { IFlashcard, IFlashcard2 } from "./Interface";
import axios from "axios";


function App() {
  const [flashcards, setFlashcards] = useState<IFlashcard[]>(SAMPLE_FLASHCARDS)

  useEffect(()=> {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(res=>{
        setFlashcards(res.data.results.map((questionItem:IFlashcard2, index:string)=>{
          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers, answer]
          return{
            id:`${index} - ${Date.now()}`,
            question: questionItem.question,
            answer: answer,
            options: options.sort(()=> Math.random() - .5),
          }
        }))
        console.log(res.data);
      })
  }, [])

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: '1',
    question: 'What is 2+2?',
    answer:'4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: '2',
    question: 'Question2',
    answer:'Answer',
    options: [
      'Answer1',
      'Answer2',
      'Answer3',
      'Answer4'
    ]
  }
]


export default App;
