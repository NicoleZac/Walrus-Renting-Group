import{createContext,useState} from 'react';
export const PageContext = createContext({});
export function PageProvider ({children}) {
    const [pageStates,setPageStates] = useState({
        LoginRegisterPage: false,
        UserProfilePage: false,
    });
    const setPageState = (page,value)=>{
        setPageStates((prev)=>({
            ...prev,
            [page]:value,
        }));
    }
   
    return(
        <PageContext.Provider value={{pageStates,setPageState}}>
            {children}
        </PageContext.Provider>
    );
}
