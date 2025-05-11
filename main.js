const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Wild Nokemon templates
const wildNokemonTemplates = {
    common: [
        {
            name: 'Scamper',
            level: 3,
            hp: 35,
            maxHp: 35,
            attack: 30,
            defense: 30,
            type: 'NORMAL',
            moves: [
                {
                    name: 'Tackle',
                    power: 90,
                    type: 'NORMAL',
                    accuracy: 0.95,
                    description: 'A basic attack'
                },
                {
                    name: 'Quick Attack',
                    power: 75,
                    type: 'NORMAL',
                    accuracy: 1,
                    description: 'A fast attack'
                }
            ],
            sprite: {
                color: '#A8A878',
                radius: 15
            }
        },
        {
            name: 'Skywing',
            level: 4,
            hp: 32,
            maxHp: 32,
            attack: 32,
            defense: 28,
            type: 'FLYING',
            moves: [
                {
                    name: 'Gust',
                    power: 90,
                    type: 'FLYING',
                    accuracy: 0.95,
                    description: 'A flying attack'
                },
                {
                    name: 'Quick Attack',
                    power: 75,
                    type: 'NORMAL',
                    accuracy: 1,
                    description: 'A fast attack'
                }
            ],
            sprite: {
                color: '#A890F0',
                radius: 15
            }
        }
    ],
    uncommon: [
        {
            name: 'Blazepup',
            level: 6,
            hp: 40,
            maxHp: 40,
            attack: 38,
            defense: 32,
            type: 'FIRE',
            moves: [
                {
                    name: 'Ember',
                    power: 105,
                    type: 'FIRE',
                    accuracy: 0.9,
                    description: 'A fire attack'
                },
                {
                    name: 'Bite',
                    power: 105,
                    type: 'NORMAL',
                    accuracy: 0.9,
                    description: 'A strong bite'
                }
            ],
            sprite: {
                color: '#F08030',
                radius: 18
            }
        },
        {
            name: 'Sproutling',
            level: 5,
            hp: 38,
            maxHp: 38,
            attack: 32,
            defense: 35,
            type: 'GRASS',
            moves: [
                {
                    name: 'Absorb',
                    power: 90,
                    type: 'GRASS',
                    accuracy: 0.95,
                    description: 'Steals HP'
                },
                {
                    name: 'Acid',
                    power: 105,
                    type: 'POISON',
                    accuracy: 0.9,
                    description: 'A poisonous attack'
                }
            ],
            sprite: {
                color: '#78C850',
                radius: 16
            }
        }
    ],
    rare: [
        {
            name: 'Flametail',
            level: 7,
            hp: 45,
            maxHp: 45,
            attack: 38,
            defense: 35,
            type: 'FIRE',
            moves: [
                {
                    name: 'Ember',
                    power: 105,
                    type: 'FIRE',
                    accuracy: 0.9,
                    description: 'A fire attack'
                },
                {
                    name: 'Quick Attack',
                    power: 75,
                    type: 'NORMAL',
                    accuracy: 1,
                    description: 'A fast attack'
                },
                {
                    name: 'Confuse Ray',
                    power: 0,
                    type: 'GHOST',
                    accuracy: 1,
                    description: 'Confuses the target',
                    effect: (user, target) => {
                        return `${target.name} became confused!`;
                    }
                }
            ],
            sprite: {
                color: '#F08030',
                radius: 20
            }
        },
        {
            name: 'Aquafin',
            level: 6,
            hp: 42,
            maxHp: 42,
            attack: 32,
            defense: 35,
            type: 'WATER',
            moves: [
                {
                    name: 'Water Gun',
                    power: 105,
                    type: 'WATER',
                    accuracy: 0.9,
                    description: 'A water attack'
                },
                {
                    name: 'Bubble',
                    power: 90,
                    type: 'WATER',
                    accuracy: 0.95,
                    description: 'A bubble attack'
                },
                {
                    name: 'Hypnosis',
                    power: 0,
                    type: 'PSYCHIC',
                    accuracy: 0.8,
                    description: 'May put target to sleep',
                    effect: (user, target) => {
                        return `${target.name} fell asleep!`;
                    }
                }
            ],
            sprite: {
                color: '#6890F0',
                radius: 18
            }
        }
    ]
};

// Game states
const GAME_STATE = {
    EXPLORING: 'exploring',
    BATTLE: 'battle',
    MOVE_SELECTION: 'move_selection',
    STARTER_SELECTION: 'starter_selection',
    GAME_OVER: 'game_over',
    HEALING: 'healing',
    NOKEMON_SELECTION: 'nokemon_selection'
};

let currentState = GAME_STATE.STARTER_SELECTION;
let selectedStarterIndex = 0;
let currentWildNokemon = null;
let battleMessage = '';
let battleMessageTimer = 0;
let isPlayerTurn = true;
let selectedMoveIndex = 0;
let moveMenuVisible = false;
let startingNokemon = null;
let battleCooldown = 0;
let playerNokemon = []; // Array to store caught Nokemon
let gameOverMessage = '';

// Player properties
const player = {
    x: canvas.width / 2 - 16,
    y: canvas.height / 2 - 16,
    width: 32,
    height: 32,
    speed: 4,
    direction: 'down',
    sprite: {
        // Main colors
        skin: '#FFD3B6',    // Skin tone
        hair: '#4A4A4A',    // Dark hair
        shirt: '#4169E1',   // Blue shirt
        pants: '#2B4C7E',   // Dark blue pants
        shoes: '#1A1A1A',   // Black shoes
        backpack: '#8B4513' // Brown backpack
    }
};

// Move types and effects
const MOVE_TYPES = {
    NORMAL: { color: '#A8A878', effectiveness: 1.0 },
    FIRE: { color: '#F08030', effectiveness: 1.5, strongAgainst: ['GRASS'], weakAgainst: ['WATER'] },
    WATER: { color: '#6890F0', effectiveness: 1.5, strongAgainst: ['FIRE'], weakAgainst: ['GRASS'] },
    GRASS: { color: '#78C850', effectiveness: 1.5, strongAgainst: ['WATER'], weakAgainst: ['FIRE'] },
    FLYING: { color: '#A890F0', effectiveness: 1.2, strongAgainst: ['GRASS'], weakAgainst: [] },
    POISON: { color: '#A040A0', effectiveness: 1.3, strongAgainst: ['GRASS'], weakAgainst: [] },
    GHOST: { color: '#705898', effectiveness: 1.3, strongAgainst: [], weakAgainst: [] },
    PSYCHIC: { color: '#F85888', effectiveness: 1.3, strongAgainst: ['POISON'], weakAgainst: [] },
    ELECTRIC: { color: '#F8D030', effectiveness: 1.5, strongAgainst: ['WATER', 'FLYING'], weakAgainst: ['GRASS'] }
};

