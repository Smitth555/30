// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
//search rezult
// массив с объектами, содержащими ссылки для каждой карточки
const links = [
    {
      name: "cars",
      url: "1.html"
    },
    {
      name: "bikes",
      url: "https://example.com/bikes"
    },
    {
        name: "nature",
        url: "https://example.com/bikes"
      },
    // добавьте другие ссылки сюда
  ];
  
  // получаем все карточки с помощью метода document.querySelectorAll
  const cards = document.querySelectorAll('.card');
  
  // итерируемся по карточкам, добавляя обработчик событий на каждую карточку
  cards.forEach((card, index) => {
    // получаем ссылку для текущей карточки
    const link = links[index].url;
    // находим внутри карточки кнопку "В корзину"
    const addToCartBtn = card.querySelector(".add-to-cart-btn");
    // добавляем обработчик событий на клик по кнопке
    addToCartBtn.addEventListener('click', (event) => {
      // переходим на другую страницу
      window.location.href = link;
    });
    
    // добавляем обработчик событий на клик по всей карточке
    card.addEventListener('click', (event) => {
      // исключаем клик по кнопке "В корзину"
      if (!event.target.matches('.add-to-cart-btn')) {
        // переходим на другую страницу
        window.location.href = link;
      }
    });
  });
