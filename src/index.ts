rotulo.innerHTML = "Ingresar altura";

let btnCalcular1 = document.getElementById("btnCalcular");

btnCalcular1.addEventListener("click", () => {
  let datoAltura2 = document.getElementById("datoAltura.value");
  let datoAltura1: number = Number(datoAltura.value);
  if (datoAltura1 <= 1.3) {
    console.log("Lo siento, mides menos de 1.30");
  } else {
    console.log("Aprobado");
  }
});
