document.getElementById('rollBtn').addEventListener('click', function() {
    const diceElement = document.getElementById('dice');
    const messageElement = document.getElementById('message');

    // 1. Validation & Feedback (Loading state)
    messageElement.innerText = "Waa la laadayaa...";
    diceElement.style.transform = "rotate(360deg)";

    setTimeout(() => {
        // 2. JavaScript Logic (Random Number)
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        // 3. DOM Manipulation (Cusboonaysiinta boga)
        diceElement.innerText = randomNumber;
        diceElement.style.transform = "rotate(0deg)";

        // 4. User Feedback (Farriinta guusha)
        if (randomNumber === 6) {
            messageElement.innerHTML = "<span style='color:green;'>Hambalyo! Waxaad heshay 6!</span>";
        } else {
            messageElement.innerText = `Waxaad heshay lambarka ${randomNumber}`;
        }
    }, 500);
});