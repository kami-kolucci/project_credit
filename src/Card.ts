class CreditCard {
  __number: number;
  __holder: string;
  __expirationDate: string;
  __cvv: number;

  constructor(
    number: number,
    holder: string,
    expirationDate: string,
    cvv: number
  ) {
    this.__number = number;
    this.__holder = holder;
    this.__expirationDate = expirationDate;
    this.__cvv = cvv;
  }

  getNumber(): number {
    return this.__number;
  }

  getHolder(): string {
    return this.__holder;
  }

  getExpirationDate(): string {
    return this.__expirationDate;
  }

  getCvv(): number {
    return this.__cvv;
  }
}

export default CreditCard;
