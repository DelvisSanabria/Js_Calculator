let btns = document.querySelectorAll(".calPad");
let input = document.getElementById("input");
let valorNuevo = "";

btns.forEach((div) => {
  const btn = div.querySelectorAll("button");
  btn.forEach((boton) => {
    boton.addEventListener("click", () => {
      if (boton.classList.contains("button")) {
        valorNuevo += boton.textContent;
        input.value = valorNuevo;
      } else {
        if (boton.innerText == "C") {
          valorNuevo = "";
          input.value = "";
        } else if (boton.classList.contains("buttonOperator")) {
          valorNuevo += ` ${boton.textContent} `;
          input.value = valorNuevo;
        }
      }
      if (boton.innerText == "=") {
        valorNuevo = eval(valorNuevo);
        input.value = valorNuevo;
      }
    });
  });
});