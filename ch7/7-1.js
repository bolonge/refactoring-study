class Organization {
  #name;
  #conuntry;
  #data;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#conuntry = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#conuntry;
  }

  get rawData() {
    // return { name: this.#name, country: this.#country }; //set이 있으면 이런식으로 return
    return { ...this.#data }; // set이 없고 초기값만 return 할 수 있을때 (불변성 유지 cloneDeep())
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

//organization.name = "bon"; // error
console.log(organization.name);
console.log(organization.country);
