class Guest {
  PK_Guest;
  Name;
  PhoneNumber;
  RegistrationDate;

  constructor(name, phoneNumber) {
    this.Name = name;
    this.PhoneNumber = phoneNumber;
  }
}

module.exports = Guest;
