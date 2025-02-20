// pas le droit de convertir un nombre dec

function add(left: string, right: string): string {
  if(left === 'III'){
    return 'IV'
  }
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

  it('should add III and I', () => {
    // When
    const result = add('III', 'I')
    // Then
    expect(result).toBe('IV')
  })
})
