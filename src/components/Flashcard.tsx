import React, { useState } from 'react';
import { IFlashcard } from '../Interface';
import answer from '../pic/answer.jpg';
import question from '../pic/question.jpeg'
import '../customize/flashcard.css'


type Props = {
  flashcard: IFlashcard;
}

function Flashcard({ flashcard }: Props) {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <div className="w-[300px] h-[300px] bg-transparent group">
      <div className={`relative preserve-3d w-full h-full duration-1000 transform group-hover:my-translate-2 ${flip ? 'flip' : ''}`}>

        <div className="card bg-base-100 image-full absolute backface-hidden w-full h-full group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
          <figure><img src={question} alt="Question" className="w-[300px]" /></figure>
          <div className="card-body">
            <h2 className="card-title">Question:</h2>
            <p>{flashcard.question}</p>
            <p>{flashcard.options.map(option => {
              return <li>{option}</li>
            })}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning"
                onClick={() => setFlip(!flip)}>Show Answer</button>
            </div>
          </div>

        </div>

        <div className="card bg-base-100 shadow-xl image-full absolute backface-hidden w-full h-full my-rotate-y-180 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <figure><img src={answer} alt="Answer" className="w-[300px]" /></figure>
          <div className="card-body">
            <h2 className="card-title">Answer:</h2>
            <p>{flashcard.answer}</p>
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
