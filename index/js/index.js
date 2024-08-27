const $ = document.querySelector.bind(document)


let noButton = $('.nao')
let yesButton = $('.sim');

const randomizeButtonPosition = (buttonRef) => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
  
    buttonRef.style.position = 'absolute';
    buttonRef.style.left = `${x}px`;
    buttonRef.style.top = `${y}px`;
  };

  const launchHeartsConfetti = () => {
    const confettiDefaults = {
      spread: 120,
      ticks: 100,
      gravity: 0.4,
      decay: 0.94,
      startVelocity: 24,
      shapes: ["heart"],
      colors: [
        "#c026d3",
        "#9333ea",
        "#7c3aed",
      ],
    };
    
    confetti({
      ...confettiDefaults,
      particleCount: 50,
      scalar: 3,
    });
    
    confetti({
      ...confettiDefaults,
      particleCount: 25,
      scalar: 2,
    });
    
    confetti({
      ...confettiDefaults,
      particleCount: 10,
      scalar: 1,
    });
  };

  yesButton.addEventListener('click', () => {
    launchHeartsConfetti();
  });
  
  noButton.addEventListener('mouseover', () => {
    randomizeButtonPosition(noButton);
  });