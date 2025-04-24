import {screen,render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import RestuarantMenu from '../RestuarantMenu'
import {act} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider}from 'react-redux'
import MockDataMenu from './mocks/MockDataMenu.json'
import appStore from '../../utils/appStore'
import Head from '../Head'
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Cart from '../Cart'
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MockDataMenu)
    })
})
it("Should Render The Item Category",async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Head></Head>
            <Routes>
              <Route path="/" element={<><RestuarantMenu /></>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </Provider>
        </BrowserRouter>))
   //const title=screen.getAllByTestId("accordion-title")
const title=screen.getByText("Korean Range & New Offerings (27)")
    fireEvent.click(title)
expect(screen.getAllByTestId("item-info").length).toBe(27)
const Addbtn=screen.getAllByRole("button",{name:"Add +"})
fireEvent.click(Addbtn[0])
expect(screen.getByTestId("cart-badge")).toHaveTextContent("1")
const cartBtn=screen.getByTestId("cart-btn")
fireEvent.click(cartBtn)
expect(screen.getByText("Quantity: 1")).toBeInTheDocument()

const removeBtn=screen.getByRole("button",{name:"Remove"})

fireEvent.click(removeBtn)

expect(screen.getByText("🛒 Your cart is empty.")).toBeInTheDocument()

expect(screen.getByTestId("cart-badge")).toHaveTextContent("0")






})
 




