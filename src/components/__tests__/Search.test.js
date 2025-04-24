import Body from '../Body';
import { screen, render,fireEvent } from '@testing-library/react';
import MOCK_DATA from './mocks/MockRestroListData.json';
import { act } from 'react'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mock global fetch
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should Render Cards For hotel Search Result", async () => {
    await act(async () =>render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeSearch=screen.getAllByTestId("food-card")
    expect(cardsBeforeSearch.length).toBe(20)
    const SearchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput=screen.getByTestId("search-input")
    fireEvent.change(searchInput,{target:{value:"hotel"}})
    fireEvent.click(SearchBtn)
    //Screen Should Load 1 Card
    const cardsAfterSearch=screen.getAllByTestId("food-card");
    expect(cardsAfterSearch.length).toBe(2)

});
it("Should Filter Top Rated Restuarant", async () => {
    await act(async () =>render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeSearch=screen.getAllByTestId("food-card")
    expect(cardsBeforeSearch.length).toBe(20)

    const filterBtn=screen.getByRole("button",{name:"High Rated restuarent"})
   
   fireEvent.click(filterBtn)
   const afterFilter=screen.getAllByTestId("food-card")
   expect(afterFilter.length).toBe(5)

    
});
