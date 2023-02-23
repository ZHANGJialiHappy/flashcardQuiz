import React from 'react'
import Flashcard from './Flashcard'
import { IFlashcard } from './Interface'

type Props = {
    flashcards: IFlashcard[],
}

function FlashcardList({flashcards}: Props) {
  return (
    <div className="">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}

export default FlashcardList
