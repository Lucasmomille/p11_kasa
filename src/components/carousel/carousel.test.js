import Carousel from './Carousel.jsx'
import { logements } from "../../../public/data/mocks/logements"
import { render, screen, fireEvent } from '@testing-library/react'
 
describe('Carousel', () => {
    const data = logements;
    //console.log('data', data)
    test('Should render without crash', async () => {
        render(<Carousel slides={data[0].pictures} />)
    })
    test('Should get previous image', () => {
        render(<Carousel slides={data[0].pictures} />)
        const prevBtn = screen.getByTestId('prevBtn')
        expect(prevBtn).toBeTruthy()
        // fireEvent.click(prevBtn)
    })
})