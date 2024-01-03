import { useContext } from "react";
import { MyContext } from "../context/Provider";

const useMyContext = () => useContext(MyContext);

export default useMyContext;