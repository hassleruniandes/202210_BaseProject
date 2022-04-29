import { Vehiculo } from './vehiculo';
import { faker } from '@faker-js/faker';

describe('Vehiculo', () => {
  it('should create an instance', () => {

    expect(new Vehiculo(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.image.imageUrl(),
    )).toBeTruthy();
  });
});
