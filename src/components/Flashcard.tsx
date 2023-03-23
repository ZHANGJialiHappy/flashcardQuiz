import { useState } from 'react';
import answer from '../pic/answer.jpg';
import question from '../pic/question.jpeg'
import '../customize/flashcard.css'
import { FlashcardState } from '../App';


type Props = {
  flashcard: FlashcardState;
}

function Flashcard({ flashcard }: Props) {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <div className="w-80 h-80 bg-transparent group">
      <div className={`relative preserve-3d w-full h-full duration-1000 transform group-hover:my-translate-2 ${flip ? 'flip' : ''}`}>
        <div className="card bg-base-100 image-full absolute backface-hidden w-full h-full group-hover:shadow-[0_2.188rem_3.75rem_-0.938rem_rgba(0,0,0,0.5)]">
          <figure><img src={question} alt="Question" className={flip ? 'hidden' : ''} /></figure>          
          <div className={`card-body overflow-y-hidden ${flip ? 'hidden' : ''}`}>
            <div className="overflow-y-auto h-72">
              <h2 className="card-title">Question:</h2>
              <p>{flashcard.question}</p>
              <p>{flashcard.options.map(option => {
                return <li key={option}>{option}</li>
              })}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning"
                onClick={() => setFlip(!flip)}>Show Answer</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full absolute backface-hidden w-full h-full my-rotate-y-180 hover:shadow-[0_2.188rem_3.75rem_-0.938rem_rgba(0,0,0,0.5)]">
          <figure><img src={answer} alt="Answer" /></figure>
          <div className="card-body overflow-hidden">
            <div className="overflow-y-auto h-72">
              <h2 className="card-title">Answer:</h2>
              <p>{flashcard.answer}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning"
                onClick={() => setFlip(!flip)}>Show Question</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcard;
