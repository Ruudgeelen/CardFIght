export function Playerdeath(health) {
    return health <= 0
}

export function Enemydeath(health) {
    return health <= 0
}

export function AddMaxHealth(card, maxHealth) {
    maxHealth += card.healthbaradd
    return maxHealth
}
    
export function RemoveMaxHealth(card, maxHealth) {
    maxHealth -= card.healthbarremove
    if (maxHealth < 1) {
        maxHealth = 1
    }
    return maxHealth
}

export function HealAdd(Card, UserCards) {
    for (let i = 0; i < UserCards.value.length; i++) {
        UserCards.value[i].heal += Card.healadd
    }
    return UserCards
}