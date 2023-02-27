import React from 'react'
import { IFlashcard } from '../Interface'
import Flashcard from './Flashcard'

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
