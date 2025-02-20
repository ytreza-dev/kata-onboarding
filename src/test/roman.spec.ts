// add(I , I) ca donne II
// pas le droit de convertir un nombre dec

function add(i: string, i2: string): string {
  return i + i2
}

describe('roman', () => {
  it('should add I and I', () => {
    // When
    const result = add('I', 'I')
    // Then
    expect(result).toBe('II')
  })

  it('should add II and I', () => {
    // When
    const result = add('II', 'I')
    // Then
    expect(result).toBe('III')
  })
})