// Starting Nokemon options
const starterNokemon = [
    {
        name: 'Leaflet',
        level: 5,
        hp: 45,
        maxHp: 45,
        attack: 35,
        defense: 35,
        type: 'GRASS',
        moves: [
            {
                name: 'Tackle',
                power: 90,
                type: 'NORMAL',
                accuracy: 0.95,
                description: 'A basic attack'
            },
            {
                name: 'Vine Whip',
                power: 105,
                type: 'GRASS',
                accuracy: 0.9,
                description: 'A grass-type attack'
            },
            {
                name: 'Leaf Storm',
                power: 135,
                type: 'GRASS',
                accuracy: 0.8,
                description: 'A powerful grass attack'
            },
            {
                name: 'Growth',
                power: 0,
                type: 'NORMAL',
                accuracy: 1,
                description: 'Raises attack power',
                effect: (user, target) => {
                    user.attack = Math.floor(user.attack * 1.3);
                    return `${user.name}'s attack rose!`;
                }
            }
        ],
        sprite: {
            x: 50,
            y: 50,
            radius: 20,
            color: '#4CAF50'
        }
    },
    {
        name: 'Flarepup',
        level: 5,
        hp: 40,
        maxHp: 40,
        attack: 38,
        defense: 32,
        type: 'FIRE',
        moves: [
            {
                name: 'Tackle',
                power: 90,
                type: 'NORMAL',
                accuracy: 0.95,
                description: 'A basic attack'
            },
            {
                name: 'Ember',
                power: 105,
                type: 'FIRE',
                accuracy: 0.9,
                description: 'A fire-type attack'
            },
            {
                name: 'Flame Burst',
                power: 135,
                type: 'FIRE',
                accuracy: 0.8,
                description: 'A powerful fire attack'
            },
            {
                name: 'Howl',
                power: 0,
                type: 'NORMAL',
                accuracy: 1,
                description: 'Raises attack power',
                effect: (user, target) => {
                    user.attack = Math.floor(user.attack * 1.3);
                    return `${user.name}'s attack rose!`;
                }
            }
        ],
        sprite: {
            x: 50,
            y: 50,
            radius: 20,
            color: '#FF5722'
        }
    },
    {
        name: 'Aquafin',
        level: 5,
        hp: 42,
        maxHp: 42,
        attack: 32,
        defense: 38,
        type: 'WATER',
        moves: [
            {
                name: 'Tackle',
                power: 90,
                type: 'NORMAL',
                accuracy: 0.95,
                description: 'A basic attack'
            },
            {
                name: 'Water Gun',
                power: 105,
                type: 'WATER',
                accuracy: 0.9,
                description: 'A water-type attack'
            },
            {
                name: 'Bubble Beam',
                power: 135,
                type: 'WATER',
                accuracy: 0.8,
                description: 'A powerful water attack'
            },
            {
                name: 'Harden',
                power: 0,
                type: 'NORMAL',
                accuracy: 1,
                description: 'Raises defense',
                effect: (user, target) => {
                    user.defense = Math.floor(user.defense * 1.3);
                    return `${user.name}'s defense rose!`;
                }
            }
        ],
        sprite: {
            x: 50,
            y: 50,
            radius: 20,
            color: '#2196F3'
        }
    }
];

const keys = {};

// Tall grass patches with different encounter rates
const tallGrassPatches = [
    {
        x: 100,
        y: 100,
        width: 200,
        height: 64,
        rarity: 'common',
        encounterRate: 0.02
    },
    {
        x: 500,
        y: 300,
        width: 150,
        height: 96,
        rarity: 'uncommon',
        encounterRate: 0.015
    },
    {
        x: 300,
        y: 450,
        width: 250,
        height: 48,
        rarity: 'rare',
        encounterRate: 0.01
    }
];

let encounterMessage = '';
let encounterTimer = 0;

// Add area state
let currentArea = 'starter';
let canAccessNewArea = false;

// Add healing center
const healingCenter = {
    x: 400,
    y: 200,
    width: 100,
    height: 80,
    color: '#FF69B4'
};

// Add new area grass patches
const newAreaGrassPatches = [
    {
        x: 150,
        y: 150,
        width: 200,
        height: 64,
        rarity: 'uncommon',
        encounterRate: 0.02
    },
    {
        x: 600,
        y: 400,
        width: 150,
        height: 96,
        rarity: 'rare',
        encounterRate: 0.015
    },
    {
        x: 350,
        y: 500,
        width: 250,
        height: 48,
        rarity: 'legendary',
        encounterRate: 0.005
    }
];

// Add legendary Nokemon
const legendaryNokemon = {
    name: 'Thunderwing',
    level: 15,
    hp: 100,
    maxHp: 100,
    attack: 60,
    defense: 50,
    type: 'ELECTRIC',
    moves: [
        {
            name: 'Thunderbolt',
            power: 180,
            type: 'ELECTRIC',
            accuracy: 0.85,
            description: 'A powerful electric attack'
        },
        {
            name: 'Aerial Ace',
            power: 150,
            type: 'FLYING',
            accuracy: 1,
            description: 'Never misses'
        },
        {
            name: 'Thunder Wave',
            power: 0,
            type: 'ELECTRIC',
            accuracy: 0.9,
            description: 'May paralyze the target',
            effect: (user, target) => {
                return `${target.name} was paralyzed!`;
            }
        }
    ],
    sprite: {
        color: '#F8D030',
        radius: 25
    }
};

// Add selection state variables
let selectedNokemonIndex = 0;
let encounteredWildNokemon = null;

// Add battle Nokemon variable
let battleNokemon = null;

