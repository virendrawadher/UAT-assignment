import logo from './logo.svg';
import './App.css';
import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import {MapWrapper} from "./Maps"
import {Modal} from "./modal"
import {MdLocationOn} from "react-icons/md"

function App() {

  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [dataModal, setDataModal] = useState({})
  const [mapData, setmapData] = useState({})
  const [selectedMarker, setSelectedMarker] = useState(null);
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const closeMap = () => setShowMap(false)
  const openMap = () => setShowMap(true)

  useEffect(() => {
    (async function(){
      try{
        const response = await axios.get("http://uat.lightingmanager.in/panel/gettestlist?org_id=3")
        setData(d => data.concat(response.data.result))
      }catch{
        console.log("Error")
      }
      } 
    )()
  }, [])

  function clickHandler(a){
    openModal()
    closeMap()
    const modalData = data.find(d => d.mac_id === a.mac_id)
    console.log(modalData)
    setDataModal(modalData)
    
  }

  function mapHandler(a){
    openMap()
    closeModal()
    const mapData = data.find(d => d.mac_id === a.mac_id)
    setmapData(mapData)
  }
  console.log(dataModal)
  console.log(selectedMarker)
  console.log({mapData})
  return (
    <div className="App">
      <table className = "tablemain">
        <tr>
          <th className = "tablecontent">Panel Name</th>
          <th className = "tablecontent">Mac id</th>
          <th className = "tablecontent">Lat</th>
          <th className = "tablecontent">Long</th>
          <th className = "tablecontent">location</th>
        </tr>
        {
          data.map((a) => {
            return(
              <tr>
                <td className = "tablecontent"><button onClick = {() => clickHandler(a)}  className = "panelButton">{a.panel_name}</button></td>
                <td className = "tablecontent">{a.mac_id}</td>
                <td className = "tablecontent">{a.Lat}</td>
                <td className = "tablecontent">{a.Lng}</td>
                <td className = "tablecontent"><button onClick = {() => mapHandler(a)} className = "panelButton"><MdLocationOn/></button></td>
              </tr>
            )
          })
        }
      </table>
      <Modal showModal = {showModal} closeModal = {closeModal} dataModal = {dataModal}/>
      <div className = "map">
      {showMap && 
        <MapWrapper mapData = {mapData} closeMap = {closeMap} selectedMarker = {selectedMarker} setSelectedMarker = {setSelectedMarker}/>}
      </div>
    </div>
  );
}

export default App;
