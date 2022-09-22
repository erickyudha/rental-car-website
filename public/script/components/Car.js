class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="result-card flex-column flex-gap-16">
          <img src="${this.image}" alt="${this.manufacture}" />
          <div class="result-car-text flex-column flex-gap-8">
            <span>${this.manufacture} - ${this.model}</span>
            <span class="title">Rp ${this.rentPerDay} / hari</span>
            <p>${this.description}</p>
            <div class="car-data flex-column flex-gap-16">
              <div>
                <img src="img/icon_people.svg" alt="" />
                <span>${this.capacity} orang</span>
              </div>
              <div>
                <img src="img/icon_settings.svg" alt="" />
                <span>${this.transmission}</span>
              </div>
              <div>
                <img src="img/icon_calendar.svg" alt="" />
                <span>Tahun ${this.year}</span>
              </div>
            </div>
          </div>
          <button class="btn btn-success">Pilih Mobil</button>
        </div> 
    `;
  }
}   