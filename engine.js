function countdown() {
  const countDownDate = new Date("December 25, 2024 23:59:59").getTime(); // Substitua pela data do seu evento
  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Adicione aqui seus efeitos visuais e ações personalizadas

    // Exemplo: Mudar a cor dos números a cada 5 segundos
    if (seconds % 5 === 0) {
      document.querySelectorAll(".countdown span").forEach((span) => {
        span.style.color = getRandomColor(); // Função para gerar cores aleatórias
      });
    }

    // Quando a contagem chegar a zero:
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Feliz Natal a Todos!";
      // Adicione aqui outras ações, como redirecionar para outra página
    }
  }, 1000);
}

countdown();

function getRandomColor() {
  // Função para gerar cores aleatórias (opcional)
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
