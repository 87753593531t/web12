const modal = document.getElementById("modal");
  document.getElementById("openModal").addEventListener("click", () => {
    modal.style.display = "flex";
  });

document.getElementById("closeModal").addEventListener("click", () => {
    modal.style.display = "none";
  });


 /* Валидация формы */
  const form = document.getElementById("form");
  const error = document.getElementById("error");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    error.textContent = "";

    if (!email.includes("@")) {
      error.textContent = "Введите корректный email";
      return;
    }

    if (password.length < 6) {
      error.textContent = "Пароль должен быть минимум 6 символов";
      return;
    }

    alert("Форма успешно отправлена");
    form.reset();
});



const addBtn = document.getElementById("addItem");
const input = document.getElementById("itemInput");
const list = document.getElementById("list");
const itemError = document.getElementById("itemError");



addBtn.addEventListener("click", function () {
  // Қате мәтінін тазалау
  itemError.textContent = "";

  // Валидация
  if (input.value.trim() === "") {
    itemError.textContent = "Вставьте новый элемент";
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  // Элементті өшіру (клик арқылы)
  li.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});