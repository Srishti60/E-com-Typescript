import React,{createContext,useState,useContext} from "react";

interface CartItem{
    name: string;
    price: number;
}
interface CartValue{
    value: CartItem[];
    setItem: (item :CartItem[] ) => void;
    inputValue: string | undefined;
    setSearchValue : (value:string)=>void;
}
const cartContext = createContext<CartValue | null>(null);

interface CartProviderProps{
    children: React.ReactNode
}
export const useCart = ()=>{
    return useContext(cartContext);
}

export const ContextProvider: React.FC<CartProviderProps> = (props)=>{

    const [item,setItem] = useState<CartItem[]>([]);
    
    const [searchvalue,setSearchValue] = useState<string>('');

    return <cartContext.Provider value={{value:item,setItem, inputValue:searchvalue,setSearchValue}}>{props.children}</cartContext.Provider>
}