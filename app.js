window.onload = function() {
    const form = document.getElementById('trainingForm');
    form.addEventListener('submit', handleSubmit);
};

function handleSubmit(event) {
    event.preventDefault();
    const profile = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        trainingGoals: document.getElementById('trainingGoals').value
    };
    displayProfile(profile);
    generateTrainingPlan(profile.trainingGoals);
    saveProfile(profile);
}

function displayProfile(profile) {
    const profileDisplay = document.getElementById('profileDisplay');
    profileDisplay.innerText = `Name: ${profile.name}, Age: ${profile.age}`;
}

function generateTrainingPlan(goal) {
    let plan;
    switch (goal) {
        case 'potty training':
            plan = 'Start with regular bathroom breaks and rewards for going outside.';
            break;
        case 'leash walking':
            plan = 'Practice short walks with positive reinforcement for good behavior.';
            break;
        case 'bite inhibition':
            plan = 'Use toys to redirect biting behavior and encourage gentle play.';
            break;
        case 'socialization':
            plan = 'Introduce your puppy to new environments, people, and other dogs gradually.';
            break;
        default:
            plan = 'Consult a professional trainer for tailored advice.';
    }
    displayTrainingPlan(plan);
}

function displayTrainingPlan(plan) {
    const trainingPlanDisplay = document.getElementById('trainingPlanDisplay');
    trainingPlanDisplay.innerText = plan;
}

function saveProfile(profile) {
    let profiles = JSON.parse(localStorage.getItem('puppyProfiles')) || [];
    profiles.push(profile);
    localStorage.setItem('puppyProfiles', JSON.stringify(profiles));
}

function loadProfiles() {
    const profiles = JSON.parse(localStorage.getItem('puppyProfiles')) || [];
    profiles.forEach(displayProfile);
}