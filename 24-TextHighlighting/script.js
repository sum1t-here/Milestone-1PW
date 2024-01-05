document.addEventListener('DOMContentLoaded', function () {
  const contentParagraph = document.getElementById('content');

  const words = contentParagraph.textContent.split(' ');

  const highlightedContent = words.map((word) => {
    return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
  });

  contentParagraph.innerHTML = highlightedContent.join(' ');
});