// Fix the audio system timing and parameter issues
const audioSystem = {
    context: null,
    currentMusic: null,
    musicInterval: null,
    
    // Musical notes (frequencies in Hz)
    notes: {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
        'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
        'C6': 1046.50, 'D6': 1174.66, 'E6': 1318.51
    },
    
    // Initialize audio
    init() {
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            console.log('Audio context created');
            
            // Create a silent buffer to unlock audio
            const buffer = this.context.createBuffer(1, 1, 22050);
            const source = this.context.createBufferSource();
            source.buffer = buffer;
            source.connect(this.context.destination);
            source.start(0);
            
            console.log('Audio system initialized');
        } catch (e) {
            console.error('Error initializing audio:', e);
        }
    },
    
    // Play a musical note with increased volume
    playNote(note, duration = 0.2, volume = 0.3) {
        if (!this.context) return;
        
        try {
            const oscillator = this.context.createOscillator();
            const gainNode = this.context.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.context.destination);
            
            const frequency = this.notes[note];
            if (!frequency || !isFinite(frequency)) {
                console.error('Invalid note frequency:', note);
                return;
            }
            
            oscillator.frequency.value = frequency;
            gainNode.gain.value = volume;
            
            // Add a richer envelope
            const now = this.context.currentTime;
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(volume, now + 0.02);
            gainNode.gain.linearRampToValueAtTime(volume * 0.8, now + duration * 0.8);
            gainNode.gain.linearRampToValueAtTime(0, now + duration);
            
            oscillator.start(now);
            oscillator.stop(now + duration);
        } catch (e) {
            console.error('Error playing note:', e);
        }
    },
    
    // Play a sequence of notes with harmony
    playSequence(notes, durations, volume = 0.3) {
        let time = 0;
        notes.forEach((note, index) => {
            setTimeout(() => {
                // Play main note
                this.playNote(note, durations[index], volume);
                // Add harmony (octave up)
                const harmonyNote = note.replace(/\d/, n => parseInt(n) + 1);
                this.playNote(harmonyNote, durations[index], volume * 0.5);
            }, time * 1000);
            time += durations[index];
        });
    },
    
    // Play continuous music
    playMusic(type) {
        // Stop any existing music
        this.stopMusic();
        
        console.log('Playing music:', type);
        const sequences = {
            exploration: {
                melody: ['C4', 'E4', 'G4', 'C5', 'G4', 'E4'],
                durations: [0.2, 0.2, 0.2, 0.3, 0.2, 0.2],
                harmony: ['G3', 'B3', 'D4', 'E4', 'D4', 'B3']
            },
            battle: {
                melody: ['E4', 'G4', 'B4', 'C5', 'B4', 'G4'],
                durations: [0.15, 0.15, 0.15, 0.2, 0.15, 0.15],
                harmony: ['B3', 'D4', 'F4', 'G4', 'F4', 'D4']
            },
            healing: {
                melody: ['C4', 'E4', 'G4', 'E4'],
                durations: [0.3, 0.3, 0.3, 0.3],
                harmony: ['G3', 'B3', 'D4', 'B3']
            },
            gameOver: {
                melody: ['C5', 'B4', 'A4', 'G4'],
                durations: [0.3, 0.3, 0.3, 0.4],
                harmony: ['E4', 'D4', 'C4', 'B3']
            }
        };
        
        const sequence = sequences[type];
        if (!sequence) return;
        
        this.currentMusic = type;
        
        // Calculate total sequence duration
        const totalDuration = sequence.durations.reduce((sum, duration) => sum + duration, 0);
        
        // Play the sequence continuously
        const playLoop = () => {
            let time = 0;
            sequence.melody.forEach((note, index) => {
                setTimeout(() => {
                    // Play main melody
                    this.playNote(note, sequence.durations[index], 0.3);
                    // Play harmony
                    this.playNote(sequence.harmony[index], sequence.durations[index], 0.2);
                }, time * 1000);
                time += sequence.durations[index];
            });
        };
        
        // Start the loop
        playLoop();
        this.musicInterval = setInterval(playLoop, totalDuration * 1000);
    },
    
    // Play a sound effect with increased volume
    playSound(type) {
        console.log('Playing sound:', type);
        switch(type) {
            case 'attack':
                this.playSequence(['A4', 'E5'], [0.1, 0.1], 0.4);
                break;
            case 'levelUp':
                this.playSequence(['C5', 'E5', 'G5'], [0.15, 0.15, 0.3], 0.4);
                break;
            case 'catch':
                this.playSequence(['E5', 'G5', 'C5'], [0.1, 0.1, 0.2], 0.4);
                break;
            case 'menu':
                this.playNote('C4', 0.05, 0.3);
                break;
        }
    },
    
    // Stop all sounds
    stopMusic() {
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
        if (this.context) {
            this.context.close();
            this.init();
        }
    }
};

// Initialize audio on first user interaction
let audioInitialized = false;
window.addEventListener('click', () => {
    if (!audioInitialized) {
        console.log('First click detected, initializing audio...');
        audioSystem.init();
        audioInitialized = true;
    }
    audioSystem.playMusic('exploration');
});

