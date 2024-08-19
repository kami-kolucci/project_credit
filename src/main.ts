import CreditCard from "./Card";

const card1 = new CreditCard(123456789, "John Doe", "12/2023", 123);

console.log(card1.getNumber());
console.log(card1.getHolder());
console.log(card1.getExpirationDate());
console.log(card1.getCvv());
console.log(card1);

const cardContainer = document.getElementById("container") as HTMLDivElement;
const numberInput = document.getElementById("number") as HTMLInputElement;
const holderInput = document.getElementById("holder") as HTMLInputElement;
const expirationDateInput = document.getElementById(
  "expirationDate"
) as HTMLInputElement;
const cvvInput = document.getElementById("cvv") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
