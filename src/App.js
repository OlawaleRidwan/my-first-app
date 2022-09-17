import React, {useEffect} from 'react';
import logo from './logo192.png'

const db = [
    {name: "first", rating: 5, image: 'logo'},
    {name: "second", rating: 3, image: 'logo'},
    {name: "third", rating: 4, image: 'logo'},
    {name: "forth", rating: 3, image: 'logo'},
    {name: "fifth", rating: 2, image: 'logo'},
    {name: "sixth", rating: 5, image: 'logo'},
]

const App = () => {

useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // setUsers([data]);
      });
    // .catch(error=>console.log(error))
}, [])


return (
    <>
    <h1>App</h1>
    <div>
        <div className='image' style={{width: '11rem', height:'15rem', background: 'blue'}}>data.image</div>
        <p>data.name</p>
        <p>data.rating</p>
    </div>
    <div style={{display: 'flex',justifyContent: 'space-between'}}>
    {
        db.map((data)=>{
           return (<div>
            <div className='image' style={{width: '11rem', height:'15rem', background: 'blue'}}>{data.image}</div>
            <p>{data.name}</p>
            <p>{data.rating}</p>
        </div>)
        })
    }
    </div>
    </>
)
};
export default App;