// Handle keyboard input
window.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
    keys[e.key] = true;
    
    if (currentState === GAME_STATE.GAME_OVER) {
        if (e.key === 'Enter') {
            // Reset game
            currentState = GAME_STATE.STARTER_SELECTION;
            playerNokemon = [];
            startingNokemon = null;
            selectedStarterIndex = 0;
            gameOverMessage = '';
            // Stop game over music
            audioSystem.stopMusic();
            return;
        }
    }
    
    if (currentState === GAME_STATE.STARTER_SELECTION) {
        if (e.key === 'ArrowLeft') {
            selectedStarterIndex = (selectedStarterIndex - 1 + starterNokemon.length) % starterNokemon.length;
        } else if (e.key === 'ArrowRight') {
            selectedStarterIndex = (selectedStarterIndex + 1) % starterNokemon.length;
        } else if (e.key === 'Enter') {
            startingNokemon = { ...starterNokemon[selectedStarterIndex] };
            currentState = GAME_STATE.EXPLORING;
        }
    } else if (currentState === GAME_STATE.BATTLE) {
        if (e.key === '1' && isPlayerTurn) {
            console.log('Opening move menu');
            currentState = GAME_STATE.MOVE_SELECTION;
            moveMenuVisible = true;
        } else if (e.key === '2' && isPlayerTurn) {
            console.log('Attempting to run');
            run();
        } else if (e.key === '3' && isPlayerTurn) {
            console.log('Attempting to catch');
            tryCatch();
        }
    } else if (currentState === GAME_STATE.MOVE_SELECTION) {
        if (e.key === 'ArrowUp') {
            selectedMoveIndex = (selectedMoveIndex - 1 + startingNokemon.moves.length) % startingNokemon.moves.length;
            console.log('Selected move:', startingNokemon.moves[selectedMoveIndex].name);
        } else if (e.key === 'ArrowDown') {
            selectedMoveIndex = (selectedMoveIndex + 1) % startingNokemon.moves.length;
            console.log('Selected move:', startingNokemon.moves[selectedMoveIndex].name);
        } else if (e.key === 'Enter') {
            console.log('Using move:', startingNokemon.moves[selectedMoveIndex].name);
            useMove(selectedMoveIndex);
            currentState = GAME_STATE.BATTLE;
            moveMenuVisible = false;
        } else if (e.key === 'Escape') {
            console.log('Canceling move selection');
            currentState = GAME_STATE.BATTLE;
            moveMenuVisible = false;
        }
    } else if (currentState === GAME_STATE.NOKEMON_SELECTION) {
        if (e.key === 'ArrowUp') {
            selectedNokemonIndex = (selectedNokemonIndex - 1 + playerNokemon.length + 1) % (playerNokemon.length + 1);
            // Skip fainted Nokemon
            const allNokemon = [startingNokemon, ...playerNokemon];
            while (isNokemonFainted(allNokemon[selectedNokemonIndex])) {
                selectedNokemonIndex = (selectedNokemonIndex - 1 + playerNokemon.length + 1) % (playerNokemon.length + 1);
            }
        } else if (e.key === 'ArrowDown') {
            selectedNokemonIndex = (selectedNokemonIndex + 1) % (playerNokemon.length + 1);
            // Skip fainted Nokemon
            const allNokemon = [startingNokemon, ...playerNokemon];
            while (isNokemonFainted(allNokemon[selectedNokemonIndex])) {
                selectedNokemonIndex = (selectedNokemonIndex + 1) % (playerNokemon.length + 1);
            }
        } else if (e.key === 'Enter') {
            // Create a copy of the selected Nokemon for battle
            const allNokemon = [startingNokemon, ...playerNokemon];
            const selectedNokemon = allNokemon[selectedNokemonIndex];
            if (!isNokemonFainted(selectedNokemon)) {
                battleNokemon = { ...selectedNokemon };
                startBattle(encounteredWildNokemon);
            }
        } else if (e.key === 'Escape') {
            // Cancel selection and return to exploring
            currentState = GAME_STATE.EXPLORING;
            encounteredWildNokemon = null;
        }
    }

    // Update menu selection sound
    if (currentState === GAME_STATE.STARTER_SELECTION || 
        currentState === GAME_STATE.MOVE_SELECTION || 
        currentState === GAME_STATE.NOKEMON_SELECTION) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || 
            e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            audioSystem.playSound('menu');
        }
    }
});

window.addEventListener('keyup', (e) => {
    console.log('Key released:', e.key);
    keys[e.key] = false;
});

function calculateDamage(attacker, defender, move) {
    // Base damage calculation
    const levelFactor = attacker.level / 5 + 2;
    const attackDefenseRatio = attacker.attack / defender.defense;
    const baseDamage = Math.floor((levelFactor * move.power * attackDefenseRatio) / 50 + 2);

    // Type effectiveness
    let typeEffectiveness = 1.0;
    const moveType = MOVE_TYPES[move.type];
    
    if (moveType.strongAgainst && moveType.strongAgainst.includes(defender.type)) {
        typeEffectiveness = 1.5;
    } else if (moveType.weakAgainst && moveType.weakAgainst.includes(defender.type)) {
        typeEffectiveness = 0.5;
    }

    // Random factor (0.85 to 1.0)
    const randomFactor = 0.85 + Math.random() * 0.15;

    // Calculate final damage
    const damage = Math.floor(baseDamage * typeEffectiveness * randomFactor);

    // Add type effectiveness message
    if (typeEffectiveness > 1) {
        battleMessage += " It's super effective!";
    } else if (typeEffectiveness < 1) {
        battleMessage += " It's not very effective...";
    }

    return Math.max(1, damage); // Minimum damage of 1
}

function update() {
    // Debug movement
    if (keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight']) {
        console.log('Movement keys pressed:', {
            up: keys['ArrowUp'],
            down: keys['ArrowDown'],
            left: keys['ArrowLeft'],
            right: keys['ArrowRight']
        });
    }

    // Always handle player movement regardless of state
    if (keys['ArrowUp']) {
        player.y -= player.speed;
        player.direction = 'up';
        console.log('Moving up, new position:', player.y);
    }
    if (keys['ArrowDown']) {
        player.y += player.speed;
        player.direction = 'down';
        console.log('Moving down, new position:', player.y);
    }
    if (keys['ArrowLeft']) {
        player.x -= player.speed;
        player.direction = 'left';
        console.log('Moving left, new position:', player.x);
    }
    if (keys['ArrowRight']) {
        player.x += player.speed;
        player.direction = 'right';
        console.log('Moving right, new position:', player.x);
    }

    // Keep player on screen
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

    // Update battle cooldown
    if (battleCooldown > 0) {
        battleCooldown--;
    }

    // Check if player can access new area based on team level
    if (startingNokemon) {  // Only check if we have a starter
        const teamLevel = calculateTeamLevel();
        if (teamLevel >= 10 && !canAccessNewArea) {
            canAccessNewArea = true;
            battleMessage = "A new area has opened up! Press 'T' to travel there!";
            battleMessageTimer = 180;
        }
    }

    // Handle area transition
    if (keys['t'] && canAccessNewArea) {
        currentArea = currentArea === 'starter' ? 'advanced' : 'starter';
        // Reset player position when changing areas
        player.x = canvas.width / 2 - 16;
        player.y = canvas.height / 2 - 16;
        battleMessage = `Welcome to the ${currentArea === 'advanced' ? 'Advanced' : 'Starter'} Area!`;
        battleMessageTimer = 120;
    }

    // Handle healing center
    if (currentState === GAME_STATE.EXPLORING) {
        const inHealingCenter = 
            player.x + player.width > healingCenter.x &&
            player.x < healingCenter.x + healingCenter.width &&
            player.y + player.height > healingCenter.y &&
            player.y < healingCenter.y + healingCenter.height;

        if (inHealingCenter && keys['h']) {
            currentState = GAME_STATE.HEALING;
            healAllNokemon();
        }
    }

    // Only try encounters when exploring and not in cooldown
    if (currentState === GAME_STATE.EXPLORING && battleCooldown === 0) {
        tryEncounter();
    }

    // Handle battle message timer
    if (battleMessageTimer > 0) {
        battleMessageTimer--;
    }
}

