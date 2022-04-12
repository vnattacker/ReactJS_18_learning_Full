import { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
const useFetch = (url) => {
    const [getdata, setdata] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState();


    useEffect(() => {


        async function fecthApi() {
            try {
                setLoading(true);
                var resp = await axios.get(url)
                var data = resp && resp.data ? resp.data : [];

                setdata(JSON.parse(data));
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
                setErrorMsg(e);
            }
        }
        fecthApi();



    }, []);

    return {
        getdata,
        error,
        isLoading,
        errorMsg,
    }
}
export default useFetch;