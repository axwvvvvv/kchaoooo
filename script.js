const catalog = [
    {
        name: 'Кроссовка Жордан орижинал',
        img: 'https://www.basketshop.ru/files/catalog/33914/555088-112(9).JPG',
        price: 500,
        oldPrice: 1000, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'АДидас Канье Уэст',
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/02/756069235641024.jpg',
        price: 750,
        oldPrice: 1500, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Адидас Кампус',
        img: 'https://admin.di-sport.uz/storage/galleries/14254/voBfDA5jpGeiohKePO6p8WW16qrsqglzSyKlah1E.webp',
        price: 900,
        oldPrice: 1900, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Кроксы',
        img: 'https://static.cdek.shopping/images/shopping/fw/300/300/9a5f26231b5a44fe8b423a6fd09186bd.jpg',
        price: 1200,
        oldPrice: 3500, 
        currency: '$',
        description: 'Какое-то описание',
    },
]


const cards = document.querySelector('.cards')



catalog.forEach(card => {
    cards.innerHTML += `
    <div class="card">
    <img src=${card.img} alt="">
    <h3>${card.name}</h3>
    <p>${card.description}</p>
    <s>${card.oldPrice} ${card.currency}</s>
    <h4>${card.price} ${card.currency}</h4>
    <button>купить</button>
</div>
    `
});