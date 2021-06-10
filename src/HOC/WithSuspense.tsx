import React from "react";
import {Preloader} from "../components/COMMON/Preloader/Preloader";


export const WithSuspenseHOC=(Component:any)=>{

   return(props: any)=>{
       return <React.Suspense fallback={<Preloader/>}>
           <Component{...props}/>
       </React.Suspense>
   }

}