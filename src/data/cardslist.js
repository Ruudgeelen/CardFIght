export const cards = [
    // FIRE
    {
        name: 'Fire Card',
        attack: 8,
        heal: 3,
        type: 'fire',
        burn: 2,
        burnTurns: 1
    },
    {
        name: 'Flame Warrior',
        attack: 10,
        heal: 4,
        type: 'fire',
        burn: 1,
        burnTurns: 1
    },
    {
        name: 'Inferno',
        attack: 12,
        heal: 2,
        type: 'fire',
        burn: 1,
        burnTurns: 2
    },

    // WATER
    {
        name: 'Water Card',
        attack: 5,
        heal: 8,
        type: 'water'
    },
    {
        name: 'Water Mage',
        attack: 2,
        heal: 12,
        type: 'water'
    },

    // EARTH
    {
        name: 'Rock Golem',
        attack: 3,
        heal: 13,
        type: 'earth'
    },
    {
        name: 'Earthquake',
        attack: 11,
        heal: 0,
        type: 'earth'
    },

    // WIND
    {
        name: 'Wind Rider',
        attack: 9,
        heal: 2,
        type: 'wind'
    },
    {
        name: 'Tornado',
        attack: 13,
        heal: 2,
        type: 'wind'
    },

    // NORMAL
    {
        name: 'Warrior',
        attack: 7,
        heal: 7,
        type: 'normal'
    },
    {
        name: 'Knight',
        attack: 5,
        heal: 10,
        type: 'normal'
    },
    {
        name: 'Battle Medic',
        attack: 4,
        heal: 6,
        type: 'normal'
    },

    // DRAGON
    {
        name: 'Fire Dragon',
        attack: 12,
        burn: 1,
        burnTurns: 1,
        heal: 4,
        type: 'dragon'
    },
    {
        name: 'Ancient Dragon',
        attack: 15,
        heal: 0,
        healadd: 2,
        type: 'dragon'
    },
    {
        name: 'Ice Dragon',
        attack: 15,
        freeze: true,
        heal: 0,
        type: 'dragon'
    },

    // UNDEAD
    {
        name: 'Skeleton',
        attack: 16,
        heal: -3,
        attackadd: 1,
        healthremove: 1,        
        type: 'undead'
    },
    {
        name: 'Zombie',
        attack: 15,
        heal: -2,
        healthremove: 2,
        type: 'undead'
    },
    {
        name: 'Creeper',
        attack: 17,
        heal: -5,
        healthremove: 3,
        type: 'undead'
    },

    // LIGHT
    {
        name: 'Light Spirit',
        attack: 3,
        heal: 8,
        type: 'light'
    },
    {
        name: 'Holy Knight',
        attack: 6,
        heal: 8,
        healadd: 2,
        type: 'light'
    },

    // DARK
    {
        name: 'Dark Spirit',
        attack: 10,
        heal: 1,
        attackadd: 2,
        type: 'dark'
    },
    {
        name: 'Shadow Assassin',
        attack: 14,
        heal: 0,
        attackadd: 3,
        type: 'dark'
    },
    {
        name: 'Necromancer',
        attack: 12,
        heal: 2,
        attackadd: 1,
        type: 'dark'
    },
    
    // FREEZE
    {
        name: 'Ice Shard',
        attack: 5,
        heal: 5,
        freeze: true,
        type: 'freeze'
    },
    {
        name: 'Frozen Heart',
        attack: 8,
        heal: 3,
        freeze: true,
        type: 'freeze'
    },
    {
        name: 'Glacial Spike',
        attack: 10,
        heal: 2,
        freeze: true,
        type: 'freeze'
    },
    // LIFESTEAL
    {
        name: 'Vampire Bite',
        attack: -5,
        heal: 0,
        healthbaradd: 5,
        healthbarremove: 3,
        type: 'lifesteal'
    },

    // HEAL
    {
        name: 'Healing Potion',
        attack: 0,
        heal: 27,
        healadd: 5,
        healthbaradd: 5,
        type: 'heal'
    },
    {
        name: 'Greater Heal',
        attack: 0,
        heal: 24,
        healadd: 3,
        healthbaradd: 3,
        type: 'heal'
    },
    {
        name: 'Full Recovery',
        attack: 0,
        heal: 25,
        healadd: 2,
        healthbaradd: 7,
        type: 'heal'
    },

    
    // RARE
    {
        name: 'Rare Beast',
        attack: 8,
        heal: 9,
        type: 'rare'
    },
    {
        name: 'Rare Flower',
        attack: 9,
        heal: 8,
        attackadd: 2,
        type: 'rare'
    },

    // UNIQUE
    {
        name: 'Unique Beast',
        attack: 10,
        heal: 10,
        healadd: 1,
        type: 'unique'
    },
    {
        name: 'Unique Flower',
        attack: 10,
        heal: 10,
        healthbaradd: 1,
        type: 'unique'
    },
    // TROLL
    {
        name: 'Clown',
        attack: -20,
        healthbaradd: -5,
        healthbarremove: 5,
        heal: 20,
        type: 'troll'
    },
    {
        name: 'No',
        attack: 0,
        heal: 0,
        type: 'troll'
    },
    // RAINBOW
    {
        name: 'Rainbow',
        attack: 15,
        heal: 25,
        burn: 2,
        burnTurns: 1,
        healthbaradd: 10,
        healthbarremove: 5,
        type: 'rainbow'
    },
]