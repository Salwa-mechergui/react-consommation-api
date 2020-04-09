import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
 const [data, setData] = useState({ users: [] });
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData({users:result.data});
   };
   fetchData();
 }, []);
 return (
   <ul>
     {data.users.map(item => (
       <li key={item.id}>
         {item.name}
       </li>
     ))}
   </ul>
 );
}
export default App;