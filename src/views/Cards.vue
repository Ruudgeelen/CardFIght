<script setup>
import { useCardStore } from '../data/card.js'

const cardStore = useCardStore()
</script>

<template>
    <h1>All Cards</h1>

    <div class="cardgrid">
        <div
            v-for="card in cardStore.cards"
            :key="card.id"
            :class="['card', card.type]"
        >

            <h3>{{ card.name }}</h3> 
            <div class="line"></div>
            <p v-if="card.type" class="type">Type: {{ card.type }}</p>
            <p v-if="card.attack">⚔️ Attack: {{ card.attack }}</p>
            <p v-if="card.heal">❤️ Heal: {{ card.heal }}</p>
            <p v-if="card.freeze">❄️ Freeze</p>
            <p v-if="card.burn">🔥 Burn: {{ card.burn }} (Burn Turns: {{ card.burnTurns }})</p>
            <p v-if="card.healthbaradd">💚 Healthbar yours: {{ card.healthbaradd }}</p>
            <p v-if="card.healthbarremove">💔 Healthbar other: {{ card.healthbarremove }}</p>
            <p v-if="card.attackadd"> ⚔️ Attack Add: {{ card.attackadd }}</p>
            <p v-if="card.healadd">❤️ Heal Add: {{ card.healadd }}</p>
            <p v-if="card.effect" >✨ Effect: {{ card.effect }}</p>
            <p v-if="card.effectturns">⏳ Effect Time: {{ card.effectturns }}</p>
            <p v-if="card.effectvalue">💎 Effect Value: {{ card.effectvalue }}</p>
        </div>
    </div>
</template>

<style scoped>
.cardgrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    padding: 20px;
}

.stats {
    margin-top: 15px;
}





</style>