import React from 'react'
import { IFlashcard } from './Interface'

type Props = {
    flashcard: IFlashcard,
}

function Flashcard({flashcard}: Props) {
  return (
    <div>
      {flashcard.question}
    </div>
  )
}

export default Flashcard;
