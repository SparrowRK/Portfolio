'use strict'

// humburger
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeAll = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeAll.addEventListener('click', () => {
    menu.classList.remove('active');
});



// rating
const counter = document.querySelectorAll('.tools__rating-percent'),
    line = document.querySelectorAll('.tools__rating-line span');

counter.forEach((item, i) => {
    const value = parseInt(item.innerHTML, 10);


    if (value > 100) {
        line[i].style.width = "100%";
        line[i].style.backgroundColor = "red";
    } else {
        line[i].style.width = `${value}%`;
    }
});


// form


//  удобный скролл и вверх
$(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#promo]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});



//темная тема

const darkTheme = document.querySelector('.toggle');

// Проверяем сохранённую тему в localStorage при загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    darkTheme.classList.add('active');
} else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    // Если в localStorage нет сохранённой темы, применяем настройку по умолчанию
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.classList.add('dark');
        darkTheme.classList.add('active');
    }
}

// Обработчик для переключения темы
darkTheme.addEventListener('click', () => {
    darkTheme.classList.toggle('active');

    // Если кнопка активна, включаем темную тему
    if (darkTheme.classList.contains('active')) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');  // Сохраняем в localStorage
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');  // Сохраняем в localStorage
    }
});



// смена языка
// получаем классы кнопок и даем им обработчик клика  с функцияе устновки языка по выбраному классу
document.querySelector('.langbtn-en').addEventListener('click', () => setLanguage('en'));
document.querySelector('.langbtn-ua').addEventListener('click', () => setLanguage('ua'));
document.querySelector('.langbtn-ru').addEventListener('click', () => setLanguage('ru'));


// Восстановление сохраненного языка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ua'; // Если язык не сохранен, установить 'ru' по умолчанию
    setLanguage(savedLang);
});

// Функция для установки языка
function setLanguage(lang) {
    // Сохранение выбранного языка в localStorage
    localStorage.setItem('lang', lang);

    // Применение перевода для элементов с атрибутом data-key
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        // Если есть перевод для этого ключа, меняем текст
        if (translate[lang] && translate[lang][key]) {
            el.textContent = translate[lang][key];
        }
    });

    document.querySelectorAll(".lang-link").forEach((link) => {
        if (link.classList.contains(lang)) {
            link.style.display = "inline";
        } else {
            link.style.display = "none";
        }
    });

    // Добавление класса активности для кнопок языка
    document.querySelectorAll(".langbtn").forEach((btn) => {
        btn.classList.remove("active");
        if (btn.classList.contains(`langbtn-${lang}`)) {
            btn.classList.add("active");
        }
    });

}

// cлайдер сертификатов

const prevarrow = document.querySelector(".certificates__arrowprev"),
    nextarrow = document.querySelector(".certificates__arrownext"),
    imgs = document.querySelector('.certificates__imgs');


function Slider() {
    let offset = 0;

    nextarrow.addEventListener("click", () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 576 ? 310 : screenWidth < 768 ? 280 : screenWidth < 992 ? 365 : screenWidth < 1200 ? 325 : 350;
        const max = screenWidth < 576 ? 1860 : screenWidth < 768 ? 1400 : screenWidth < 992 ? 1825 : screenWidth < 1200 ? 1300 : 1400;

        offset += step;
        imgs.style.transform = `translateX(-${offset}px)`;

        if (offset === max) {
            offset -= max;
            imgs.style.transform = `translateX(-${offset}px)`;
        }
    });

    prevarrow.addEventListener("click", () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 576 ? 310 : screenWidth < 768 ? 280 : screenWidth < 992 ? 365 : screenWidth < 1200 ? 325 : 350;
        const max = screenWidth < 576 ? 1550 : screenWidth < 768 ? 1120 : screenWidth < 992 ? 1460 : screenWidth < 1200 ? 975 : 1400;


        offset -= step;
        if (offset < 0) {
            offset = 0;
        }

        imgs.style.transform = `translateX(-${offset}px)`;
    });
}
Slider();

