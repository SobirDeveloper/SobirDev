// Ijtimoiy tarmoqlar tugmalari uchun funksionallik
document.getElementById('telegramBtn').addEventListener('click', () => {
    window.open('https://t.me/sobirdev', '_blank');
});

document.getElementById('instagramBtn').addEventListener('click', () => {
    window.open('https://www.instagram.com/sobirdev?igsh=cGg4YmhpazJtczF5', '_blank');
});

document.getElementById('tiktokBtn').addEventListener('click', () => {
    window.open('https://www.tiktok.com/@sobirdev?_r=1&_d=egdm68388kc0ad&sec_uid=MS4wLjABAAAAgzpYX7GPQyx1EF9FTEq1IP82sI6HgpXhYAY77uQ3gwObpciIRQ61tRrh3Rg972PS&share_author_id=6948305667267609601&sharer_language=uz&source=h5_m&u_code=di1a1aicijbhjk&timestamp=1732717787&user_id=6948305667267609601&sec_user_id=MS4wLjABAAAAgzpYX7GPQyx1EF9FTEq1IP82sI6HgpXhYAY77uQ3gwObpciIRQ61tRrh3Rg972PS&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7441507669376091922&share_link_id=f4b0bdba-0233-4fee-80f6-143221762cb3&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1', '_blank');
});

document.getElementById('youtubeBtn').addEventListener('click', () => {
    window.open('https://youtube.com/@sobirdev?si=RYWlvy0Y9MwUPvoh', '_blank');
});

document.getElementById('twitterBtn').addEventListener('click', () => {
    window.open('https://x.com/Sobiroff_62oo?t=ccD8SLVcVBEGbkkUDREQzw&s=09', '_blank');
});

document.getElementById('facebookBtn').addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=100081678453089&mibextid=kFxxJD', '_blank');
});

// Ko'rishlar sonini hisoblash
const viewCountElement = document.getElementById('viewCount');

// Brauzer localStorage orqali saqlash
let viewCount = localStorage.getItem('viewCount') || 0;
viewCount++; // Har marta sahifa ochilganda 1 qo'shadi
localStorage.setItem('viewCount', viewCount);
viewCountElement.textContent = viewCount;
