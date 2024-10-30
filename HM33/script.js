class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];

  addResidents(human) {
    this.residents.push(human)
  }
}

class House {
  apartments = [];

  constructor(maxNumbOfApart) {
    this.maxNumbOfApart = maxNumbOfApart;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxNumbOfApart) {
      this.apartments.push(apartment);
    } else {
      console.log("Impossible add more apartments to this House ");
    }
  }
}

const human1 = new Human("Dmytro", "man");
const human2 = new Human("Anna", "woman");
const human3 = new Human("Davyd", "man");

const apartment1 = new Apartment();
apartment1.addResidents(human1);
apartment1.addResidents(human2);

const apartment2 = new Apartment();
apartment2.addResidents(human3);

const house1 = new House(2);
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment1)

console.log(human1);
console.log(apartment1);
console.log(house1);


