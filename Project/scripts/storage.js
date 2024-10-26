let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;

reviewCount++;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewCount').textContent = reviewCount;