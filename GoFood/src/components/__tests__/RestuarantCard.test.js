
import { render ,screen} from "@testing-library/react";
import Cards from '../../components/Cards'
import MOCK_DATA from './mocks/resCardMock.json'
import '@testing-library/jest-dom'
it("it should render the card with proper Data",()=>{
   render( <Cards resData={MOCK_DATA}></Cards>)

   const name= screen.getByText("KFC");
   expect(name).toBeInTheDocument()
})