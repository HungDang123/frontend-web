import React, { useState } from "react";
import product from "../models/Product";

export const CartContext = React.createContext<product>

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { // Specify the type for children prop
        const [cart, setCart] = useState

}