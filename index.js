ventListener("DOMContentLoaded", function () {
    const purchaseButton = document.getElementsById("purchase-button");
    const remainingTicketsElement = document.getElementsById("remaining-tickets");
  
    // Total tickets available and tickets sold
    let totalTickets = 30;
    let ticketsSold = 0;
  
    // Update the initial remaining tickets value
    remainingTicketsElement.textContent = totalTickets - ticketsSold;
  
    // Add a click event listener to the purchase button
    purchaseButton.addEventListener("click", function () {
      if (ticketsSold < totalTickets) {
        // Decrease available tickets and increase tickets sold
        ticketsSold++;
        remainingTicketsElement.textContent = totalTickets - ticketsS
      } else {
        alert("Sorry, this show is sold out!");
      }
    });
});

  