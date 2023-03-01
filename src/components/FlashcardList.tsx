import Flashcard from './Flashcard'
import '../customize/flashcard.css'
import { FlashcardState } from '../App'

type Props = {
    flashcards: FlashcardState[],
}

function FlashcardList({flashcards}: Props) {
  return (
    <div className="grid gap-10 gridRepeat ml-10 mt-10">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}

export default FlashcardList
