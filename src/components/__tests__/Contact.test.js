import Contact from '../Contact'
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case ",()=>{
        test("First Check Contact is rendered",()=>{

                render(<Contact></Contact>)
        const tag=screen.getByTestId("contact-container")
        expect(tag).toBeInTheDocument()
        })
        
        test("Contact page Should Be loaded",()=>{
                render(<Contact></Contact>);
        
                const headings=screen.getAllByRole("heading");
        
                headings.forEach((heading)=>{
        
                        expect(heading).toBeInTheDocument()
                        
                })
        
        })
        test("Should Render All paragraphs",()=>{
        
                render(<Contact></Contact>)
                const paragraphs=screen.getAllByText(/Balavignesh|Email|Phone|Location|balavignesh043@gmail.com/)
                        expect(paragraphs).toHaveLength(6);
                paragraphs.forEach((paragraph)=>{
                        expect(paragraph).toBeInTheDocument()
                })
        })

})
//it("Should BE",()=>{}) ortest("Should Be",()=>{})