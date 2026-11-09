const answers = {
  q1: { correct: "b", explanation: "Točno. Uklanja se figura koja obavlja važnu obrambenu zadaću." },
  q2: { correct: "a", explanation: "Točno. Uzimanje braniča jedan je od osnovnih načina njegova uklanjanja." },
  q3: { correct: "c", explanation: "Točno. Nakon uklanjanja zaštite top može postati ranjiv." },
  q4: { correct: "b", explanation: "Točno. Uklanjanje figure koja čuva važna polja može oslabiti obranu kralja." },
  q5: { correct: "a", explanation: "Točno. Potrebno je izračunati protivnikove odgovore i procijeniti završni rezultat." }
};

document.getElementById("quiz-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let answered = 0;
  Object.entries(answers).forEach(([question, data], index) => {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    const feedback = document.getElementById(`f${index + 1}`);
    feedback.className = "feedback";
    if (!selected) {
      feedback.textContent = "Nisi odabrao/la odgovor.";
      feedback.classList.add("incorrect");
      return;
    }
    answered++;
    if (selected.value === data.correct) {
      score++;
      feedback.textContent = data.explanation;
      feedback.classList.add("correct");
    } else {
      feedback.textContent = "Nije točno. " + data.explanation;
      feedback.classList.add("incorrect");
    }
  });
  const result = document.getElementById("quiz-result");
  result.hidden = false;
  result.textContent = answered < 5
    ? `Odgovorio/la si na ${answered} od 5 pitanja. Za sada imaš ${score} točnih odgovora. Dovrši kviz pa ponovno provjeri rezultat.`
    : `Rezultat: ${score} / 5 točnih odgovora. ${score === 5 ? "Odlično!" : "Ponovi objašnjenja i pokušaj ponovno."}`;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});
