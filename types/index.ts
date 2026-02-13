/**
 flashcard model
*/
export type CardStatus = 'unseen' | 'known' | 'review';

export interface FlashCard {
    id: number;
    question: string;
    answer: string;
}

export interface FlashCardState {
    currentIndex: number;
    isFlipped: boolean;
}
