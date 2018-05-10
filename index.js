let wordItems = document.getElementsByTagName('strong');

let originalColor = wordItems[0].style.color;

for (let i = 0; i < wordItems.length; i++) {
  wordItems[i].addEventListener('mouseover', (e) => {

    e.target.style.color = 'red';
  });
  wordItems[i].addEventListener('mouseout', (e) => {
    e.target.style.color = originalColor;
  });
}
