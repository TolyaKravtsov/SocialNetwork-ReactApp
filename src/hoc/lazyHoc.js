import React, {Suspense} from "react";

export const lazyHoc = (Component) => {                //HOC
    return (props) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component{...props}/>
        </Suspense>
    }

};