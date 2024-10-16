const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;


document.getElementById("toggleButton").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
    
    // Change button text based on menu state
    if (menu.classList.contains("active")) {
        this.textContent = "✖"; 
    } else {
        this.textContent = "☰";
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Rexburg Idaho",
      location: "Rexburg, Idaho",
      dedicated: "2008, February, 10",
      area: 57504, 
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500, 
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Twin Falls",
      location: "Twin Falls, Idaho",
      dedicated: "2008, August, 24",
      area: 31245, 
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/twin-falls-idaho/400x250/twin-falls-temple-850955-wallpaper.jpg"
      },
];

createTempleCard(temples);

function displayAllTemples() {
  createTempleCard(temples);
}

document.querySelector("#home").addEventListener("click", displayAllTemples);

const oldTemplesLink = document.querySelector("#oldTemples");

oldTemplesLink.addEventListener("click", () =>  { 
  createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
 });

const newTemplesLink = document.querySelector("#newTemples");

newTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
});

const largeTemplesLink = document.querySelector("#largeTemples");

largeTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemplesLink = document.querySelector("#smallTemples");

smallTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});




function createTempleCard(filteredTemples) {
  document.querySelector(".temple-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
      
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card. appendChild(area);
    card.appendChild(img);
    document.querySelector(".temple-grid").appendChild(card);
    });
  }
