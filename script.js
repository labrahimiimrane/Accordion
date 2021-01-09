const accordion = document.querySelector(".accordion");
const card = document.querySelectorAll(".card");
const btn = document.querySelectorAll(".accordion .card .card-header");

//Lets figure out what item to click
function toggleAccordion() {
  const thisItem = this.parentNode;
  const children = thisItem.children[0].children[0].children[0];

  card.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("open");
      return;
    }

    item.classList.remove("open");
  });
}

btn.forEach((question) => question.addEventListener("click", toggleAccordion));
