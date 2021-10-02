import { useState } from "react";

const useConstructor = (callBack = () => {}) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    
    if (!hasBeenCalled) {
        callBack();    
        setHasBeenCalled(true);
    }
}

export default useConstructor;