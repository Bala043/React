import Head from '../Head'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import{render,screen,fireEvent} from '@testing-library/react'
import appStore from "../../utils/appStore"

test("Should Render The Header With Login Button",()=>{

    render(<BrowserRouter><Provider store={appStore}><Head></Head></Provider></BrowserRouter>)

    const loginBtn=screen.getByRole("button",{name:"Login"})
                   //or
    //const loginBtn=screen.getByText("Login")
    expect(loginBtn).toBeInTheDocument()
})
test("Should Render The Header With Cart Item",()=>{

    render(<BrowserRouter><Provider store={appStore}><Head></Head></Provider></BrowserRouter>)

    const Cart=screen.getByTestId("cart-badge",{name:0})
    
    expect(Cart).toBeInTheDocument()
})
test("Should Change Login To Logout Onclick",()=>{

    render(<BrowserRouter><Provider store={appStore}><Head></Head></Provider></BrowserRouter>)

    const loginBtn=screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginBtn)
    const logoutBtn=screen.getByRole("button",{name:"Logout"})
    
    expect(logoutBtn).toBeInTheDocument()
})
