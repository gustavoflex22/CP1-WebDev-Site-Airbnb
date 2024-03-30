const stars = document.querySelectorAll('.star');
const ratingOutput = document.getElementById('rating');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    const rating = index + 1;
    highlightStars(rating);
    ratingOutput.textContent = `Você avaliou este local com ${rating} estrelas.`;
  });

  star.addEventListener('mouseover', () => {
    const rating = index + 1;
    highlightStars(rating);
  });

  star.addEventListener('mouseout', () => {
    const currentRating = parseInt(ratingOutput.textContent.match(/\d+/));
    highlightStars(currentRating);
  });
});

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = 'orange';
    } else {
      star.style.color = 'black';
    }
  });
}
