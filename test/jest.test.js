test('Devo conhecer as principais acertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'john', mail: 'john@mail.com.br' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'john');

  const obj2 = { name: 'john', mail: 'john@mail.com.br' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
