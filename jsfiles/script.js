// Get the subject and chapter from the URL
const params = new URLSearchParams(window.location.search);
const subject = params.get('subject');
const chapter = params.get('chapter');


if (!subject || !chapter) {
  document.body.innerHTML = "<h2>Missing subject or chapter in URL.</h2>";
} else {
  fetch(`../data/${subject}.json`)
    .then(res => res.json())
    .then(data => {
      const chapterData = data[chapter];
      if (!chapterData) {
        document.body.innerHTML = "<h2>Chapter not found.</h2>";
        return;
      }

      document.getElementById("chapter-title").textContent = chapterData.title;
      document.getElementById("chapter-summary").textContent = chapterData.summary;

      const formulaList = document.getElementById("chapter-formulas");
      chapterData.formulas.forEach(f => {
        const li = document.createElement("li");
         li.classList.add("chapter-formula")
        li.textContent = f;
        formulaList.appendChild(li);
      });
if (subject == "computer"){
  const derivationh3 = document.getElementById("chapter-derivation-h3")
  derivationh3.textContent = "Key concepts"
  }
  
      const derivationList = document.getElementById("chapter-derivation");
      chapterData.derivations.forEach(d => {
        const li = document.createElement("li");
        li.classList.add("chapter-derivation")
        li.textContent = d;
        derivationList.appendChild(li);
      })
    })
    .catch(err => {
      console.error("Error loading JSON:", err);
      document.body.innerHTML = "<h2>Error loading content.</h2>";
    });
}


function back(){
  const url = subject + ".html"
  window.location.href = url;
}
