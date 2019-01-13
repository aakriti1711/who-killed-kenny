(function() {
  const mainDiv = document.getElementById("mainDiv");
  const suspectDiv = document.getElementById("suspectDiv");
  var originalHtml = cloneHTML("mainDiv");

  const resetButton = document.getElementById("btnReset");

  /**
   * Function description,cloneHTML method to clone original htmlstates
   */
  function cloneHTML(divId) {
    originalHtml = document.getElementById(divId).cloneNode(true);
  }

  resetButton.addEventListener("click", function() {
    mainDiv.innerHTML = "";
    suspectDiv.innerHTML = "";
    mainDiv.appendChild(originalHtml);
    addClickEvents();
  });
  /** Function to add click events to each images
   *
   * */
  function addClickEvents() {
    const iconsDiv = document.querySelectorAll(".image-wrapper");
    const suspectDiv = document.getElementById("suspectDiv");
    for (let i = 0; i < iconsDiv.length; i++) {
      let imgDiv = document.getElementById(iconsDiv[i].id);
      imgDiv.addEventListener("click", function() {
        suspectDiv.appendChild(imgDiv);
      });
    }
    cloneHTML("mainDiv");
  }

  addClickEvents();
})();
