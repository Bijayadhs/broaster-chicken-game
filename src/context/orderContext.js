import React, { useState, createContext } from 'react';

export const OrderContext = createContext();
export const ToggleContext = createContext();

export const OrderProvider = ({ children }) => {
    const initOrders = [
        { id: 1, pack: 'Family Pack', type: 'spicy', selected: true },
        { id: 2, pack: 'Snack Pack', type: 'original', selected: false }
    ]
    const [orders, setOrders] = useState(initOrders);
    const selectedOrders = orders.filter(order => order.selected === true);


    function toggleSelection(value) {
        setOrders(orders.map(order => ({ ...order, selected: value })))
    }





    return (
        <OrderContext.Provider value={{ orders, selectedOrders, toggleSelection }}>
            {/* <ToggleContext.Provider value={toggleSelection}> */}
            {children}
            {/* </ToggleContext.Provider> */}
        </OrderContext.Provider>
    )
}



// import { Switch } from 'react-router-dom';

// const initialOrders = [
//     { id: 1, pack: 'Family Pack', type: 'spicy', selected: false },
//     { id: 2, pack: 'Lunch Pack', type: 'original', selected: false },
//   ];

//   const ourReducer = (state, action)=>{
//       Switch(action.type){
//           case 'SELECT':
//               return [...state, selected: true];
//       }
//   }

//   const [state, context] = useReducer(ourReducer, initialOrders);

//   function OrderContext(){

//   }