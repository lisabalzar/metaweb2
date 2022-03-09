import React from "react";
import Players from "./players.js";
import playerhead from './head.png';
import Chart from './chart';
import OnlinePlayerList from "./onlinePlayerList.js";
import mcServerInfoSource from "../api/msServerInfo";
import {useEffect, useState} from "react";

/**
 * The sidebar rendering players online and player stats.
 */

function Sidebar({player}) {
    const [data, setData] = useState(null);
    useEffect(()=>{
        mcServerInfoSource.getServerInfo().then(res=>{setData(res)})
    },[])

        return (
          <div className="sidebar-comp">
            <h2 className="h2-sidebar">METAcraft server</h2>
            <div className="hr-sidebar"></div>

            <div className="head-group">
                <img className="img-head" src={playerhead}></img>
                <h2 className="h2-players">Players</h2>
                {data && <p className="p-players">{data.minecraftInfo.players.online} players online</p>}
              </div>

          <div className="player-list-container">
            
          <ul>
            {data && data.minecraftInfo.players.list.map(p => (
                <li className="player-container" key={p.id}> 
                <div/>
                  <div className="player-name">{p} {p.online === true ? "online" : "not online"}</div>
                  
                </li>
            ))}
          </ul>
        </div>
        <div className="hr-sidebar"></div>
        <div>
          <Chart/>
        </div>
        
          </div>
        )
      
 }

export default Sidebar