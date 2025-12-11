document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let ultimoScroll = 0;

  if (!header) {
    console.warn("Elemento <header> não encontrado.");
    return;
  }

  window.addEventListener("scroll", function () {
    const atual = window.scrollY;

    if (atual > ultimoScroll && atual > 50) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    ultimoScroll = atual;
  });
});
