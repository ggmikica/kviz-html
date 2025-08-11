    let imeKorisnika = "";
    let prezimeKorisnika = "";
    function pokreniKviz() {
      imeKorisnika = document.getElementById("ime").value.trim();
      prezimeKorisnika = document.getElementById("prezime").value.trim();
      if (imeKorisnika === "" || prezimeKorisnika === "") {
        alert("Molimo unesite i ime i prezime.");
        return;
      }
      document.getElementById("intro").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      document.getElementById("pozdrav").textContent = `Srećno, ${imeKorisnika} ${prezimeKorisnika}!`;
      speak(`Srećno, ${imeKorisnika} ${prezimeKorisnika}!`);
    }
    // ----------- KONFIGURACIJA -----------
    const Q1_QUESTIONS = 5;   // sabiranje
    const Q2_QUESTIONS = 5;   // množenje
    const Q3_QUESTIONS = 4;   // deljenje
    const Q4_QUESTIONS = 2;   // simpleQuestions1
    const Q5_QUESTIONS = 3;   // simpleQuestions2
    const Q6_QUESTIONS = 1;  // simpleQuestions3 (teža pitanja)
    const TOTAL = Q1_QUESTIONS
                  + Q2_QUESTIONS
                  + Q3_QUESTIONS
                  + Q4_QUESTIONS
                  + Q5_QUESTIONS
                  + Q6_QUESTIONS;
    // 10 jednostavnih pitanja
    const simpleQuestions1 = [
      { text: 'Zbir brojeva 5 i –3 je:',        options: [2, -2, 3, 1],     correctIndex: 0 },
      { text: 'Razlika brojeva 7 i 2 je:',      options: [5, 4, 3, 6],      correctIndex: 0 },
      { text: 'Zbir brojeva –4 i –6 je:',       options: [-10, -8, -12, -6],correctIndex: 0 },
      { text: 'Razlika brojeva 8 i –3 je:',     options: [11, 5, 15, 8],    correctIndex: 0 },
      { text: 'Proizvod brojeva 3 i –2 je:',    options: [-6, 6, -5, 0],    correctIndex: 0 },
      { text: 'Proizvod brojeva –5 i –4 je:',   options: [20, -20, 10, 15], correctIndex: 0 },
      { text: 'Količnik brojeva 12 i 4 je:',    options: [3, 4, 2, 6],      correctIndex: 0 },
      { text: 'Količnik brojeva –12 i 3 je:',   options: [-4, 4, -3, 6],    correctIndex: 0 },
      { text: 'Zbir brojeva 0 i 7 je:',         options: [7, 0, -7, 14],    correctIndex: 0 },
      { text: 'Razlika brojeva 9 i 15 je:',     options: [-6, 6, -9, 3],    correctIndex: 0 }
    ];
    // 10 pitanja srednje težine
    const simpleQuestions2 = [
      { text: 'Izračunaj: –5 + 17 = ?',               options: [12, 10, 11, 13],       correctIndex: 0 },
      { text: 'Izračunaj: 12 – (–8) = ?',              options: [20, 16, 18, 19],       correctIndex: 0 },
      { text: 'Izračunaj: –9 – 14 = ?',                options: [-23, -21, -25, -19],   correctIndex: 0 },
      { text: 'Izračunaj: (–6) × 7 = ?',               options: [-42, 42, -36, 36],     correctIndex: 0 },
      { text: 'Izračunaj: –24 ÷ 3 = ?',                options: [-8, 8, -6, 6],         correctIndex: 0 },
      { text: 'Izračunaj: (–3) + (–16) = ?',            options: [-19, -13, -20, -17],   correctIndex: 0 },
      { text: 'Izračunaj: 5 × (–5) + 10 = ?',           options: [-15, -25, -5, 15],     correctIndex: 0 },
      { text: 'Izračunaj: (–4) × (–5) – 7 = ?',         options: [13, 7, 27, 17],        correctIndex: 0 },
      { text: 'Izračunaj: 18 ÷ (–3) + 6 = ?',           options: [0, 12, -6, 6],         correctIndex: 0 },
      { text: 'Kolika je apsolutna vrednost broja –23?', options: [23, 22, 21, 24],        correctIndex: 0 }
    ];
    // 10 težih pitanja
    const simpleQuestions3 = [
      { text: 'Izračunaj: (−7) + 3 × (−2) = ?',           options: [-13, -1, -17, 13],  correctIndex: 0 },
      { text: 'Izračunaj: (−4) × (−5) + (−6) ÷ 3 = ?',    options: [18, 16, -18, 22],   correctIndex: 0 },
      { text: 'Izračunaj: (−2)² − (−3)³ = ?',             options: [31, -23, 23, -31],  correctIndex: 0 },
      { text: 'Izračunaj: ((−8) ÷ 2) × (−3) = ?',         options: [12, -12, 0, 4],     correctIndex: 0 },
      { text: 'Izračunaj: −(−15 + 5) − 10 = ?',           options: [0, -10, 10, -5],    correctIndex: 0 },
      { text: 'Izračunaj: |−7| + |−3| − |−5| = ?',        options: [5, -5, 15, 3],      correctIndex: 0 },
      { text: 'Izračunaj: (−12) ÷ (−3) + (−2) × 4 = ?',    options: [-4, 4, -8, -12],   correctIndex: 0 },
      { text: 'Izračunaj: −5 × (−3 + 2) − (−4) = ?',       options: [9, 1, -9, -1],     correctIndex: 0 },
      { text: 'Izračunaj: (−2 × 3)² ÷ (−4) = ?',           options: [-9, 9, -6, 6],     correctIndex: 0 },
      { text: 'Izračunaj: (|−3| + 2) × (−2) = ?',         options: [-10, 10, -5, 5],    correctIndex: 0 }
    ];
    // slučajni indeksi za svaki skup
    const indices1 = [];
    while (indices1.length < Q4_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions1.length);
      if (!indices1.includes(r)) indices1.push(r);
    }
    const indices2 = [];
    while (indices2.length < Q5_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions2.length);
      if (!indices2.includes(r)) indices2.push(r);
    }
    const indices3 = [];
    while (indices3.length < Q6_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions3.length);
      if (!indices3.includes(r)) indices3.push(r);
    }
    // ----------- STATE -----------
    let count = 0;
    let points = 0;
    let correctAnswer;

    const questionEl  = document.getElementById('question');
    const buttonsEl   = document.getElementById('answer-buttons');
    const feedbackEl  = document.getElementById('feedback');
    const scoreEl     = document.getElementById('score');
    const nextBtn     = document.getElementById('next-btn');
    const resultEl    = document.getElementById('result-screen');
    // ----------- POMOĆNE FUNKCIJE -----------
    function randomInt() {
      let n;
      do {
        n = Math.floor(Math.random() * 21) - 10;
      } while (n === 0);
      return n;
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
//OVO JE TREĆI DEO KODA
    // ----------- PRIKAZ PITANJA -----------
    function showQuestion() {
      feedbackEl.innerText = '';
      buttonsEl.innerHTML  = '';
      nextBtn.style.display = 'none';
      resultEl.classList.add('hidden');
      if (count >= TOTAL) {
         speak(` ${imeKorisnika} ${prezimeKorisnika} osvojio si ${points} poena.`);
        questionEl.innerText = 'Kraj kviza! 🎉';
        resultEl.innerHTML   = `<p> ${imeKorisnika} ${prezimeKorisnika} Ukupan rezultat: <strong>${points}</strong> poena</p>`;
        resultEl.classList.remove('hidden');
 prikaziDugmeKraj();
        return;  
      }
      count++;
      scoreEl.innerText = `Poeni ${imeKorisnika} ${prezimeKorisnika} : ${points} | Pitanje: ${count}/${TOTAL}`;
      let options = [];
      if (count <= Q1_QUESTIONS) {
        const a = randomInt(), b = randomInt();
        correctAnswer = a + b;
        questionEl.innerText = `Zbir brojeva ${a} i ${b} je:`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS) {
        const a = randomInt(), b = randomInt();
        correctAnswer = a * b;
        questionEl.innerText = `Proizvod brojeva ${a} i ${b} je:`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS) {
        const res = Math.floor(Math.random() * 11) + 1;
        const b   = randomInt(), a = res * b;
        correctAnswer = res;
        questionEl.innerText = `Koliko je ${a} / ${b}?`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS + Q4_QUESTIONS) {
        const idx = indices1[count - Q1_QUESTIONS - Q2_QUESTIONS - Q3_QUESTIONS - 1];
        const q   = simpleQuestions1[idx];
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS + Q4_QUESTIONS + Q5_QUESTIONS) {
        const idx = indices2[count - Q1_QUESTIONS - Q2_QUESTIONS - Q3_QUESTIONS - Q4_QUESTIONS - 1];
        const q   = simpleQuestions2[idx];
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }
      else {
        // Q6: teža pitanja
        const idx = indices3[count
          - Q1_QUESTIONS
          - Q2_QUESTIONS
          - Q3_QUESTIONS
          - Q4_QUESTIONS
          - Q5_QUESTIONS
          - 1];
        const q   = simpleQuestions3[idx];
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }

      if (options.length === 0) {
        options = [correctAnswer];
        while (options.length < 4) {
          const fake = correctAnswer + (Math.floor(Math.random() * 21) - 10);
          if (fake !== correctAnswer && !options.includes(fake)) {
            options.push(fake);
          }
        }
      }
      shuffle(options).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = opt;
        btn.onclick   = () => selectAnswer(opt, btn);
        buttonsEl.appendChild(btn);
      });
    }
    // ----------- ODABIR ODGOVORA -----------
    function selectAnswer(choice, btn) {
      Array.from(buttonsEl.children).forEach(b => b.disabled = true);

      if (choice === correctAnswer) {
        points += 5;
        feedbackEl.innerText      = '✅ Tačno! +5 poena';
        btn.style.backgroundColor = '#16a34a';
      } else {
        feedbackEl.innerText      = `❌ Netačno. Tačan odgovor je ${correctAnswer}`;
        btn.style.backgroundColor = '#dc2626';
      }

      scoreEl.innerText = `Poeni: ${points} | Pitanje: ${count}/${TOTAL}`;
      nextBtn.style.display = 'inline-block';
    }

    nextBtn.onclick = showQuestion;
    showQuestion();

    function speak(text) {
       const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'sr-RS'; // srpski jezik
        window.speechSynthesis.speak(msg);
                    }

