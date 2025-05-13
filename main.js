const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Add Nokemon Drawing Functions
function drawLeaflet(ctx, x, y, radius) {
    // Body
    ctx.fillStyle = '#4CAF50'; // Green
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.8, radius, 0, 0, Math.PI * 2);
    ctx.fill();
    // Leaf on head
    ctx.fillStyle = '#388E3C'; // Darker green
    ctx.beginPath();
    ctx.moveTo(x, y - radius);
    ctx.quadraticCurveTo(x + radius * 0.5, y - radius * 1.5, x, y - radius * 2);
    ctx.quadraticCurveTo(x - radius * 0.5, y - radius * 1.5, x, y - radius);
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
}

function drawFlarepup(ctx, x, y, radius) {
    // Body
    ctx.fillStyle = '#FF5722'; // Orange
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    // Ears (triangles)
    ctx.fillStyle = '#E64A19'; // Darker Orange
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.8, y - radius * 0.6);
    ctx.lineTo(x - radius * 0.4, y - radius * 1.2);
    ctx.lineTo(x, y - radius * 0.8);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + radius * 0.8, y - radius * 0.6);
    ctx.lineTo(x + radius * 0.4, y - radius * 1.2);
    ctx.lineTo(x, y - radius * 0.8);
    ctx.closePath();
    ctx.fill();
     // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.arc(x + radius * 0.3, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Snout
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(x, y + radius * 0.3, radius * 0.4, radius * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
}

function drawAquafin(ctx, x, y, radius) {
    // Body
    ctx.fillStyle = '#2196F3'; // Blue
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 1.2, radius * 0.8, 0, 0, Math.PI * 2); // Wider body
    ctx.fill();
    // Fin on top
    ctx.fillStyle = '#1976D2'; // Darker Blue
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.2, y - radius * 0.8);
    ctx.quadraticCurveTo(x, y - radius * 1.4, x + radius * 0.2, y - radius * 0.8);
    ctx.lineTo(x - radius * 0.2, y - radius * 0.8);
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.4, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.arc(x + radius * 0.4, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Bubbles (optional decoration)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.7)'; // Light blue bubbles
    ctx.beginPath();
    ctx.arc(x + radius * 0.8, y + radius * 0.5, radius * 0.15, 0, Math.PI * 2);
    ctx.arc(x + radius, y + radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
}

// Drawing function for Scamper (Normal)
function drawScamper(ctx, x, y, radius) {
    // Body (ellipse)
    ctx.fillStyle = '#A8A878'; // Normal type greyish
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.9, radius * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    // Ears
    ctx.fillStyle = '#C0C0A0'; // Lighter grey
    ctx.beginPath();
    ctx.arc(x - radius * 0.6, y - radius * 0.7, radius * 0.3, Math.PI, 0); // Ear 1
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + radius * 0.6, y - radius * 0.7, radius * 0.3, Math.PI, 0); // Ear 2
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 1
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y - radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 2
    // Tail (simple curve)
    ctx.strokeStyle = '#A8A878';
    ctx.lineWidth = Math.max(1, radius * 0.2);
    ctx.beginPath();
    ctx.moveTo(x + radius * 0.9, y + radius * 0.3);
    ctx.quadraticCurveTo(x + radius * 1.3, y, x + radius * 1.2, y - radius * 0.5);
    ctx.stroke();
}

// Drawing function for Skywing (Flying)
function drawSkywing(ctx, x, y, radius) {
    // Body
    ctx.fillStyle = '#A890F0'; // Flying type lavender
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.7, radius, 0, 0, Math.PI * 2);
    ctx.fill();
    // Wings
    ctx.fillStyle = '#C8B0FF'; // Lighter lavender
    ctx.beginPath(); // Left Wing
    ctx.moveTo(x - radius * 0.5, y - radius * 0.2);
    ctx.quadraticCurveTo(x - radius * 1.5, y - radius * 0.8, x - radius * 0.8, y + radius * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath(); // Right Wing
    ctx.moveTo(x + radius * 0.5, y - radius * 0.2);
    ctx.quadraticCurveTo(x + radius * 1.5, y - radius * 0.8, x + radius * 0.8, y + radius * 0.5);
    ctx.closePath();
    ctx.fill();
    // Eyes (dots)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y - radius * 0.3, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 1
    ctx.beginPath();
    ctx.arc(x + radius * 0.2, y - radius * 0.3, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 2
    // Beak
    ctx.fillStyle = '#F8D030'; // Yellow beak
    ctx.beginPath();
    ctx.moveTo(x, y - radius * 0.1);
    ctx.lineTo(x - radius * 0.15, y + radius * 0.1);
    ctx.lineTo(x + radius * 0.15, y + radius * 0.1);
    ctx.closePath();
    ctx.fill();
}

// Drawing function for Blazepup (Fire - distinct from Flarepup)
function drawBlazepup(ctx, x, y, radius) {
    // Body (rounder than Flarepup)
    ctx.fillStyle = '#F08030'; // Fire type orange
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.9, 0, Math.PI * 2);
    ctx.fill();
    // Head Flame
    ctx.fillStyle = '#FFBF00'; // Yellow flame
    ctx.beginPath();
    ctx.moveTo(x, y - radius * 0.8);
    ctx.bezierCurveTo(x - radius * 0.3, y - radius * 1.5, x + radius * 0.3, y - radius * 1.5, x, y - radius * 0.8); // Simplified flame top
    ctx.lineTo(x + radius * 0.2, y - radius * 1.1);
    ctx.lineTo(x, y - radius * 1.4);
    ctx.lineTo(x - radius * 0.2, y - radius * 1.1);
    ctx.closePath();
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 1
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fill(); // Eye 2
     // Paws (small circles)
    ctx.fillStyle = '#D2691E'; // Brownish paws
    ctx.beginPath();
    ctx.arc(x - radius * 0.5, y + radius * 0.7, radius * 0.2, 0, Math.PI * 2); // Paw 1
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + radius * 0.5, y + radius * 0.7, radius * 0.2, 0, Math.PI * 2); // Paw 2
    ctx.fill();
}

// Drawing function for Sproutling (Grass - distinct from Leaflet)
function drawSproutling(ctx, x, y, radius) {
    // Body (seed shape)
    ctx.fillStyle = '#78C850'; // Grass type green
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.7, radius, 0, 0, Math.PI * 2);
    ctx.fill();
    // Sprout on top
    ctx.fillStyle = '#98FB98'; // Pale green
    ctx.beginPath(); // First leaf
    ctx.moveTo(x, y - radius);
    ctx.quadraticCurveTo(x + radius * 0.6, y - radius * 1.8, x + radius * 0.1, y - radius * 2.2);
    ctx.quadraticCurveTo(x - radius * 0.4, y - radius * 1.8, x, y - radius);
    ctx.fill();
    ctx.beginPath(); // Second leaf (mirrored)
    ctx.moveTo(x, y - radius);
    ctx.quadraticCurveTo(x - radius * 0.6, y - radius * 1.8, x - radius * 0.1, y - radius * 2.2);
    ctx.quadraticCurveTo(x + radius * 0.4, y - radius * 1.8, x, y - radius);
    ctx.fill();
    // Eyes (closed/sleepy)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = Math.max(1, radius * 0.05); // Ensure lineWidth is at least 1
    ctx.beginPath(); // Eye 1
    ctx.arc(x - radius * 0.25, y - radius * 0.1, radius * 0.15, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
    ctx.beginPath(); // Eye 2
    ctx.arc(x + radius * 0.25, y - radius * 0.1, radius * 0.15, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
}

// Drawing function for Flametail (Fire - distinct from others)
function drawFlametail(ctx, x, y, radius) {
    // Body (more oval)
    ctx.fillStyle = '#F08030'; // Fire type orange
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 1.1, radius * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();
    // Tail Flame
    const tailBaseX = x + radius * 0.7; // Attach tail closer to body
    const tailBaseY = y;
    ctx.fillStyle = '#FFEA00'; // Yellow base
    ctx.beginPath();
    ctx.moveTo(tailBaseX, tailBaseY);
    ctx.bezierCurveTo(tailBaseX + radius * 0.5, tailBaseY - radius,       tailBaseX + radius * 1.5, tailBaseY - radius * 0.5, tailBaseX + radius * 0.8, tailBaseY + radius * 0.2);
    ctx.bezierCurveTo(tailBaseX + radius * 1.2, tailBaseY + radius,       tailBaseX + radius * 0.3, tailBaseY + radius * 0.8, tailBaseX, tailBaseY);
    ctx.fill();
    ctx.fillStyle = '#FF8C00'; // Orange inner flame
    ctx.beginPath();
    ctx.moveTo(tailBaseX, tailBaseY);
    ctx.bezierCurveTo(tailBaseX + radius * 0.3, tailBaseY - radius*0.6,    tailBaseX + radius * 0.8, tailBaseY - radius * 0.3, tailBaseX + radius * 0.4, tailBaseY + radius * 0.1);
    ctx.bezierCurveTo(tailBaseX + radius * 0.6, tailBaseY + radius*0.6,    tailBaseX + radius * 0.1, tailBaseY + radius * 0.4, tailBaseX, tailBaseY);
    ctx.fill();
    // Eyes (fierce - simplified)
    ctx.fillStyle = '#000000';
    ctx.beginPath(); // Eye 1
    ctx.arc(x - radius * 0.3, y - radius * 0.2, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); // Eye 2
    ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
}

// Drawing function for Thunderwing (Legendary - Electric/Flying)
function drawThunderwing(ctx, x, y, radius) {
    // Body
    ctx.fillStyle = '#F8D030'; // Electric yellow
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.8, radius * 1.1, 0, 0, Math.PI * 2);
    ctx.fill();
    // Wings (jagged, lightning-like)
    ctx.fillStyle = '#FFEC8B'; // Lighter yellow
    // Left Wing
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.6, y - radius * 0.3);
    ctx.lineTo(x - radius * 1.5, y - radius * 1);
    ctx.lineTo(x - radius * 1.2, y - radius * 0.5);
    ctx.lineTo(x - radius * 1.8, y + radius * 0.2);
    ctx.lineTo(x - radius * 1.0, y + radius * 0.5);
    ctx.closePath();
    ctx.fill();
    // Right Wing
    ctx.beginPath();
    ctx.moveTo(x + radius * 0.6, y - radius * 0.3);
    ctx.lineTo(x + radius * 1.5, y - radius * 1);
    ctx.lineTo(x + radius * 1.2, y - radius * 0.5);
    ctx.lineTo(x + radius * 1.8, y + radius * 0.2);
    ctx.lineTo(x + radius * 1.0, y + radius * 0.5);
    ctx.closePath();
    ctx.fill();
    // Eyes (sharp - simplified)
    ctx.fillStyle = '#000000';
    ctx.beginPath(); // Eye 1
    ctx.arc(x - radius * 0.25, y - radius * 0.5, radius * 0.1, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath(); // Eye 2
    ctx.arc(x + radius * 0.25, y - radius * 0.5, radius * 0.1, 0, Math.PI*2);
    ctx.fill();
    // Lightning Bolt Mark (optional)
    ctx.strokeStyle = '#4682B4'; // Steel blue
    ctx.lineWidth = Math.max(1, radius * 0.1);
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.2, y + radius * 0.1);
    ctx.lineTo(x + radius * 0.1, y + radius * 0.4);
    ctx.lineTo(x - radius * 0.1, y + radius * 0.7);
    ctx.stroke();
}

