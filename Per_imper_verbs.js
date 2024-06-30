const dialogues = [
    {
        title: "Text One",
        content: `Привет, Андрей! Как дела?<br><br>Привет, Анна! Всё хорошо. Как твои дела?<br><br>Замечательно! Ты знаешь, что Михаил <span class="verb" data-imperfective="становится" data-translation="becomes">станет</span> учителем?<br><br>Да, слышал об этом. А ты знала, что Наталья <span class="verb" data-imperfective="становится" data-translation="becomes">стала</span> знаменитой?<br><br>Да, она так много <span class="verb" data-imperfective="делает" data-translation="does">сделала</span> для этого. Кстати, я <span class="verb" data-imperfective="делаю" data-translation="do">сделаю</span> это завтра.<br><br>Отлично! Я уверен, что ты <span class="verb" data-imperfective="делаешь" data-translation="do">сделаешь</span> всё правильно.<br><br>Спасибо. А ты что планируешь <span class="verb" data-imperfective="делать" data-translation="do">делать</span> завтра?<br><br>Я <span class="verb" data-imperfective="иду" data-translation="go">пойду</span> в парк завтра. Хочу немного отдохнуть.<br><br>Звучит здорово. Я тоже хочу <span class="verb" data-imperfective="гулять" data-translation="walk">погулять</span>.`
    },
    {
        title: "Text Two",
        content: `Привет, Катя! Ты получила подарок на день рождения?<br><br>Привет, Сергей! Да, я <span class="verb" data-imperfective="получаю" data-translation="receive">получила</span> замечательный подарок. А ты?<br><br>Я <span class="verb" data-imperfective="получаю" data-translation="receive">получил</span> сообщение от старого друга. Мы давно не общались.<br><br>Здорово! У меня тоже были хорошие новости. Завтра я <span class="verb" data-imperfective="делаю" data-translation="make">сделаю</span> торт.<br><br>Тебе всегда удаются вкусные торты. А я <span class="verb" data-imperfective="беру" data-translation="take">возьму</span> отпуск завтра.<br><br>Отличная идея. Ты давно заслужил отдых. Куда поедешь?<br><br>Пока не знаю, может быть, в горы.<br><br>Хороший выбор. Отдых на природе всегда полезен.`
    },
    {
        title: "Text Three",
        content: `Привет, Максим! Как твои дела?<br><br>Привет, Ольга! Всё хорошо. Ты <span class="verb" data-imperfective="видишь" data-translation="see">увидела</span> новое здание в центре?<br><br>Нет, ещё не <span class="verb" data-imperfective="вижу" data-translation="see">видела</span>. Ты <span class="verb" data-imperfective="видишь" data-translation="see">увидел</span> его?<br><br>Да, я <span class="verb" data-imperfective="вижу" data-translation="see">увидел</span> его вчера. Очень красивое здание.<br><br>Интересно. Завтра я тоже <span class="verb" data-imperfective="смотрю" data-translation="watch">посмотрю</span> его. Кстати, Анна <span class="verb" data-imperfective="приходит" data-translation="come">придёт</span> позже.<br><br>Хорошо, тогда подождём её. Что нового у тебя?<br><br>Я <span class="verb" data-imperfective="использую" data-translation="use">использую</span> это приложение для изучения языков. Очень удобно.<br><br>Звучит интересно. Я тоже хотел бы попробовать.<br><br>Попробуй, оно действительно полезное.`
    },
    {
        title: "Text Four",
        content: `Привет, Маша! Что нового?<br><br>Привет, Дмитрий! Я <span class="verb" data-imperfective="нахожу" data-translation="find">нашла</span> свою старую книгу.<br><br>О, это здорово! Я всегда рад, когда <span class="verb" data-imperfective="нахожу" data-translation="find">нахожу</span> что-то важное.<br><br>Да, это приятно. А у тебя как дела?<br><br>Всё хорошо. Завтра он <span class="verb" data-imperfective="дает" data-translation="give">даст</span> тебе подарок.<br><br>Правда? Неожиданно. Кстати, она <span class="verb" data-imperfective="рассказывает" data-translation="tell">рассказала</span> правду.<br><br>Вот это новость! А я <span class="verb" data-imperfective="работаю" data-translation="work">поработаю</span> над этим проектом завтра.<br><br>Желаю удачи. Я уверена, что ты <span class="verb" data-imperfective="справляешься" data-translation="manage">справишься</span>.<br><br>Спасибо! Кстати, она <span class="verb" data-imperfective="звонит" data-translation="call">позвонит</span> позже.`
    },
    {
        title: "Text Five",
        content: `Привет, Света! Как твой день?<br><br>Привет, Иван! Всё хорошо. Я <span class="verb" data-imperfective="пытаюсь" data-translation="try">попыталась</span> объяснить проект начальнику.<br><br>И как, <span class="verb" data-imperfective="получается" data-translation="succeed">получилось</span>?<br><br>Да, он понял. Кстати, он <span class="verb" data-imperfective="спрашивает" data-translation="ask">спросит</span> тебя завтра о твоём докладе.<br><br>Хорошо, я готов к этому. А ты как?<br><br>Я <span class="verb" data-imperfective="нужна" data-translation="needed">понадоблюсь</span> завтра на встрече с клиентом.<br><br>Понятно. Уверен, что ты <span class="verb" data-imperfective="справляешься" data-translation="manage">справишься</span>. А я <span class="verb" data-imperfective="чувствую" data-translation="feel">почувствовал</span> холод утром.<br><br>Да, погода меняется. Надо теплее одеваться.<br><br>Точно. А ещё я <span class="verb" data-imperfective="узнаю" data-translation="learn">узнал</span>, что он <span class="verb" data-imperfective="становится" data-translation="become">станет</span> инженером.`
    },
    {
        title: "Text Six",
        content: `Привет, Алексей! Ты знаешь, что она <span class="verb" data-imperfective="уходит" data-translation="leave">уйдет</span> рано?<br><br>Привет, Юля! Да, она <span class="verb" data-imperfective="уходит" data-translation="leave">ушла</span> уже.<br><br>Понятно. А ты <span class="verb" data-imperfective="уходишь" data-translation="leave">уходил</span> поздно?<br><br>Да, я <span class="verb" data-imperfective="уходишь" data-translation="leave">ушел</span> поздно вечером. А ты <span class="verb" data-imperfective="приходишь" data-translation="come">придешь</span> завтра?<br><br>Да, я <span class="verb" data-imperfective="прихожу" data-translation="come">приду</span> утром.<br><br>Отлично. Тогда увидимся. Кстати, она <span class="verb" data-imperfective="дает" data-translation="give">даст</span> нам новые задания.<br><br>Поняла. Готова к новому вызову.`
    },

    {
        title: "Открывать (открываю) - Открыть (открою) - To open",
        content: `Андрей: Привет, Ирина! Ты можешь открыть окно? Здесь слишком душно.<br><br>
        Ирина: Конечно, открою. Готово! Ты чем сегодня занимаешься?<br><br>
        Андрей: Думаю пойти в парк и прочитать новую книгу. А ты?<br><br>
        Ирина: Я собираюсь открыть свой новый ресторан через неделю. Сегодня буду готовиться к этому событию.<br><br>
        Андрей: О, поздравляю! Это большое событие. Ты уже всё подготовила?<br><br>
        Ирина: Почти всё. Нужно ещё открыть некоторые документы и подписать их. Также нужно проверить оборудование и убедиться, что всё работает.<br><br>
        Андрей: Это действительно много работы. Надеюсь, всё пройдёт гладко. Ты уже выбрала меню для открытия?<br><br>
        Ирина: Да, мы решили включить несколько авторских блюд и классические рецепты. Хочу, чтобы гости были приятно удивлены.<br><br>
        Андрей: Уверен, у тебя всё получится. Если тебе нужна помощь, дай знать.<br><br>
        Ирина: Спасибо, Андрей! Очень приятно слышать такие слова поддержки.`
    },
    {
        title: "Закрывать (закрываю) - Закрыть (закрою) - To close",
        content: `Мария: Можешь закрыть дверь, пожалуйста? В доме сквозняк.<br><br>
        Виктор: Закрою, без проблем. Как у тебя дела сегодня?<br><br>
        Мария: Хорошо, спасибо. Я сегодня собираюсь закрыть несколько важных проектов на работе.<br><br>
        Виктор: Это замечательно! Ты много работала над этими проектами?<br><br>
        Мария: Да, несколько месяцев. Но сегодня наконец-то закрою их и смогу немного отдохнуть.<br><br>
        Виктор: Ты заслуживаешь отдых. Какие планы на выходные?<br><br>
        Мария: Хочу поехать на дачу и немного отдохнуть на природе. Может быть, закрою глаза и подремлю под солнцем.<br><br>
        Виктор: Звучит прекрасно. Мы тоже думаем закрыть неделю и отправиться в поход.<br><br>
        Мария: Отличная идея. Природа помогает снять стресс после напряженной работы.`
    },
    {
        title: "Сидеть (сижу) - Сесть (сяду) - To sit",
        content: `Ольга: Где мы будем сидеть на концерте?<br><br>
        Михаил: Я сяду у окна, а ты где хочешь?<br><br>
        Ольга: Думаю, я сяду рядом с тобой. Как думаешь, будет ли удобно?<br><br>
        Михаил: Конечно, мы будем вместе наслаждаться музыкой. Как прошел твой день?<br><br>
        Ольга: Был довольно насыщенный. С утра я сидела на совещании, а потом пришлось заниматься документами.<br><br>
        Михаил: Понимаю. Я тоже весь день сидел за компьютером, заканчивая отчёты. Думаю, нам обоим нужно расслабиться.<br><br>
        Ольга: Абсолютно согласна. А как ты обычно отдыхаешь?<br><br>
        Михаил: Люблю сидеть с книгой или смотреть фильмы. А ты?<br><br>
        Ольга: Я люблю сесть на велосипед и покататься по городу. Это помогает мне снять стресс.`
    },
    {
        title: "Стоять (стою) - Встать (встану) - To stand",
        content: `Дмитрий: Ты долго будешь стоять?<br><br>
        Анна: Нет, я сейчас встану и подойду. Что случилось?<br><br>
        Дмитрий: Просто хотел поговорить. Как прошел твой день?<br><br>
        Анна: Очень занят. Сначала стояла в пробке, потом целый день на ногах в офисе.<br><br>
        Дмитрий: Понимаю. Я тоже устал, весь день стоял на стройке.<br><br>
        Анна: Нам нужно больше отдыхать. Как насчет того, чтобы встать рано завтра и поехать на природу?<br><br>
        Дмитрий: Отличная идея! Встану пораньше и приготовлю всё необходимое.<br><br>
        Анна: Договорились. Будем наслаждаться выходными и забыть о работе на пару дней.`
    },
    {
        title: "Падать (падаю) - Упасть (упаду) - To fall",
        content: `Лена: Осторожно, тут скользко, можно упасть.<br><br>
        Павел: Да, я чуть не упал. Спасибо за предупреждение.<br><br>
        Лена: Как у тебя дела? Всё в порядке?<br><br>
        Павел: Да, всё хорошо. Просто устал немного. Работа была тяжелая.<br><br>
        Лена: Понимаю. Мне тоже пришлось много работать сегодня. В какой-то момент даже почувствовала, что могу упасть от усталости.<br><br>
        Павел: Нам нужно быть осторожными. Береги себя.<br><br>
        Лена: Конечно. Ты слышал, что Вика упала вчера и повредила ногу?<br><br>
        Павел: Нет, не слышал. Как она сейчас?<br><br>
        Лена: Уже лучше, но ей нужно немного времени на восстановление.`
    },
    {
        title: "Носить (ношу) - Нести (несу) - To carry, to wear",
        content: `Иван: Ты что носишь в этом большом рюкзаке?<br><br>
        Света: Я несу учебники для занятий. Сегодня много лекций.<br><br>
        Иван: Понимаю. Я тоже ношу много вещей с собой. Работа требует.<br><br>
        Света: А что ты делаешь на работе?<br><br>
        Иван: Я инженер. Часто приходится нести инструменты и оборудование.<br><br>
        Света: Это звучит сложно. Как ты справляешься?<br><br>
        Иван: Привык уже. А как у тебя с учебой?<br><br>
        Света: Тоже много работы. Но я стараюсь. Надеюсь, всё получится.`
    },
    {
        title: "Готовить (готовлю) - Приготовить (приготовлю) - To cook, to prepare",
        content: `Катя: Что ты готовишь на ужин?<br><br>
        Алексей: Приготовлю спагетти с соусом. А ты?<br><br>
        Катя: Я тоже собираюсь готовить что-то вкусное. Может быть, приготовлю пирог.<br><br>
        Алексей: Звучит здорово. Ты всегда готовишь вкусные вещи.<br><br>
        Катя: Спасибо. А ты любишь готовить?<br><br>
        Алексей: Да, это мое хобби. Мне нравится экспериментировать с рецептами.<br><br>
        Катя: Может быть, в следующий раз приготовим что-то вместе?<br><br>
        Алексей: Отличная идея. Я буду рад.`
    },
    {
        title: "Мыть (мою) - Вымыть (вымою) - To wash",
        content: `Настя: Ты можешь вымыть посуду?<br><br>
        Сергей: Конечно, вымою. Сколько там всего?<br><br>
        Настя: Не так много, всего пару тарелок и чашек.<br><br>
        Сергей: Понял. Кстати, ты знаешь, что Марина вымыла весь дом вчера?<br><br>
        Настя: Да, она рассказывала. Она всегда такая ответственная.<br><br>
        Сергей: Это точно. Как твои дела?<br><br>
        Настя: Хорошо, только устала немного. Нужно ещё вымыть полы.<br><br>
        Сергей: Давай я помогу. Вместе быстрее справимся.<br><br>
        Настя: Спасибо, Сергей. Ты настоящий друг.`
    },
    {
        title: "Закрывать (закрываю) - Закрыть (закрою) - To close",
        content: `Игорь: Можешь закрыть окно? На улице слишком шумно.<br><br>
        Юлия: Конечно, закрою. Теперь тише.<br><br>
        Игорь: Спасибо. Как твои дела?<br><br>
        Юлия: Всё хорошо. Сегодня закрываю последний отчёт перед отпуском.<br><br>
        Игорь: Это отлично! Куда поедешь отдыхать?<br><br>
        Юлия: Думаю поехать на море. Хочу закрыть все дела и просто расслабиться.<br><br>
        Игорь: Звучит прекрасно. Надеюсь, твой отпуск будет замечательным.`
    },
    {
        title: "Сидеть (сижу) - Сесть (сяду) - To sit",
        content: `Марина: Где будем сидеть на вечеринке?<br><br>
        Алексей: Я сяду у окна. Там лучший вид.<br><br>
        Марина: Хорошо, сяду рядом с тобой. Как прошёл твой день?<br><br>
        Алексей: Был очень насыщенным. Много работал и сидел за компьютером.<br><br>
        Марина: Понимаю. Мы оба заслуживаем хороший отдых.<br><br>
        Алексей: Точно. Давай сядем и просто насладимся вечером.`
    },
    {
        title: "Вставать (встаю) - Встать (встану) - To stand up, to get up",
        content: `Ольга: Ты уже встал?<br><br>
        Сергей: Да, встал рано сегодня. Много дел.<br><br>
        Ольга: Я тоже. Встаю каждое утро в шесть.<br><br>
        Сергей: Это дисциплина. Как дела на работе?<br><br>
        Ольга: Всё хорошо. Готовлюсь к большому проекту.<br><br>
        Сергей: Отлично. Успехов тебе!`
    },
    {
        title: "Падать (падаю) - Упасть (упаду) - To fall",
        content: `Анна: Осторожно, не упади!<br><br>
        Виктор: Спасибо, я уже чуть не упал.<br><br>
        Анна: Как дела?<br><br>
        Виктор: Всё нормально. Сегодня немного устал.<br><br>
        Анна: Понимаю. Ты слышал, что Катя упала на льду?<br><br>
        Виктор: Нет, не слышал. Надеюсь, с ней всё в порядке.<br><br>
        Анна: Да, она немного ушиблась, но уже лучше.`
    },
    
];

