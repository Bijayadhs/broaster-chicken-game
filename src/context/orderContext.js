import React, { useState, createContext } from 'react';

export const OrderContext = createContext();
export const ToggleContext = createContext();

export const OrderProvider = ({ children }) => {
    const initOrders = [
        { id: 1, pack: 'Family Pack', type: 'spicy', selected: false },
        { id: 1, pack: 'Family Pack', type: 'spicy', selected: false }
    ]
    const [orders, setOrders] = useState(initOrders);

    function toggleSelection() {
        setOrders(orders.map(order => ({ ...order, selected: true })))
    }

    return (
        <OrderContext.Provider value={orders}>
            <ToggleContext.Provider value={toggleSelection}>
                {children}
            </ToggleContext.Provider>
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