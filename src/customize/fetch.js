import { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
const useFetch = (url) => {
    const [getdata, setdata] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    
    useEffect(() => {
        try {
            async function fecthApi (){
                var resp = await axios.get(url)
                var data = resp && resp.data ?  resp.data: [];

                setdata(JSON.parse(data));
                setLoading(false);

            }
            fecthApi();
        } catch (e) {
            setError(true);
            setLoading(false);
        }


    }, []);

    return {
        getdata,
        error, 
        isLoading
    }
}
export default useFetch;