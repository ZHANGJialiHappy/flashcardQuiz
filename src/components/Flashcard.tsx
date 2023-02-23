import React, { useState } from 'react';
import { IFlashcard } from '../Interface';
import answer from '../pic/answer.jpg';
import  question from '../pic/question.jpeg'


type Props = {
  flashcard: IFlashcard;
}

function Flashcard({ flashcard }: Props) {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full"
      onClick={() => setFlip(!flip)}>
      {flip ?
        <figure><img src={answer} alt="Answer" /></figure> 
        :
        <figure><img src={question} alt="Question" /></figure>
      }

      <div className="card-body">

        {flip ?
          <h2 className="card-title">Answer:</h2> 
          :
          <h2 className="card-title">Question:</h2>}

        <p>{flip ? flashcard.answer : flashcard.question}</p>

        <div className="card-actions justify-end">
          {flip ?
            <button className="btn btn-outline btn-warning">Show Question</button>
            :
            <button className="btn btn-outline btn-warning">Show Answer</button>
          }
        </div>
      </div>

    </div>
  )
}

export default Flashcard;
