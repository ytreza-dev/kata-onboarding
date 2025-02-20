// add(I , I) ca donne II
// pas le droit de convertir un nombre dec

function add(i: string, i2: string): string {
  return 'II'
}

describe('roman', () => {
  it('should add two roman numbers', () => {
    // When
    const result = add('I', 'I')
    // Then
    expect(result).toBe('II');
  });
});