let currentIndex = 0;

function updateDialogue(index) {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    title.innerHTML = dialogues[index].title;
    content.innerHTML = dialogues[index].content;
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateDialogue(currentIndex);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < dialogues.length - 1) {
        currentIndex++;
        updateDialogue(currentIndex);
    }
});

// Initialize with the first dialogue
updateDialogue(currentIndex);

const menu = document.getElementById('menu');
const popup = document.getElementById('popup');
const savedPhrases = document.getElementById('saved-phrases');

menu.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

let selectedText = '';
let selectionRange = null;
let saveButton = null;

document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        selectedText = selection.toString();
        selectionRange = selection.getRangeAt(0);

        if (saveButton) {
            saveButton.remove();
        }

        saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.position = 'absolute';
        saveButton.style.left = `${e.pageX}px`;
        saveButton.style.top = `${e.pageY}px`;
        document.body.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.textContent = selectedText;
            selectionRange.deleteContents();
            selectionRange.insertNode(span);

            const phraseItem = document.createElement('div');
            phraseItem.className = 'popup-item';
            phraseItem.textContent = selectedText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            phraseItem.appendChild(deleteButton);
            savedPhrases.appendChild(phraseItem);

            deleteButton.addEventListener('click', () => {
                savedPhrases.removeChild(phraseItem);
                span.replaceWith(document.createTextNode(span.textContent));
            });

            document.body.removeChild(saveButton);
            saveButton = null;
            selectedText = '';
        });
    }
});

document.addEventListener('click', (event) => {
    if (saveButton && !saveButton.contains(event.target) && !popup.contains(event.target)) {
        document.body.removeChild(saveButton);
        saveButton = null;
        selectedText = '';
        window.getSelection().removeAllRanges();
    }
});




