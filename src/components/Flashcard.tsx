import React, { useState } from 'react';
import { IFlashcard } from '../Interface';
import answer from '../pic/answer.jpg';
import question from '../pic/question.jpeg'


type Props = {
  flashcard: IFlashcard;
}

function Flashcard({ flashcard }: Props) {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full h-[300px] h-[300px] "
      onClick={() => setFlip(!flip)}>

      {flip ?
        <>
          <figure><img src={answer} alt="Answer" className="w-[300px]"/></figure>
          <div className="card-body">
            <h2 className="card-title">Answer:</h2>
            <p>{flashcard.answer}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning">Show Question</button>
            </div>
          </div>
        </>
        :
        <>
          <figure><img src={question} alt="Question" className="w-[300px]"/></figure>
          <div className="card-body">
            <h2 className="card-title">Question:</h2>
            <p>{flashcard.question}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-warning">Show Answer</button>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default Flashcard;
