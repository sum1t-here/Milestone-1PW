document.addEventListener('DOMContentLoaded', function () {
  const items = [
    'HTML and Semantics',
    'Starting with CSS',
    'Working Template',
    'Mobile responsive webpages',
    'Grid and Flex-box in CSS',
    'Projects using HTML & CSS',
    'Version Control and Git',
    'Getting Started with JavaScript',
    'Advance JavaScript',
    'Working with DOM',
    'Making Projects using HTML, CSS and JavaScript',
    'Understanding Fundamental of Computer Science',
    'Getting Started with Database',
    'Understanding the Database',
    'Starting with NodeJS and Express',
    'Understanding React and its Fundamentals',
    'Understanding Hooks and Routers',
    'Starting and Completing Full Fledge Projects',
  ];

  const listItemsButton = document.getElementById('listItemsButton');
  const itemList = document.getElementById('itemList');
  const message = document.getElementById('message');

  let currentItemIndex = 0;

  listItemsButton.addEventListener('click', function () {
    if (currentItemIndex < items.length) {
      const listItem = document.createElement('li');
      listItem.textContent = items[currentItemIndex];
      itemList.appendChild(listItem);
      currentItemIndex++;
    }

    if (currentItemIndex === items.length) {
      message.textContent = 'Items added';
    }
  });
});
