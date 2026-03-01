// multi-factor scoring engine

class MultiFactorScoringEngine {
    constructor() {
        this.scores = {};
    }

    // Method to add a factor score
    addFactor(factorName, score) {
        if (!this.scores[factorName]) {
            this.scores[factorName] = 0;
        }
        this.scores[factorName] += score;
    }

    // Method to get total score
    getTotalScore() {
        return Object.values(this.scores).reduce((total, score) => total + score, 0);
    }

    // Method to get score of a specific factor
    getFactorScore(factorName) {
        return this.scores[factorName] || 0;
    }
}

// Exporting the class for use in other modules
export default MultiFactorScoringEngine;
