// Nokedex system
window.Nokedex = {
    entries: {},
    addEntry: function(nokemon) {
        if (!this.entries[nokemon.name]) {
            this.entries[nokemon.name] = {
                name: nokemon.name,
                type: nokemon.type,
                seen: false,
                caught: false,
                description: nokemon.description || 'No data available',
                sprite: nokemon.sprite,
                hp: nokemon.hp,
                maxHp: nokemon.maxHp,
                attack: nokemon.attack,
                defense: nokemon.defense
            };
        }
    },
    markAsSeen: function(nokemonName) {
        if (this.entries[nokemonName]) {
            this.entries[nokemonName].seen = true;
        }
    },
    markAsCaught: function(nokemonName) {
        if (this.entries[nokemonName]) {
            this.entries[nokemonName].caught = true;
        }
    },
    getCaughtCount: function() {
        return Object.values(this.entries).filter(entry => entry.caught).length;
    },
    getSeenCount: function() {
        return Object.values(this.entries).filter(entry => entry.seen).length;
    },
    getAllEntries: function() {
        return Object.values(this.entries);
    },
    getTotalCount: function() {
        return Object.keys(this.entries).length;
    },
    getSeenNokemon: function() {
        return Object.values(this.entries).filter(entry => entry.seen);
    },
    getCaughtNokemon: function() {
        return Object.values(this.entries).filter(entry => entry.caught);
    }
};

// Ensure all starters and wild Nokemon are added to the Nokedex at game start
if (window.starterNokemon) {
    window.starterNokemon.forEach(n => Nokedex.addEntry(n));
}
if (window.wildNokemonTemplates) {
    Object.values(window.wildNokemonTemplates).flat().forEach(n => Nokedex.addEntry(n));
}
if (window.legendaryNokemon) {
    Nokedex.addEntry(window.legendaryNokemon);
}
if (window.marketExclusiveNokemon) {
    Object.values(window.marketExclusiveNokemon).forEach(n => Nokedex.addEntry(n));
}

// Draw the Nokedex screen
function drawNokedexScreen() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw header
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Nokedex', canvas.width / 2, 60);

    // Draw stats
    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'left';
    ctx.fillText(`Caught: ${Nokedex.getCaughtCount()}`, 30, 100);
    ctx.fillText(`Seen: ${Nokedex.getSeenCount()}`, 30, 130);
    ctx.fillText(`Total: ${Nokedex.getTotalCount()}`, 30, 160);

    // Draw entries
    const entries = Nokedex.getAllEntries();
    const itemBoxYStart = 200;
    const itemBoxHeight = 60;
    const itemBoxSpacing = 10;

    entries.forEach((entry, index) => {
        const y = itemBoxYStart + index * (itemBoxHeight + itemBoxSpacing);
        ctx.fillStyle = entry.caught ? 'rgba(0, 200, 255, 0.3)' : entry.seen ? 'rgba(100, 100, 100, 0.3)' : 'rgba(50, 50, 50, 0.3)';
        ctx.fillRect(canvas.width / 2 - 250, y, 500, itemBoxHeight);
        ctx.strokeStyle = entry.caught ? '#00CCFF' : entry.seen ? '#666666' : '#333333';
        ctx.strokeRect(canvas.width / 2 - 250, y, 500, itemBoxHeight);
        // Draw Nokemon sprite if available
        const spriteX = canvas.width / 2 - 220;
        const spriteY = y + itemBoxHeight / 2;
        if (entry.sprite && entry.sprite.drawFunction) {
            entry.sprite.drawFunction(ctx, spriteX, spriteY, 15);
        } else if (entry.sprite) {
            ctx.fillStyle = entry.sprite.color || '#CCCCCC';
            ctx.beginPath();
            ctx.arc(spriteX, spriteY, 15, 0, Math.PI * 2);
            ctx.fill();
        }
        // Draw Nokemon info
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'left';
        const status = entry.caught ? '(Caught)' : entry.seen ? '(Seen)' : '(???)';
        ctx.fillText(`${entry.name} ${status}`, canvas.width / 2 - 180, y + itemBoxHeight / 2 - 5);
        if (entry.type) {
            ctx.fillStyle = MOVE_TYPES[entry.type] ? MOVE_TYPES[entry.type].color : '#FFFFFF';
            ctx.fillText(`Type: ${entry.type}`, canvas.width / 2 - 180, y + itemBoxHeight / 2 + 15);
        }
        if (entry.caught) {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`HP: ${entry.hp}/${entry.maxHp}`, canvas.width / 2 + 50, y + itemBoxHeight / 2 - 5);
            ctx.fillText(`ATK: ${entry.attack} DEF: ${entry.defense}`, canvas.width / 2 + 50, y + itemBoxHeight / 2 + 15);
        }
    });

    // Draw controls
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Press Escape to return', canvas.width / 2, canvas.height - 40);
}

// Add Nokedex key handling
window.addEventListener('keydown', (e) => {
    if (e.key === 'n' && currentState === GAME_STATE.EXPLORING) {
        currentState = GAME_STATE.NOKEDEX;
        audioSystem.playSound('menu');
    } else if (e.key === 'Escape' && currentState === GAME_STATE.NOKEDEX) {
        currentState = GAME_STATE.EXPLORING;
        audioSystem.playSound('menu');
    }
});

// Update the draw function to include Nokedex
function draw() {
    // ... existing draw code ...
    
    if (currentState === GAME_STATE.NOKEDEX) {
        drawNokedexScreen();
    }
    
    // ... rest of draw code ...
}

// Update battle system to record Nokemon in Nokedex
function startBattle(wildNokemon) {
    // ... existing battle start code ...
    
    // Record Nokemon in Nokedex
    Nokedex.markAsSeen(wildNokemon.name);
    
    // ... rest of battle start code ...
}

// Update catch system to record caught Nokemon
function tryCatch() {
    // ... existing catch code ...
    
    if (catchSuccessful) {
        Nokedex.markAsCaught(currentWildNokemon.name);
        Nokedex.addEntry(currentWildNokemon);
    }
    
    // ... rest of catch code ...
} 