function getRandomNokemon(rarity) {
    const pool = wildNokemonTemplates[rarity];
    return { ...pool[Math.floor(Math.random() * pool.length)] };
}

function tryEncounter() {
    if (currentState === GAME_STATE.EXPLORING) {
        const patches = currentArea === 'starter' ? tallGrassPatches : newAreaGrassPatches;
        const currentPatch = patches.find(patch =>
            player.x + player.width > patch.x &&
            player.x < patch.x + patch.width &&
            player.y + player.height > patch.y &&
            player.y < patch.y + patch.height
        );

        if (currentPatch && Math.random() < currentPatch.encounterRate) {
            let wildNokemon;
            if (currentPatch.rarity === 'legendary') {
                wildNokemon = { ...legendaryNokemon };
            } else {
                wildNokemon = getRandomNokemon(currentPatch.rarity);
            }
            encounteredWildNokemon = wildNokemon;
            currentState = GAME_STATE.NOKEMON_SELECTION;
            selectedNokemonIndex = 0;
        }
    }
}

function startBattle(wildNokemon) {
    console.log('Starting battle with:', wildNokemon.name);
    // Store the player's position before battle
    const battleX = player.x;
    const battleY = player.y;
    
    currentState = GAME_STATE.BATTLE;
    currentWildNokemon = wildNokemon;
    
    // Initialize battle Nokemon with proper sprite position
    const allNokemon = [startingNokemon, ...playerNokemon];
    const selectedNokemon = allNokemon[selectedNokemonIndex];
    battleNokemon = {
        ...selectedNokemon,
        sprite: {
            ...selectedNokemon.sprite,
            x: 200,
            y: 300
        }
    };
    
    // Set wild Nokemon sprite position
    currentWildNokemon.sprite = {
        ...currentWildNokemon.sprite,
        x: 600,
        y: 200
    };
    
    battleMessage = `A wild ${wildNokemon.name} appeared!`;
    battleMessageTimer = 60;
    isPlayerTurn = true;
    
    // Play battle music
    audioSystem.playMusic('battle');

    // Return player to their position after battle
    setTimeout(() => {
        if (currentState === GAME_STATE.EXPLORING) {
            player.x = battleX;
            player.y = battleY;
            console.log('Returning to position after battle:', { x: battleX, y: battleY });
        }
    }, 1000);
}

function endBattle() {
    console.log('Ending battle, returning to exploring state');
    currentState = GAME_STATE.EXPLORING;
    currentWildNokemon = null;
    battleMessage = '';
    battleMessageTimer = 0;
    isPlayerTurn = true;
    // Set battle cooldown to 5 seconds (60 frames per second)
    battleCooldown = 300;
    
    // Return to exploration music
    audioSystem.playMusic('exploration');
}

function levelUp(nokemon) {
    nokemon.level += 1;
    // Increase stats
    nokemon.maxHp += 5;
    nokemon.hp = nokemon.maxHp; // Heal to full on level up
    nokemon.attack += 3;
    nokemon.defense += 2;
    
    // Play level up sound
    audioSystem.playSound('levelUp');
    
    return `${nokemon.name} grew to level ${nokemon.level}!`;
}

function useMove(moveIndex) {
    if (!isPlayerTurn || !battleNokemon || !currentWildNokemon) {
        console.log('Cannot use move: Invalid battle state');
        return;
    }
    
    const move = battleNokemon.moves[moveIndex];
    if (!move) {
        console.log('Invalid move index:', moveIndex);
        return;
    }
    
    console.log('Attempting to use move:', move.name);
    
    // Play attack sound
    audioSystem.playSound('attack');
    
    // Check accuracy
    if (Math.random() > move.accuracy) {
        battleMessage = `${battleNokemon.name}'s ${move.name} missed!`;
        battleMessageTimer = 60;
        isPlayerTurn = false;
        console.log('Move missed');
        // Wild Nokemon's turn after player misses
        setTimeout(wildNokemonTurn, 1000);
        return;
    }

    // Handle status moves
    if (move.power === 0 && move.effect) {
        battleMessage = move.effect(battleNokemon, currentWildNokemon);
        battleMessageTimer = 60;
        isPlayerTurn = false;
        console.log('Used status move:', move.name);
        // Wild Nokemon's turn after status move
        setTimeout(wildNokemonTurn, 1000);
    } else {
        // Handle attack moves
        const damage = calculateDamage(battleNokemon, currentWildNokemon, move);
        currentWildNokemon.hp -= damage;
        battleMessage = `${battleNokemon.name} used ${move.name}! Dealt ${damage} damage!`;
        battleMessageTimer = 60;
        isPlayerTurn = false;
        console.log('Dealt damage:', damage);

        // Check if wild Nokemon fainted
        if (currentWildNokemon.hp <= 0) {
            console.log('Wild Nokemon fainted');
            setTimeout(() => {
                battleMessage = 'Wild Nokemon fainted!';
                battleMessageTimer = 60;
                setTimeout(() => {
                    // Level up after winning
                    const levelUpMessage = levelUp(battleNokemon);
                    // Update the original Nokemon's stats
                    const allNokemon = [startingNokemon, ...playerNokemon];
                    const originalNokemon = allNokemon[selectedNokemonIndex];
                    originalNokemon.level = battleNokemon.level;
                    originalNokemon.maxHp = battleNokemon.maxHp;
                    originalNokemon.hp = battleNokemon.hp;
                    originalNokemon.attack = battleNokemon.attack;
                    originalNokemon.defense = battleNokemon.defense;
                    
                    battleMessage = levelUpMessage;
                    battleMessageTimer = 120; // Longer message time for level up
                    setTimeout(() => {
                        endBattle();
                    }, 2000);
                }, 1000);
            }, 1000);
            return;
        }

        // Wild Nokemon's turn after successful attack
        setTimeout(wildNokemonTurn, 1000);
    }
}

