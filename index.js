// Define a function to fetch movie details and update the DOM
function fetchMovieDetails() {
  fetch('/films/1')
    .then((response) => response.json())
    .then((data) => {
      // Update the DOM with movie details
      const posterImg = document.getElementById('movie-poster');
      const title = document.getElementById('movie-title');
      const runtime = document.getElementById('movie-runtime');
      const showtime = document.getElementById('movie-showtime');
      const availableTickets = document.getElementById('movie-tickets');

      posterImg.src = data.poster;
      title.textContent = data.title;
      runtime.textContent = `Runtime: ${data.runtime} minutes`;
      showtime.textContent = `Showtime: ${data.showtime}`;
      availableTickets.textContent = `Available Tickets: ${data.capacity - data.tickets_sold}`;
    });
}

// Define a function to fetch the list of movies and populate the menu
function fetchMovieList() {
  fetch('/films')
    .then((response) => response.json())
    .then((data) => {
      // Get the menu element
      const menu = document.getElementById('films');

      // Populate the menu with movie titles
      data.forEach((movie) => {
        const movieItem = document.createElement('li');
        movieItem.textContent = movie.title;
        // Add event listener to handle clicks on movie titles (for bonus deliverable)
        movieItem.addEventListener('click', () => fetchMovieDetails(movie.id));
        menu.appendChild(movieItem);
      });
    });
}

// Function to handle the "Buy Ticket" button click
function buyTicket() {
  // You should implement the logic to buy tickets and update the DOM
  // based on the core deliverables and bonus deliverables.
}

// Fetch movie details and movie list when the page loads
fetchMovieDetails();
fetchMovieList();
