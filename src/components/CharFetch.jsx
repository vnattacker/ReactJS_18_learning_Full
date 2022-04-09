import React, {useState, useEffect} from 'react'
import useFetch from '../customize/fetch';
import "../assets/scss/genshin.css";
export default function CharFetch() {
 
 const [genshin, setGenshin] = useState([]);

 const urlAvatar =  "http://tdk14dnu.tk/Content/img/Characters/";
const urlApi = "http://tdk14dnu.tk/api/Genshin?type=CHAR";
let {getdata, error, isLoading} = useFetch(urlApi);



 useEffect(()=>{
   setGenshin(getdata);
    

 }, [getdata]);
    


    return (
 <>
 
 <table className='table-cute'>
       <thead>
           <tr>
               <th>ID</th>
               <th>Tên</th>
               <th>Ảnh</th>
               <th>Nguyên tố</th>
               <th>VK sử dụng</th>
              
           </tr>
       </thead>
       <tbody>
           {
               genshin && genshin.length >= 0  && genshin.map(item=>(
                    <tr key={item.ID}>
                    <td>{item.ID}</td>
                    <td>{item.Name}</td>
                    <td className={"cap-sao-" + item.Star}><img src={urlAvatar + item.Avatar} alt={item.Name} /></td>

                    <td className={"element ntn-" + item.Element}>{item.Element}</td>
                    <td className={"weap-type vkv-" + item.WeapType}>{item.WeapType}</td>
                </tr>
               ))
           }
       </tbody>
</table>

   
 </>
  )
}