function prikaziDugmeKraj() {
  const dugme = document.getElementById("dugmeKraj");
  dugme.style.display = "inline-block";

  dugme.addEventListener("click", () => {
    // sakrij inner-quiz
    document.getElementById("quiz").style.display = "none";

    // prikaži završnu poruku
    document.getElementById("porukaKraj").style.display = "block";
    zavrsiKviz(points);

    // pripremi i prikaži diplomu
    const diploma      = document.getElementById("diploma");
    const tekstDiplome = document.getElementById("tekstDiplome");
    tekstDiplome.textContent =
      `Ovom diplomom se potvrđuje da je ${imeKorisnika} ${prezimeKorisnika} ` +
      `uspešno završio/la kviz! 🎓`;
    diploma.style.display = "block";

    // dugme „Prekini”
    document.getElementById("prekiniBtn").onclick = () => {
      diploma.style.display = "none";
      document.getElementById("porukaKraj").textContent = "Hvala na učešću!";
    window.close();
    window.location.href = "https://ggmikica.wordpress.com/";
    };

    // dugme „Odigraj ponovo”
    document.getElementById("ponovoBtn").onclick = () => {
      // reset stanja
      count  = 0;
      points = 0;
      // sakrij sve finalne ekrane
      diploma.style.display      = "none";
      document.getElementById("porukaKraj").style.display = "none";
      dugme.style.display        = "none";
      document.getElementById("kraj").style.display = "none";

      // vrati intro i očisti polja za ime
      document.getElementById("intro").style.display = "block";
      document.getElementById("ime").value           = "";
      document.getElementById("prezime").value       = "";

      // osveži prikaz skora
      scoreEl.innerText = `Poeni: 0 | Pitanje: 0/${TOTAL}`;

showQuestion();
    };
  });
}


function zavrsiKviz(brojPoena) {
  const krajDiv = document.getElementById("kraj");
  let poruka = `${imeKorisnika}, završio si kviz sa ${brojPoena} poena! `;

  if (brojPoena === 100) {
    poruka += "Savršeno! 👑";
  } else if (brojPoena >= 70) {
    poruka += "Odlično! 💪";
  } else if (brojPoena >= 50) {
    poruka += "Dobro je, ali možeš još bolje! 😉";
  } else {
    poruka += "Ne brini, sledeći put ćeš biti bolji! 🚀";
  }

  krajDiv.textContent = poruka;
  krajDiv.style.display = "block";
}

