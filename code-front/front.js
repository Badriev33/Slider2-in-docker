fetch('api/getColor/grass') // запрос на бек для получения данных
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const a = (data) //получаем данные с сервера и нарезаем ссылки слайсами, под каждый слайд
    const img = a.slice(0, 56)
    const imgtwo = a.slice(58, 126)
    const imgthree = a.slice(128, 198)
    //Заполняем значение src данными из слайсов
    document.getElementById("user-avatar").src = img;
    document.getElementById("usertwo-avatar").src = imgtwo;
    document.getElementById("userthree-avatar").src = imgthree;
  });

let offset = 0; //переменная  для отступа
const sliderLine = document.querySelector('.slider-line');

// При нажатии кнопоки увеличиваем значение отступа, при максимальном отступе - возвращаемся на первый слайд
document.querySelector('.btn-next').addEventListener('click', function () {
  offset = offset + 700;
  if (offset > 1400) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
// При нажатии кнопки уменьшаем значение отступа, если значение отступа 0 (первый слайд) возвращаемся на последний
document.querySelector('.btn-prev').addEventListener('click', function () {
  offset = offset - 700;
  if (offset < 0) {
    offset = 1400;
  }
  sliderLine.style.left = -offset + 'px';
});