var cards = [
	{
		type: "visa",
		number: "**** **** **** 2562",
		expiration: "12/17",
		transactions: [
			{

				amount: "+50"
			},
			{

				amount: "+100"
			},
			{

				amount: "-50"
			},
			{

				amount: "-20"
			},
				{

				amount: "-99"
			},
			
		]
	},
	{
		type: "amex",
		number: "**** ****** 21001",
		expiration: "07/19",
		transactions: [
			{
				name: "Funds Added",
				type: "credit",
				category: "Payment",
				ID: "#654324",
				date: "23 Dec, 2017",
				amount: "-200.00"
			},
			{
				name: "Uber",
				type: "debit",
				category: "Technology",
				ID: "#654323",
				date: "1 January, 2017",
				amount: "+80.00"
			},
			{
				name: "Firehouse Subs",
				type: "debit",
				category: "Food",
				ID: "#654322",
				date: "11 December, 2016",
				amount: "+32.17"
			},
			{
				name: "Banana Republic",
				type: "debit",
				category: "Retail",
				ID: "#654321",
				date: "11 December, 2016",
				amount: "+147.46"
			}
		]
	},
	{
		type: "mc",
		number: "**** **** **** 8335",
		expiration: "09/17",
		transactions: [
			{
				name: "Sam Ash Music",
				type: "debit",
				category: "Retail",
				ID: "#654324",
				date: "15 Jan, 2017",
				amount: "+400.00"
			},
			{
				name: "Apple Store",
				type: "debit",
				category: "Technology",
				ID: "#654323",
				date: "3 January, 2017",
				amount: "+60.00"
			},
			{
				name: "LEGO Store",
				type: "debit",
				category: "Retail",
				ID: "#654322",
				date: "20 December, 2016",
				amount: "150.00"
			},
			{
				name: "ATT Wireless",
				type: "debit",
				category: "Mobile",
				ID: "#654321",
				date: "5 December, 2016",
				amount: "+109.54"
			},
			{
				name: "Funds Added",
				type: "credit",
				category: "Payment",
				ID: "#654324",
				date: "23 Dec, 2017",
				amount: "-100.00"
			}
		]
	}
];

//Print Cards
function generateCards() {
	var output = "";
	cards.forEach(function(cards, index) {
		output += "<div class='credit-card " + cards.type + "'>";
		output += "<div class='card-image'></div>";
		output += "<div class='credit-card_number'>" + cards.number + "</div>";
		output += "<div class='credit-card_expiration'>Valid Thru:" + cards.expiration + "</div>";
		output += "</div>"
	});
	return output;
}
//Display Cards on Page
document.querySelector('.cards').innerHTML = generateCards();
//Add initial active class
document.querySelector('.credit-card.visa').classList.add('active');;

//Print Cards
function showTransactions(creditCards, card) {
	var output = "";
	var total = 0;
  //if card is active print its transactions from cards data 
	for (var i = 0; i < creditCards.length; i++) {
		if (creditCards[i] === card) {
			for (var n = 0; n < cards[i].transactions.length; n++) {
				
				output += "<div class='transaction-item_amount'><span>$</span><p class='amount'>"+ cards[i].transactions[n].amount +"</p></div>";

				//for transaction length add amounts to total 
				total += parseFloat(cards[i].transactions[n].amount);
			}
			document.querySelector('.transactions').innerHTML = output;
			document.querySelector('.total-balance').innerHTML = total.toFixed(2); //2 decimal places
		} 
	}
}

//Grab cardList
var cardsList = document.querySelectorAll('.credit-card');
//Grab single card
var creditCard = document.querySelector( '.credit-card' );
//Grab activeCard
var activeCard = document.querySelector('.credit-card.active');
//Grab transaction
var transaction = document.querySelector('.transactions');

//Show transactions
showTransactions(cardsList, activeCard);

//add class show to transaction div for animation
transaction.classList.add('show')

//Toggle Active class on Cards and show class on transactions
for(let i = 0; i < cardsList.length; i++) {
	cardsList[i].addEventListener("click", function(e) {
		e.preventDefault;
		for(let n = 0; n < cardsList.length; n++) {
			if(cardsList[n].classList.contains('active')) {
				cardsList[n].classList.remove('active');
			}
		}
		this.classList.add('active');
		showTransactions(cardsList, this);

		transaction.classList.remove("show");
		//triggering reflow
		void transaction.offsetWidth;

		transaction.classList.add("show");		
  });
}

//simple modal
var modalControl = document.querySelector('.modal-control');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');

modalControl.addEventListener('click', function() {
	document.querySelector('.modal').classList.add('open');
}, false);

//click anywhere to close example modal
modal.addEventListener('click', function() {
	document.querySelector('.modal').classList.remove('open');
}, false);
				output += "<p class='number'>"+ cards[i].transactions[n].amount +"</p>";
