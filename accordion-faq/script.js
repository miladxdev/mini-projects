// تمام آیتم‌ها رو انتخاب می‌کنیم
const accItems = document.querySelectorAll(".accordion__item");

// برای هر آیتم یک ایونت کلیک قرار می‌دیم
accItems.forEach((item) => item.addEventListener("click", toggleAcc));

// با هر کلیک کلاس اضافه و حذف می‌شه
// مقدار this آیتمی هست که کلیک شده
function toggleAcc() {
  this.classList.toggle("accordion__item--active");
}

//-----------------------
// Milad Gharibi
// instagram: web.script
// telegram: @webxscript
