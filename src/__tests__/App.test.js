import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import '../App';
import Home from '../pages/home';
import LogIn from '../components/LogIn/login';
import SiteConduct from '../pages/conduct';
import DirectoryPage from '../pages/directory';
import {
    Router,
    Link,
    createHistory,
    createMemorySource,
    LocationProvider,
    navigate
  } from '@reach/router'
import Consent from '../components/Acknowledgement/Consent';
import CareerCenter from '../pages/jobs';
import MessageBoard from '../pages/messages';

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

function renderWithRouter(
    ui, 
    {route= '/', history= createHistory(createMemorySource(route))}= {},
) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        history,
    }
}

test('Full App Navigation', async () => {
    const {
        container,
        history: {navigate},
    }= renderWithRouter(<App />)
    const appContainer= container
    expect(appContainer).toMatch('/')
})

function renderWithRouterWrapper(
    ui,
    {route='/', history= createHistory(createMemorySource(route))} = {},
) {
    return {
        ...render(
            <LocationProvider history={history}>
                <Router>{ui}</Router>
            </LocationProvider>
        ),
        history,
    }
}

test('Renders Log In', () => {
    renderWithRouterWrapper(<LogIn path="/login" />, {
        route: '/login',
    })
})

test('Acknowledgement appears before Register', () => {
    renderWithRouterWrapper(<Consent path="/consent" />, {
        route: '/consent',
    })
})

test('Renders Directory', () => {
    renderWithRouterWrapper(<DirectoryPage path="/directory" />, {
        route: '/directory',
    })
})

test('Renders Career Center', () => {
    renderWithRouterWrapper(<CareerCenter path="/jobs" />, {
        route: '/jobs',
    })
})

test('Renders Home', () => {
    renderWithRouterWrapper(<Home path="/" />, {
        route: '/',
    })
})

test('Renders Message Board', () => {
    renderWithRouterWrapper(<MessageBoard path="/messages" />, {
        route: '/messages',
    })
})

describe('Home navigates to Site Conduct', () => {
  it('should navigate from home to site conduct', () => {
    const { getByText } = render(<SiteConduct/>)
    fireEvent.click(getByText(/Site Conduct/i))
    expect(navigate).toHaveBeenCalledTimes(1)
    expect(navigate).toHaveBeenCalledWith('/')
  })
})

describe('Site Conduct navigates to Directory', () => {
    it('should navigate from site conduct to directory ', () => {
      const { getByText } = render(<DirectoryPage/>)
      fireEvent.click(getByText(/Directory Page/i))
      expect(navigate).toHaveBeenCalledTimes(1)
      expect(navigate).toHaveBeenCalledWith('/conduct')
    })
})

describe('Site Conduct navigates to Log In', () => {
    it('should navigate from site conduct to log in', () => {
      const { getByText } = render(<LogIn/>)
      fireEvent.click(getByText(/Directory Page/i))
      expect(navigate).toHaveBeenCalledTimes(1)
      expect(navigate).toHaveBeenCalledWith('/conduct')
    })
})

