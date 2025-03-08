// const tabs = document.querySelectorAll('.tab-hotels');
//     const hotelsLists = document.querySelectorAll('.hotels-list');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             tabs.forEach(t => t.classList.remove('active'));
//             tab.classList.add('active');

//             hotelsLists.forEach(list => list.style.display = 'none');
//             document.getElementById(tab.dataset.tab).style.display = 'flex';
//         });
//     });
const hotelTabs = document.querySelectorAll('.tab-hotels');
const forumTabs = document.querySelectorAll('.tab-forum');
const hotelLists = document.querySelectorAll('.hotels-list');
const forumMessages = document.querySelectorAll('.public-message');

function handleTabClick(tabs, lists) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            lists.forEach(list => list.style.display = 'none');
            document.getElementById(tab.dataset.tab).style.display = 'flex';
        });
    });
}

handleTabClick(hotelTabs, hotelLists);
handleTabClick(forumTabs, forumMessages);