describe("Simple Jest Tests", () => {
  test('Primitive types', () => {
    let number = null;
    expect(number).toBe(null);
    number = 12;
    expect(number).not.toBe(null);
    expect(number).toEqual(12);
    expect(number).toBeLessThan(13);
  });

  test('Object tests', () => {
    const obj = { name: "John", mail: "email@email.com"}
    const obj2 = { name: "John", mail: "email@email.com"}
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name','John') ;
    expect(obj.name).toBe('John');

    expect(obj).toEqual(obj2);
    expect(obj).not.toBe(obj2);

  });
});