// Drawing function for Mysticor (Psychic Mythical)
function drawMysticor(ctx, x, y, radius) {
    // Body (ethereal swirl)
    ctx.fillStyle = 'rgba(255, 105, 180, 0.7)'; // Bright Pink, semi-transparent
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.9, radius * 1.2, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    // Inner core
    ctx.fillStyle = 'rgba(221, 160, 221, 0.9)'; // Plum
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
    ctx.fill();
    // Eyes (glowing)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y - radius * 0.3, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + radius * 0.2, y - radius * 0.3, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
    // Aura particles
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgba(255, 182, 193, ${Math.random() * 0.5 + 0.3})`;
        ctx.beginPath();
        ctx.arc(x + (Math.random() - 0.5) * radius * 2, y + (Math.random() - 0.5) * radius * 2, radius * 0.1, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Drawing function for Shadower (Ghost Mythical)
function drawShadower(ctx, x, y, radius) {
    // Main shadow body
    ctx.fillStyle = 'rgba(50, 50, 50, 0.8)'; // Dark Grey
    ctx.beginPath();
    ctx.moveTo(x, y - radius * 1.2);
    ctx.bezierCurveTo(x - radius, y - radius * 0.5, x - radius * 0.8, y + radius, x, y + radius * 1.1);
    ctx.bezierCurveTo(x + radius * 0.8, y + radius, x + radius, y - radius * 0.5, x, y - radius * 1.2);
    ctx.fill();
    // Eyes (menacing glow)
    ctx.fillStyle = '#FF0000'; // Red
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.1, radius * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y - radius * 0.1, radius * 0.2, 0, Math.PI * 2);
    ctx.fill();
    // Wisps
    ctx.strokeStyle = 'rgba(80, 80, 80, 0.6)';
    ctx.lineWidth = Math.max(1, radius * 0.15);
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.5, y + radius * 0.8);
    ctx.quadraticCurveTo(x - radius, y + radius * 1.3, x - radius * 0.7, y + radius * 1.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + radius * 0.5, y + radius * 0.8);
    ctx.quadraticCurveTo(x + radius, y + radius * 1.3, x + radius * 0.7, y + radius * 1.5);
    ctx.stroke();
}

// Drawing function for Geodrake (Fire/Earth Legendary)
function drawGeodrake(ctx, x, y, radius) {
    // Body (rocky plates)
    ctx.fillStyle = '#8B4513'; // SaddleBrown
    ctx.beginPath();
    ctx.rect(x - radius * 0.8, y - radius * 0.5, radius * 1.6, radius);
    ctx.fill();
    // Head
    ctx.fillStyle = '#A0522D'; // Sienna
    ctx.beginPath();
    ctx.arc(x - radius * 0.7, y - radius * 0.7, radius * 0.4, 0, Math.PI * 2);
    ctx.fill();
    // Molten Core/Eyes
    ctx.fillStyle = '#FF4500'; // OrangeRed
    ctx.beginPath();
    ctx.arc(x - radius * 0.8, y - radius * 0.75, radius * 0.1, 0, Math.PI * 2); // Eye
    ctx.fill();
    // Back Spikes (fiery)
    ctx.fillStyle = '#FF8C00'; // DarkOrange
    ctx.beginPath();
    ctx.moveTo(x, y - radius * 0.5);
    ctx.lineTo(x + radius * 0.3, y - radius * 0.8);
    ctx.lineTo(x + radius * 0.6, y - radius * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + radius * 0.5, y - radius * 0.5);
    ctx.lineTo(x + radius * 0.8, y - radius * 0.8);
    ctx.lineTo(x + radius * 1.1, y - radius * 0.5);
    ctx.closePath();
    ctx.fill();
}

// Add Animation System Variables & Functions (Moved Here)
let activeAnimations = [];
const ANIMATION_TYPES = {
    PROJECTILE: 'projectile',
    SHAKE: 'shake',
    DODGE: 'dodge' // New
};

function startAnimation(type, attackerSprite, defenderSprite, options = {}) {
    const duration = options.duration || 30; 
    const animation = {
        type: type,
        startX: attackerSprite.x,
        startY: attackerSprite.y,
        endX: defenderSprite.x, // Default end for projectiles
        endY: defenderSprite.y,
        targetSprite: defenderSprite, // Default target for shake/effects
        progress: 0,
        duration: duration,
        color: options.color || '#FFFFFF',
        size: options.size || 5,
        amplitude: options.amplitude || 5,
        frequency: options.frequency || 10,
        id: Date.now() + Math.random()
    };

    if (type === ANIMATION_TYPES.DODGE) {
        animation.dodgeDirection = Math.random() < 0.5 ? -1 : 1; // -1 for left/up, 1 for right/down
        animation.dodgeDistance = options.distance || 20;       // How far to move
        animation.targetSprite = defenderSprite; // Explicitly set for dodge
        animation.startX = defenderSprite.x;     // For dodge, startX/Y is the original pos of the dodger
        animation.startY = defenderSprite.y;
        // Projectile-specific endX/endY are not relevant for dodge type itself
    }
    // For non-dodge types, attackerSprite is the origin for startX/startY
    // and defenderSprite is the target for endX/endY (for projectiles) or the subject of shake.

    activeAnimations.push(animation);
    console.log(`Starting animation: ${type}`, animation);
}

function updateAnimations() {
    activeAnimations = activeAnimations.filter(anim => {
        anim.progress++;
        return anim.progress < anim.duration;
    });
}

function drawAnimations(ctx) {
    activeAnimations.forEach(anim => {
        if (anim.type === ANIMATION_TYPES.PROJECTILE) {
            const t = anim.progress / anim.duration;
            const currentX = anim.startX + (anim.endX - anim.startX) * t;
            const currentY = anim.startY + (anim.endY - anim.startY) * t;
            ctx.fillStyle = anim.color;
            ctx.beginPath();
            ctx.arc(currentX, currentY, anim.size, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

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
                    description: 'A basic attack',
                    animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 }
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
                radius: 15,
                drawFunction: drawScamper
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
                radius: 15,
                drawFunction: drawSkywing
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
                    description: 'A fire attack',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#F08030', duration: 40, size: 6 }
                },
                {
                    name: 'Bite',
                    power: 105,
                    type: 'NORMAL',
                    accuracy: 0.9,
                    description: 'A strong bite',
                    animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 4 }
                }
            ],
            sprite: {
                color: '#F08030',
                radius: 18,
                drawFunction: drawBlazepup
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
                    description: 'Steals HP',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#78C850', duration: 45, size: 5 }
                },
                {
                    name: 'Acid',
                    power: 105,
                    type: 'POISON',
                    accuracy: 0.9,
                    description: 'A poisonous attack',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#A040A0', duration: 40, size: 4 }
                }
            ],
            sprite: {
                color: '#78C850',
                radius: 16,
                drawFunction: drawSproutling
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
                    description: 'A fire attack',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#F08030', duration: 40, size: 6 }
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
                        target.statusCondition = 'confused';
                        target.statusDuration = 3;
                        return `${target.name} became confused!`;
                    }
                }
            ],
            sprite: {
                color: '#F08030',
                radius: 20,
                drawFunction: drawFlametail
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
                    description: 'A water attack',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#6890F0', duration: 40, size: 6 }
                },
                {
                    name: 'Bubble',
                    power: 90,
                    type: 'WATER',
                    accuracy: 0.95,
                    description: 'A bubble attack',
                    animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#ADD8E6', duration: 50, size: 4 }
                },
                {
                    name: 'Hypnosis',
                    power: 0,
                    type: 'PSYCHIC',
                    accuracy: 0.8,
                    description: 'May put target to sleep',
                    effect: (user, target) => {
                        target.statusCondition = 'sleep';
                        target.statusDuration = 3;
                        return `${target.name} fell asleep!`;
                    }
                }
            ],
            sprite: {
                color: '#6890F0',
                radius: 18,
                drawFunction: drawAquafin
            }
        }
    ]
};

// Game states
const GAME_STATE = {
    TUTORIAL: 'tutorial',  // New state
    EXPLORING: 'exploring',
    BATTLE: 'battle',
    MOVE_SELECTION: 'move_selection',
    STARTER_SELECTION: 'starter_selection',
    GAME_OVER: 'game_over',
    HEALING: 'healing',
    NOKEMON_SELECTION: 'nokemon_selection',
    PARTY_VIEW: 'party_view',
    MOVE_LEARNING: 'move_learning',  // New state
    EVOLUTION: 'evolution',  // New state
    MOVE_TUTOR: 'move_tutor', // New state for Move Tutor
    TOWN: 'town', // New area state
    NOKEMON_SHOP: 'nokemon_shop' // New shop state
};

// Add transition animation variables
let isTransitioning = false;
let transitionAlpha = 0;
let transitionDuration = 60; // frames for transition (1 second at 60fps)
let transitionDirection = 1; // 1 for fade out, -1 for fade in




// Add Animation Management Functions
function startAnimation(type, attackerSprite, defenderSprite, options = {}) {
    const duration = options.duration || 30; // Default duration 30 frames
    const animation = {
        type: type,
        startX: attackerSprite.x,
        startY: attackerSprite.y,
        endX: defenderSprite.x,
        endY: defenderSprite.y,
        targetSprite: defenderSprite, // Store reference for shake target
        progress: 0,
        duration: duration,
        color: options.color || '#FFFFFF', // Default color white
        size: options.size || 5,         // Default size for projectiles
        amplitude: options.amplitude || 5, // Shake amplitude
        frequency: options.frequency || 10, // Shake frequency
        id: Date.now() + Math.random() // Unique ID
    };
    activeAnimations.push(animation);
    console.log(`Starting animation: ${type}`, animation);
}

function updateAnimations() {
    activeAnimations = activeAnimations.filter(anim => {
        anim.progress++;
        return anim.progress < anim.duration;
    });
}

function drawAnimations(ctx) {
    activeAnimations.forEach(anim => {
        if (anim.type === ANIMATION_TYPES.PROJECTILE) {
            const t = anim.progress / anim.duration; // Normalize progress (0 to 1)
            const currentX = anim.startX + (anim.endX - anim.startX) * t;
            const currentY = anim.startY + (anim.endY - anim.startY) * t;

            ctx.fillStyle = anim.color;
            ctx.beginPath();
            ctx.arc(currentX, currentY, anim.size, 0, Math.PI * 2);
            ctx.fill();
        }
        // Shake animation is handled by offsetting the drawing position
    });
}

// Add tutorial variables
let currentTutorialStep = 0;
const tutorialSteps = [
    {
        title: "Welcome to Nokemon!",
        text: "Use Arrow Keys to move around",
        highlight: "movement"
    },
    {
        title: "Battle System",
        text: "Walk in tall grass to find wild Nokemon\nPress 1-4 in battle to use moves, switch, run, or catch",
        highlight: "battle"
    },
    {
        title: "Team Management",
        text: "Press X to view your Nokemon party\nVisit the Healing Center (pink building) to heal your team",
        highlight: "team"
    },
    {
        title: "Level Up",
        text: "Defeat wild Nokemon to level up\nReach total team level 10 to access new areas",
        highlight: "level"
    }
];

let currentState = GAME_STATE.TUTORIAL;
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
    },
    currency: 1000 // Starting currency
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
                description: 'A basic attack',
                animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 }
            },
            {
                name: 'Vine Whip',
                power: 105,
                type: 'GRASS',
                accuracy: 0.9,
                description: 'A grass-type attack',
                animation: { type: ANIMATION_TYPES.SHAKE, duration: 25, amplitude: 4 }
            },
            {
                name: 'Leaf Storm',
                power: 135,
                type: 'GRASS',
                accuracy: 0.8,
                description: 'A powerful grass attack',
                animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#388E3C', duration: 35, size: 7 }
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
            color: '#4CAF50',
            drawFunction: drawLeaflet // Add draw function
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
                description: 'A basic attack',
                animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 }
            },
            {
                name: 'Ember',
                power: 105,
                type: 'FIRE',
                accuracy: 0.9,
                description: 'A fire-type attack',
                animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#F08030', duration: 40, size: 6 }
            },
            {
                name: 'Flame Burst',
                power: 135,
                type: 'FIRE',
                accuracy: 0.8,
                description: 'A powerful fire attack',
                animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#FF5722', duration: 30, size: 8 }
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
            color: '#FF5722',
            drawFunction: drawFlarepup // Add draw function
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
                description: 'A basic attack',
                animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 }
            },
            {
                name: 'Water Gun',
                power: 105,
                type: 'WATER',
                accuracy: 0.9,
                description: 'A water-type attack',
                animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#6890F0', duration: 40, size: 6 }
            },
            {
                name: 'Bubble Beam',
                power: 135,
                type: 'WATER',
                accuracy: 0.8,
                description: 'A powerful water attack',
                animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#ADD8E6', duration: 50, size: 4 }
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
            color: '#2196F3',
            drawFunction: drawAquafin // Add draw function
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
    color: '#FF69B4', // Original color, will be replaced by graphics
    signColor: '#FFFFFF',
    roofColor: '#D2691E', // Brown roof
    wallColor: '#F5F5DC', // Beige wall
    doorColor: '#A0522D', // Sienna door
    windowColor: '#ADD8E6' // Light blue window
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
        radius: 25,
        drawFunction: drawThunderwing
    }
};

// Market Exclusive Nokemon Definitions
const marketExclusiveNokemon = {
    Mysticor: {
        name: 'Mysticor',
        level: 25,
        hp: 120,
        maxHp: 120,
        attack: 50, // Special attacker
        defense: 70,
        type: 'PSYCHIC',
        moves: [
            { name: 'Psybeam', power: 150, type: 'PSYCHIC', accuracy: 0.9, description: 'May confuse.' },
            { name: 'Moonblast', power: 180, type: 'PSYCHIC', accuracy: 0.95, description: 'Fairy-like blast (Psychic type for now)' }, // Using PSYCHIC as FAIRY type doesn't exist
            { name: 'Calm Mind', power: 0, type: 'PSYCHIC', accuracy: 1, description: 'Boosts Sp. Atk & Sp. Def', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.3); u.defense = Math.floor(u.defense * 1.3); return `${u.name} became calmer!`; } },
            { name: 'Recover', power: 0, type: 'NORMAL', accuracy: 1, description: 'Restores 50% HP', effect: (u,t) => { u.hp = Math.min(u.maxHp, u.hp + Math.floor(u.maxHp/2)); return `${u.name} recovered HP!`; } }
        ],
        sprite: { color: '#FF69B4', radius: 22, drawFunction: drawMysticor }
    },
    Shadower: {
        name: 'Shadower',
        level: 25,
        hp: 100,
        maxHp: 100,
        attack: 80,
        defense: 60,
        type: 'GHOST',
        moves: [
            { name: 'Shadow Claw', power: 160, type: 'GHOST', accuracy: 0.95, description: 'High crit. chance.' },
            { name: 'Dark Pulse', power: 170, type: 'GHOST', accuracy: 0.9, description: 'Dark-like pulse (Ghost type)' }, // Using GHOST as DARK type doesn't exist
            { name: 'Nasty Plot', power: 0, type: 'GHOST', accuracy: 1, description: 'Sharply boosts Sp. Atk', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.5); return `${u.name} plotted something nasty!`; } },
            { name: 'Will-O-Wisp', power: 0, type: 'FIRE', accuracy: 0.85, description: 'Burns the foe.', effect: (u,t) => { return `${t.name} was burned!`; } }
        ],
        sprite: { color: '#4A4A4A', radius: 20, drawFunction: drawShadower }
    },
    Geodrake: {
        name: 'Geodrake',
        level: 20,
        hp: 150,
        maxHp: 150,
        attack: 70,
        defense: 90,
        type: 'FIRE', // Representing earth/magma
        moves: [
            { name: 'Earth Power', power: 170, type: 'FIRE', accuracy: 0.9, description: 'Ground-shaking power (Fire type)' }, // Using FIRE as GROUND type doesn't exist
            { name: 'Rock Tomb', power: 140, type: 'NORMAL', accuracy: 0.95, description: 'Traps with rocks (Normal type)' }, // Using NORMAL as ROCK type doesn't exist
            { name: 'Iron Defense', power: 0, type: 'NORMAL', accuracy: 1, description: 'Sharply boosts Defense', effect: (u,t) => { u.defense = Math.floor(u.defense * 1.5); return `${u.name}'s defense hardened!`; } },
            { name: 'Flamethrower', power: 160, type: 'FIRE', accuracy: 0.9, description: 'Standard fire attack' }
        ],
        sprite: { color: '#A0522D', radius: 24, drawFunction: drawGeodrake }
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
        'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
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
    
    if (currentState === GAME_STATE.TUTORIAL) {
        if (e.key === 'Enter') {
            currentTutorialStep++;
            if (currentTutorialStep >= tutorialSteps.length) {
                currentState = GAME_STATE.STARTER_SELECTION;
                currentTutorialStep = 0;
                selectedStarterIndex = 0;  // Reset starter selection
            }
            audioSystem.playSound('menu');
        }
    } else if (currentState === GAME_STATE.STARTER_SELECTION) {
        if (e.key === 'ArrowLeft') {
            selectedStarterIndex = (selectedStarterIndex - 1 + starterNokemon.length) % starterNokemon.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'ArrowRight') {
            selectedStarterIndex = (selectedStarterIndex + 1) % starterNokemon.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'Enter') {
            startingNokemon = { ...starterNokemon[selectedStarterIndex] };
            currentState = GAME_STATE.EXPLORING;
            audioSystem.playSound('menu');
        }
    } else if (currentState === GAME_STATE.BATTLE) {
        if (e.key === '1' && isPlayerTurn) {
            console.log('Opening move menu');
            currentState = GAME_STATE.MOVE_SELECTION;
            moveMenuVisible = true;
        } else if (e.key === '2' && isPlayerTurn) {
            console.log('Opening Nokemon switch menu');
            currentState = GAME_STATE.NOKEMON_SELECTION;
            selectedNokemonIndex = 0;
        } else if (e.key === '3' && isPlayerTurn) {
            console.log('Attempting to run');
            run();
        } else if (e.key === '4' && isPlayerTurn) {
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
    } else if (e.key === 'x' || e.key === 'X') {
        if (currentState === GAME_STATE.EXPLORING) {
            currentState = GAME_STATE.PARTY_VIEW;
            audioSystem.playSound('menu');
        } else if (currentState === GAME_STATE.PARTY_VIEW) {
            currentState = GAME_STATE.EXPLORING;
            audioSystem.playSound('menu');
        }
    } else if (currentState === GAME_STATE.MOVE_LEARNING) {
        if (e.key === 'ArrowUp') {
            selectedMoveIndex = (selectedMoveIndex - 1 + availableMoves.length) % availableMoves.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'ArrowDown') {
            selectedMoveIndex = (selectedMoveIndex + 1) % availableMoves.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'Enter') {
            // Learn the selected move
            const moveToLearn = availableMoves[selectedMoveIndex].move;
            if (selectedNokemonForMoves.moves.length < 4) {
                selectedNokemonForMoves.moves.push(moveToLearn);
            } else {
                // Replace the last move
                selectedNokemonForMoves.moves[3] = moveToLearn;
            }
            currentState = GAME_STATE.PARTY_VIEW;
            audioSystem.playSound('menu');
        } else if (e.key === 'Escape') {
            currentState = GAME_STATE.PARTY_VIEW;
            audioSystem.playSound('menu');
        }
    } else if (currentState === GAME_STATE.EVOLUTION) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            currentState = GAME_STATE.PARTY_VIEW;
            evolutionMessage = '';
            audioSystem.playSound('menu');
        }
    } else if (currentState === GAME_STATE.MOVE_TUTOR) {
        const allPlayerNokemon = [startingNokemon, ...playerNokemon].filter(n => n);
        if (moveTutorPhase === 'nokemon_selection') {
            if (e.key === 'ArrowUp') {
                selectedNokemonIndex = (selectedNokemonIndex - 1 + allPlayerNokemon.length) % allPlayerNokemon.length;
                audioSystem.playSound('menu');
            } else if (e.key === 'ArrowDown') {
                selectedNokemonIndex = (selectedNokemonIndex + 1) % allPlayerNokemon.length;
                audioSystem.playSound('menu');
            } else if (e.key === 'Enter') {
                if (allPlayerNokemon.length > 0) {
                    nokemonToTeach = allPlayerNokemon[selectedNokemonIndex];
                    // Get special moves for this Nokemon, filter out already known moves
                    const availableSpecialMoves = SPECIAL_MOVES_TUTOR[nokemonToTeach.name] || [];
                    movesToTeach = availableSpecialMoves.filter(specialMove => 
                        !nokemonToTeach.moves.some(currentMove => currentMove.name === specialMove.name)
                    );
                    selectedMoveIndex = 0;
                    moveTutorPhase = 'move_selection';
                    audioSystem.playSound('menu');
                }
            } else if (e.key === 'Escape') {
                currentState = GAME_STATE.EXPLORING;
                audioSystem.playSound('menu');
            }
        } else if (moveTutorPhase === 'move_selection') {
            if (e.key === 'ArrowUp') {
                if (movesToTeach.length > 0) {
                    selectedMoveIndex = (selectedMoveIndex - 1 + movesToTeach.length) % movesToTeach.length;
                    audioSystem.playSound('menu');
                }
            } else if (e.key === 'ArrowDown') {
                if (movesToTeach.length > 0) {
                    selectedMoveIndex = (selectedMoveIndex + 1) % movesToTeach.length;
                    audioSystem.playSound('menu');
                }
            } else if (e.key === 'Enter') {
                if (movesToTeach.length > 0) {
                    const chosenMove = movesToTeach[selectedMoveIndex];
                    if (nokemonToTeach.moves.length < 4) {
                        nokemonToTeach.moves.push(chosenMove);
                        battleMessage = `${nokemonToTeach.name} learned ${chosenMove.name}!`;
                        battleMessageTimer = 120;
                        currentState = GAME_STATE.EXPLORING; // Or back to nokemon_selection for another?
                        audioSystem.playSound('levelUp'); // Or a different sound for move taught
                    } else {
                        moveReplaceIndex = 0;
                        moveTutorPhase = 'replace_move_selection';
                        audioSystem.playSound('menu');
                    }
                } else {
                    // No moves to teach, go back
                    moveTutorPhase = 'nokemon_selection';
                    audioSystem.playSound('menu');
                }
            } else if (e.key === 'Escape') {
                moveTutorPhase = 'nokemon_selection';
                audioSystem.playSound('menu');
            }
        } else if (moveTutorPhase === 'replace_move_selection') {
            if (e.key === 'ArrowUp') {
                moveReplaceIndex = (moveReplaceIndex - 1 + nokemonToTeach.moves.length) % nokemonToTeach.moves.length;
                audioSystem.playSound('menu');
            } else if (e.key === 'ArrowDown') {
                moveReplaceIndex = (moveReplaceIndex + 1) % nokemonToTeach.moves.length;
                audioSystem.playSound('menu');
            } else if (e.key === 'Enter') {
                const chosenMoveToLearn = movesToTeach[selectedMoveIndex];
                nokemonToTeach.moves[moveReplaceIndex] = chosenMoveToLearn;
                battleMessage = `${nokemonToTeach.name} forgot a move and learned ${chosenMoveToLearn.name}!`;
                battleMessageTimer = 120;
                currentState = GAME_STATE.EXPLORING; // Or back to nokemon_selection?
                audioSystem.playSound('levelUp'); // Or a different sound
            } else if (e.key === 'Escape') {
                moveTutorPhase = 'move_selection'; // Go back to selecting a special move
                audioSystem.playSound('menu');
            }
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

    // Consolidated and updated NOKEMON_SHOP logic
    else if (currentState === GAME_STATE.NOKEMON_SHOP) {
        if (e.key === 'ArrowUp') {
            selectedShopItemIndex = (selectedShopItemIndex - 1 + nokemonForSale.length) % nokemonForSale.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'ArrowDown') {
            selectedShopItemIndex = (selectedShopItemIndex + 1) % nokemonForSale.length;
            audioSystem.playSound('menu');
        } else if (e.key === 'Enter') {
            const selectedNokemonToBuy = { ...nokemonForSale[selectedShopItemIndex] }; // Create a fresh copy
            const partySize = (startingNokemon ? 1 : 0) + playerNokemon.length;

            if (player.currency >= selectedNokemonToBuy.price) {
                if (partySize < 6) { // Max 6 Nokemon in party
                    player.currency -= selectedNokemonToBuy.price;
                    playerNokemon.push(selectedNokemonToBuy);
                    battleMessage = `${selectedNokemonToBuy.name} joined your team!`;
                    audioSystem.playSound('catch'); // Re-use catch sound
                    battleMessageTimer = 120;
                    currentState = GAME_STATE.EXPLORING; // Exit shop
                    currentArea = 'town'; // Stay in town
                } else {
                    battleMessage = 'Your party is full!';
                    audioSystem.playSound('menu'); // Or some error sound
                    battleMessageTimer = 120;
                    // Don't exit shop if party is full, allow another selection or exit with Escape
                }
            } else {
                battleMessage = "Not enough coins!";
                audioSystem.playSound('menu'); // Or some error/declined sound
                battleMessageTimer = 120;
                // Don't exit shop if not enough coins, allow another selection or exit with Escape
            }
        } else if (e.key === 'Escape') {
            currentState = GAME_STATE.EXPLORING;
            currentArea = 'town';
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

    // Handle area transition (modified)
    if (keys['t'] && canAccessNewArea && !isTransitioning) {
        isTransitioning = true;
        transitionDirection = 1;
        transitionAlpha = 0;
        audioSystem.playSound('menu');
        // The actual area switch happens when transitionAlpha >= 1
    }

    if (isTransitioning) {
        transitionAlpha += transitionDirection * (1 / transitionDuration);
        if (transitionAlpha >= 1 && transitionDirection === 1) { // Faded out
            if (currentArea === 'starter') {
                currentArea = 'advanced';
            } else if (currentArea === 'advanced') {
                currentArea = 'town'; // Advanced -> Town
            } else if (currentArea === 'town') {
                currentArea = 'starter'; // Town -> Starter (looping back)
            }
            player.x = canvas.width / 2 - 16;
            player.y = canvas.height / 2 - 16;
            transitionDirection = -1; // Start fading in
            battleMessage = `Welcome to the ${currentArea.charAt(0).toUpperCase() + currentArea.slice(1)} Area!`;
            battleMessageTimer = 120;
        } else if (transitionAlpha <= 0 && transitionDirection === -1) { // Faded in
            isTransitioning = false;
            // Message is set when area changes
        }
    }

    // Update animations
    updateAnimations();

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

        // Handle Move Tutor interaction
        if (currentArea === 'advanced') {
            const onMoveTutorSquare = 
                player.x + player.width > moveTutorSquare.x &&
                player.x < moveTutorSquare.x + moveTutorSquare.size &&
                player.y + player.height > moveTutorSquare.y &&
                player.y < moveTutorSquare.y + moveTutorSquare.size;

            if (onMoveTutorSquare && keys['m']) {
                console.log('Activating Move Tutor');
                currentState = GAME_STATE.MOVE_TUTOR;
                selectedNokemonIndex = 0; // Reset selection for Nokemon choice
                selectedMoveIndex = 0; // Reset selection for move choice
                audioSystem.playSound('menu'); 
            }
        }

        // Handle NokeMart entry
        if (currentArea === 'town') {
            const inNokeMartZone = 
                player.x + player.width > nokeMartBuilding.x &&
                player.x < nokeMartBuilding.x + nokeMartBuilding.width &&
                player.y + player.height > nokeMartBuilding.y &&
                player.y < nokeMartBuilding.y + nokeMartBuilding.height;
            
            if (inNokeMartZone && keys['s']) { // 'S' for Shop
                currentState = GAME_STATE.NOKEMON_SHOP;
                selectedShopItemIndex = 0; // Reset selection
                audioSystem.playSound('menu');
                keys['s'] = false; // Consume key press
            }
        }
    }

    // Only try encounters when exploring and not in cooldown
    if (currentState === GAME_STATE.EXPLORING && battleCooldown === 0 && currentArea !== 'town') { // Prevent encounters in town
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
    
    // Initialize battle Nokemon with proper sprite position and current HP
    const allNokemon = [startingNokemon, ...playerNokemon];
    const selectedNokemon = allNokemon[selectedNokemonIndex];
    if (!selectedNokemon) {
        console.error('No Nokemon selected for battle');
        return;
    }
    
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
    
    // Update the original Nokemon's HP with the battle Nokemon's HP
    const allNokemon = [startingNokemon, ...playerNokemon];
    const originalNokemon = allNokemon[selectedNokemonIndex];
    if (originalNokemon) {
        originalNokemon.hp = battleNokemon.hp;
        console.log(`Updated ${originalNokemon.name}'s HP to ${originalNokemon.hp}`);
    }
    
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

// Update move learning data with more diverse moves
const MOVE_LEARNING = {
    'Leaflet': [
        { level: 1, move: { name: 'Tackle', power: 90, type: 'NORMAL', accuracy: 0.95, description: 'A basic attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 } } },
        { level: 5, move: { name: 'Vine Whip', power: 105, type: 'GRASS', accuracy: 0.9, description: 'A grass-type attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 25, amplitude: 4 } } },
        { level: 8, move: { name: 'Razor Leaf', power: 120, type: 'GRASS', accuracy: 0.85, description: 'Sharp leaves cut the target', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#4CAF50', duration: 35, size: 5 } } },
        { level: 12, move: { name: 'Leaf Storm', power: 135, type: 'GRASS', accuracy: 0.8, description: 'A powerful grass attack', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#388E3C', duration: 35, size: 7 } } },
        { level: 15, move: { name: 'Synthesis', power: 0, type: 'GRASS', accuracy: 1, description: 'Restores HP', effect: (user, target) => {
            user.hp = Math.min(user.maxHp, user.hp + Math.floor(user.maxHp * 0.3));
            return `${user.name} restored HP!`;
        }}}
    ],
    'Flarepup': [
        { level: 1, move: { name: 'Tackle', power: 90, type: 'NORMAL', accuracy: 0.95, description: 'A basic attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 } } },
        { level: 5, move: { name: 'Ember', power: 105, type: 'FIRE', accuracy: 0.9, description: 'A fire-type attack', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#F08030', duration: 40, size: 6 } } },
        { level: 8, move: { name: 'Flame Charge', power: 115, type: 'FIRE', accuracy: 0.9, description: 'A quick fire attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 15, amplitude: 5 } } },
        { level: 12, move: { name: 'Flame Burst', power: 135, type: 'FIRE', accuracy: 0.8, description: 'A powerful fire attack', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#FF5722', duration: 30, size: 8 } } },
        { level: 15, move: { name: 'Sunny Day', power: 0, type: 'FIRE', accuracy: 1, description: 'Boosts fire moves', effect: (user, target) => {
            user.attack = Math.floor(user.attack * 1.3);
            return `${user.name}'s fire moves are stronger!`;
        }}}
    ],
    'Aquafin': [
        { level: 1, move: { name: 'Tackle', power: 90, type: 'NORMAL', accuracy: 0.95, description: 'A basic attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 } } },
        { level: 5, move: { name: 'Water Gun', power: 105, type: 'WATER', accuracy: 0.9, description: 'A water-type attack', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#6890F0', duration: 40, size: 6 } } },
        { level: 8, move: { name: 'Aqua Jet', power: 115, type: 'WATER', accuracy: 0.95, description: 'A fast water attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 15, amplitude: 5 } } },
        { level: 12, move: { name: 'Bubble Beam', power: 135, type: 'WATER', accuracy: 0.8, description: 'A powerful water attack', animation: { type: ANIMATION_TYPES.PROJECTILE, color: '#ADD8E6', duration: 50, size: 4 } } },
        { level: 15, move: { name: 'Rain Dance', power: 0, type: 'WATER', accuracy: 1, description: 'Boosts water moves', effect: (user, target) => {
            user.attack = Math.floor(user.attack * 1.3);
            return `${user.name}'s water moves are stronger!`;
        }}}
    ],
    // Adding new Wild Nokemon level-up moves
    'Scamper': [
        { level: 1, move: { name: 'Tackle', power: 90, type: 'NORMAL', accuracy: 0.95, description: 'A basic attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 3 } } },
        { level: 4, move: { name: 'Tail Whip', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Defense.', effect: (u,t) => { t.defense = Math.max(10, t.defense - 10); return `${t.name}'s Defense fell!`; } } },
        { level: 8, move: { name: 'Quick Attack', power: 75, type: 'NORMAL', accuracy: 1, description: 'A fast attack', animation: { type: ANIMATION_TYPES.SHAKE, duration: 15, amplitude: 2 } } },
        { level: 12, move: { name: 'Bite', power: 105, type: 'NORMAL', accuracy: 0.9, description: 'A strong bite', animation: { type: ANIMATION_TYPES.SHAKE, duration: 20, amplitude: 4 } } }
    ],
    'Scampede': [
        { level: 1, move: { name: 'Tackle', power: 90, type: 'NORMAL', accuracy: 0.95, description: 'A basic attack' } },
        { level: 1, move: { name: 'Tail Whip', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Defense.', effect: (u,t) => { t.defense = Math.max(10, t.defense - 10); return `${t.name}'s Defense fell!`; } } },
        { level: 8, move: { name: 'Quick Attack', power: 75, type: 'NORMAL', accuracy: 1, description: 'A fast attack' } },
        { level: 12, move: { name: 'Bite', power: 105, type: 'NORMAL', accuracy: 0.9, description: 'A strong bite' } },
        { level: 20, move: { name: 'Hyper Fang', power: 120, type: 'NORMAL', accuracy: 0.9, description: 'A powerful bite.' } },
        { level: 25, move: { name: 'Double-Edge', power: 130, type: 'NORMAL', accuracy: 1, description: 'User takes recoil.', effect: (u,t) => { u.hp -= 20; return `${u.name} took recoil damage!`; } } }
    ],
    'Skywing': [
        { level: 1, move: { name: 'Gust', power: 90, type: 'FLYING', accuracy: 0.95, description: 'A flying attack' } },
        { level: 5, move: { name: 'Sand Attack', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Accuracy.', effect: (u,t) => { return `${t.name}'s Accuracy fell!`; } } }, // Note: Accuracy effect not implemented in damage calc
        { level: 9, move: { name: 'Wing Attack', power: 100, type: 'FLYING', accuracy: 1, description: 'Strikes with wings.' } },
        { level: 13, move: { name: 'Agility', power: 0, type: 'PSYCHIC', accuracy: 1, description: 'Boosts user Speed.', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.2); return `${u.name}'s Speed rose!`; } } } // Using attack as proxy for speed boost visual
    ],
    'Galeverex': [
        { level: 1, move: { name: 'Gust', power: 90, type: 'FLYING', accuracy: 0.95, description: 'A flying attack' } },
        { level: 1, move: { name: 'Sand Attack', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Accuracy.', effect: (u,t) => { return `${t.name}'s Accuracy fell!`; } } },
        { level: 9, move: { name: 'Wing Attack', power: 100, type: 'FLYING', accuracy: 1, description: 'Strikes with wings.' } },
        { level: 13, move: { name: 'Agility', power: 0, type: 'PSYCHIC', accuracy: 1, description: 'Boosts user Speed.', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.2); return `${u.name}'s Speed rose!`; } } },
        { level: 22, move: { name: 'Air Slash', power: 115, type: 'FLYING', accuracy: 0.95, description: 'May cause flinching.' } },
        { level: 28, move: { name: 'Hurricane', power: 130, type: 'FLYING', accuracy: 0.7, description: 'Powerful, may confuse.', effect: (user, target) => {
            // This move also deals damage, so the effect for confusion needs to be handled after damage, or separately.
            // For now, let's assume it ONLY confuses if the effect part is called instead of damage.
            // A better way would be to have moves have a primary effect (damage) and a secondary effect (status with a chance).
            // For simplicity here, if it has an effect function, it's a status move primarily.
            // Let's adjust Hurricane to be a status move for this example, or we need to refactor how moves work.
            // --- REVISITING Hurricane: Original design of game implies effect moves have power 0. --- 
            // --- Hurricane is a damage dealing move that CAN confuse. This needs a more complex move execution logic. ---
            // --- For NOW, to make it work as a confusion-inducer, I'll treat its effect: part as primary. ---
            // --- This means Hurricane WON'T do damage if this effect is kept like this. We should address this later. ---
            if (Math.random() < 0.3) { // Adding a 30% chance to confuse for Hurricane
                target.statusCondition = 'confused';
                target.statusDuration = 3;
                return `${target.name} became confused from the turbulent winds!`;
            }
            return `${target.name} was battered by Hurricane!`; // Message if confusion doesn't land
        } } }
    ],
    'Sproutling': [
        { level: 1, move: { name: 'Absorb', power: 90, type: 'GRASS', accuracy: 0.95, description: 'Steals HP' } },
        { level: 6, move: { name: 'Growth', power: 0, type: 'NORMAL', accuracy: 1, description: 'Raises Attack.', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.3); return `${u.name}'s Attack rose!`; } } },
        { level: 10, move: { name: 'Razor Leaf', power: 120, type: 'GRASS', accuracy: 0.85, description: 'Sharp leaves cut the target' } },
        { level: 14, move: { name: 'Stun Spore', power: 0, type: 'GRASS', accuracy: 0.75, description: 'May paralyze foe.', effect: (u,t) => { return `${t.name} may be paralyzed!`; } } }
    ],
    'Grovyleaf': [
        { level: 1, move: { name: 'Absorb', power: 90, type: 'GRASS', accuracy: 0.95, description: 'Steals HP' } },
        { level: 1, move: { name: 'Growth', power: 0, type: 'NORMAL', accuracy: 1, description: 'Raises Attack.', effect: (u,t) => { u.attack = Math.floor(u.attack * 1.3); return `${u.name}'s Attack rose!`; } } },
        { level: 10, move: { name: 'Razor Leaf', power: 120, type: 'GRASS', accuracy: 0.85, description: 'Sharp leaves cut the target' } },
        { level: 14, move: { name: 'Stun Spore', power: 0, type: 'GRASS', accuracy: 0.75, description: 'May paralyze foe.', effect: (u,t) => { return `${t.name} may be paralyzed!`; } } },
        { level: 18, move: { name: 'Leaf Blade', power: 125, type: 'GRASS', accuracy: 1, description: 'High crit. ratio.' } },
        { level: 25, move: { name: 'Solar Beam', power: 120, type: 'GRASS', accuracy: 1, description: '2-turn attack.' } } // Already in special, good as level up too
    ],
    'Flametail': [
        { level: 1, move: { name: 'Ember', power: 105, type: 'FIRE', accuracy: 0.9, description: 'A fire attack' } },
        { level: 7, move: { name: 'Leer', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Defense.', effect: (u,t) => { t.defense = Math.max(10, t.defense - 10); return `${t.name}'s Defense fell!`; } } },
        { level: 11, move: { name: 'Fire Spin', power: 95, type: 'FIRE', accuracy: 0.85, description: 'Traps foe for 2-5 turns.' } },
        { level: 15, move: { name: 'Will-O-Wisp', power: 0, type: 'FIRE', accuracy: 0.85, description: 'Burns the foe.', effect: (u,t) => { return `${t.name} was burned!`; } } }
    ],
    'Pyroroar': [
        { level: 1, move: { name: 'Ember', power: 105, type: 'FIRE', accuracy: 0.9, description: 'A fire attack' } },
        { level: 1, move: { name: 'Leer', power: 0, type: 'NORMAL', accuracy: 1, description: 'Lowers foe Defense.', effect: (u,t) => { t.defense = Math.max(10, t.defense - 10); return `${t.name}'s Defense fell!`; } } },
        { level: 11, move: { name: 'Fire Spin', power: 95, type: 'FIRE', accuracy: 0.85, description: 'Traps foe for 2-5 turns.' } },
        { level: 15, move: { name: 'Will-O-Wisp', power: 0, type: 'FIRE', accuracy: 0.85, description: 'Burns the foe.', effect: (u,t) => { return `${t.name} was burned!`; } } },
        { level: 24, move: { name: 'Flamethrower', power: 90, type: 'FIRE', accuracy: 1, description: 'May burn foe.' } }, // From special moves too
        { level: 30, move: { name: 'Flare Blitz', power: 120, type: 'FIRE', accuracy: 1, description: 'User takes recoil, may burn.', effect: (u,t) => { u.hp -= 30; return `${u.name} took recoil and ${t.name} may be burned!`; } } }
    ],
    'Thunderwing': [
        { level: 15, move: { name: 'Thunder Shock', power: 90, type: 'ELECTRIC', accuracy: 1, description: 'May paralyze.' } },
        { level: 20, move: { name: 'Charge Beam', power: 100, type: 'ELECTRIC', accuracy: 0.9, description: 'May raise Sp. Atk.' } },
        { level: 25, move: { name: 'Discharge', power: 120, type: 'ELECTRIC', accuracy: 1, description: 'May paralyze everyone.' } },
        { level: 30, move: { name: 'Thunder', power: 130, type: 'ELECTRIC', accuracy: 0.7, description: 'Powerful, may paralyze.' } }
    ]
};

// Update the levelUp function to automatically learn moves
function levelUp(nokemon) {
    nokemon.level++;
    nokemon.maxHp += 5;
    nokemon.hp = nokemon.maxHp;
    nokemon.attack += 2;
    nokemon.defense += 2;
    let evolutionHappened = false;
    let learnedMoveMessage = null;
    
    // Check for new moves to learn
    const learnableMoves = MOVE_LEARNING[nokemon.name] || [];
    const newMoves = learnableMoves.filter(learn => 
        learn.level === nokemon.level && 
        !nokemon.moves.some(move => move.name === learn.move.name)
    );
    
    if (newMoves.length > 0) {
        // Automatically learn the new move
        const newMove = newMoves[0].move;
        if (nokemon.moves.length < 4) {
            nokemon.moves.push(newMove);
        } else {
            // Replace the last move if we already have 4 moves
            nokemon.moves[3] = newMove;
        }
        // battleMessage = `${nokemon.name} learned ${newMove.name}!`;
        // battleMessageTimer = 120;
        learnedMoveMessage = `${nokemon.name} learned ${newMove.name}!`;
    }
    
    // Check for evolution
    if (checkAndEvolve(nokemon)) {
        // evolutionMessage is set by checkAndEvolve
        // battleMessage = evolutionMessage;
        // battleMessageTimer = 120;
        evolutionHappened = true; // Flag that evolution occurred
    }
    
    audioSystem.playSound('levelUp');

    // Construct and return the level up message
    let finalMessage = `${nokemon.name} grew to level ${nokemon.level}!`;
    if (evolutionHappened) {
        finalMessage = evolutionMessage; // Evolution message takes priority
    }
    if (learnedMoveMessage) {
        if (evolutionHappened) { // If evolution also happened, append move learning to its message
            finalMessage += ` And learned ${newMoves[0].move.name}!`;
        } else { // Otherwise, it's the primary part of this event
            finalMessage = learnedMoveMessage;
        }
    }
    return finalMessage; // Return the composite message
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
    
    if (Math.random() > move.accuracy) { // Move missed
        battleMessage = `${battleNokemon.name}'s ${move.name} missed!`;
        battleMessageTimer = 60; 

        if (move.animation && move.animation.type === ANIMATION_TYPES.PROJECTILE) {
            // Fire projectile towards original target spot even on miss
            startAnimation(move.animation.type, battleNokemon.sprite, currentWildNokemon.sprite, move.animation);
        }
        // Note: Shake animations for the attacker (if any) wouldn't play on a miss.
        // If the missed move was a shake-inducing hit, it simply doesn't connect.

        // Trigger dodge animation on the defender
        startAnimation(ANIMATION_TYPES.DODGE, battleNokemon.sprite, currentWildNokemon.sprite, { duration: 25, distance: 20 });

        isPlayerTurn = false;
        console.log('Move missed, opponent dodged');
        setTimeout(wildNokemonTurn, 700); // Delay for dodge and projectile to be seen
        return;
    }

    // Play attack sound (for hits)
    audioSystem.playSound('attack');

    // Start animation if defined for the move (for hits)
    if (move.animation) {
        startAnimation(move.animation.type, battleNokemon.sprite, currentWildNokemon.sprite, move.animation);
    }

    const animationDelay = move.animation?.duration ? move.animation.duration * 15 : 100;
    setTimeout(() => {
        // Handle status moves
        if (move.power === 0 && move.effect) {
            battleMessage = move.effect(battleNokemon, currentWildNokemon);
            battleMessageTimer = 60;
            isPlayerTurn = false;
            console.log('Used status move:', move.name);
            setTimeout(wildNokemonTurn, 1000);
        } else {
            // Handle attack moves
            const damage = calculateDamage(battleNokemon, currentWildNokemon, move);
            currentWildNokemon.hp -= damage;
            let message = `${battleNokemon.name} used ${move.name}! Dealt ${damage} damage!`;

            // HP Absorption for specific moves
            if (move.name === 'Giga Drain' || move.name === 'Absorb') {
                const healedAmount = Math.floor(damage / 2); // Heal 50% of damage dealt
                battleNokemon.hp = Math.min(battleNokemon.maxHp, battleNokemon.hp + healedAmount);
                message += ` ${battleNokemon.name} absorbed ${healedAmount} HP!`;
            }
            
            battleMessage = message;
            battleMessageTimer = 60;
            isPlayerTurn = false;
            console.log('Dealt damage:', damage);

            // Check if wild Nokemon fainted
            if (currentWildNokemon.hp <= 0) {
                console.log('Wild Nokemon fainted');
                setTimeout(() => {
                    battleMessage = `Wild ${currentWildNokemon.name} fainted!`;
                    battleMessageTimer = 60;
                    // Player earns money for defeating the Nokemon
                    const moneyEarned = currentWildNokemon.level * 10; // Example: 10 coins per level
                    player.currency += moneyEarned;
                    
                    setTimeout(() => {
                        battleMessage = `Wild ${currentWildNokemon.name} fainted! You found ${moneyEarned} coins!`;
                        battleMessageTimer = 120; // Longer time for combined message

                        // Level up after winning
                        const levelUpMessage = levelUp(battleNokemon); // levelUp might also set battleMessage
                        // Update the original Nokemon's stats
                        const allNokemon = [startingNokemon, ...playerNokemon];
                        const originalNokemon = allNokemon[selectedNokemonIndex];
                        originalNokemon.level = battleNokemon.level;
                        originalNokemon.maxHp = battleNokemon.maxHp;
                        originalNokemon.hp = battleNokemon.hp; // Keep the current HP
                        originalNokemon.attack = battleNokemon.attack;
                        originalNokemon.defense = battleNokemon.defense;
                        
                        // If levelUp function set a message, append coins message, or prioritize level up message
                        // For simplicity, we'll let the levelUp message overwrite if it occurs, 
                        // or the fainted + coins message will show. 
                        // A more robust system would queue messages.
                        if (levelUpMessage) { // Assuming levelUp returns a message string or null
                            battleMessage = levelUpMessage + ` You also found ${moneyEarned} coins!`;
                        } else {
                             battleMessage = `Wild ${currentWildNokemon.name} fainted! You found ${moneyEarned} coins!`;
                        }
                        battleMessageTimer = 180; // Even longer for potentially combined messages

                        setTimeout(() => {
                            endBattle();
                        }, 2000);
                    }, 1000);
                }, 1000);
                return; // Stop further execution here if fainted
            }

            // Wild Nokemon's turn after successful attack
            setTimeout(wildNokemonTurn, 1000);
        }
    }, animationDelay);
}

function wildNokemonTurn() {
    if (!currentWildNokemon || !battleNokemon || currentWildNokemon.hp <= 0) {
        console.log('Cannot execute wild Nokemon turn: Invalid battle state');
        return;
    }

    const wildMove = currentWildNokemon.moves[Math.floor(Math.random() * currentWildNokemon.moves.length)];
    if (!wildMove) {
        console.log('Invalid wild Nokemon move');
        isPlayerTurn = true; // Give turn back if move fails
        return;
    }
    
    console.log('Wild Nokemon using move:', wildMove.name);
    
    if (Math.random() > wildMove.accuracy) { // Move missed
        battleMessage = `Wild ${currentWildNokemon.name}'s ${wildMove.name} missed!`;
        battleMessageTimer = 60;

        if (wildMove.animation && wildMove.animation.type === ANIMATION_TYPES.PROJECTILE) {
            startAnimation(wildMove.animation.type, currentWildNokemon.sprite, battleNokemon.sprite, wildMove.animation);
        }

        startAnimation(ANIMATION_TYPES.DODGE, currentWildNokemon.sprite, battleNokemon.sprite, { duration: 25, distance: 20 });

        isPlayerTurn = true;
        console.log('Wild Nokemon move missed, player dodged');
        // Turn passes back to player, no specific delay needed here beyond normal flow
        return;
    }

    // Play attack sound (for hits)
    audioSystem.playSound('attack');

    // Start animation if defined (for hits)
    if (wildMove.animation) {
        startAnimation(wildMove.animation.type, currentWildNokemon.sprite, battleNokemon.sprite, wildMove.animation);
    }

    const animationDelay = wildMove.animation?.duration ? wildMove.animation.duration * 15 : 100;
    setTimeout(() => {
        if (wildMove.power === 0 && wildMove.effect) {
            battleMessage = wildMove.effect(currentWildNokemon, battleNokemon);
            battleMessageTimer = 60;
            isPlayerTurn = true;
            console.log('Wild Nokemon used status move');
        } else {
            const wildDamage = calculateDamage(currentWildNokemon, battleNokemon, wildMove);
            battleNokemon.hp -= wildDamage;
            let message = `Wild ${currentWildNokemon.name} used ${wildMove.name}! Dealt ${wildDamage} damage!`;

            // HP Absorption for specific moves (for wild Nokemon)
            if (wildMove.name === 'Giga Drain' || wildMove.name === 'Absorb') {
                const healedAmount = Math.floor(wildDamage / 2); // Heal 50% of damage dealt
                currentWildNokemon.hp = Math.min(currentWildNokemon.maxHp, currentWildNokemon.hp + healedAmount);
                message += ` Wild ${currentWildNokemon.name} absorbed ${healedAmount} HP!`;
            }

            battleMessage = message;
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
                
                // Check if there are any other Nokemon available
                const allNokemon = [startingNokemon, ...playerNokemon];
                const availableNokemon = allNokemon.filter(nokemon => nokemon && nokemon.hp > 0);
                
                if (availableNokemon.length > 0) {
                    setTimeout(() => {
                        // Use the existing Nokemon instead of creating a copy
                        const nextNokemon = availableNokemon[0];
                        const nextIndex = allNokemon.indexOf(nextNokemon);
                        
                        // Update battle Nokemon to use the existing one
                        battleNokemon = nextNokemon;
                        selectedNokemonIndex = nextIndex;
                        
                        battleMessage = `Go! ${nextNokemon.name}!`;
                        battleMessageTimer = 60;
                        
                        // Play switch sound
                        audioSystem.playSound('menu');
                    }, 1000);
                } else {
                    setTimeout(() => {
                        endBattle();
                        checkGameOver();
                    }, 1000);
                }
            }, 1000);
            // Ensure turn doesn't immediately pass back if fainted
            isPlayerTurn = false; // Keep turn with fainting logic
        }

    }, animationDelay);
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

    // Calculate shake offsets
    let playerShakeX = 0, playerShakeY = 0;
    let wildShakeX = 0, wildShakeY = 0;
    let playerDodgeXOffset = 0, playerDodgeYOffset = 0; 
    let wildDodgeXOffset = 0, wildDodgeYOffset = 0;   

    activeAnimations.forEach(anim => {
        if (anim.type === ANIMATION_TYPES.SHAKE) {
            const shakeProgress = anim.progress / anim.duration;
            const shakeAngle = shakeProgress * Math.PI * anim.frequency;
            const shakeOffset = Math.sin(shakeAngle) * anim.amplitude * (1 - shakeProgress); // Diminish shake over time

            if (anim.targetSprite === battleNokemon.sprite) {
                playerShakeX = shakeOffset;
                playerShakeY = shakeOffset;
            }
            if (anim.targetSprite === currentWildNokemon.sprite) {
                wildShakeX = shakeOffset;
                wildShakeY = shakeOffset;
            }
        } else if (anim.type === ANIMATION_TYPES.DODGE) {
            const progress = Number(anim.progress) || 0;
            const duration = Number(anim.duration) || 1; // Prevent division by zero if duration is bad
            const dodgeDistance = Number(anim.dodgeDistance) || 0;
            const dodgeDirection = Number(anim.dodgeDirection) || 1;

            const dodgeProgress = Math.max(0, Math.min(1, progress / duration)); // Ensure 0-1 range

            let currentDodgeShiftMagnitude = 0;
            if (dodgeProgress <= 0.5) { // Move out for first half
                currentDodgeShiftMagnitude = dodgeDistance * (dodgeProgress * 2);
            } else { // Move back for second half
                currentDodgeShiftMagnitude = dodgeDistance * ((1 - dodgeProgress) * 2);
            }
            currentDodgeShiftMagnitude = Math.max(0, currentDodgeShiftMagnitude); // Ensure non-negative magnitude

            const calculatedOffset = currentDodgeShiftMagnitude * dodgeDirection;

            if (anim.targetSprite === battleNokemon.sprite) {
                playerDodgeXOffset = calculatedOffset;
                // playerDodgeYOffset remains 0 for horizontal dodge
            } else if (anim.targetSprite === currentWildNokemon.sprite) {
                wildDodgeXOffset = calculatedOffset;
                // wildDodgeYOffset remains 0 for horizontal dodge
            }
        }
    });

    // Draw player's Nokemon with potential shake offset
    const playerDrawX = battleNokemon.sprite.x + playerShakeX + playerDodgeXOffset;
    const playerDrawY = battleNokemon.sprite.y + playerShakeY + playerDodgeYOffset;
    if (battleNokemon.sprite.drawFunction) {
        battleNokemon.sprite.drawFunction(ctx, playerDrawX, playerDrawY, battleNokemon.sprite.radius);
    } else {
        ctx.beginPath();
        ctx.arc(playerDrawX, playerDrawY, battleNokemon.sprite.radius, 0, Math.PI * 2);
        ctx.fillStyle = battleNokemon.sprite.color;
        ctx.fill();
        ctx.closePath();
    }

    // Draw wild Nokemon with potential shake offset
    const wildDrawX = currentWildNokemon.sprite.x + wildShakeX + wildDodgeXOffset;
    const wildDrawY = currentWildNokemon.sprite.y + wildShakeY + wildDodgeYOffset;
    if (currentWildNokemon.sprite.drawFunction) {
        currentWildNokemon.sprite.drawFunction(ctx, wildDrawX, wildDrawY, currentWildNokemon.sprite.radius);
    } else {
        ctx.beginPath();
        ctx.arc(wildDrawX, wildDrawY, currentWildNokemon.sprite.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentWildNokemon.sprite.color;
        ctx.fill();
        ctx.closePath();
    }

    // Draw animations (projectiles etc.) OVER the Nokemon
    drawAnimations(ctx);

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
        const menuHeight = 120; // Increased height for new option

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
        ctx.fillText('2. Switch', menuX + 10, menuY + 60);
        ctx.fillText('3. Run', menuX + 10, menuY + 90);
        ctx.fillText('4. Catch', menuX + 10, menuY + 120);

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
        if (nokemon.sprite.drawFunction) {
            nokemon.sprite.drawFunction(ctx, x, y - 30, 30); // Using radius 30 for selection screen
        } else {
             // Fallback to circle
            ctx.beginPath();
            ctx.arc(x, y - 30, 30, 0, Math.PI * 2);
            ctx.fillStyle = nokemon.sprite.color;
            ctx.fill();
        }
        
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
    // Draw semi-transparent black background with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw game over text with shadow
    ctx.font = 'bold 64px sans-serif';
    ctx.textAlign = 'center';
    
    // Draw shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillText('GAME OVER', canvas.width / 2 + 4, canvas.height / 2 - 46);
    
    // Draw main text
    ctx.fillStyle = '#FF0000';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 50);
    
    // Draw message with animation
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(gameOverMessage, canvas.width / 2, canvas.height / 2 + 20);
    
    // Draw restart instructions with pulsing effect
    const pulseIntensity = Math.sin(Date.now() / 200) * 0.2 + 0.8;
    ctx.font = '24px sans-serif';
    ctx.fillStyle = `rgba(255, 255, 255, ${pulseIntensity})`;
    ctx.fillText('Press Enter to restart', canvas.width / 2, canvas.height / 2 + 80);
    
    // Draw final stats
    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    const teamLevel = calculateTeamLevel();
    ctx.fillText(`Final Team Level: ${teamLevel}`, canvas.width / 2, canvas.height / 2 + 120);
    ctx.fillText(`Nokemon Caught: ${playerNokemon.length}`, canvas.width / 2, canvas.height / 2 + 150);
}

// Update the checkGameOver function to include more dramatic effects
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
        
        // Add dramatic pause
        setTimeout(() => {
            // Show final stats
            const teamLevel = calculateTeamLevel();
            gameOverMessage = `Your journey ended at Team Level ${teamLevel} with ${playerNokemon.length} Nokemon caught.`;
        }, 2000);
    }
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

    // Draw wild Nokemon info if in battle
    if (currentState === GAME_STATE.BATTLE || currentState === GAME_STATE.NOKEMON_SELECTION) {
        if (currentWildNokemon) {  // Add check for currentWildNokemon
            // Draw wild Nokemon sprite
            if (currentWildNokemon.sprite.drawFunction) {
                currentWildNokemon.sprite.drawFunction(ctx, canvas.width - 100, 100, currentWildNokemon.sprite.radius);
            } else {
                // Fallback to circle
                ctx.beginPath();
                ctx.arc(canvas.width - 100, 100, currentWildNokemon.sprite.radius, 0, Math.PI * 2);
                ctx.fillStyle = currentWildNokemon.sprite.color;
                ctx.fill();
            }

            // Draw wild Nokemon info
            ctx.font = '24px sans-serif';
            ctx.fillText(`A wild ${currentWildNokemon.name} appeared!`, canvas.width / 2, 100);
            ctx.font = '20px sans-serif';
            ctx.fillText(`Level: ${currentWildNokemon.level}`, canvas.width - 150, 150);
            ctx.fillText(`Type: ${currentWildNokemon.type}`, canvas.width - 150, 180);
        }
    }

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
        if (!nokemon) return; // Skip if Nokemon is null
        
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

        // Draw Nokemon sprite
        const spriteX = (canvas.width - boxWidth) / 2 + 30;
        const spriteY = y + 40;
        const spriteRadius = 20;
        if (nokemon.sprite.drawFunction) {
            nokemon.sprite.drawFunction(ctx, spriteX, spriteY, spriteRadius);
        } else {
             // Fallback to circle
            ctx.beginPath();
            ctx.arc(spriteX, spriteY, spriteRadius, 0, Math.PI * 2);
            ctx.fillStyle = nokemon.sprite.color;
            ctx.fill();
        }

        // Draw Nokemon info
        ctx.font = '20px sans-serif';
        ctx.fillStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.fillText(`${nokemon.name} Lv.${nokemon.level}`, (canvas.width - boxWidth) / 2 + 60, y + 30);
        ctx.fillText(`HP: ${nokemon.hp}/${nokemon.maxHp}${isFainted ? ' (FAINTED)' : ''}`, (canvas.width - boxWidth) / 2 + 60, y + 60);

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

// Add click handler for party view
canvas.addEventListener('click', (e) => {
    if (currentState === GAME_STATE.PARTY_VIEW) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if click is within a Nokemon box
        const allNokemon = [startingNokemon, ...playerNokemon];
        const boxWidth = 750;
        const boxHeight = 70;
        const spacing = 5;
        const startY = 45;
        
        allNokemon.forEach((nokemon, index) => {
            const boxY = startY + (index * (boxHeight + spacing));
            if (x >= (canvas.width - boxWidth) / 2 && 
                x <= (canvas.width + boxWidth) / 2 &&
                y >= boxY && 
                y <= boxY + boxHeight) {
                
                // Check for evolution first
                if (checkAndEvolve(nokemon)) {
                    return;
                }
                
                // Then check for move learning
                if (checkAndLearnMoves(nokemon)) {
                    return;
                }
            }
        });
    }
});

// Update the drawPartyView function to show clickable areas
function drawPartyView() {
    // Draw semi-transparent background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw title
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Your Nokemon Party', canvas.width / 2, 30);
    
    // Draw Nokemon list
    const allNokemon = [startingNokemon, ...playerNokemon];
    const boxWidth = 750;
    const boxHeight = 70;
    const spacing = 5;
    const startY = 45;
    
    allNokemon.forEach((nokemon, index) => {
        const y = startY + (index * (boxHeight + spacing));
        const isFainted = isNokemonFainted(nokemon);
        
        // Draw Nokemon box with hover effect
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        if (isFainted) {
            ctx.fillStyle = 'rgba(128, 128, 128, 0.1)';
        }
        ctx.fillRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);
        ctx.strokeStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.strokeRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);
        
        // Draw Nokemon sprite
        const spriteX = (canvas.width - boxWidth) / 2 + 20;
        const spriteY = y + 35;
        const spriteRadius = 15;
        if (nokemon.sprite.drawFunction) {
            nokemon.sprite.drawFunction(ctx, spriteX, spriteY, spriteRadius);
        } else {
             // Fallback to circle
            ctx.beginPath();
            ctx.arc(spriteX, spriteY, spriteRadius, 0, Math.PI * 2);
            ctx.fillStyle = nokemon.sprite.color;
            ctx.fill();
        }
        
        // Draw Nokemon info
        ctx.font = '14px sans-serif';
        ctx.fillStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.textAlign = 'left';
        
        // Name, Level, Type, and HP all on one line
        const typeColor = MOVE_TYPES[nokemon.type].color;
        ctx.fillText(`${nokemon.name} Lv.${nokemon.level}`, (canvas.width - boxWidth) / 2 + 45, y + 20);
        ctx.fillStyle = typeColor;
        ctx.fillText(nokemon.type, (canvas.width - boxWidth) / 2 + 150, y + 20);
        ctx.fillStyle = isFainted ? '#666666' : '#FFFFFF';
        ctx.fillText(`HP: ${nokemon.hp}/${nokemon.maxHp}${isFainted ? ' (F)' : ''}`, (canvas.width - boxWidth) / 2 + 220, y + 20);
        
        // Draw moves with buttons
        ctx.font = '12px sans-serif';
        nokemon.moves.forEach((move, moveIndex) => {
            const moveX = (canvas.width - boxWidth) / 2 + 350 + (moveIndex * 180);
            const moveY = y + 20;
            
            // Draw move button
            ctx.fillStyle = MOVE_TYPES[move.type].color;
            ctx.fillRect(moveX - 5, moveY - 15, 150, 20);
            ctx.fillStyle = '#000000';
            ctx.fillText(`${move.name} (${move.type}) P:${move.power}`, moveX, moveY);
        });

        // Draw evolution indicator if available
        if (EVOLUTIONS[nokemon.name] && nokemon.level >= EVOLUTIONS[nokemon.name].level) {
            ctx.fillStyle = '#FFD700';
            ctx.fillText('★', (canvas.width - boxWidth) / 2 + 200, y + 20);
        }
    });
    
    // Draw instructions
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Press X to close | Click a Nokemon to manage moves | ★ = Can evolve', canvas.width / 2, canvas.height - 15);
}

function drawTutorial() {
    // Draw semi-transparent background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw tutorial box
    const boxWidth = 600;
    const boxHeight = 300;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = (canvas.height - boxHeight) / 2;
    
    // Draw box background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
    
    // Draw title
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(tutorialSteps[currentTutorialStep].title, canvas.width / 2, boxY + 50);
    
    // Draw tutorial text
    ctx.font = '18px sans-serif';
    const lines = tutorialSteps[currentTutorialStep].text.split('\n');
    lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, boxY + 120 + (index * 30));
    });
    
    // Draw navigation instructions
    ctx.font = '16px sans-serif';
    ctx.fillText('Press Enter to continue', canvas.width / 2, boxY + boxHeight - 50);
    ctx.fillText(`${currentTutorialStep + 1}/${tutorialSteps.length}`, canvas.width / 2, boxY + boxHeight - 20);
    
    // Draw visual examples based on current step
    switch(tutorialSteps[currentTutorialStep].highlight) {
        case "movement":
            // Draw arrow keys
            drawArrowKeys(boxX + 50, boxY + 200);
            break;
        case "battle":
            // Draw battle menu example
            drawBattleMenuExample(boxX + 50, boxY + 200);
            break;
        case "team":
            // Draw party view example
            drawPartyViewExample(boxX + 50, boxY + 200);
            break;
        case "level":
            // Draw level up example
            drawLevelUpExample(boxX + 50, boxY + 200);
            break;
    }
}

// Helper functions for tutorial visuals
function drawArrowKeys(x, y) {
    const keySize = 30;
    const spacing = 10;
    
    // Up arrow
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + keySize + spacing, y, keySize, keySize);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + keySize + spacing + keySize/2, y + 10);
    ctx.lineTo(x + keySize + spacing + keySize/2 - 10, y + keySize - 10);
    ctx.lineTo(x + keySize + spacing + keySize/2 + 10, y + keySize - 10);
    ctx.fill();
    
    // Down arrow
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + keySize + spacing, y + keySize + spacing, keySize, keySize);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + keySize + spacing + keySize/2, y + keySize + spacing + keySize - 10);
    ctx.lineTo(x + keySize + spacing + keySize/2 - 10, y + keySize + spacing + 10);
    ctx.lineTo(x + keySize + spacing + keySize/2 + 10, y + keySize + spacing + 10);
    ctx.fill();
    
    // Left arrow
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x, y + keySize + spacing, keySize, keySize);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + 10, y + keySize + spacing + keySize/2);
    ctx.lineTo(x + keySize - 10, y + keySize + spacing + keySize/2 - 10);
    ctx.lineTo(x + keySize - 10, y + keySize + spacing + keySize/2 + 10);
    ctx.fill();
    
    // Right arrow
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + (keySize + spacing) * 2, y + keySize + spacing, keySize, keySize);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + (keySize + spacing) * 2 + keySize - 10, y + keySize + spacing + keySize/2);
    ctx.lineTo(x + (keySize + spacing) * 2 + 10, y + keySize + spacing + keySize/2 - 10);
    ctx.lineTo(x + (keySize + spacing) * 2 + 10, y + keySize + spacing + keySize/2 + 10);
    ctx.fill();
}

function drawBattleMenuExample(x, y) {
    const menuWidth = 200;
    const menuHeight = 120;
    
    // Draw menu box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(x, y, menuWidth, menuHeight);
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(x, y, menuWidth, menuHeight);
    
    // Draw menu options
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'left';
    ctx.fillText('1. Moves', x + 10, y + 30);
    ctx.fillText('2. Switch', x + 10, y + 60);
    ctx.fillText('3. Run', x + 10, y + 90);
    ctx.fillText('4. Catch', x + 10, y + 120);
}

function drawPartyViewExample(x, y) {
    const boxWidth = 300;
    const boxHeight = 80;
    
    // Draw Nokemon box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(x, y, boxWidth, boxHeight);
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(x, y, boxWidth, boxHeight);
    
    // Draw example Nokemon info
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'left';
    ctx.fillText('Leaflet Lv.5', x + 50, y + 25);
    ctx.fillText('HP: 45/45', x + 50, y + 45);
    ctx.fillText('GRASS', x + 200, y + 25);
}

function drawLevelUpExample(x, y) {
    // Draw level up message
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'left';
    ctx.fillText('Leaflet grew to level 6!', x, y);
    ctx.fillText('HP: 50/50', x, y + 25);
    ctx.fillText('Attack: 38', x, y + 50);
    ctx.fillText('Defense: 37', x, y + 75);
}

// Reverting draw function to the state before the grass fix attempt
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentState === GAME_STATE.TUTORIAL) {
        drawTutorial();
    } else if (currentState === GAME_STATE.STARTER_SELECTION) {
        drawStarterSelection();
    } else if (currentState === GAME_STATE.GAME_OVER) {
        drawGameOver();
    } else if (currentState === GAME_STATE.HEALING) {
        // Original Healing Screen Draw
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '32px sans-serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('Healing your Nokemon...', canvas.width / 2, canvas.height / 2);
    } else if (currentState === GAME_STATE.PARTY_VIEW) {
        drawPartyView();
    } else if (currentState === GAME_STATE.NOKEMON_SHOP) { // Shop state
        drawNokemonShopScreen();
    } else {
         // Covers EXPLORING, BATTLE, MOVE_SELECTION, NOKEMON_SELECTION, MOVE_TUTOR, TOWN
        // Draw area-specific elements (original structure attempt)
        if (currentArea === 'advanced') {
            // Draw Advanced Area Background (e.g., slightly different color)
            ctx.fillStyle = '#E0E0E0'; // Example: Light gray background
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw Healing Center 
            const hcX = healingCenter.x, hcY = healingCenter.y, hcWidth = healingCenter.width, hcHeight = healingCenter.height;
            ctx.fillStyle = healingCenter.wallColor; ctx.fillRect(hcX, hcY, hcWidth, hcHeight);
            ctx.fillStyle = healingCenter.roofColor; ctx.beginPath(); ctx.moveTo(hcX - 10, hcY); ctx.lineTo(hcX + hcWidth + 10, hcY); ctx.lineTo(hcX + hcWidth / 2, hcY - 30); ctx.closePath(); ctx.fill();
            ctx.fillStyle = healingCenter.doorColor; ctx.fillRect(hcX + hcWidth / 2 - 15, hcY + hcHeight - 30, 30, 30);
            ctx.fillStyle = healingCenter.windowColor; ctx.fillRect(hcX + 15, hcY + 15, 25, 25); ctx.fillStyle = '#000'; ctx.fillRect(hcX + 15 + 11, hcY + 15, 3, 25); ctx.fillRect(hcX + 15, hcY + 15 + 11, 25, 3);
            ctx.fillStyle = healingCenter.signColor; ctx.fillRect(hcX + hcWidth / 2 - 25, hcY - 50, 50, 20); ctx.font = 'bold 12px sans-serif'; ctx.fillStyle = '#FF0000'; ctx.textAlign = 'center'; ctx.fillText('H', hcX + hcWidth / 2, hcY - 37);
            ctx.font = '16px sans-serif'; ctx.fillStyle = '#000'; ctx.textAlign = 'center'; ctx.fillText('Press H to heal', hcX + hcWidth/2, hcY + hcHeight + 20);
            // Draw Move Tutor Square 
            const mtsX = moveTutorSquare.x, mtsY = moveTutorSquare.y, mtsSize = moveTutorSquare.size;
            const glowRadius = mtsSize * 0.5 * (1 + Math.sin(Date.now() / 300) * 0.2);
            ctx.beginPath(); ctx.arc(mtsX + mtsSize / 2, mtsY + mtsSize / 2, glowRadius + 5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0, 191, 255, 0.3)'; ctx.fill();
            ctx.beginPath(); ctx.arc(mtsX + mtsSize / 2, mtsY + mtsSize / 2, glowRadius, 0, Math.PI * 2); ctx.fillStyle = moveTutorSquare.glowColor; ctx.fill();
            ctx.fillStyle = moveTutorSquare.baseColor; ctx.fillRect(mtsX, mtsY, mtsSize, mtsSize); ctx.strokeStyle = '#FFFFFF'; ctx.strokeRect(mtsX, mtsY, mtsSize, mtsSize);
            ctx.font = '14px sans-serif'; ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'center'; ctx.fillText('Teach', mtsX + mtsSize / 2, mtsY + mtsSize / 2 + 5); ctx.fillText('(M)', mtsX + mtsSize / 2, mtsY + mtsSize / 2 + 20);
             // Draw Advanced Area Grass Patches (Was missing here before, adding back)
            newAreaGrassPatches.forEach(patch => {
                ctx.fillStyle = '#2d6a4f';
                ctx.fillRect(patch.x, patch.y, patch.width, patch.height);
                for (let i = 0; i < patch.width; i += 8) {
                    ctx.strokeStyle = '#40916c';
                    ctx.beginPath();
                    ctx.moveTo(patch.x + i, patch.y + patch.height);
                    ctx.lineTo(patch.x + i, patch.y + patch.height - 12);
                    ctx.stroke();
                }
            });
        } else if (currentArea === 'town') {
            // Draw Town Background
            ctx.fillStyle = '#D2B48C';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw NokeMart building
            const mart = nokeMartBuilding;
            ctx.fillStyle = mart.wallColor; ctx.fillRect(mart.x, mart.y, mart.width, mart.height);
            ctx.fillStyle = mart.roofColor; ctx.beginPath(); ctx.moveTo(mart.x - 10, mart.y); ctx.lineTo(mart.x + mart.width + 10, mart.y); ctx.lineTo(mart.x + mart.width / 2, mart.y - 30); ctx.closePath(); ctx.fill();
            ctx.fillStyle = mart.doorColor; ctx.fillRect(mart.x + mart.width / 2 - 15, mart.y + mart.height - 30, 30, 30);
            ctx.fillStyle = mart.signColor; ctx.fillRect(mart.x + mart.width / 2 - 25, mart.y - 50, 50, 20);
            ctx.font = 'bold 14px sans-serif'; ctx.fillStyle = '#000000'; ctx.textAlign = 'center'; ctx.fillText(mart.signText, mart.x + mart.width / 2, mart.y - 36);
            ctx.font = '16px sans-serif'; ctx.fillStyle = '#000'; ctx.textAlign = 'center';
            ctx.fillText('Press S at Mart', mart.x + mart.width / 2, mart.y + mart.height + 20);
        } else {
            // Default to Starter Area Background
            ctx.fillStyle = '#90EE90'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw Starter Area Grass Patches (Was missing here before, adding back)
            tallGrassPatches.forEach(patch => {
                 ctx.fillStyle = '#38b000';
                 ctx.fillRect(patch.x, patch.y, patch.width, patch.height);
                 for (let i = 0; i < patch.width; i += 8) {
                     ctx.strokeStyle = '#70e000';
                     ctx.beginPath();
                     ctx.moveTo(patch.x + i, patch.y + patch.height);
                     ctx.lineTo(patch.x + i, patch.y + patch.height - 12);
                     ctx.stroke();
                 }
             });
        }

        // Draw Player (on top of area background/elements)
        drawPlayer();

        // Draw HUD/Info (on top)
        ctx.font = '16px sans-serif'; ctx.fillStyle = '#000'; ctx.textAlign = 'left';
        ctx.fillText(`Area: ${currentArea.charAt(0).toUpperCase() + currentArea.slice(1)}`, 20, 40);
        const teamLevel = calculateTeamLevel();
        ctx.fillText(`Team Level: ${teamLevel}/10`, 20, 60);
        ctx.fillStyle = '#FFD700'; // Gold color
        ctx.fillText(`Coins: ${player.currency}`, 20, 80); // Display currency on main HUD

        if (startingNokemon) {
             const isFainted = isNokemonFainted(startingNokemon);
             ctx.fillStyle = isFainted ? '#666666' : '#000';
             ctx.fillText(`${startingNokemon.name} Lv.${startingNokemon.level} - HP: ${startingNokemon.hp}/${startingNokemon.maxHp}${isFainted ? ' (FAINTED)' : ''}`, 20, 20);
        }

        // Draw Battle Screen (if active, overlays previous draws)
        if (currentState === GAME_STATE.BATTLE || currentState === GAME_STATE.MOVE_SELECTION) {
            drawBattleScreen();
        }
        // Draw Nokemon Selection (if active, overlays previous draws)
        if (currentState === GAME_STATE.NOKEMON_SELECTION) {
            drawNokemonSelection();
        }
        // Draw Battle/Game Message (if active)
        if (battleMessage && battleMessageTimer > 0 && currentState !== GAME_STATE.NOKEMON_SHOP) { 
            ctx.font = '20px sans-serif'; 
            ctx.fillStyle = '#000'; 
            ctx.textAlign = 'center';
            ctx.fillText(battleMessage, canvas.width / 2, 70);
        } else if (battleMessage && battleMessageTimer > 0 && currentState === GAME_STATE.NOKEMON_SHOP) {
            // Special handling for shop messages (e.g., "Not enough coins!")
            ctx.font = '20px sans-serif'; 
            ctx.fillStyle = '#FFFFFF'; // White text for better visibility on dark shop background
            ctx.textAlign = 'center';
            ctx.fillText(battleMessage, canvas.width / 2, canvas.height - 40); // Position message at bottom for shop
        }
        // Audio Status
        if (!audioInitialized) {
            ctx.font = '16px sans-serif'; ctx.fillStyle = '#FF0000'; ctx.textAlign = 'right';
            ctx.fillText('Click to enable sound', canvas.width - 20, canvas.height - 20);
        }
    } // End of main drawing block (EXPLORING, BATTLE, etc.)

    // Draw overlay states (on top of everything except transition)
    if (currentState === GAME_STATE.MOVE_LEARNING) { drawMoveLearningScreen(); }
    else if (currentState === GAME_STATE.EVOLUTION) { drawEvolutionScreen(); }
    else if (currentState === GAME_STATE.MOVE_TUTOR && currentArea === 'advanced') { drawMoveTutorScreen(); }

    // Draw transition overlay (last thing)
    if (isTransitioning) {
        ctx.fillStyle = `rgba(0, 0, 0, ${transitionAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
        
        // Give experience to the battling Nokemon
        setTimeout(() => {
            // Level up the battling Nokemon
            levelUp(battleNokemon);
            
            // Update the original Nokemon's stats
            const allNokemon = [startingNokemon, ...playerNokemon];
            const originalNokemon = allNokemon[selectedNokemonIndex];
            if (originalNokemon) {
                originalNokemon.level = battleNokemon.level;
                originalNokemon.maxHp = battleNokemon.maxHp;
                originalNokemon.hp = battleNokemon.hp;
                originalNokemon.attack = battleNokemon.attack;
                originalNokemon.defense = battleNokemon.defense;
            }
            
            setTimeout(() => {
                endBattle();
            }, 2000);
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

const EVOLUTIONS = {
    'Leaflet': { level: 10, evolvesTo: 'Leafblade', stats: { hp: 10, attack: 5, defense: 5 } },
    'Flarepup': { level: 10, evolvesTo: 'Flarehound', stats: { hp: 8, attack: 7, defense: 3 } },
    'Aquafin': { level: 10, evolvesTo: 'Aquashark', stats: { hp: 9, attack: 4, defense: 6 } },
    // New evolutions for wild Nokemon
    'Scamper': { level: 10, evolvesTo: 'Scampede', stats: { hp: 15, attack: 10, defense: 5 } },
    'Skywing': { level: 10, evolvesTo: 'Galeverex', stats: { hp: 10, attack: 12, defense: 8 } },
    'Sproutling': { level: 10, evolvesTo: 'Grovyleaf', stats: { hp: 12, attack: 8, defense: 10 } },
    'Flametail': { level: 10, evolvesTo: 'Pyroroar', stats: { hp: 10, attack: 15, defense: 5 } }
    // Thunderwing does not evolve
};

const SPECIAL_MOVES_TUTOR = {
    'Leaflet': [
        { name: 'Giga Drain', power: 75, type: 'GRASS', accuracy: 1, description: 'Absorbs HP from foe.' },
        { name: 'Solar Beam', power: 120, type: 'GRASS', accuracy: 1, description: '2-turn attack.' },
        { name: 'Dazzling Gleam', power: 80, type: 'FAIRY', accuracy: 1, description: 'A fairy-type attack.' },
        { name: 'Sludge Bomb', power: 90, type: 'POISON', accuracy: 1, description: 'May poison the target.' }
    ],
    'Leafblade': [
        { name: 'Giga Drain', power: 75, type: 'GRASS', accuracy: 1, description: 'Absorbs HP from foe.' },
        { name: 'Solar Beam', power: 120, type: 'GRASS', accuracy: 1, description: '2-turn attack.' },
        { name: 'Leaf Storm', power: 130, type: 'GRASS', accuracy: 0.9, description: 'Harshly lowers user Sp. Atk.' },
        { name: 'Dazzling Gleam', power: 80, type: 'FAIRY', accuracy: 1, description: 'A fairy-type attack.' },
        { name: 'Sludge Bomb', power: 90, type: 'POISON', accuracy: 1, description: 'May poison the target.' },
        { name: 'Rock Slide', power: 75, type: 'ROCK', accuracy: 0.9, description: 'May cause flinching.' }
    ],
    'Flarepup': [
        { name: 'Flamethrower', power: 90, type: 'FIRE', accuracy: 1, description: 'May burn foe.' },
        { name: 'Fire Blast', power: 110, type: 'FIRE', accuracy: 0.85, description: 'May burn foe.' },
        { name: 'Thunder Fang', power: 65, type: 'ELECTRIC', accuracy: 0.95, description: 'May paralyze foe.' },
        { name: 'Crunch', power: 80, type: 'DARK', accuracy: 1, description: 'May lower Defense.' }
    ],
    'Flarehound': [
        { name: 'Flamethrower', power: 90, type: 'FIRE', accuracy: 1, description: 'May burn foe.' },
        { name: 'Fire Blast', power: 110, type: 'FIRE', accuracy: 0.85, description: 'May burn foe.' },
        { name: 'Inferno', power: 100, type: 'FIRE', accuracy: 0.5, description: 'Always burns foe.' },
        { name: 'Thunder Fang', power: 65, type: 'ELECTRIC', accuracy: 0.95, description: 'May paralyze foe.' },
        { name: 'Crunch', power: 80, type: 'DARK', accuracy: 1, description: 'May lower Defense.' },
        { name: 'Solar Beam', power: 120, type: 'GRASS', accuracy: 1, description: '2-turn attack.' }
    ],
    'Aquafin': [
        { name: 'Surf', power: 90, type: 'WATER', accuracy: 1, description: 'Hits adjacent foes.' },
        { name: 'Hydro Pump', power: 110, type: 'WATER', accuracy: 0.8, description: 'Powerful water attack.' },
        { name: 'Ice Beam', power: 90, type: 'ICE', accuracy: 1, description: 'May freeze foe.' },
        { name: 'Signal Beam', power: 75, type: 'BUG', accuracy: 1, description: 'May confuse foe.' }
    ],
    'Aquashark': [
        { name: 'Surf', power: 90, type: 'WATER', accuracy: 1, description: 'Hits adjacent foes.' },
        { name: 'Hydro Pump', power: 110, type: 'WATER', accuracy: 0.8, description: 'Powerful water attack.' },
        { name: 'Aqua Tail', power: 90, type: 'WATER', accuracy: 0.9, description: 'Powerful tail attack.' },
        { name: 'Ice Beam', power: 90, type: 'ICE', accuracy: 1, description: 'May freeze foe.' },
        { name: 'Signal Beam', power: 75, type: 'BUG', accuracy: 1, description: 'May confuse foe.' },
        { name: 'Dark Pulse', power: 80, type: 'DARK', accuracy: 1, description: 'May cause flinching.' }
    ],
    'Scamper': [
        { name: 'Body Slam', power: 85, type: 'NORMAL', accuracy: 1, description: 'May Paralyze.' },
        { name: 'Dig', power: 80, type: 'GROUND', accuracy: 1, description: '2-turn move, avoids attacks.' },
        { name: 'Shadow Ball', power: 80, type: 'GHOST', accuracy: 1, description: 'May lower Sp. Def.' },
        { name: 'Thunder Wave', power: 0, type: 'ELECTRIC', accuracy: 0.9, description: 'Paralyzes foe.', effect: (user, target) => {
            target.statusCondition = 'paralyzed';
            target.statusDuration = -1;
            return `${target.name} was paralyzed!`;
        }}
    ],
    'Scampede': [
        { name: 'Body Slam', power: 85, type: 'NORMAL', accuracy: 1, description: 'May Paralyze.' },
        { name: 'Dig', power: 80, type: 'GROUND', accuracy: 1, description: '2-turn move, avoids attacks.' },
        { name: 'Super Fang', power: 1, type: 'NORMAL', accuracy: 0.9, description: 'Cuts HP by half.' },
        { name: 'Shadow Ball', power: 80, type: 'GHOST', accuracy: 1, description: 'May lower Sp. Def.' },
        { name: 'Thunder Wave', power: 0, type: 'ELECTRIC', accuracy: 0.9, description: 'Paralyzes foe.', effect: (user, target) => {
            target.statusCondition = 'paralyzed';
            target.statusDuration = -1;
            return `${target.name} was paralyzed!`;
        }},
        { name: 'Iron Tail', power: 100, type: 'STEEL', accuracy: 0.75, description: 'May lower Defense.' }
    ],
    'Skywing': [
        { name: 'Aerial Ace', power: 60, type: 'FLYING', accuracy: 1, description: 'Never misses.' },
        { name: 'Steel Wing', power: 70, type: 'STEEL', accuracy: 0.9, description: 'May raise Defense.' },
        { name: 'Heat Wave', power: 95, type: 'FIRE', accuracy: 0.9, description: 'May burn foe.' },
        { name: 'U-turn', power: 70, type: 'BUG', accuracy: 1, description: 'User switches out after attack.' }
    ],
    'Galeverex': [
        { name: 'Aerial Ace', power: 60, type: 'FLYING', accuracy: 1, description: 'Never misses.' },
        { name: 'Steel Wing', power: 70, type: 'STEEL', accuracy: 0.9, description: 'May raise Defense.' },
        { name: 'Brave Bird', power: 120, type: 'FLYING', accuracy: 1, description: 'User takes recoil.' },
        { name: 'Heat Wave', power: 95, type: 'FIRE', accuracy: 0.9, description: 'May burn foe.' },
        { name: 'U-turn', power: 70, type: 'BUG', accuracy: 1, description: 'User switches out after attack.' },
        { name: 'Dark Pulse', power: 80, type: 'DARK', accuracy: 1, description: 'May cause flinching.' }
    ],
    'Sproutling': [
        { name: 'Magical Leaf', power: 60, type: 'GRASS', accuracy: 1, description: 'Never misses.' },
        { name: 'Sleep Powder', power: 0, type: 'GRASS', accuracy: 0.75, description: 'Puts foe to sleep.', effect: (user, target) => {
            target.statusCondition = 'sleep';
            target.statusDuration = 3;
            return `${target.name} fell asleep!`;
        }},
        { name: 'Dazzling Gleam', power: 80, type: 'FAIRY', accuracy: 1, description: 'A fairy-type attack.' },
        { name: 'Sludge Bomb', power: 90, type: 'POISON', accuracy: 1, description: 'May poison the target.' }
    ],
    'Grovyleaf': [
        { name: 'Magical Leaf', power: 60, type: 'GRASS', accuracy: 1, description: 'Never misses.' },
        { name: 'Sleep Powder', power: 0, type: 'GRASS', accuracy: 0.75, description: 'Puts foe to sleep.', effect: (user, target) => {
            target.statusCondition = 'sleep';
            target.statusDuration = 3;
            return `${target.name} fell asleep!`;
        }},
        { name: 'Dazzling Gleam', power: 80, type: 'FAIRY', accuracy: 1, description: 'A fairy-type attack.' },
        { name: 'Sludge Bomb', power: 90, type: 'POISON', accuracy: 1, description: 'May poison the target.' },
        { name: 'Rock Slide', power: 75, type: 'ROCK', accuracy: 0.9, description: 'May cause flinching.' },
        { name: 'Shadow Ball', power: 80, type: 'GHOST', accuracy: 1, description: 'May lower Sp. Def.' }
    ],
    'Flametail': [
        { name: 'Flame Wheel', power: 60, type: 'FIRE', accuracy: 1, description: 'May burn foe.' },
        { name: 'Iron Tail', power: 100, type: 'STEEL', accuracy: 0.75, description: 'May lower Defense.' },
        { name: 'Thunder Fang', power: 65, type: 'ELECTRIC', accuracy: 0.95, description: 'May paralyze foe.' },
        { name: 'Crunch', power: 80, type: 'DARK', accuracy: 1, description: 'May lower Defense.' }
    ],
    'Pyroroar': [
        { name: 'Flame Wheel', power: 60, type: 'FIRE', accuracy: 1, description: 'May burn foe.' },
        { name: 'Iron Tail', power: 100, type: 'STEEL', accuracy: 0.75, description: 'May lower Defense.' },
        { name: 'Heat Wave', power: 95, type: 'FIRE', accuracy: 0.9, description: 'May burn foe.' },
        { name: 'Thunder Fang', power: 65, type: 'ELECTRIC', accuracy: 0.95, description: 'May paralyze foe.' },
        { name: 'Crunch', power: 80, type: 'DARK', accuracy: 1, description: 'May lower Defense.' },
        { name: 'Solar Beam', power: 120, type: 'GRASS', accuracy: 1, description: '2-turn attack.' }
    ],
    'Thunderwing': [
        { name: 'Thunderbolt', power: 90, type: 'ELECTRIC', accuracy: 1, description: 'May paralyze.' },
        { name: 'Roost', power: 0, type: 'FLYING', accuracy: 1, description: 'Heals user by 50% Max HP.', effect: (u,t) => { u.hp = Math.min(u.maxHp, u.hp + Math.floor(u.maxHp / 2)); return `${u.name} roosted and restored HP!`; } },
        { name: 'Zap Cannon', power: 120, type: 'ELECTRIC', accuracy: 0.5, description: 'Always paralyzes.' },
        { name: 'Heat Wave', power: 95, type: 'FIRE', accuracy: 0.9, description: 'May burn foe.' },
        { name: 'Signal Beam', power: 75, type: 'BUG', accuracy: 1, description: 'May confuse foe.' },
        { name: 'Dark Pulse', power: 80, type: 'DARK', accuracy: 1, description: 'May cause flinching.' }
    ]
};

// Add variables for move learning and evolution
let selectedNokemonForMoves = null;
let availableMoves = [];
let evolutionMessage = '';

// Add function to handle move learning
function checkAndLearnMoves(nokemon) {
    const learnableMoves = MOVE_LEARNING[nokemon.name] || [];
    const newMoves = learnableMoves.filter(learn => 
        learn.level <= nokemon.level && 
        !nokemon.moves.some(move => move.name === learn.move.name)
    );
    
    if (newMoves.length > 0) {
        currentState = GAME_STATE.MOVE_LEARNING;
        selectedNokemonForMoves = nokemon;
        availableMoves = newMoves;
        return true;
    }
    return false;
}

// Add function to handle evolution
function checkAndEvolve(nokemon) {
    const evolution = EVOLUTIONS[nokemon.name];
    if (evolution && nokemon.level >= evolution.level) {
        currentState = GAME_STATE.EVOLUTION;
        const oldName = nokemon.name;
        nokemon.name = evolution.evolvesTo;
        nokemon.maxHp += evolution.stats.hp;
        nokemon.hp = nokemon.maxHp;
        nokemon.attack += evolution.stats.attack;
        nokemon.defense += evolution.stats.defense;
        evolutionMessage = `${oldName} evolved into ${nokemon.name}!`;
        audioSystem.playSound('levelUp');
        return true;
    }
    return false;
}

// Add function to draw move learning screen
function drawMoveLearningScreen() {
    // Draw semi-transparent background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw title
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(`Teach ${selectedNokemonForMoves.name} a new move?`, canvas.width / 2, 100);
    
    // Draw available moves
    const boxWidth = 400;
    const boxHeight = 60;
    const startY = 150;
    
    availableMoves.forEach((moveData, index) => {
        const y = startY + (index * (boxHeight + 10));
        
        // Draw move box
        ctx.fillStyle = index === selectedMoveIndex ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);
        ctx.strokeStyle = '#FFFFFF';
        ctx.strokeRect((canvas.width - boxWidth) / 2, y, boxWidth, boxHeight);
        
        // Draw move info
        const move = moveData.move;
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.fillText(move.name, (canvas.width - boxWidth) / 2 + 20, y + 25);
        ctx.fillStyle = MOVE_TYPES[move.type].color;
        ctx.fillText(move.type, (canvas.width - boxWidth) / 2 + 200, y + 25);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`Power: ${move.power}`, (canvas.width - boxWidth) / 2 + 300, y + 25);
    });
    
    // Draw instructions
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Use ↑ and ↓ to select, Enter to learn, Escape to cancel', canvas.width / 2, canvas.height - 50);
}

// Add function to draw evolution screen
function drawEvolutionScreen() {
    // Draw semi-transparent background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw evolution message
    ctx.font = '32px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(evolutionMessage, canvas.width / 2, canvas.height / 2);
    
    // Draw instructions
    ctx.font = '16px sans-serif';
    ctx.fillText('Press Enter to continue', canvas.width / 2, canvas.height / 2 + 50);
}

let moveTutorPhase = 'nokemon_selection'; // 'nokemon_selection', 'move_selection', 'replace_move_selection'
let nokemonToTeach = null;
let movesToTeach = [];
let moveReplaceIndex = 0;

function drawMoveTutorScreen() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';

    if (moveTutorPhase === 'nokemon_selection') {
        ctx.fillText('Choose a Nokemon to teach a special move:', canvas.width / 2, 60);
        const allPlayerNokemon = [startingNokemon, ...playerNokemon].filter(n => n);
        allPlayerNokemon.forEach((nokemon, index) => {
            const y = 120 + index * 70;
            ctx.fillStyle = index === selectedNokemonIndex ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(canvas.width / 2 - 200, y - 25, 400, 60);
            ctx.strokeStyle = '#FFFFFF';
            ctx.strokeRect(canvas.width / 2 - 200, y - 25, 400, 60);

            ctx.font = '20px sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText(`${nokemon.name} (Lv. ${nokemon.level})`, canvas.width / 2 - 180, y + 5);
            ctx.font = '16px sans-serif';
            ctx.fillText(`Type: ${nokemon.type}`, canvas.width / 2 - 180, y + 30);
        });
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText('Use ↑/↓ to select, Enter to confirm, Escape to cancel.', canvas.width / 2, canvas.height - 40);
    } else if (moveTutorPhase === 'move_selection') {
        ctx.fillText(`Teach ${nokemonToTeach.name} which move?`, canvas.width / 2, 60);
        if (movesToTeach.length === 0) {
            ctx.fillText(`${nokemonToTeach.name} cannot learn any more special moves.`, canvas.width / 2, 150);
        } else {
            movesToTeach.forEach((move, index) => {
                const y = 120 + index * 70;
                ctx.fillStyle = index === selectedMoveIndex ? 'rgba(0, 200, 255, 0.3)' : 'rgba(0, 100, 150, 0.2)';
                ctx.fillRect(canvas.width / 2 - 250, y - 25, 500, 60);
                ctx.strokeStyle = '#00CCFF';
                ctx.strokeRect(canvas.width / 2 - 250, y - 25, 500, 60);

                ctx.font = '20px sans-serif';
                ctx.fillStyle = MOVE_TYPES[move.type] ? MOVE_TYPES[move.type].color : '#FFFFFF';
                ctx.textAlign = 'left';
                ctx.fillText(`${move.name} (${move.type})`, canvas.width / 2 - 230, y + 5);
                ctx.font = '14px sans-serif';
                ctx.fillStyle = '#DDDDDD';
                ctx.fillText(`P: ${move.power} Acc: ${move.accuracy * 100}% - ${move.description}`, canvas.width / 2 - 230, y + 30);
            });
        }
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText('Use ↑/↓ to select, Enter to learn, Escape to go back.', canvas.width / 2, canvas.height - 40);
    } else if (moveTutorPhase === 'replace_move_selection') {
        ctx.fillText(`${nokemonToTeach.name} knows 4 moves. Replace which move?`, canvas.width / 2, 60);
        const moveToLearn = movesToTeach[selectedMoveIndex];
        ctx.fillText(`Teach: ${moveToLearn.name} (${moveToLearn.type})`, canvas.width / 2, 100);

        nokemonToTeach.moves.forEach((move, index) => {
            const y = 150 + index * 60;
            ctx.fillStyle = index === moveReplaceIndex ? 'rgba(255, 100, 100, 0.3)' : 'rgba(150, 50, 50, 0.2)';
            ctx.fillRect(canvas.width / 2 - 200, y - 20, 400, 50);
            ctx.strokeStyle = '#FF6666';
            ctx.strokeRect(canvas.width / 2 - 200, y - 20, 400, 50);

            ctx.font = '18px sans-serif';
            ctx.fillStyle = MOVE_TYPES[move.type] ? MOVE_TYPES[move.type].color : '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText(`${index + 1}. ${move.name} (${move.type})`, canvas.width / 2 - 180, y + 10);
        });
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText('Use ↑/↓ to select, Enter to replace, Escape to cancel learning this move.', canvas.width / 2, canvas.height - 40);
    }
}

const moveTutorSquare = {
    x: 600, // Position it in the advanced area
    y: 100,
    size: 40,
    baseColor: 'rgba(0, 191, 255, 0.7)', // Deep sky blue with some transparency
    glowColor: 'rgba(0, 191, 255, 1)'
};

// Define the NokeMart building
const nokeMartBuilding = {
    x: 200,
    y: 150,
    width: 120,
    height: 90,
    wallColor: '#ADD8E6', // Light Blue walls
    roofColor: '#FF4500', // Orange-Red roof
    doorColor: '#8B4513', // Brown door
    signText: 'MART',
    signColor: '#FFFF00' // Yellow sign
};

// Define Nokemon available in the shop (example)
const nokemonForSale = [
    // Using copies of existing wild Nokemon templates for simplicity
    // Adjust levels or stats as desired for shop versions
    { ...wildNokemonTemplates.common.find(n => n.name === 'Scamper'), level: 5, price: 250 }, 
    { ...wildNokemonTemplates.common.find(n => n.name === 'Skywing'), level: 5, price: 300 },
    { ...wildNokemonTemplates.uncommon.find(n => n.name === 'Sproutling'), level: 7, price: 750 },
    // Rare, Legendary, and Mythical Nokemon for the shop
    { ...wildNokemonTemplates.rare.find(n => n.name === 'Flametail'), level: 10, price: 2000 }, // Existing Rare
    { ...legendaryNokemon, level: 18, price: 10000 }, // Existing Legendary (Thunderwing)
    { ...marketExclusiveNokemon.Geodrake, price: 15000 }, // New Legendary
    { ...marketExclusiveNokemon.Mysticor, price: 25000 }, // New Mythical
    { ...marketExclusiveNokemon.Shadower, price: 25000 }  // New Mythical
];

// Add keydown handling for NOKEMON_SHOP state
window.addEventListener('keydown', (e) => {
    // ... (rest of the keydown logic for other states) ...
});

// Add drawNokemonShopScreen function
function drawNokemonShopScreen() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Nokemon Mart - For Sale', canvas.width / 2, 60);

    // Display Player Currency
    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#FFD700'; // Gold color for currency
    ctx.textAlign = 'right';
    ctx.fillText(`Coins: ${player.currency}`, canvas.width - 30, 40);

    const itemBoxYStart = 100;
    const itemBoxHeight = 60;
    const itemBoxSpacing = 10;

    nokemonForSale.forEach((item, index) => {
        const y = itemBoxYStart + index * (itemBoxHeight + itemBoxSpacing);
        ctx.fillStyle = index === selectedShopItemIndex ? 'rgba(0, 200, 255, 0.3)' : 'rgba(0, 100, 150, 0.2)';
        ctx.fillRect(canvas.width / 2 - 250, y, 500, itemBoxHeight);
        ctx.strokeStyle = index === selectedShopItemIndex ? '#00CCFF' : '#0077AA';
        ctx.strokeRect(canvas.width / 2 - 250, y, 500, itemBoxHeight);

        // Draw Nokemon sprite (if available)
        const spriteX = canvas.width / 2 - 220;
        const spriteY = y + itemBoxHeight / 2;
        if (item.sprite && item.sprite.drawFunction) {
            item.sprite.drawFunction(ctx, spriteX, spriteY, 15); // Smaller radius for shop
        } else if (item.sprite) {
            ctx.fillStyle = item.sprite.color || '#CCCCCC';
            ctx.beginPath();
            ctx.arc(spriteX, spriteY, 15, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.fillText(`${item.name} (Lv. ${item.level})`, canvas.width / 2 - 180, y + itemBoxHeight / 2 - 5);
        ctx.fillStyle = MOVE_TYPES[item.type] ? MOVE_TYPES[item.type].color : '#FFFFFF';
        ctx.fillText(`Type: ${item.type}`, canvas.width / 2 - 180, y + itemBoxHeight / 2 + 15);
        ctx.fillStyle = '#FFD700'; // Gold color for price
        ctx.fillText(`Price: ${item.price} Coins`, canvas.width / 2 + 50, y + itemBoxHeight / 2 + 0); // Display price
    });

    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Use ↑/↓ to select, Enter to acquire, Escape to leave.', canvas.width / 2, canvas.height - 40);
}