//modules
import faker from "faker";

export class User {
  name: string;
  surname: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.surname = faker.name.lastName();
    this.email = faker.internet
      .email(this.name, this.surname)
      .toLocaleLowerCase();
    this.location = {
      //change to number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  //methods
  markerContent(): string {
    return `<div>Name: ${this.name} ${this.surname}</div>
            <div>Email: ${this.email}</div>
    
    `;
  }
}
