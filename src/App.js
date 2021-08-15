import React, { useEffect, useState } from 'react';
import './App.css';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import LodingCard from './components/LodingCard';
function App() {
  const [playerList, setPlayerList] = useState([]);
  const [filterList, setFilterList] = useState(playerList);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setPlayerList(result.playerList);
          setFilterList(result.playerList);
        },
        (error) => {
         
        }
      )
  }, [])
  const searchData=(e)=>{
      let searchValue=e.target.value.toLowerCase();
      let pList = playerList.filter((list)=> list.PFName.toLowerCase().includes(searchValue) || list.TName.toLowerCase().includes(searchValue));
      setFilterList(pList); 
  }

  return (
    <div className="container">
      <div className="card">
        <CardHeader handleSearch={searchData} />
       {loading ?  <LodingCard/> :  <CardBody data={filterList} />}
      </div>
    </div>
  );
}

export default App;
