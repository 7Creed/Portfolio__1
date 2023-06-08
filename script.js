const heroContact = document.querySelector(".hero__contact");
const contact = document.querySelector("#contact");
const imgTarget = document.querySelectorAll(".projects__picture");
console.log(imgTarget);

heroContact.addEventListener("click", (e) => {
  e.preventDefault();
  //   const contactCord = contact.getBoundingClientRect();

  //   //   old way
  //   window.scrollTo({
  //     left: contactCord.left + pageXOffset,
  //     top: contactCord.top + pageYOffset,
  //     behavior: "smooth",
  //   });

  //   modern way
  contact.scrollIntoView({ behavior: "smooth" });
});

// // not working
// const loading = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   //   Replace src with data-src
//     // entry.target.src = entry.target.dataset.src;
//     // entry.target.classList.remove("lazy-img");

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//     console.log(entry.target);
//   });
// };

// const imgObserver = new IntersectionObserver(loading, {
//   root: null,
//   threshold: 0,
// });
// imgTarget.forEach((img) => imgObserver.observe(img));
// // imgObserver.observe(imgTarget.forEach(img => img))
