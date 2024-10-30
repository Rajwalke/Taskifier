import { createSlice } from "@reduxjs/toolkit";

const Cardslice=createSlice({
    name:"carddata",
    initialState:{
        items:[{
            header:"hello",
            descriptioninfo:"today task",
            inprogress: false,
            done : false,
            Pending:true
            }]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        deletItem:(state,action)=>{
            state.items.splice(action.payload,1);
        },
        doneItem: (state, action) => {
            // Find the item by index or ID and update 'done'
            const item = state.items.find((item, index) => index === action.payload); 
            if (item) {
                item.done = true; // or toggle item.done = !item.done
                item.inprogress=false;
                item.Pending=false;
            }
          },
        inprogessItem: (state,action)=>{
            const item=state.items.find((item,index)=>index=== action.payload);
            if (item) {
                item.inprogress=true;
                item.Pending=false;
                item.done=false;
            }
        },
        pendingItem: (state,action)=>{
            const item=state.items.find((item,index)=>index=== action.payload);
            if (item) {
                item.Pending=true;
                item.inprogress=false;
                item.done=false;
            }
        },
        headingItem:(state,action)=>{
            const {keyindex,headingstate,descriptionsatet}=action.payload;
            const item=state.items[keyindex];
            if(item){
                item.header=headingstate;
                item.descriptioninfo=descriptionsatet;
            }
        }
    }
})
export default Cardslice.reducer;
export const{addItem , deletItem, doneItem, inprogessItem, pendingItem, headingItem}=Cardslice.actions;