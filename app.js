document.addEventListener('DOMContentLoaded', function() {const form = document.getElementById('training-form');const profileDisplay = document.getElementById('profile-display');const trainingPlanDisplay = document.getElementById('training-plan');

form.addEventListener('submit', function(event) {event.preventDefault();const name = document.getElementById('name').value;const age = document.getElementById('age').value;const breed = document.getElementById('breed').value;

// Save the profile in local storage
const profile = { name, age, breed };localStorage.setItem('puppyProfile', JSON.stringify(profile));

displayProfile(profile);generateTrainingPlan(age, breed);
});

function displayProfile(profile) {profileDisplay.textContent = `Name: ${profile.name}, Age: ${profile.age}, Breed: ${profile.breed}`;}

function generateTrainingPlan(age, breed) {let plan; // Example training plan generation logic
if (age < 1) {plan = 'Basic commands: Sit, Stay, Come';} else {plan = 'Advanced commands: Roll over, Play dead';}
trainingPlanDisplay.textContent = `Training Plan: ${plan}`;}

// Load saved profile from local storage on page load
const savedProfile = localStorage.getItem('puppyProfile');if (savedProfile) {const profile = JSON.parse(savedProfile);displayProfile(profile);generateTrainingPlan(profile.age, profile.breed);}});