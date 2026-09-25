import { defineStore } from 'pinia'
import { ref } from 'vue'
import { cards } from '../data/cardslist.js'


const deck = ref([])
const selectedCards = ref([])


export const useCardStore = defineStore('cards', () => {


    function startGame(aantalcards) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].id = i + 1
            cards[i].effect = ""
            cards[i].effectvalue = ""
            cards[i].effectturns = ""
        }
        localStorage.setItem('AllCards', JSON.stringify(cards))
        console.log('AllCards stored in localStorage:', JSON.parse(localStorage.getItem('AllCards')))

        deck.value = [...cards].sort(() => Math.random() - 0.5)

        selectedCards.value = deck.value.splice(0, aantalcards)
    }
    
localStorage.setItem('Deck', JSON.stringify(deck))

    return {
        cards,
        deck,
        selectedCards,
        startGame,
    }
})

export function getNewCard(card, playerCards, enemyCards) {

    const allCards = JSON.parse(localStorage.getItem('AllCards'))

    let newCard
    let geldig = false

    while (!geldig) {

        const randomIndex = Math.floor(Math.random() * allCards.length)

        newCard = allCards[randomIndex]

        geldig = true

        if (newCard.id === card.id) {
            geldig = false
        }

        for (let i = 0; i < playerCards.length; i++) {
            if (playerCards[i].id === newCard.id) {
                geldig = false
            }
        }

        for (let i = 0; i < enemyCards.length; i++) {
            if (enemyCards[i].id === newCard.id) {
                geldig = false
            }
        }
    }
    return newCard
}