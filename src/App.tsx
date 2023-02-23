import { useState } from "react";
import FlashcardList from "./FlashcardList";
import { IFlashcard } from "./Interface";


function App() {
  const [flashcards, setFlashcards] = useState<IFlashcard[]>(SAMPLE_FLASHCARDS)

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
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
    id: 2,
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
