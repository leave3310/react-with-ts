import Counter from "./Counter";

test('The default value of the counter will be 0', () => {
    //Arrange
    const counter = new Counter() 
    const expected = 0

    // Assert
    expect(counter.count).toBe(expected)
})

test('The count will be from 0 become 1 if I first executed increment method', () => { 
    // Arrange
    const counter = new Counter()
    const expected = 1

    // Act
    counter.increment()

    // Assert
    expect(counter.count).toBe(expected)
})