function wildNokemonTurn() {
    if (!currentWildNokemon || !battleNokemon || currentWildNokemon.hp <= 0) {
        console.log('Cannot execute wild Nokemon turn: Invalid battle state');
        return;
    }

    const wildMove = currentWildNokemon.moves[Math.floor(Math.random() * currentWildNokemon.moves.length)];
    if (!wildMove) {
        console.log('Invalid wild Nokemon move');
        return;
    }
    
    console.log('Wild Nokemon using move:', wildMove.name);
    
    if (Math.random() > wildMove.accuracy) {
        battleMessage = `Wild ${currentWildNokemon.name}'s ${wildMove.name} missed!`;
        battleMessageTimer = 60;
        isPlayerTurn = true;
        console.log('Wild Nokemon move missed');
        return;
    }

    if (wildMove.power === 0 && wildMove.effect) {
        battleMessage = wildMove.effect(currentWildNokemon, battleNokemon);
        battleMessageTimer = 60;
        isPlayerTurn = true;
        console.log('Wild Nokemon used status move');
    } else {
        const wildDamage = calculateDamage(currentWildNokemon, battleNokemon, wildMove);
        battleNokemon.hp -= wildDamage;
        battleMessage = `Wild ${currentWildNokemon.name} used ${wildMove.name}! Dealt ${wildDamage} damage!`;
        battleMessageTimer = 60;
        isPlayerTurn = true;
        console.log('Wild Nokemon dealt damage:', wildDamage);
    }

    // Check if player's Nokemon fainted
    if (battleNokemon.hp <= 0) {
        console.log('Player Nokemon fainted');
        setTimeout(() => {
            battleMessage = `${battleNokemon.name} fainted!`;
            battleMessageTimer = 60;
            setTimeout(() => {
                endBattle();
                checkGameOver();
            }, 1000);
        }, 1000);
    }
}

function run() {
    if (!isPlayerTurn) return;
    
    const runChance = Math.random();
    if (runChance > 0.5) {
        battleMessage = 'Got away safely!';
        battleMessageTimer = 60;
        setTimeout(() => {
            endBattle();
        }, 1000);
    } else {
        battleMessage = "Couldn't escape!";
        battleMessageTimer = 60;
        isPlayerTurn = false;
        
        // Wild Nokemon's turn after failed escape
        setTimeout(wildNokemonTurn, 1000);
    }
}

function drawMoveMenu() {
    const menuX = canvas.width - 250;
    const menuY = canvas.height - 250;
    const menuWidth = 230;
    const menuHeight = 200;
    const moveHeight = 40;

    // Draw menu background with border
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(menuX, menuY, menuWidth, menuHeight);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(menuX, menuY, menuWidth, menuHeight);

    // Draw moves
    battleNokemon.moves.forEach((move, index) => {
        const y = menuY + (index * moveHeight);
        
        // Highlight selected move
        if (index === selectedMoveIndex) {
            ctx.fillStyle = 'rgba(224, 224, 224, 0.9)';
            ctx.fillRect(menuX, y, menuWidth, moveHeight);
        }

        // Draw move name and type
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText(move.name, menuX + 10, y + 25);
        
        // Draw move type
        ctx.fillStyle = MOVE_TYPES[move.type].color;
        ctx.fillText(move.type, menuX + 120, y + 25);
        
        // Draw move description
        ctx.font = '12px sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(move.description, menuX + 10, y + 40);
    });
}

function drawBattleScreen() {
    // Draw battle background (semi-transparent overlay)
    ctx.fillStyle = 'rgba(240, 240, 240, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw player's Nokemon
    ctx.beginPath();
    ctx.arc(battleNokemon.sprite.x, battleNokemon.sprite.y, battleNokemon.sprite.radius, 0, Math.PI * 2);
    ctx.fillStyle = battleNokemon.sprite.color;
    ctx.fill();
    ctx.closePath();

    // Draw wild Nokemon
    ctx.beginPath();
    ctx.arc(currentWildNokemon.sprite.x, currentWildNokemon.sprite.y, currentWildNokemon.sprite.radius, 0, Math.PI * 2);
    ctx.fillStyle = currentWildNokemon.sprite.color;
    ctx.fill();
    ctx.closePath();

    // Draw HP bars
    drawHPBar(battleNokemon, 50, 150);
    drawHPBar(currentWildNokemon, canvas.width - 250, 50);

    // Draw battle message
    if (battleMessage) {
        ctx.save();
        ctx.font = '24px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText(battleMessage, canvas.width / 2, canvas.height - 100);
        ctx.restore();
    }

    // Draw battle menu or move selection menu
    if (currentState === GAME_STATE.MOVE_SELECTION) {
        drawMoveMenu();
    } else if (isPlayerTurn) {
        // Draw main battle menu in bottom right corner
        const menuX = canvas.width - 200;
        const menuY = canvas.height - 140;
        const menuWidth = 180;
        const menuHeight = 100;

        // Menu background with border
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(menuX, menuY, menuWidth, menuHeight);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(menuX, menuY, menuWidth, menuHeight);
        
        // Menu text
        ctx.font = '20px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText('1. Moves', menuX + 10, menuY + 30);
        ctx.fillText('2. Run', menuX + 10, menuY + 60);
        ctx.fillText('3. Catch', menuX + 10, menuY + 90);

        // Draw turn indicator
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('Your turn!', canvas.width / 2, 50);
    } else {
        // Draw turn indicator
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('Wild Nokemon\'s turn...', canvas.width / 2, 50);
    }
}

function drawHPBar(nokemon, x, y) {
    const barWidth = 200;
    const barHeight = 20;
    const hpPercentage = nokemon.hp / nokemon.maxHp;

    // Background
    ctx.fillStyle = '#ddd';
    ctx.fillRect(x, y, barWidth, barHeight);
    
    // HP bar
    ctx.fillStyle = hpPercentage > 0.5 ? '#4CAF50' : hpPercentage > 0.25 ? '#FFC107' : '#F44336';
    ctx.fillRect(x, y, barWidth * hpPercentage, barHeight);
    
    // Border
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x, y, barWidth, barHeight);
    
    // Text
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.fillText(`${nokemon.name} HP: ${nokemon.hp}/${nokemon.maxHp}`, x, y - 5);
}

