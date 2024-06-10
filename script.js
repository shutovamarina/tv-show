//выдкляем нужные классы и id 
const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");
//ставим прослушку на ввод с клавиатуры текста, обязат. toLowerCase
searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    //после ввода в поиск, если в .movie в "p" есть совпадение то вывод на display block, если нет совпадений, то на display none
    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })


})