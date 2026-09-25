<script setup>
import '../assets/cards.css'
defineProps({
    cards: {
        type: Array,
        required: true
    },
    settings: {
        type: Boolean,
        required: true
    },
    lastEnemyCard: {
        type: Object,
        required: false
    }
})
</script>

<template>
    <div class="card-area">
        <!-- LAST ENEMY CARD -->
        <div v-if="!lastEnemyCard.values" class="last-enemy-wrapper">

            <h2>Last Enemy Card</h2>

            <div :class="[
                'card',
                lastEnemyCard.type,
                lastEnemyCard.effect ? 'effect-' + lastEnemyCard.effect : ''
            ]">
                <h3>{{ lastEnemyCard.name }}</h3>
                <div class="line"></div>
                <p v-if="lastEnemyCard.type" class="type"> Type: {{ lastEnemyCard.type }} </p>
                <p v-if="lastEnemyCard.attack">⚔️ Attack: {{ lastEnemyCard.attack }}</p>
                <p v-if="lastEnemyCard.heal">❤️ Heal: {{ lastEnemyCard.heal }}</p>
                <p v-if="lastEnemyCard.freeze">❄️ Freeze </p>
                <p v-if="lastEnemyCard.burn">🔥 Burn: {{ lastEnemyCard.burn }} (Burn Turns: {{ lastEnemyCard.burnTurns }})</p>
                <p v-if="lastEnemyCard.healthbaradd">💚 Healthbar yours: {{ lastEnemyCard.healthbaradd }}</p>
                <p v-if="lastEnemyCard.healthbarremove">💔 Healthbar other: {{ lastEnemyCard.healthbarremove }} </p>
                <p v-if="lastEnemyCard.attackadd">⚔️ Attack Add: {{ lastEnemyCard.attackadd }}</p>
                <p v-if="lastEnemyCard.healadd">❤️ Heal Add: {{ lastEnemyCard.healadd }}</p>
                <p v-if="lastEnemyCard.effect">✨ Effect: {{ lastEnemyCard.effect }} </p>
                <p v-if="lastEnemyCard.effectturns">⏳ Effect Time: {{ lastEnemyCard.effectturns }} </p>
                <p v-if="lastEnemyCard.effectvalue">💎 Effect Value: {{ lastEnemyCard.effectvalue }} </p>
            </div>

        </div>


        <!-- GEWONE KAARTEN -->
        <div class="cards">

            <div v-for="(card, index) in cards" :key="card.id" :class="[
                'card',
                card.type,
                card.effect ? 'effect-' + card.effect : ''
            ]">
                <div v-if="settings">
                    <h3>{{ card.name }}</h3>
                    <div class="line"></div>
                    <p v-if="card.type" class="type">Type: {{ card.type }}</p>
                    <p v-if="card.attack">⚔️ Attack: {{ card.attack }}</p>
                    <p v-if="card.heal">❤️ Heal: {{ card.heal }}</p>
                    <p v-if="card.freeze">❄️ Freeze </p>
                    <p v-if="card.burn">🔥 Burn: {{ card.burn }} (Burn Turns: {{ card.burnTurns }})</p>
                    <p v-if="card.healthbaradd">💚 Healthbar yours: {{ card.healthbaradd }}</p>
                    <p v-if="card.healthbarremove">💔 Healthbar other: {{ card.healthbarremove }}</p>
                    <p v-if="card.attackadd">⚔️ Attack Add: {{ card.attackadd }}</p>
                    <p v-if="card.healadd">❤️ Heal Add: {{ card.healadd }}</p>
                    <p v-if="card.effect">✨ Effect: {{ card.effect }}</p>
                    <p v-if="card.effectturns">⏳ Effect Time: {{ card.effectturns }}</p>
                    <p v-if="card.effectvalue">💎 Effect Value: {{ card.effectvalue }}</p>
                </div>

                <div v-else>
                    <p v-if="card.effect">✨ Effect: {{ card.effect }} </p>
                    <p v-if="card.effectturns">⏳ Effect Time: {{ card.effectturns }} </p>
                    <p v-if="card.effectvalue">💎 Effect Value: {{ card.effectvalue }} </p>
                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>
.card-area {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 60px;
    width: 100%;
}

.last-enemy-wrapper {
    flex-shrink: 0;
    text-align: center;
}

.last-enemy-wrapper h2 {
    margin-top: 0;
    margin-bottom: 15px;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
</style>