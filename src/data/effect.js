export function BurnEffect(Card, UserCards) {
    for (let i = 0; i < UserCards.value.length; i++) {
        if (UserCards.value[i].effect.includes("freeze")) {
            UserCards.value[i].effect = "";
            UserCards.value[i].effectvalue = "";
            UserCards.value[i].effectturns = "";
        }
        else if (UserCards.value[i].effect) {
            UserCards.value[i].effect += ", burn"
            UserCards.value[i].effectvalue = Card.burn
            UserCards.value[i].effectturns = Card.burnTurns
        } else {
            UserCards.value[i].effect = "burn"
            UserCards.value[i].effectvalue = Card.burn
            UserCards.value[i].effectturns = Card.burnTurns
        }
    }
}
export function BurnDamage(UserCards) {
    for (let i = 0; i < UserCards.value.length; i++) {
        if (UserCards.value[i].effect.includes("freeze")) {
        }
        else if (UserCards.value[i].effect.includes("burn")) {
            UserCards.value[i].effectturns -= 1
            UserCards.value[i].heal -= UserCards.value[i].effectvalue
            UserCards.value[i].attack -= UserCards.value[i].effectvalue
            if (UserCards.value[i].effectturns <= 0) {
                UserCards.value[i].effect = ""
                UserCards.value[i].effectvalue = ""
                UserCards.value[i].effectturns = ""
            }

        }
    }
    return UserCards
}

export function FreezeEffect(Card, UserCards) {
    for (let i = 0; i < UserCards.value.length; i++) {
        if (UserCards.value[i].effect.includes("burn")) {
            UserCards.value[i].effect = "";
            UserCards.value[i].effectvalue = "";
            UserCards.value[i].effectturns = "";
        }
        else if (UserCards.value[i].effect.includes("freeze")) {
            UserCards.value[i].effectvalue = ""
            UserCards.value[i].effectturns = "Foverever"
        }
        else if (UserCards.value[i].effect) {
            UserCards.value[i].effect += ", freeze"
            UserCards.value[i].effectvalue = ""
            UserCards.value[i].effectturns = "Foverever"
        } else {
            UserCards.value[i].effect = "freeze"
            UserCards.value[i].effectvalue = ""
            UserCards.value[i].effectturns = "Foverever"
        }
    }
}