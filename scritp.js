const soundButton = document.getElementById("soundButton");

soundButton.addEventListener("click", () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";

  oscillator.frequency.setValueAtTime(600, audioContext.currentTime);

  oscillator.frequency.exponentialRampToValueAtTime(
    900,
    audioContext.currentTime + 0.15,
  );

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + 0.4,
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();

  oscillator.stop(audioContext.currentTime + 0.4);
});
