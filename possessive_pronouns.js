const pronouns = [
    {
        category: "Мой (My)",
        sentences: [
            "Это мой брат. (This is my brother.)",
            "Мой друг помогает мне. (My friend helps me.)",
            "Где мой телефон? (Where is my phone?)",
            "Я люблю мой город. (I love my city.)",
            "Мой дом находится недалеко. (My house is nearby.)"
        ]
    },
    {
        category: "Твой (Your)",
        sentences: [
            "Это твой карандаш? (Is this your pencil?)",
            "Твой компьютер включен. (Your computer is on.)",
            "Где твой рюкзак? (Where is your backpack?)",
            "Твой брат дома? (Is your brother home?)",
            "Я видел твой велосипед. (I saw your bicycle.)"
        ]
    },
    {
        category: "Свой (One's own)",
        sentences: [
            "Я нашёл свой ключ. (I found my key.)",
            "Она заботится о своём сыне. (She takes care of her son.)",
            "У них есть свой дом. (They have their own house.)",
            "Ты должен помнить своё имя. (You must remember your name.)",
            "Мы принесли свой обед. (We brought our own lunch.)"
        ]
    },
    {
        category: "Наш (Our)",
        sentences: [
            "Это наш учитель. (This is our teacher.)",
            "Наш сад очень красивый. (Our garden is very beautiful.)",
            "Где наш автобус? (Where is our bus?)",
            "Наш магазин открыт. (Our store is open.)",
            "Мы любим наш город. (We love our city.)"
        ]
    },
    {
        category: "Ваш (Your formal/plural)",
        sentences: [
            "Это ваш стол? (Is this your table?)",
            "Ваш сын звонит. (Your son is calling.)",
            "Где ваш офис? (Where is your office?)",
            "Ваш заказ готов. (Your order is ready.)",
            "Ваши документы здесь. (Your documents are here.)"
        ]
    },
    {
        category: "Моя (My, feminine)",
        sentences: [
            "Это моя сестра. (This is my sister.)",
            "Моя книга на столе. (My book is on the table.)",
            "Где моя сумка? (Where is my bag?)",
            "Моя кошка любит играть. (My cat loves to play.)",
            "Я потеряла мою ручку. (I lost my pen.)"
        ]
    },
    {
        category: "Твоя (Your, feminine)",
        sentences: [
            "Это твоя тетрадь? (Is this your notebook?)",
            "Твоя подруга здесь. (Your friend is here.)",
            "Где твоя мама? (Where is your mom?)",
            "Твоя комната чистая. (Your room is clean.)",
            "Я видел твою собаку. (I saw your dog.)"
        ]
    },
    {
        category: "Свой (One's own, feminine)",
        sentences: [
            "Она нашла свою сумку. (She found her bag.)",
            "Он любит свою работу. (He loves his job.)",
            "Мы заботимся о своей машине. (We take care of our car.)",
            "Ты должен помнить свою фамилию. (You must remember your last name.)",
            "Они потеряли свою кошку. (They lost their cat.)"
        ]
    },
    {
        category: "Наша (Our, feminine)",
        sentences: [
            "Это наша учительница. (This is our teacher.)",
            "Наша машина синяя. (Our car is blue.)",
            "Где наша школа? (Where is our school?)",
            "Наша квартира на пятом этаже. (Our apartment is on the fifth floor.)",
            "Мы любим нашу бабушку. (We love our grandmother.)"
        ]
    },
    {
        category: "Ваша (Your formal/plural, feminine)",
        sentences: [
            "Это ваша книга? (Is this your book?)",
            "Ваша дочь звонит. (Your daughter is calling.)",
            "Где ваша комната? (Where is your room?)",
            "Ваша посылка прибыла. (Your package has arrived.)",
            "Ваше платье красивое. (Your dress is beautiful.)"
        ]
    },
    {
        category: "Мои (My, plural)",
        sentences: [
            "Мои друзья приехали. (My friends arrived.)",
            "Где мои ключи? (Where are my keys?)",
            "Мои родители дома. (My parents are home.)",
            "Мои книги на полке. (My books are on the shelf.)",
            "Мои вещи в машине. (My things are in the car.)"
        ]
    },
    {
        category: "Твои (Your, plural)",
        sentences: [
            "Твои учебники на столе. (Your textbooks are on the table.)",
            "Где твои документы? (Where are your documents?)",
            "Твои друзья ждут тебя. (Your friends are waiting for you.)",
            "Твои кошки очень милые. (Your cats are very cute.)",
            "Я видел твои фотографии. (I saw your photos.)"
        ]
    },
    {
        category: "Свои (One's own, plural)",
        sentences: [
            "Они нашли свои вещи. (They found their things.)",
            "Мы забыли свои билеты. (We forgot our tickets.)",
            "Она всегда пишет свои заметки. (She always writes her notes.)",
            "Ты должен помнить свои обещания. (You must remember your promises.)",
            "Он потерял свои очки. (He lost his glasses.)"
        ]
    },
    {
        category: "Наши (Our, plural)",
        sentences: [
            "Наши друзья приехали. (Our friends arrived.)",
            "Где наши вещи? (Where are our things?)",
            "Наши машины припаркованы здесь. (Our cars are parked here.)",
            "Наши дети играют на улице. (Our children are playing outside.)",
            "Наши планы изменились. (Our plans changed.)"
        ]
    },
    {
        category: "Ваши (Your formal/plural, plural)",
        sentences: [
            "Ваши гости уже пришли. (Your guests have already arrived.)",
            "Где ваши билеты? (Where are your tickets?)",
            "Ваши идеи очень интересные. (Your ideas are very interesting.)",
            "Ваши дети в школе? (Are your children at school?)",
            "Я видел ваши фотографии. (I saw your photos.)"
        ]
    }
];

let currentIndex = 0;

function updateContent(index) {
    const content = document.getElementById("content");
    const category = pronouns[index];
    content.innerHTML = `<h2>${category.category}</h2>` + category.sentences.map(sentence => `<p>${sentence}</p>`).join("");
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent(currentIndex);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < pronouns.length - 1) {
        currentIndex++;
        updateContent(currentIndex);
    }
});

// Initialize with the first category
updateContent(currentIndex);