function drawPlayer() {
    const centerX = player.x + player.width / 2;
    const centerY = player.y + player.height / 2;
    
    // Draw backpack
    ctx.fillStyle = player.sprite.backpack;
    ctx.fillRect(player.x + 4, player.y + 12, 8, 12);
    
    // Draw pants
    ctx.fillStyle = player.sprite.pants;
    ctx.fillRect(player.x + 8, player.y + 20, 16, 12);
    
    // Draw shirt
    ctx.fillStyle = player.sprite.shirt;
    ctx.fillRect(player.x + 8, player.y + 12, 16, 8);
    
    // Draw head
    ctx.fillStyle = player.sprite.skin;
    ctx.beginPath();
    ctx.arc(centerX, player.y + 6, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw hair
    ctx.fillStyle = player.sprite.hair;
    ctx.beginPath();
    ctx.arc(centerX, player.y + 4, 5, Math.PI, 0);
    ctx.fill();
    
    // Draw arms based on direction
    ctx.fillStyle = player.sprite.skin;
    if (player.direction === 'left') {
        // Left arm
        ctx.fillRect(player.x + 4, player.y + 12, 4, 8);
        // Right arm
        ctx.fillRect(player.x + 24, player.y + 12, 4, 8);
    } else if (player.direction === 'right') {
        // Left arm
        ctx.fillRect(player.x + 4, player.y + 12, 4, 8);
        // Right arm
        ctx.fillRect(player.x + 24, player.y + 12, 4, 8);
    } else if (player.direction === 'up') {
        // Both arms up
        ctx.fillRect(player.x + 8, player.y + 8, 4, 8);
        ctx.fillRect(player.x + 20, player.y + 8, 4, 8);
    } else {
        // Both arms down
        ctx.fillRect(player.x + 8, player.y + 12, 4, 8);
        ctx.fillRect(player.x + 20, player.y + 12, 4, 8);
    }
    
    // Draw legs
    ctx.fillStyle = player.sprite.pants;
    ctx.fillRect(player.x + 10, player.y + 24, 4, 8);
    ctx.fillRect(player.x + 18, player.y + 24, 4, 8);
    
    // Draw shoes
    ctx.fillStyle = player.sprite.shoes;
    ctx.fillRect(player.x + 8, player.y + 32, 6, 4);
    ctx.fillRect(player.x + 18, player.y + 32, 6, 4);
    
    // Draw face details
    ctx.fillStyle = '#000000';
    // Eyes
    ctx.beginPath();
    ctx.arc(centerX - 2, player.y + 5, 1, 0, Math.PI * 2);
    ctx.arc(centerX + 2, player.y + 5, 1, 0, Math.PI * 2);
    ctx.fill();
    
    // Smile
    ctx.beginPath();
    ctx.arc(centerX, player.y + 7, 2, 0, Math.PI);
    ctx.stroke();
}

function drawStarterSelection() {
    // Draw background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw title
    ctx.font = '32px sans-serif';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText('Choose your Nokemon!', canvas.width / 2, 50);
    
    // Draw starter options
    const spacing = canvas.width / 3;
    starterNokemon.forEach((nokemon, index) => {
        const x = spacing * (index + 0.5);
        const y = canvas.height / 2;
        
        // Draw selection box
        if (index === selectedStarterIndex) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
            ctx.strokeRect(x - 100, y - 100, 200, 200);
        }
        
        // Draw Nokemon sprite
        ctx.beginPath();
        ctx.arc(x, y - 30, 30, 0, Math.PI * 2);
        ctx.fillStyle = nokemon.sprite.color;
        ctx.fill();
        
        // Draw Nokemon info
        ctx.font = '20px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText(nokemon.name, x, y + 40);
        ctx.fillText(`Type: ${nokemon.type}`, x, y + 70);
        ctx.fillText(`Level: ${nokemon.level}`, x, y + 100);
    });
    
    // Draw instructions
    ctx.font = '16px sans-serif';
    ctx.fillText('Use ← and → to select, Enter to confirm', canvas.width / 2, canvas.height - 50);
}

function drawGameOver() {
    // Draw semi-transparent black background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw game over text
    ctx.font = '48px sans-serif';
    ctx.fillStyle = '#FF0000';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 50);
    
    // Draw message
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(gameOverMessage, canvas.width / 2, canvas.height / 2 + 20);
    
    // Draw restart instructions
    ctx.font = '20px sans-serif';
    ctx.fillText('Press Enter to restart', canvas.width / 2, canvas.height / 2 + 80);
}

function drawNokemonSelection() {
    // Draw semi-transparent background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.font = '32px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Choose your Nokemon!', canvas.width / 2, 50);

    // Draw wild Nokemon info
    ctx.font = '24px sans-serif';
    ctx.fillText(`A wild ${encounteredWildNokemon.name} appeared!`, canvas.width / 2, 100);

    // Draw team level
    const teamLevel = calculateTeamLevel();
    ctx.font = '20px sans-serif';
    ctx.fillText(`Team Level: ${teamLevel}/10`, canvas.width / 2, 130);

    // Draw Nokemon list
    const allNokemon = [startingNokemon, ...playerNokemon];
    const boxWidth = 300;
    const boxHeight = 80;
    const spacing = 20;
    const startY = 150;

    allNokemon.forEach((nokemon, index) => {
        const y = startY + (index * (boxHeight + spacing));
        const isFainted = isNokemonFainted(nokemon);
        
        // Draw selection box
        ctx.fillStyle = index === selectedNokemonIndex ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
        if (isFainted) {
            ctx.fillStyle = 'rgba(128, 128, 128, 0.3)';
        }
        ctx.fillRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);
        ctx.strokeStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.strokeRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);

        // Draw Nokemon info
        ctx.font = '20px sans-serif';
        ctx.fillStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.fillText(`${nokemon.name} Lv.${nokemon.level}`, (canvas.width - boxWidth) / 2 + 20, y + 30);
        ctx.fillText(`HP: ${nokemon.hp}/${nokemon.maxHp}${isFainted ? ' (FAINTED)' : ''}`, (canvas.width - boxWidth) / 2 + 20, y + 60);

        // Draw type
        ctx.fillStyle = MOVE_TYPES[nokemon.type].color;
        ctx.fillText(nokemon.type, (canvas.width - boxWidth) / 2 + boxWidth - 100, y + 30);
    });

    // Draw instructions
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Use ↑ and ↓ to select, Enter to confirm', canvas.width / 2, canvas.height - 50);
    ctx.fillText('Fainted Nokemon can only be healed at the Healing Center', canvas.width / 2, canvas.height - 30);
}

