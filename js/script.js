// Reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'pete jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'boss',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

// Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

// Show person that's based on the item
function showPerson() {
    const item = reviews[currItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function() {
    currItem++;

    if (currItem > reviews.length - 1) {
        currItem = 0;
    }

    showPerson(currItem);
});

// Show previous person
prevBtn.addEventListener('click', function() {
    currItem--;

    if (currItem < 0) {
        currItem = reviews.length - 1;
    }

    showPerson();
});

// Show random person
randomBtn.addEventListener('click', function() {
    currItem = Math.floor(Math.random() * reviews.length);
    console.log(currItem);
    showPerson();
});