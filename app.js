
const guests = {

    ANTHONY: {
        title             : "General",
        region            : "Rome",
        dietaryPreference : "Vegetarian",
        pastGifts         : ["Golden Lauren", "Chariot"]
    },
    CICERO: {
        title             : "Orator",
        region            : "Arpinum",
        dietaryPreference : "Omnivore",
        pastGifts         : ["Scroll of Proverbs", "Quill"]
    }
};

// ========================
// ======== STEP 1 ========
// ========================

guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};

// ========================
// ======== STEP 2 ========
// ========================

guests.CICERO.pastGifts.push("Golden Lyre");

// ========================
// ======== STEP 3 ========
// ========================

const anthonyRegion = guests.ANTHONY.region;
console.log(anthonyRegion);

// ========================
// ======== STEP 4 ========
// ========================

delete guests.CICERO;

// ========================
// ======== STEP 5 ========
// ========================

const generalProfile = guests.ANTHONY;
generalProfile.region = "Egypt";
console.log(generalProfile);

// ============================
// ======= QUESTION 1 =========
// ============================

// The region of Anthony will remain "Egypt" because both variables point to the same object in memory. We are NOT creating a new copy!