const lampada = document.querySelector("#lampada img");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");

btnLigar.addEventListener("click", () => {
  lampada.src = "img/lampada-ligada.png";
  lampada.alt = "lampada acesa";
});

btnDesligar.addEventListener("click", () => {
  lampada.src = "img/lampada-desligada.png";
  lampada.alt = "lampada apagada";
});
