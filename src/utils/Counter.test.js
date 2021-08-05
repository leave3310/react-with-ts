import 'regenerator-runtime/runtime';
import 'core-js/stable';
import Counter from "./Counter";
import { addTwoNumbers } from './math'

jest.mock('./math')

test('The default value of the counter will be 0', () => {
    //Arrange
    const counter = new Counter()
    const expected = 0

    // Assert
    expect(counter.count).toBe(expected)
})

test('The count will be from 0 become 1 if I first executed increment method', () => {

    addTwoNumbers.mockReturnValue(1)

    // Arrange
    const counter = new Counter()
    const expected = 1

    // Act
    counter.increment()

    // Assert
    expect(counter.count).toBe(expected)
})

test('The count will become value of response after executed setCountFromDatabase',
    async () => {
        // Arrange
        global.fetch = jest.fn().mockResolvedValue(
            { json: () => ({ count: 5 }) }
        )
        const counter = new Counter()
        const expected = 5

        // Act
        await counter.setCountFromDatabase()

        // Assert
        expect(counter.count).toBe(expected)

        delete global.fetch
    }
)