function draw() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentState === GAME_STATE.STARTER_SELECTION) {
        drawStarterSelection();
    } else if (currentState === GAME_STATE.GAME_OVER) {
        drawGameOver();
    } else if (currentState === GAME_STATE.HEALING) {
        // Draw healing screen
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '32px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('Healing your Nokemon...', canvas.width / 2, canvas.height / 2);
    } else {
        // Draw area-specific elements
        if (currentArea === 'advanced') {
            // Draw healing center
            ctx.fillStyle = healingCenter.color;
            ctx.fillRect(healingCenter.x, healingCenter.y, healingCenter.width, healingCenter.height);
            ctx.font = '16px sans-serif';
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.fillText('Healing Center', healingCenter.x + healingCenter.width/2, healingCenter.y + healingCenter.height/2);
            ctx.fillText('Press H to heal', healingCenter.x + healingCenter.width/2, healingCenter.y + healingCenter.height/2 + 20);

            // Draw new area grass
            newAreaGrassPatches.forEach(patch => {
                ctx.fillStyle = '#2d6a4f';
                ctx.fillRect(patch.x, patch.y, patch.width, patch.height);
                // Add some texture lines
                for (let i = 0; i < patch.width; i += 8) {
                    ctx.strokeStyle = '#40916c';
                    ctx.beginPath();
                    ctx.moveTo(patch.x + i, patch.y + patch.height);
                    ctx.lineTo(patch.x + i, patch.y + patch.height - 12);
                    ctx.stroke();
                }
            });
        } else {
            // Draw starter area grass
            tallGrassPatches.forEach(patch => {
                ctx.fillStyle = '#38b000';
                ctx.fillRect(patch.x, patch.y, patch.width, patch.height);
                // Add some texture lines
                for (let i = 0; i < patch.width; i += 8) {
                    ctx.strokeStyle = '#70e000';
                    ctx.beginPath();
                    ctx.moveTo(patch.x + i, patch.y + patch.height);
                    ctx.lineTo(patch.x + i, patch.y + patch.height - 12);
                    ctx.stroke();
                }
            });
        }

        // Draw player
        drawPlayer();

        // Draw area info
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText(`Area: ${currentArea === 'starter' ? 'Starter' : 'Advanced'}`, 20, 40);
        
        // Draw team level
        const teamLevel = calculateTeamLevel();
        ctx.fillText(`Team Level: ${teamLevel}/10`, 20, 60);
        
        // Draw Nokemon info
        if (startingNokemon) {
            const isFainted = isNokemonFainted(startingNokemon);
            ctx.fillStyle = isFainted ? '#666666' : '#000';
            ctx.fillText(`${startingNokemon.name} Lv.${startingNokemon.level} - HP: ${startingNokemon.hp}/${startingNokemon.maxHp}${isFainted ? ' (FAINTED)' : ''}`, 20, 20);
        }

        // Draw battle screen if in battle
        if (currentState === GAME_STATE.BATTLE || currentState === GAME_STATE.MOVE_SELECTION) {
            drawBattleScreen();
        }

        // Draw Nokemon selection screen if in selection state
        if (currentState === GAME_STATE.NOKEMON_SELECTION) {
            drawNokemonSelection();
        }

        // Draw area transition message
        if (battleMessage && battleMessageTimer > 0) {
            ctx.font = '20px sans-serif';
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.fillText(battleMessage, canvas.width / 2, 70);
        }

        // Add audio status indicator
        if (!audioInitialized) {
            ctx.font = '16px sans-serif';
            ctx.fillStyle = '#FF0000';
            ctx.textAlign = 'right';
            ctx.fillText('Click to enable sound', canvas.width - 20, canvas.height - 20);
        }
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();

// Add catch function
function tryCatch() {
    if (!isPlayerTurn || !currentWildNokemon) return;
    
    // Calculate catch rate based on remaining HP percentage
    const hpPercentage = currentWildNokemon.hp / currentWildNokemon.maxHp;
    const catchRate = (1 - hpPercentage) * 0.8; // 80% chance at 1 HP, 0% at full HP
    
    if (Math.random() < catchRate) {
        // Successfully caught
        const caughtNokemon = { ...currentWildNokemon };
        caughtNokemon.hp = caughtNokemon.maxHp; // Heal the caught Nokemon
        playerNokemon.push(caughtNokemon);
        
        // Play catch sound
        audioSystem.playSound('catch');
        
        battleMessage = `Gotcha! ${caughtNokemon.name} was caught!`;
        battleMessageTimer = 60;
        
        setTimeout(() => {
            endBattle();
        }, 1000);
    } else {
        // Failed to catch
        battleMessage = "Oh no! The Nokemon broke free!";
        battleMessageTimer = 60;
        isPlayerTurn = false;
        
        // Wild Nokemon's turn after failed catch
        setTimeout(wildNokemonTurn, 1000);
    }
}

// Add game over check
function checkGameOver() {
    // Check if all Nokemon have fainted
    const allNokemon = [startingNokemon, ...playerNokemon];
    const allFainted = allNokemon.every(nokemon => nokemon && nokemon.hp <= 0);
    
    if (allFainted) {
        console.log('Game Over: All Nokemon have fainted');
        currentState = GAME_STATE.GAME_OVER;
        gameOverMessage = 'All your Nokemon have fainted!';
        // Play game over music
        audioSystem.playMusic('gameOver');
    }
}

function healAllNokemon() {
    startingNokemon.hp = startingNokemon.maxHp;
    playerNokemon.forEach(nokemon => {
        nokemon.hp = nokemon.maxHp;
    });
    battleMessage = "All Nokemon have been healed!";
    battleMessageTimer = 120;
    
    // Play healing music
    audioSystem.playMusic('healing');
    
    setTimeout(() => {
        currentState = GAME_STATE.EXPLORING;
        // Return to exploration music
        audioSystem.playMusic('exploration');
    }, 2000);
}

// Modify team level calculation function
function calculateTeamLevel() {
    const allNokemon = [startingNokemon, ...playerNokemon].filter(nokemon => nokemon !== null);
    return allNokemon.reduce((total, nokemon) => total + nokemon.level, 0);
}

// Add function to check if Nokemon is fainted
function isNokemonFainted(nokemon) {
    return nokemon.hp <= 0;
}