/* =====================================================
   POHANTON DIGITAL LIBRARY
   Offline Education Application
===================================================== */


/* =====================================================
   DATA
===================================================== */

const grades = {

    7: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade7/mathematics.pdf"
        },
        {
            title: "ساینس",
            icon: "🔬",
            file: "books/grade7/science.pdf"
        },
        {
            title: "پښتو",
            icon: "📝",
            file: "books/grade7/pashto.pdf"
        },
        {
            title: "دری",
            icon: "📖",
            file: "books/grade7/dari.pdf"
        },
        {
            title: "انګلیسي",
            icon: "🌐",
            file: "books/grade7/english.pdf"
        },
        {
            title: "اسلامیات",
            icon: "☪️",
            file: "books/grade7/islamic.pdf"
        }
    ],

    8: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade8/mathematics.pdf"
        },
        {
            title: "فزیک",
            icon: "⚛️",
            file: "books/grade8/physics.pdf"
        },
        {
            title: "کیمیا",
            icon: "🧪",
            file: "books/grade8/chemistry.pdf"
        },
        {
            title: "پښتو",
            icon: "📝",
            file: "books/grade8/pashto.pdf"
        },
        {
            title: "انګلیسي",
            icon: "🌐",
            file: "books/grade8/english.pdf"
        }
    ],

    9: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade9/mathematics.pdf"
        },
        {
            title: "فزیک",
            icon: "⚛️",
            file: "books/grade9/physics.pdf"
        },
        {
            title: "کیمیا",
            icon: "🧪",
            file: "books/grade9/chemistry.pdf"
        },
        {
            title: "بیولوژي",
            icon: "🧬",
            file: "books/grade9/biology.pdf"
        },
        {
            title: "پښتو",
            icon: "📝",
            file: "books/grade9/pashto.pdf"
        }
    ],

    10: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade10/mathematics.pdf"
        },
        {
            title: "فزیک",
            icon: "⚛️",
            file: "books/grade10/physics.pdf"
        },
        {
            title: "کیمیا",
            icon: "🧪",
            file: "books/grade10/chemistry.pdf"
        },
        {
            title: "بیولوژي",
            icon: "🧬",
            file: "books/grade10/biology.pdf"
        },
        {
            title: "پښتو",
            icon: "📝",
            file: "books/grade10/pashto.pdf"
        }
    ],

    11: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade11/mathematics.pdf"
        },
        {
            title: "فزیک",
            icon: "⚛️",
            file: "books/grade11/physics.pdf"
        },
        {
            title: "کیمیا",
            icon: "🧪",
            file: "books/grade11/chemistry.pdf"
        },
        {
            title: "بیولوژي",
            icon: "🧬",
            file: "books/grade11/biology.pdf"
        },
        {
            title: "انګلیسي",
            icon: "🌐",
            file: "books/grade11/english.pdf"
        }
    ],

    12: [
        {
            title: "ریاضي",
            icon: "📐",
            file: "books/grade12/mathematics.pdf"
        },
        {
            title: "فزیک",
            icon: "⚛️",
            file: "books/grade12/physics.pdf"
        },
        {
            title: "کیمیا",
            icon: "🧪",
            file: "books/grade12/chemistry.pdf"
        },
        {
            title: "بیولوژي",
            icon: "🧬",
            file: "books/grade12/biology.pdf"
        },
        {
            title: "انګلیسي",
            icon: "🌐",
            file: "books/grade12/english.pdf"
        }
    ]

};


/* =====================================================
   PREPARATION CENTERS
===================================================== */

const preparation = {

    inayatullah: {

        title:
            "د استاد عنایت الله وردګ د ساینسي علومو ښوونیز مرکز",

        folder:
            "books/preparation/inayatullah/"

    },

    qudratullah: {

        title:
            "د استاد قدرت الله نورزي د ساینسي علومو ښوونیز مرکز",

        folder:
            "books/preparation/qudratullah/"

    },

    mahwar: {

        title:
            "د محور کانکور د ساینسي علومو ښوونیز مرکز",

        folder:
            "books/preparation/mahwar/"

    }

};


/* =====================================================
   DOM
===================================================== */

const pages = {

    home:
        document.getElementById("homePage"),

    school:
        document.getElementById("schoolPage"),

    prep:
        document.getElementById("prepPage"),

    about:
        document.getElementById("aboutPage")

};


const gradesGrid =
    document.getElementById("gradesGrid");


const booksArea =
    document.getElementById("booksArea");


const booksGrid =
    document.getElementById("booksGrid");


const selectedGradeTitle =
    document.getElementById("selectedGradeTitle");


const modal =
    document.getElementById("bookModal");


const toast =
    document.getElementById("toast");


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderGrades();

        loadTheme();

    }
);


/* =====================================================
   HOME
===================================================== */

