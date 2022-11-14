import { Person } from "../src/js/person";

describe('calculate persons age on different planets', () => {
  let person;
  let oldPerson;

  beforeEach(() => {
    person = new Person("Dan", 23, 75);
    oldPerson = new Person("Bill", 80, 75);

  });

  //age on planet
  test('should return age of person on mercury', () => {
    expect(person.onMercury()).toEqual(5);
  });

  test('should return age of person on venus', () => {

    expect(person.onVenus()).toEqual(14);
  });

  test('should return age of person on mars', () => {

    expect(person.onMars()).toEqual(43);
  });

  test('should return age of person on jupiter', () => {

    expect(person.onJupiter()).toEqual(272);
  });


  //Years left
  test('should return years left on mercury', () => {

    expect(person.onMercuryLeft()).toEqual(12);
  });
  
  test('should return years left on venus', () => {

    expect(person.onVenusLeft()).toEqual(32);
  });
  
  test('should return years left on mars', () => {

    expect(person.onMarsLeft()).toEqual(97);
  });
  
  test('should return years left on jupiter', () => {

    expect(person.onJupiterLeft()).toEqual(616);
  });

  //years lived past expectancy
  test('should return years past life expectancy on mercury', () => {

    expect(oldPerson.onMercuryLeft()).toEqual(1);
  });
  
  test('should return years past life expectancy on venus', () => {

    expect(oldPerson.onVenusLeft()).toEqual(3);
  });
  
  test('should return years past life expectancy on mars', () => {

    expect(oldPerson.onMarsLeft()).toEqual(9);
  });
  
  test('should return years past life expectancy on jupiter', () => {

    expect(oldPerson.onJupiterLeft()).toEqual(59);
  });
});