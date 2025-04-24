import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{//actions
        addItem:(state,action)=>{
            //mutating the state over here
            const itemId=action.payload.card.info.id
            const existingItem=state.items.find((item)=>item.card.info.id===itemId)
            if(existingItem){
                existingItem.quantity+=1
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }  
        },
        removeItem:(state,action)=>{
            const itemId=action.payload.card.info.id
           const existingItems=state.items.find((item)=>item.card.info.id===action.payload.card.info.id)

           if(existingItems){
            if(existingItems.quantity>1){
                existingItems.quantity-=1
            }
            else{
                    state.items=state.items.filter((item)=>item.card.info.id!==itemId)
                
            }
           }
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
    //{
    //action:addItem
    //....
    //...}
    //reducer{
    //}
    //
    //
    //
})
//we are importing the addItem... from actions and the reducer
export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer;