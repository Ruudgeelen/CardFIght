<script setup>
import { ref } from 'vue'
const aantalcards = ref(localStorage.getItem('aantalcards') || 5)
const playerHealth = ref(localStorage.getItem('playerHealth') || 100)
const enemyHealth = ref(localStorage.getItem('enemyHealth') || 100)
const playerMaxHealth = ref(localStorage.getItem('playerMaxHealth') || 100)
const enemyMaxHealth = ref(localStorage.getItem('enemyMaxHealth') || 100)
const zieEnemyCards = ref(localStorage.getItem('zieEnemyCards') === 'true' ? true : false)


function SaveSettings() {
    localStorage.setItem('aantalcards', aantalcards.value)
    localStorage.setItem('playerHealth', playerHealth.value)
    localStorage.setItem('enemyHealth', enemyHealth.value)
    localStorage.setItem('playerMaxHealth', playerMaxHealth.value)
    localStorage.setItem('enemyMaxHealth', enemyMaxHealth.value)
    localStorage.setItem('zieEnemyCards', zieEnemyCards.value)
}
function ResetSettings() {
    localStorage.removeItem('aantalcards')
    localStorage.removeItem('playerHealth')
    localStorage.removeItem('enemyHealth')
    localStorage.removeItem('playerMaxHealth')
    localStorage.removeItem('enemyMaxHealth')
    localStorage.removeItem('zieEnemyCards')
    location.reload()
}
</script>
<template>
    <h1>Settings</h1>
    <p>Here you can adjust the settings of the game.</p>
    <div class="settings">
        <label for="aantalcards">Number of Cards:</label>
        <input type="number" id="aantalcards" v-model="aantalcards" min="1" max="10"><p></p>
        <label for="playerHealth">Player Health:</label>
        <input type="number" id="playerHealth" v-model="playerHealth" min="1" max="1000"><p></p>
        <label for="enemyHealth">Enemy Health:</label>
        <input type="number" id="enemyHealth" v-model="enemyHealth" min="1" max="1000"><p></p>
        <label for="playerMaxHealth">Player Max Health:</label>
        <input type="number" id="playerMaxHealth" v-model="playerMaxHealth" min="1" max="1000"><p></p>
        <label for="enemyMaxHealth">Enemy Max Health:</label>
        <input type="number" id="enemyMaxHealth" v-model="enemyMaxHealth" min="1" max="1000"><p></p>
        <label for="zieEnemyCards">Show Enemy Cards:</label>
        <input type="checkbox" id="zieEnemyCards" v-model="zieEnemyCards"><p></p>
        <button @click="SaveSettings()">Save</button> <button @click="location.reload()">Cancel</button> <button @click="ResetSettings()">Reset</button>
    </div>
</template>