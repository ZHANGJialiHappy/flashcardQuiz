import React from 'react'
import { IFlashcard } from '../Interface'
import Flashcard from './Flashcard'
import '../customize/flashcard.css'

type Props = {
    flashcards: IFlashcard[],
}

function FlashcardList({flashcards}: Props) {
  return (
    <div className="grid gap-10 gridRepeat">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}

export default FlashcardList
