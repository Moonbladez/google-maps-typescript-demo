import faker from "faker";

export class Company {
  name: string;
  catchphrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  //method
  markerContent(): string {
    return `
    <div>
      <h1>${this.name}</h1>
    </div>
    <div>
      <q>${this.catchphrase}</q> 
    </div>
    
    
    `;
  }
}