function showHome() {

    hideAllPages();

    pages.home.classList.add("active");

    setActiveNav(0);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   SECTIONS
===================================================== */

function openSection(section) {

    hideAllPages();

    if (section === "school") {

        pages.school.classList.add("active");

        setActiveNav(1);

    }


    if (section === "prep") {

        pages.prep.classList.add("active");

        setActiveNav(2);

    }


    if (section === "about") {

        pages.about.classList.add("active");

        setActiveNav(3);

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function hideAllPages() {

    Object.values(pages).forEach(
        page =>
            page.classList.remove("active")
    );
}


/* =====================================================
   NAV
===================================================== */

function setActiveNav(index) {

    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach(
        button =>
            button.classList.remove("active")
    );

    if (buttons[index]) {

        buttons[index]
            .classList
            .add("active");

    }

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("show");
}


/* =====================================================
   RENDER GRADES
===================================================== */

function renderGrades() {

    gradesGrid.innerHTML = "";

    const gradeIcons = [
        "📘",
        "📗",
        "📙",
        "📕",
        "📔",
        "📚"
    ];


    Object.keys(grades).forEach(
        (grade, index) => {

            const card =
                document.createElement("div");

            card.className =
                "grade-card";

            card.innerHTML = `

                <div class="grade-icon">
                    ${gradeIcons[index]}
                </div>

                <h3>
                    ${grade}م ټولګی
                </h3>

                <p>
                    ${grades[grade].length}
                    کتابونه
                </p>

                <div class="grade-number">
                    ${grade}
                </div>

            `;


            card.onclick =
                () =>
                    openGrade(grade);


            gradesGrid.appendChild(card);

        }
    );
}


/* =====================================================
   OPEN GRADE
===================================================== */

function openGrade(grade) {

    gradesGrid.classList.add("hidden");

    booksArea.classList.remove("hidden");

    selectedGradeTitle.textContent =
        `${grade}م ټولګي کتابونه`;

    renderBooks(
        grades[grade]
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RENDER BOOKS
===================================================== */

function renderBooks(books) {

    booksGrid.innerHTML = "";


    if (!books.length) {

        booksGrid.innerHTML = `

            <div class="book-card">

                <h3>
                    تر اوسه کتاب نشته
                </h3>

            </div>

        `;

        return;
    }


    books.forEach(
        book => {

            const card =
                document.createElement("div");

            card.className =
                "book-card";


            card.innerHTML = `

                <div>

                    <div class="book-cover">
                        ${book.icon}
                    </div>

                    <h3>
                        ${book.title}
                    </h3>

                    <p>
                        Offline کتاب
                    </p>

                </div>


                <button class="book-open">
                    کتاب خلاصول
                </button>

            `;


            card
                .querySelector(".book-open")
                .onclick =
                    () =>
                        openBook(book);


            booksGrid.appendChild(card);

        }
    );
}


/* =====================================================
   BACK TO GRADES
===================================================== */

function backToGrades() {

    booksArea.classList.add("hidden");

    gradesGrid.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   SEARCH
===================================================== */

function searchBooks() {

    const input =
        document
            .getElementById("bookSearch")
            .value
            .trim()
            .toLowerCase();


    if (!input) {

        backToGrades();

        return;
    }


    gradesGrid.classList.add("hidden");

    booksArea.classList.remove("hidden");

    selectedGradeTitle.textContent =
        "د کتابونو لټون";


    let results = [];


    Object.entries(grades)
        .forEach(
            ([grade, books]) => {

                books.forEach(
                    book => {

                        if (
                            book.title
                                .toLowerCase()
                                .includes(input)
                        ) {

                            results.push({
                                ...book,
                                grade
                            });

                        }

                    }
                );

            }
        );


    booksGrid.innerHTML = "";


    results.forEach(
        book => {

            const card =
                document.createElement("div");

            card.className =
                "book-card";


            card.innerHTML = `

                <div>

                    <div class="book-cover">
                        ${book.icon}
                    </div>

                    <h3>
                        ${book.title}
                    </h3>

                    <p>
                        ${book.grade}م ټولګی
                    </p>

                </div>

                <button class="book-open">
                    کتاب خلاصول
                </button>

            `;


            card
                .querySelector("button")
                .onclick =
                    () =>
                        openBook(book);


            booksGrid.appendChild(card);

        }
    );


    if (!results.length) {

        booksGrid.innerHTML = `

            <div class="book-card">

                <div class="book-cover">
                    🔍
                </div>

                <h3>
                    کتاب پیدا نشو
                </h3>

                <p>
                    بل نوم وپلټئ.
                </p>

            </div>

        `;

    }
}


/* =====================================================
   OPEN BOOK
===================================================== */

function openBook(book) {

    document
        .getElementById("modalBookTitle")
        .textContent =
            book.title;


    document
        .getElementById("modalBookDescription")
        .textContent =
            "دا کتاب باید د books فولډر کې موجود PDF فایل ولري.";


    const button =
        document.getElementById(
            "openPdfButton"
        );


    button.onclick = () => {

        window.open(
            book.file,
            "_blank"
        );

    };


    modal.classList.add("show");

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("show");
}


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =====================================================
   PREPARATION
===================================================== */

// function openPreparation(center) {

//     const data =
//         preparation[center];


//     if (!data) return;


//     showToast(
//         `${data.title} — د کتابونو برخه به دلته پرانیستل شي.`
//     );

// }
function openPreparation(type) {

    const folders = {
        inayatullah: "books/preparation/inayatullah/",
        qudratullah: "books/preparation/qudratullah/",
        mahwar: "books/preparation/mahwar/"
    };

    const folder = folders[type];

    if (!folder) {
        showToast("د موادو مسیر پیدا نه شو");
        return;
    }

    window.location.href = folder;
}


/* =====================================================
   THEME
===================================================== */

function toggleTheme() {

    document
        .body
        .classList
        .toggle("light");


    const mode =
        document.body.classList.contains("light")
            ? "light"
            : "dark";


    localStorage.setItem(
        "theme",
        mode
    );


    showToast(
        mode === "light"
            ? "Light Mode فعال شو"
            : "Dark Mode فعال شو"
    );
}


function loadTheme() {

    const theme =
        localStorage.getItem("theme");


    if (theme === "light") {

        document
            .body
            .classList
            .add("light");

    }
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    toast
        .querySelector("p")
        .textContent =
            message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast
                    .classList
                    .remove("show");

            },
            2800
        );
}


/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);
// ================================
// PREPARATION BOOKS
// ================================

const preparationBooks = {

    inayatullah: {
        title: "د استاد عنایت الله وردګ مرکز",
        books: [
            {
                title: "فزیک",
                description: "د فزیک د آمادګۍ تعلیمي کتاب",
                icon: "⚛️",
                pdf: "books/preparation/inayatullah/physics.pdf"
            },
            {
                title: "کیمیا",
                description: "د کیمیا د آمادګۍ تعلیمي کتاب",
                icon: "🧪",
                pdf: "books/preparation/inayatullah/chemistry.pdf"
            },
            {
                title: "بیولوژي",
                description: "د بیولوژي د آمادګۍ تعلیمي کتاب",
                icon: "🧬",
                pdf: "books/preparation/inayatullah/biology.pdf"
            }
        ]
    },

    qudratullah: {
        title: "د استاد قدرت الله نورزي مرکز",
        books: [
            {
                title: "فزیک",
                description: "د فزیک د آمادګۍ تعلیمي کتاب",
                icon: "⚛️",
                pdf: "books/preparation/qudratullah/physics.pdf"
            },
            {
                title: "کیمیا",
                description: "د کیمیا د آمادګۍ تعلیمي کتاب",
                icon: "🧪",
                pdf: "books/preparation/qudratullah/chemistry.pdf"
            },
            {
                title: "بیولوژي",
                description: "د بیولوژي د آمادګۍ تعلیمي کتاب",
                icon: "🧬",
                pdf: "books/preparation/qudratullah/biology.pdf"
            }
        ]
    },

    mahwar: {
        title: "د محور کانکور مرکز",
        books: [
            {
                title: "فزیک",
                description: "د فزیک د آمادګۍ تعلیمي کتاب",
                icon: "⚛️",
                pdf: "books/preparation/mahwar/physics.pdf"
            },
            {
                title: "کیمیا",
                description: "د کیمیا د آمادګۍ تعلیمي کتاب",
                icon: "🧪",
                pdf: "books/preparation/mahwar/chemistry.pdf"
            },
            {
                title: "بیولوژي",
                description: "د بیولوژي د آمادګۍ تعلیمي کتاب",
                icon: "🧬",
                pdf: "books/preparation/mahwar/biology.pdf"
            }
        ]
    }

};


function openPreparation(type) {

    const center = preparationBooks[type];

    if (!center) {
        showToast("مواد پیدا نه شول");
        return;
    }

    document.getElementById("prepPage").classList.remove("active");

    document
        .getElementById("preparationBooksPage")
        .classList.add("active");

    document.getElementById("prepTitle").textContent = center.title;

    const grid = document.getElementById("preparationBooksGrid");

    grid.innerHTML = "";

    center.books.forEach(book => {

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <div class="book-cover">
                <span>${book.icon}</span>
            </div>

            <div class="book-info">

                <h3>${book.title}</h3>

                <p>
                    ${book.description}
                </p>

                <button class="primary-btn">
                    📖 کتاب پرانیزئ
                </button>

            </div>
        `;

        card.querySelector("button").onclick = () => {
            window.open(book.pdf, "_blank");
        };

        grid.appendChild(card);

    });

}


function backToPreparation() {

    document
        .getElementById("preparationBooksPage")
        .classList.remove("active");

    document
        .getElementById("prepPage")
        .classList.add("active");

}