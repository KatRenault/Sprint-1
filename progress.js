// progress.js

// Function to track puppy training progress
class PuppyTrainingProgress {
    constructor(name) {
        this.name = name;
        this.progress = [];
    }

    addProgress(date, trainingType, notes) {
        this.progress.push({ date, trainingType, notes });
    }

    getProgress() {
        return this.progress;
    }

    displayProgress() {
        console.log(`Training Progress for ${this.name}:`);
        this.progress.forEach(entry => {
            console.log(`Date: ${entry.date}, Training Type: ${entry.trainingType}, Notes: ${entry.notes}`);
        });
    }
}

// Example of usage:
const myPuppy = new PuppyTrainingProgress('Buddy');
myPuppy.addProgress('2026-03-06 04:47:08', 'Sit Command', 'Successfully learned the command.');
myPuppy.displayProgress();