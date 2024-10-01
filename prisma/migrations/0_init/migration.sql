-- CreateTable
CREATE TABLE "pokemon" (
    "name" TEXT,
    "pokedex_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abilities" TEXT,
    "typing" TEXT,
    "hp" INTEGER,
    "attack" INTEGER,
    "defense" INTEGER,
    "special_attack" INTEGER,
    "special_defense" INTEGER,
    "speed" INTEGER,
    "height" INTEGER,
    "weight" INTEGER,
    "genus" TEXT,
    "gen_introduced" INTEGER,
    "female_rate" REAL,
    "genderless" INTEGER,
    "baby_pokemon" INTEGER,
    "legendary" INTEGER,
    "mythical" INTEGER,
    "is_default" INTEGER,
    "forms_switchable" INTEGER,
    "base_experience" INTEGER,
    "capture_rate" INTEGER,
    "egg_groups" TEXT,
    "egg_cycles" REAL,
    "base_happiness" INTEGER,
    "can_evolve" INTEGER,
    "evolves_from" TEXT,
    "primary_color" TEXT,
    "shape" TEXT,
    "number_pokemon_with_typing" REAL,
    "normal_attack_effectiveness" REAL,
    "fire_attack_effectiveness" REAL,
    "water_attack_effectiveness" REAL,
    "electric_attack_effectiveness" REAL,
    "grass_attack_effectiveness" REAL,
    "ice_attack_effectiveness" REAL,
    "fighting_attack_effectiveness" REAL,
    "poison_attack_effectiveness" REAL,
    "ground_attack_effectiveness" REAL,
    "fly_attack_effectiveness" REAL,
    "psychic_attack_effectiveness" REAL,
    "bug_attack_effectiveness" REAL,
    "rock_attack_effectiveness" REAL,
    "ghost_attack_effectiveness" REAL,
    "dragon_attack_effectiveness" REAL,
    "dark_attack_effectiveness" REAL,
    "steel_attack_effectiveness" REAL,
    "fairy_attack_effectiveness" REAL
);

