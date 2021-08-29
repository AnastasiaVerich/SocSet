import React from "react";
import {Preloader} from "../Common/preloader/Preloader";


export const WithSuspenseHOC=(Component:any)=>{

   return(props: any)=>{
       return <React.Suspense fallback={<Preloader/>}>
           <Component{...props}/>
       </React.Suspense>
   }

}