// обьект с переводом
const translate = {
    en: {
        "aboutmeb": "ABOUT ME",
        "exper": "MY EXPERIENCE",
        "myskill": "MY SKILLS",
        "mywork": "MY WORKS",
        "mycontact": "CONTACTS",

        "web-title-social": "Social links",
        "web-title-submain": "My name Rostyslav Kanavenko",
        "web-title-main": "I am web-developer from Kyiv",
        "portfolio": "Portfolio",
        "aboutme": "About me",
        "name": "My name Rostyslav",
        "aboutdes": "I am 28 years old and a beginner Frontend developer, passionate about creating modern and user-friendly web interfaces and pages in general. I have a solid understanding of HTML, CSS, basic JavaScript, and I am actively deepening my knowledge of React and Redux. I enjoy solving tasks that make web applications more functional and appealing to users. I strive to write clean and understandable code and constantly improve my skills, eager to demonstrate and enhance my abilities.",

        "webdev": "Web-development",
        "webdev-descr": "Like the world, this field is constantly evolving. This, of course, creates certain difficulties in learning, but I don't want to stop at basic knowledge. Modern technologies have long moved beyond this stage, and I also strive to learn as much new as possible.",
        "appdev": "App development",
        "appdev-descr": "Currently, I am just starting to master this area, but it already seems to me one of the most exciting aspects of web development.",
        "js-dev": "A huge and essential step (with its steps) in the world of development. Right now, my priority is to learn and practice it.",

        "Exp-subtitle": "Experience",
        "Exp-title": "How I can be useful",
        "Educ": "Education",
        "udemy-type": "TypeScript Course",
        "udemy-type-descr": "The course is completed; currently working on deeper understanding and gaining hands-on experience (tasks, practical application).",
        "udemy-WP": "WordPress Course",
        "udemy-WP-descr": "A small but useful course — another piece of the FrontEnd world. I was very interested in this tool, and thanks to the course, I got familiar with its inner workings, useful features, and overall understood how convenient this CMS is for giving clients the ability to maintain a project after release.",
        "udemy-sub": "JavaScript + React + Redux Courses",
        "udemy-sub-descr": "The course was started in mid-September and fully completed by the end of February. It allowed me to go through basic block of this vast part of the IT world and practically use it. You can see my work using React in the portfolio  section. I didn’t use Redux in practice, but I gained basic knowledge of it through the course.",
        "udemy-sub2": "Web Development Courses",
        "udemy-sub2-descr2": "The course was completed from June to August 2024 (with some additional self-study in September). Thanks to it, I mastered the basics of HTML/CSS (this website and portfolio were created based on the information learned in the course)",
        "VPU": "VPU №33",
        "VPU-sub": "Specialist's Diploma | Kyiv (2014-2016)",
        "VPU-descr": "Secondary vocational education in the field of hospitality and restaurant business, qualification — \"Master of Restaurant Service\".",
        "ExpWork": "Work Experience",
        "learn-test": "Self-study and test tasks",
        "learn-test-descr": "Currently, I am in the 6th month of self-study, using both courses and various tests/tasks and personal ideas. Working with mockups, layout, and still minimal use of JS code. You can see landing page implementations below in the Portfolio section.",
        "CustS": "Customer Support-GR8tech",
        "CustS-title": "Online Customer Support",
        "CustS-descr": "Providing real-time customer support through 3 communication channels (Call center/Online chats/Email) + Eng. Skills gained and those I would like to highlight: teamwork, multitasking, work process organization/time management, customer orientation, as well as structuring and managing large amounts of information, which could change weekly. Attention to detail.",
        "Hotres": "Hotel/Restaurant Business",
        "Hotres-sub": "Bartender (bartender-cashier)",
        "Hotres-des": "About 6 years of experience in the field. In establishments of various levels and types. Skills I would like to highlight: communication, stress resistance. Keeping and managing work documentation, technical skills typical for the field.",

        "certificates": "My certificates",

        "skills": "Skills",
        "skills-main": "What I use in my work",
        "html-desc": "It is the foundation of a website or application, and the fifth version allows me to create a more SEO-optimized product structure.",
        "css-descr": "This stylesheet language allows you to create any visual appearance for your website or app. Everything is limited only by imagination!",
        "js-descr": "This programming language brings anything to life: sliders, windows, tooltips, tabs, fetching data from the server, and much more.",
        "vsc-descr": "This powerful and convenient code editor supports many programming languages and tools. It makes working on projects easier, extends with plugins, and generally provides excellent functionality.",
        "react-descr": "This library allows you to create web applications. With it, you can build highly interactive products for any purpose.",
        "node-descr": "This platform allows you to create a backend for your product - the ‘brain’ that performs actions the user doesn't see.",
        "figma-descr": "An online platform for interface design and prototyping. It allows you to create visual concepts, layouts, etc. The tool supports real-time collaboration, ensuring efficiency at all stages of product creation.",
        "jq-descr": "The Jquery library helps speed up development (without the need for integration into the project) but working with it is still a valuable skill.",
        "base&pract": "Base & practice (HTML&CSS)",
        "creative": "Creativity",
        "Js&pract": "JS base & practice",

        "works": "My Works",
        "contacts": "Contacts",
        "contacts-sub": "Contact me",
        "contacts-any": "In whichever way is easiest for you",

        "cont": "Or leave your data and I'll get back to you:",
        "cont-name": "Your Name",
        "cont-email": "Your Email",
        "cont-mess": "Your Message",
        "cont-send": "Send Message",
        "cont-check": "I agree to the",
        "cont-check2": "privacy policy"

    },
    ru: {
        "aboutmeb": "ОБО МНЕ",
        "exper": "МОЙ ОПЫТ",
        "myskill": "МОИ НАВЫКИ",
        "mywork": "МОИ РАБОТЫ",
        "mycontact": "КОНТАКТЫ",


        "web-title-social": "Cоциальные ссылки",
        "web-title-submain": "Меня зовут Канавенко Ростислав",
        "web-title-main": "Я web-разработчик из города Киев",

        "portfolio": "Портфолио",

        "aboutme": "Обо мне",
        "name": "Меня зовут Ростислав",
        "aboutdes": "Мне 28 и я начинающий Frontend-разработчик, увлеченный созданием современных и удобных веб-интерфейсов и в целом страниц. Обладаю основными знаниями HTML, CSS. Базовым JavaScript и активно углубляюсь в изучение React и Redux. Мне нравится решать задачи, которые делают веб-приложения более функциональными и привлекательными для пользователей. Я стремлюсь писать чистый и понятный код, а также постоянно развивать свои навыки, заинтересован в показе и улучшении своих навыков",

        "webdev": "Web-разработка",
        "webdev-descr": "Как и мир, эта область не стоит на месте, постоянно развиваясь.Это конечно, создает определенные трудности в обучении, но останавливаться на базовых знаниях не хочу.Современные технологии давно перешли этот этап, и я также стремлюсь освоить как можно больше нового.",

        "appdev": "Разработка приложений",
        "appdev-descr": "На данный момент я только начинаю осваивать эту область, но она уже кажется мне одной из самых увлекательных сторон веб-разработки.",
        "js-dev": "Огромная и важнейшая ступень (со своими ступенями) в мире разработки. На данный момент мой приоритет в освоении и практике.",

        "Exp-subtitle": "Опыт",
        "Exp-title": "Чем я буду полезен",
        "Educ": "Образование",
        "udemy-type": "Курс Typescript",
        "udemy-type-descr": "Курс завершен, в процессе детальное знакомоство и набивание руки (задачки, практическое применение)",
        "udemy-WP": "Курс WordPress",
        "udemy-WP-descr": "Небольшой, но полезный курс — ещё одна крупица в мир FrontEnd. Меня очень интересовал этот инструмент, и благодаря курсу я смог познакомиться с его внутренней кухней, полезными особенностями и в целом понять, насколько удобен этот CMS для передачи клиенту возможности поддерживать проект после релиза.",
        "udemy-sub": "Курсы JavaScript + React + Redux",
        "udemy-sub-descr": "Курс был начат с середины сентября и окончен полностью к концу февраля. Курс позволил полностью пройти и практически закрепить базовый блок этого огромного куска It мира.  Мою работу с использованием React можете увидеть в соотвествующем блоке портфолио.  Redux не использовал но также по курсу получил базу знаний.",
        "udemy-sub2": "Курсы по Web-разработке",
        "udemy-sub2-descr2": "Курс был пройден в июне-августе 2024 года (начало сентября с учетом послекурсовой самостоятельной практики). Благодаря курсу освоил базу вёрстки (данный сайт как и портфолио были созданы с учётом изученной информации на курсе).",
        "VPU": "ВПУ №33",
        "VPU-sub": "Диплом специалиста | Киев(2014-2016)",
        "VPU-descr": "Среднее профессиональное образование в сфере гостинично-ресторанного бизнеса, квалификация — \"Мастер ресторанного обслуживания\".",
        "ExpWork": "Опыт работы",
        "learn-test": "Самобучение и тестовые задачки",
        "learn-test-descr": "На текущий момент не полный 6 месяц в рамках самообучения с помощью курсов так и различных тестов, задач и своих идей. Работа с макетами, верстка и пока еще минимальное по наполнению использование JS кода. Реализацию лендингов можно увидеть ниже в разделе Портфолио",
        "CustS": "Customer Support-GR8tech",
        "CustS-title": "Онлайн поддержка клиентов",
        "CustS-descr": "Поддержка клиентов в реальном времени через 3 канала связи(Колл центр/Онлайн чаты/Еmail)+Eng. Навыки, которые были получены и которые хотелось бы выделить: командная работа, многозадачность, организация рабочего процесса\тайм-менеджмент,клиенто ориентированность а также структурирование и использование огромного объема информации, которая могла меняться еженедельно. Внимание к деталям.",
        "Hotres": "Отельно-ресторанный бизнес",
        "Hotres-sub": "Бармен(бармен-кассир)",
        "Hotres-des": "Порядка 6 лет опыта работы в сферею. В заведениях разного уровня и типа. Навыки, которые хотелось бы выделить: коммуникабельность, стрессоустойчивость. Ведение и учет рабочей документации, технические навыки характерны для сферы.",

        "certificates": "Мои сертификаты",

        "skills": "Навыки",
        "skills-main": "Что я использую в работе",
        "html-desc": "Именно он создает каркас сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру продукта.",
        "css-descr": "Этот язык стилей позволяет создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только фантазией!",
        "js-descr": "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.",
        "vsc-descr": "Это мощный и удобный редактор кода, который поддерживает множество языков программирования и инструментов. Он обеспечивает удобную работу с проектами, расширяется с помощью плагинов и в целом предоставляет просто отличный функционал.",
        "react-descr": "Эта библиотека позволяет создавать web-приложения. С ним можно создать максимально интерактивный продукт под любые цели.",
        "node-descr": "Эта платформа позволяет создавать бэкенд для продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.",
        "figma-descr": "Онлайн-платформа для дизайна интерфейсов и прототипирования, позволяет создавать визуальные концепты, макеты и т.д. Инструмент поддерживает совместную работу в реальном времени, обеспечивая эффективность на всех этапах создания продукта.",
        "jq-descr": "Библиотека Jquery позволит ускорить разработку (без необходимости интеграции в проект не происходит), но навык работы с ней присутствует.",

        "base&pract": "База и практика (HTML&CSS)",
        "creative": "Креативность",
        "Js&pract": " JS база и практика",

        "works": "Мои работы",
        "contacts": "Контакты",
        "contacts-sub": "Свяжитесь со мной",
        "contacts-any": "Любым удобным для вас способом",

        "cont": "Или оставьте ваши данные и я сам вам напишу:",
        "cont-name": "Ваше Имя",
        "cont-email": "Ваша почта",
        "cont-mess": "Ваше сообщение",
        "cont-send": "Отправить сообщение",
        "cont-check": "Я согласен(а) с",
        "cont-check2": "политикой конфиденциальности",


    },

    ua: {
        "aboutmeb": "ПРО МЕНЕ",
        "exper": "МІЙ ДОСВІД",
        "myskill": "МОЇ НАВИЧКИ",
        "mywork": "МОЇ РОБОТИ",
        "mycontact": "КОНТАКТИ",

        "web-title-social": "Соціальні мережi",
        "web-title-submain": "Мене звати Канавенко Ростислав",
        "web-title-main": "Я web-розробник із міста Київ",

        "portfolio": "Портфоліо",

        "aboutme": "Про мене",
        "name": "Мене звати Ростислав",
        "aboutdes": "Мені 28 і я початківець Frontend-розробник, захоплений створенням сучасних i зручних веб-інтерфейсів та сторінок загалом. Маю базові знання HTML, CSS, базовий JavaScript та й активно поглиблююсь у вивчення React та Redux. Мені подобається вирішувати завдання, які роблять веб-додатки більш функціональними та привабливими для користувачів. Я прагну писати чистий та зрозумілий код, а також постійно розвивати свої навички та зацікавлений у їхньому вдосконаленні й демонстрації.",

        "webdev": "Web-розробка",
        "webdev-descr": "Як і світ, ця сфера не стоїть на місці, постійно розвиваючись. Це, звичайно, створює певні труднощі в навчанні, але зупинятися на базових знаннях я не хочу. Сучасні технології давно перейшли цей етап, тож я також прагну опанувати якомога більше нового.",

        "appdev": "Розробка додатків",
        "appdev-descr": "На даний момент я тільки починаю освоювати цю сферу, але вона вже здається мені однією з найцікавіших сторін веб-розробки.",
        "js-dev": "Величезна та найважливіша сходинка (зі своїми сходинками) у світі розробки. Зараз у моему пріоритетшi у вивченні та практиці.",

        "Exp-subtitle": "Досвід",
        "Exp-title": "Чим я можу бути корисний",
        "Educ": "Освіта",
        "udemy-type": "Курс TypeScript",
        "udemy-type-descr": "Курс завершено, наразi бiльш детальне ознайомлення та набивання руки (задачки, практичне застосування).",
        "udemy-WP": "Курс WordPress",
        "udemy-WP-descr": "Невеликий, але корисний курс + ще одна частина світу FrontEnd. Мене дуже цікавив цей інструмент, і завдяки курсу я ознайомився з його внутрішньою кухнею, корисними функціями та загалом зрозумів, наскільки зручно цей CMS підходить для передачі клієнту можливості підтримувати проєкт після релізу.",
        "udemy-sub": "Курси JavaScript + React + Redux",
        "udemy-sub-descr": "Курс був розпочатий у середині вересня та повністю завершений к кінцю лютого. Він дав змогу пройти та практично закріпити базовий блок цієї великої частини ІТ-світу. Мою роботу з використанням React можна побачити у відповідному розділі портфоліо. Redux не використовував на практиці, але також отримав базові знання за курсом.",
        "udemy-sub2": "Курси з Web-розробки",
        "udemy-sub2-descr2": "Курс був пройдений з червня по серпень 2024 року (з додатковою самостійною практикою в вересні). Завдяки цьому курсу я освоїв основи HTML/CSS (цей сайт та портфоліо були створені на основі інформації, що була вивчена під час курсу).",
        "VPU": "ВПУ №33",
        "VPU-sub": "Диплом спеціаліста | Київ (2014-2016)",
        "VPU-descr": "Середня професійна освіта в галузі готельно-ресторанного бізнесу, кваліфікація — \"Майстер ресторанного обслуговування\".",
        "ExpWork": "Досвід роботи",
        "learn-test": "Самоосвіта та тестові завдання",
        "learn-test-descr": "На даний момент я перебуваю на 6-му місяці самоосвіти, використовуючи як курси, так і різні тести/завдання та свої ідеї. Робота з макетами, верстка та поки що мінімальне використання JS коду. Реалізацію лендингів можна побачити нижче в розділі Портфоліо.",
        "CustS": "Підтримка клієнтів - GR8tech",
        "CustS-title": "Онлайн підтримка клієнтів",
        "CustS-descr": "Надання підтримки клієнтів в реальному часі через 3 канали зв'язку (Колл центр/Онлайн чати/Email) + Eng. Навички, які я набув і які хотів би виділити: командна робота, багатозадачність, організація робочого процесу/тайм-менеджмент, орієнтованість на клієнта, а також структуризація і робота з великими обсягами інформації, яка могла змінюватися щотижня. Увага до деталей.",
        "Hotres": "Готельно-ресторанний бізнес",
        "Hotres-sub": "Бармен (бармен-касир)",
        "Hotres-des": "Близько 6 років досвіду роботи в цій галузі. У закладах різного рівня та типу. Навички, які я хотів би виділити: комунікабельність, стресостійкість. Ведення та облік робочої документації, технічні навички, притаманні цій галузі.",


        "certificates": "Мої сертифікати",

        "skills": "Навички",
        "skills-main": "Що я використовую в роботі",
        "html-desc": "Саме він створює каркас сайту або додаткy, а п'ята версія дозволяє мені створювати більш SEO-оптимізовану структуру продукту.",
        "css-descr": "Ця мова стилів дозволяє створювати абсолютно будь-який зовнішній вигляд вашого сайту чи додаткy. Усе обмежується лише фантазією!",
        "js-descr": "Ця мова програмування дозволяє оживити все що завгодно: слайдери, вікна, підказки, вкладки, отримання даних із сервера та багато іншого.",
        "vsc-descr": "Це потужний та зручний редактор коду, який підтримує багато мов програмування та інструментів. Він забезпечує зручну роботу з проектами, розширюється за допомогою плагінів і загалом надає чудовий функціонал.",
        "react-descr": "Ця бібліотека дозволяє створювати web-додатки. З нею можна створити максимально інтерактивний продукт для будь-яких цілей.",
        "node-descr": "Ця платформа дозволяє створювати бекенд для продукту – “мізки”, які виконуватимуть дії, що користувач не бачить.",
        "figma-descr": "Онлайн-платформа для дизайну інтерфейсів та прототипування, дозволяє створювати візуальні концепти, макети тощо. Інструмент підтримує спільну роботу в реальному часі, забезпечуючи ефективність на всіх етапах створення продукту.",
        "jq-descr": "Бібліотека Jquery дозволяє пришвидшити розробку (не використовуєтьсябез необхідності інтеграції в проєкт), але навичка роботи з нею присутня.",

        "base&pract": "База та практика (HTML&CSS)",
        "creative": "Креативність",
        "Js&pract": " JS база та практика",

        "works": "Мої роботи",
        "contacts": "Контакти",
        "contacts-sub": "Зв'яжіться зі мною",
        "contacts-any": "Будь-яким зручним для вас способом",

        "cont": "Або залиште свої дані, і я сам вам напишу:",
        "cont-name": "Ваше Ім'я",
        "cont-email": "Ваша пошта",
        "cont-mess": "Ваше повідомлення",
        "cont-send": "Відправити повідомлення",
        "cont-check": "Я погоджуюсь з ",
        "cont-check2": "політикою конфіденційності"

    }
};


// отправка
const ERROR_MESSAGE = "Some Error!";
const SUCCESS_MESSAGE = "Successfuly send!";
const form = document.querySelector(".contacts__form");

form.addEventListener("submit", formSend);

async function formSend(event) {
    event.preventDefault();
    const formData = new FormData(form);

    let response = await fetch("php/index.php", {
        method: "POST",
        body: formData,
    });

    let colorMessage;

    if (response.ok) {
        colorMessage = "linear-gradient(to right, #00b09b, #96c93d)";
        showTostMessage(SUCCESS_MESSAGE, colorMessage);
    } else {
        colorMessage = "linear-gradient(to right, red, red)";
        showTostMessage(ERROR_MESSAGE, colorMessage);
    }


    form.reset();
}

function showTostMessage(message, colorMessage) {
    Toastify({
        text: message,
        duration: 5000,
        newWindow: true,
        className: "toast-message",
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: colorMessage,
        },
    }).showToast();
}