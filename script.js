document.addEventListener("DOMContentLoaded", function() {
  var animation = document.querySelector(".animation");

  window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    // Defina a posição inicial e final para a animação
    var startPosition = 500; // Posição inicial do scroll para iniciar a animação
    var endPosition = 1000; // Posição final do scroll para completar a animação

    if (scrollPosition >= startPosition && scrollPosition <= endPosition) {
      // Calcula a porcentagem de progresso da animação
      var progress = (scrollPosition - startPosition) / (endPosition - startPosition);
      
      // Atualiza a opacidade da animação conforme o progresso
      animation.style.opacity = progress;
    }
  });
});