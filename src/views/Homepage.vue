<script setup>
import { ref, onMounted } from 'vue'

import { BurnEffect, BurnDamage, FreezeEffect } from '../data/effect.js'
import { PlayerAttack, EnemyAttack, AttackAdd } from '../data/attack.js'
import { Playerdeath, Enemydeath, AddMaxHealth, RemoveMaxHealth, HealAdd } from '../data/health.js'
import { useCardStore, getNewCard } from '../data/card.js'
import { chooseAiCard } from '../data/ai.js'

import Health from '../components/Health.vue'
import PlayerCards from '../components/PlayerCards.vue'
import EnemyCards from '../components/EnemyCards.vue'
import Ai from '../components/Ai.vue'

// Settings
const aantalcards = localStorage.getItem('aantalcards') || 5
const playerHealthSettings = localStorage.getItem('playerHealth') || 100
const enemyHealthSettings = localStorage.getItem('enemyHealth') || 100
const playerMaxHealthSettings = localStorage.getItem('playerMaxHealth') || 100
const enemyMaxHealthSettings = localStorage.getItem('enemyMaxHealth') || 100
const zieEnemyCards = localStorage.getItem('zieEnemyCards') === 'true' ? true : false

// code
const playerHealth = ref(playerHealthSettings)
const enemyHealth = ref(enemyHealthSettings)
const playerMaxHealth = ref(playerMaxHealthSettings)
const enemyMaxHealth = ref(enemyMaxHealthSettings)
const cardStore = useCardStore()
const enemyCards = ref([])
const playerCards = ref([])
const aiTurn = ref(false)
const lastPlayerCard = ref([])
const lastEnemyCard = ref([])
function resetGame() {
    playerHealth.value = playerHealthSettings
    enemyHealth.value = enemyHealthSettings
    playerMaxHealth.value = playerMaxHealthSettings
    enemyMaxHealth.value = enemyMaxHealthSettings
    enemyCards.value = []
    playerCards.value = []
    aiTurn.value = false
    window.location.reload()
    lastPlayerCard.value = []
    lastEnemyCard.value = []
}

function startGame() {
    cardStore.startGame(aantalcards)

    enemyCards.value = [...cardStore.cards]
        .sort(() => Math.random() - 0.5)
        .slice(0, aantalcards)
    playerCards.value = [...cardStore.selectedCards]
        .sort(() => Math.random() - 0.5)
        .slice(0, aantalcards)

    playerHealth.value = playerHealthSettings
    enemyHealth.value = enemyHealthSettings
    playerMaxHealth.value = playerMaxHealthSettings
    enemyMaxHealth.value = enemyMaxHealthSettings
    lastPlayerCard.value = []
    lastEnemyCard.value = []
}


function useCard(card, index) {

    if (Playerdeath(playerHealth.value)) return
    if (Enemydeath(enemyHealth.value)) return
    if (aiTurn.value) return

    lastPlayerCard.value = card
    const result = PlayerAttack(card, enemyHealth.value, playerHealth.value, playerMaxHealth.value) 
    playerHealth.value = result.playerHealth
    enemyHealth.value = result.enemyHealth
    if (card.attackadd) {
        playerCards.value = AttackAdd(card, playerCards).value
    }
    if (card.healadd) {
        playerCards.value = HealAdd(card, playerCards).value
    }
    if (card.freeze) {
        FreezeEffect(card, playerCards)
    }
    if (card.burn > 0) {
        BurnEffect(card, enemyCards) 
    }
    if (card.healthbaradd) {
        playerMaxHealth.value = AddMaxHealth(card, playerMaxHealth.value)
    }
    if (card.healthbarremove) {
        enemyMaxHealth.value = RemoveMaxHealth(card, enemyMaxHealth.value)
    }

    playerCards.value[index] = getNewCard( card, playerCards.value, enemyCards.value)
    if (enemyHealth.value > 0) {
        aiTurn.value = true
    }

    playerCards.value = BurnDamage(playerCards).value
}

function aiAttack() {
    const randomIndex = chooseAiCard(
    enemyCards.value,
    playerCards.value,
    enemyHealth.value,
    playerHealth.value,
    enemyMaxHealth.value,
    playerMaxHealth.value
)

    if (enemyCards.value.length === 0) return

    if (Playerdeath(playerHealth.value)) return
    if (Enemydeath(enemyHealth.value)) return
    const card = enemyCards.value[randomIndex]

    lastEnemyCard.value = card
    const result = EnemyAttack(card, enemyHealth.value, playerHealth.value, enemyMaxHealth.value)
    playerHealth.value = result.playerHealth
    enemyHealth.value = result.enemyHealth

    if (card.attackadd) {
        enemyCards.value = AttackAdd(card, enemyCards).value
    }
    if (card.healadd) {
        enemyCards.value = HealAdd(card, enemyCards).value
    }
    if (card.freeze) {
        FreezeEffect(card, enemyCards)
    }
    if (card.burn > 0) {
        BurnEffect(card, playerCards) 
    }
    if (card.healthbaradd) {
        enemyMaxHealth.value = AddMaxHealth(card, enemyMaxHealth.value)
    }
    if (card.healthbarremove) {
        playerMaxHealth.value = RemoveMaxHealth(card, playerMaxHealth.value)
    }

    enemyCards.value[randomIndex] = getNewCard( card, playerCards.value, enemyCards.value )    
    aiTurn.value = false
    enemyCards.value = BurnDamage(enemyCards).value
}


</script>

<template>
    <div class="game">
        <button @click="startGame()">
            Start Game
        </button>
        <button @click="resetGame()">
            Reset Game
        </button>

        <h1>Card Fight</h1>
        <Ai v-if="aiTurn" :enemy-cards="enemyCards" @ai-attack="aiAttack" />

        <section>

            <h2>AI</h2>
            <Health :health="enemyHealth" :max-health="enemyMaxHealth" />
            <EnemyCards :cards="enemyCards" :last-enemy-card="lastEnemyCard" :settings="zieEnemyCards" />

        </section>
        <hr>
        <section>

            <h2>Player</h2>
            <Health :health="playerHealth" :max-health="playerMaxHealth" />

            <h2>Your Cards</h2>
            <PlayerCards :cards="playerCards" :ai-turn="aiTurn" :last-player-card="lastPlayerCard" @use-card="useCard" />

        </section>
        <h2 v-if="enemyHealth <= 0">
            You Win!
        </h2>

        <h2 v-if="playerHealth <= 0">
            You Lose!
        </h2>

    </div>

</template>

<style scoped>
.game {
    max-width: 2500px;
    margin: auto;
    padding: 20px;
    text-align: center;
}

section {
    margin: 20px 0;
}

hr {
    margin: 30px 0;
}
</style>