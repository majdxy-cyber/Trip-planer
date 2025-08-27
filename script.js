document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const group = choice.parentElement;
      group.querySelectorAll(".choice").forEach(c => c.classList.remove("is-selected"));
      choice.classList.add("is-selected");

      if (choice.dataset.budget) {
        document.getElementById("budget").value = choice.dataset.budget;
      }
      if (choice.dataset.type) {
        document.getElementById("tripType").value = choice.dataset.type;
      }
    });
  });

  const form = document.getElementById("plannerForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
    const type = document.getElementById("tripType").value;

    document.getElementById("summary").innerHTML = `
      <p><strong>משך הטיול:</strong> ${days} ימים</p>
      <p><strong>תקציב:</strong> ${budget}</p>
      <p><strong>סוג טיול:</strong> ${type}</p>
    `;

    const itin = document.getElementById("itinerary");
    itin.innerHTML = "";
    for (let i = 1; i <= days; i++) {
      itin.innerHTML += `<div><h3>יום ${i}</h3><p>אטרקציות לדוגמה יתווספו כאן</p></div>`;
    }

    document.getElementById("results").hidden = false;
  });
});
