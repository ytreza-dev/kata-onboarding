// add(I , I) ca donne II
// pas le droit de convertir un nombre dec

function add(left: string, right: string): string {
  return left + right
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
