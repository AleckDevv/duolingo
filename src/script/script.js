const icones = document.querySelectorAll(".icone");

icones.forEach((icone) => {
  /* 
    usei forEach para percorrer dos os iconces quando
    eles forem clicados
    */
  icone.addEventListener("click", () => {
    /* cria o evento de clique */
    if (icone.classList.contains("ativo")) {
      /* 
        verificação para saber se o usuário deseja voltar
        para onde estava exibindo um alert em tela
        */
      const confirmar = confirm("Deseja voltar para a fase anterior?");
      if (confirmar) {
        icone.classList.remove("ativo");
      }
    } else {
      /* 
        se ele não quiser avançar executa a classe que muda o 
        elemento
        */
      icone.classList.add("ativo");
      alert("Objetivo concluído!");
    }
  });
});
