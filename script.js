// Ko'rishlar sonini hisoblash
const viewCountElement = document.getElementById('viewCount');

// Brauzer localStorage orqali saqlash
let viewCount = localStorage.getItem('viewCount') || 0;
viewCount++; // Har marta sahifa ochilganda 1 qo'shadi
localStorage.setItem('viewCount', viewCount);
viewCountElement.textContent = viewCount;
