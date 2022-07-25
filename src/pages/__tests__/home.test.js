import Home from '../home'
import { render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
 
describe('Home', () => {
    test('Should render without crash', async () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>)
        
    })
})