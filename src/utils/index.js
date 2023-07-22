import { randomPrompts } from "../constants"

export const getRandomPrompts = (prompt) => {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length)
    const randomPrompt = randomPrompts[randomIndex];

    randomPrompt === prompt && getRandomPrompts(prompt);

    return randomPrompt;
}


