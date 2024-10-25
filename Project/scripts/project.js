const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;



const games = [
    { name: "Children of Morta", 
      description: "Children of Morta is a beautifully crafted action RPG that blends deep storytelling with engaging rogue-lite gameplay. Set in a mystical world filled with peril, players explore the vibrant landscapes of the Land of Morta, where the fate of the family of Bergsons rests in their hands. Each member of the Bergson family possesses unique abilities and strengths, allowing for diverse playstyles as you battle against an encroaching darkness that threatens their home. As you venture into procedurally generated dungeons, you’ll face a variety of formidable enemies and bosses, each requiring strategic thinking and skillful combat. The game emphasizes the importance of family bonds; as you progress, you can unlock new skills and upgrades for each character, making your choices meaningful and impactful.", 
      id: 1,
      image:"images/Children-of-Morta.webp",
      purchaseLink1: "https://store.steampowered.com/app/330020/Children_of_Morta/",
      purchaseLink2:  "https://www.nintendo.com/us/store/products/children-of-morta-switch/?srsltid=AfmBOop-cBC3bW296AqSJhkv9LyA_aq-CXoF3LQplwSxlESChLnEK0fa",
      purchaseLink3: "https://store.playstation.com/en-us/concept/231069" ,
      purchaseLink4:"https://www.xbox.com/en-US/games/store/children-of-morta/9p675wh90sb4",
     },

    { name: "Raft", 
      description: "Raft is a thrilling survival adventure that plunges players into the vast, open ocean, where they must rely on their wits and resourcefulness to survive. In this unique game, you start on a small raft made of wooden planks and debris, surrounded by an endless sea teeming with danger and opportunities. As you gather resources from the water—like plastic, wood, and food—you’ll craft essential tools and expand your raft into a floating fortress. Explore the depths of the ocean and discover islands brimming with supplies, secrets, and wildlife. But beware: the ocean is home to lurking threats, including a relentless shark that will challenge your survival skills at every turn. Currently only available on PC",
      id: 2,
      image:"images/Raft.webp",
      purchaseLink1:"https://store.steampowered.com/app/648800/Raft/",
      
     },

    { name: "Plate Up",
      description: "Plate Up is a fast-paced cooperative cooking game that invites players to unleash their culinary creativity while managing the chaos of running a restaurant. You and your friends will team up to create delicious dishes, customize your restaurant, and serve demanding customers in a whimsical, chaotic kitchen environment. In Plate Up, players start with a modest setup and must work together to prepare meals, manage ingredients, and streamline service. From frying, chopping, and baking to plating and serving, every action counts as you navigate the frenzy of dinner rushes and customer expectations. The game encourages teamwork and communication, as players need to delegate tasks and adapt to ever-changing challenges.",
      id: 3,
      image:"images/Plate-Up.webp",
      purchaseLink1: "https://store.steampowered.com/app/1599600/PlateUp/",
      purchaseLink2: "https://www.nintendo.com/us/store/products/plateup-switch/?srsltid=AfmBOoo7YOgfYxEReBYiwHDQJbGnsZPPvtgnxMDh9w7t1TPMduziaEN7",
      purchaseLink3: "https://store.playstation.com/en-us/concept/10007566",
      purchaseLink4:"https://www.xbox.com/en-US/games/store/plateup/9P2HHT3VS7MP",
     },

    { name: "Portal 2", 
      description: "The humor and charm of Portal 2 shine through in the co-op mode, with humorous dialogues and quirky scenarios that add to the enjoyment. Each level is crafted to promote camaraderie and create memorable moments, making it a perfect choice for friends or couples looking to bond over gaming. Whether you’re strategizing on how to maneuver through a tricky puzzle or sharing a laugh over a hilarious mishap, the co-op mode in Portal 2 provides a rewarding and entertaining experience that deepens the connection between players while challenging their problem-solving skills."
      , 
      id: 4,
      image:"images/Portal-2.webp",
      purchaseLink1: "https://store.steampowered.com/app/620/Portal_2/",
      purchaseLink4: "https://www.xbox.com/en-US/games/store/portal-2/BT2B17V20D1P",
     },

    { name: "It Takes Two",
      description:"It Takes Two is a groundbreaking co-op adventure that takes players on an emotional journey through the challenges of a crumbling relationship. Designed exclusively for two players, this game invites you and a partner to step into the shoes of Cody and May, a couple turned into dolls by a magical spell. As they navigate a vibrant and imaginative world, players must work together to solve puzzles and overcome obstacles that reflect their personal struggles and growth.",
      id: 5,
      image:"images/It-Takes-Two.webp",
      purchaseLink1:"https://store.steampowered.com/app/1426210/It_Takes_Two/",
      purchaseLink2:"https://www.nintendo.com/us/store/products/it-takes-two-switch/?srsltid=AfmBOoqkgtAf0KJppiNmQUUYL-E3mdTiUz3yg6APEaw8B4PTNu1pj8B1",
      purchaseLink3:"https://store.playstation.com/en-us/product/UP0006-PPSA02342_00-ITTAKESTWORETAIL",
      purchaseLink4:"https://www.xbox.com/en-US/games/store/it-takes-two/9NKJ0VZQ4N0L",
    }
      
];



function displayGames() {
    const gamesList = document.getElementById("gamesList");
      games.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");

        const gameName = document.createElement("h3");
        gameName.textContent = game.name;
        gameName.classList.add("game-name");

        const purchaseLinks = [
          { link: game.purchaseLink1, platform: 'PC' },
          { link: game.purchaseLink2, platform: 'Nintendo' },
          { link: game.purchaseLink3, platform: 'PlayStation' },
          { link: game.purchaseLink4, platform: 'Xbox' },
        ];

        const purchaseButtons = purchaseLinks
          .filter(p => p.link) // Only include links that exist
          .map(p => `<a href="${p.link}" target="_blank" class="purchase-button">Buy Now for ${p.platform}</a>`)
          .join('');
        
        gameItem.innerHTML = `
          <h3>${game.name}</h3>
          <img src="${game.image}" alt="${game.name}" loading="lazy" class="game-image">
          <p>${game.description}</p>
          ${purchaseButtons}
          
`;
        
        gamesList.appendChild(gameItem);
    });
}

// Call the function to display the games
displayGames();

let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;

reviewCount++;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewCount').textContent = reviewCount;