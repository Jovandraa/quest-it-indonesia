const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  // Filter Icon (Dekstop HP)
  // Muncul ketika pada saat Layar Dekstop di Kecilkan menjadi layar handphone
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Filter Navbar Icon (Dekstop HP)
// Ketika di klik navbar mana yang kita mau maka akan muncul langsung ke tampilannya lewat dekstop hp
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

/* Tentu dengan penambaan filter ini ketika website dibuka 
maka akan secara bersamaan filter akan muncul sehingga website tersebut 
terlihat sangat cantik
*/

// header container Start
/* Memberikan Tampilan Styling dengan filter animasi untuk bagian header Sebagai Pembuka 
   Tampilan Website QUEST.IT
*/
ScrollReveal().reveal(".header_container h1", {
  ...ScrollRevealOption,
});

ScrollReveal().reveal(".header_container .btn", {
  ...ScrollRevealOption,
  delay: 500,
});
// header container End

// About Container Start
/* Memberikan Tampilan Styling dengan filter animasi untuk beberapa list di tampilan About Us
dengan menampilkan gerakan list turun ke bawah yang smooth
*/
ScrollReveal().reveal(".about_item", {
  ...ScrollRevealOption,
  interval: 500,
});
// About Container End

// Stats Container Start
/* Memberikan tampilan styling filter animasi terhadap stats kepada jumlah presentase
teknisi dan developer, serta beberapa project yang berhasil di selesaikan dan 
berapa banyak client yang berterimakasih 
*/
ScrollReveal().reveal(".stats_image img", {
  ...ScrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats_card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});
// Stats Container End

// Blog Container Start
/* memunculkan filter untuk memberikan styling animasi kepada setiap blog
 */
ScrollReveal().reveal(".blog_card", {
  ...ScrollRevealOption,
  interval: 500,
});
// Blog Container End

// Swipper Customer Start
/* memunculkan filter untuk memberikan styling swipper 
kepada setiap customer Testimonies 
 */
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
// Swipper Customer End
