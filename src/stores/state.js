import {defineStore} from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        hexagons: [],
        firstPiece: null,
        secondPiece: null,
        score: 0,
        colors: ['h-color2', 'h-color1', 'h-color3']
    }),
    getters: {
        currentScore: (state) => state.score,
    },
    actions: {
        updateScore(value) {
            this.score += value;
        },
        resetScore() {
            this.score += 0;
        },
        resetHexagons() {
            this.firstPiece = null;
            this.secondPiece = null;
        },
        selectHexagon(hexagon, position) {
            if (position === 1) {
                this.firstPiece = hexagon
            } else {
                this.secondPiece = hexagon
            }
        },
    }
})
