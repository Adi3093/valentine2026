const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupButtons = document.getElementById("popup-buttons");

let noCount = 0;
let yesScale = 1;

/* ========= YES UTAMA ========= */
yesBtn.addEventListener("click", () => {
  launchConfetti();
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});

/* ========= NO ========= */
noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    growYes();
    showPopup("Yakin gak nih? 😏", "ok");
  } else if (noCount === 2) {
    growYes();
    showPopup("SERIUS NIH? 😳", "ok");
  } else {
    showPopup("Pilih yang benar 😆💕", "choice");
  }
});

/* ========= POPUP ========= */
function showPopup(text, type) {
  popupText.innerText = text;
  popupButtons.innerHTML = "";

  if (type === "ok") {
    const okBtn = document.createElement("button");
    okBtn.textContent = "OK 💖";
    okBtn.className = "popup-yes";
    okBtn.onclick = closePopup;
    popupButtons.appendChild(okBtn);
  }

  if (type === "choice") {
    const yesPopup = document.createElement("button");
    yesPopup.textContent = "YES 💕";
    yesPopup.className = "popup-yes";
    yesPopup.onclick = () => {
      launchConfetti();
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 800);
    };

    const noPopup = document.createElement("button");
    noPopup.textContent = "NO 😢";
    noPopup.className = "popup-no";
    noPopup.addEventListener("mouseover", movePopupNo);
    noPopup.addEventListener("touchstart", movePopupNo);

    popupButtons.appendChild(yesPopup);
    popupButtons.appendChild(noPopup);
  }

  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

/* ========= EFFECT ========= */
function growYes() {
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;
}

function movePopupNo(e) {
  const btn = e.target;
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 100 + "px";
}

/* ========= CONFETTI ========= */
function launchConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerText = "💖";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
