import CreditCard from "./Card";

const card1 = new CreditCard(123456789, "John Doe", "12/2023", 123);

const card2 = new CreditCard(10023456789, "John San", "12/2023", 321);
console.log(card1.getNumber());
console.log(card1.getHolder());
console.log(card1.getExpirationDate());
console.log(card1.getCvv());
console.log(card1);
console.log(card2);

const cardContainer = document.getElementById("container") as HTMLDivElement;
const numberInput = document.getElementById("number") as HTMLInputElement;
const holderInput = document.getElementById("holder") as HTMLInputElement;
const expirationDateInput = document.getElementById(
  "expirationDate"
) as HTMLInputElement;
const cvvInput = document.getElementById("cvv") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const outputContainer = document.getElementById("output") as HTMLDivElement;

const allCreditCard: CreditCard[] = [];

const addCreditCard = (event: MouseEvent) => {
  event.preventDefault();
  const number = numberInput.value;
  const holder = holderInput.value;
  const expirationDate = expirationDateInput.value;
  const cvv = cvvInput.value;

  const card3 = new CreditCard(number, holder, expirationDate, cvv);

  //push to allFlavors array
  allCreditCard.push(card3);

  //reset icreamOutput
  outputContainer.innerHTML = "";

  //update HTML with all flavors
  updateHTML();

  //reset form
  numberInput.value = "";
  holderInput.value = "";
  expirationDateInput.value = "";
  cvvInput.value = "";
};

submitButton.addEventListener("click", addCreditCard);

const updateHTML = () => {
  allCreditCard.forEach((item) => {
    //create HTML Elements
    const cardDiv = document.createElement("div");
    const number = document.createElement("p");
    const holder = document.createElement("p");
    const expirationDate = document.createElement("p");
    const cvv = document.createElement("p");

    number.innerText = `${item.getNumber()}`;
    holder.innerText = `${item.getHolder()}`;
    expirationDate.innerText = `${item.getExpirationDate()}`;
    cvv.innerText = `${item.getCvv()}`;

    cardDiv.appendChild(number);
    cardDiv.appendChild(holder);
    cardDiv.appendChild(expirationDate);
    cardDiv.appendChild(cvv);

    outputContainer.appendChild(cardDiv);
  });
};
