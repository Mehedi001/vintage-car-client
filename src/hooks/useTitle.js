import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Vintage Car`;
    },[title])
};

export default useTitle;