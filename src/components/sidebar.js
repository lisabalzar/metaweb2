import React from "react";
import Players from "./players.js";
import playerhead from './head.png';
import Chart from './chart';

/**
 * The sidebar rendering players online and player stats.
 */

 class Sidebar extends React.Component {
    render() {
        return (
          <div className="sidebar-comp">
            <h2 className="h2-sidebar">METAcraft server</h2>
            <div className="hr-sidebar"></div>

            <div className="head-group">
                <img className="img-head" src={playerhead}></img>
                <h2 className="h2-players">Players</h2>
                <p className="p-players">2 players online</p>
              </div>

          <div className="player-list-container">
            
          <ul>
            {this.props.players.map(player => (
                <li className="player-container" key={player.id}> 
                <div checked={this.props.players.online} onChange={() => console.log("clicked")}/>
                  <div className="player-name">{player.name} {player.online === true ? "online" : "not online"}</div>
                  
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
 }

 export default Sidebar