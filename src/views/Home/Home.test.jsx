import 'regenerator-runtime'
import 'core-js/stable'
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'

import user from '../../reducers/user'
import Home from './Home'

expect.extend({toBeInTheDocument})

test('The view will display user infromation from api after Home rendered',() => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue(
        { json: () => ({user: 'KK'}) }
    )

    const store = createStore(
        combineReducers({user}),
        applyMiddleware(thunk)
    )

    const {getByText} = render(
        <Provider store={store}>
            <Home />
        </Provider>
    )

    const userInformation = getByText(/KK/)

    // Assert
    expect(userInformation).toBeInTheDocument()

})