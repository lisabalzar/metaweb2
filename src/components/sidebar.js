import React from "react"
import Players from "./players.js"
/**
 * The sidebar rendering players online and player stats.
 */

 class Sidebar extends React.Component {
    render() {
        return (
          <ul>
            {this.props.players.map(player => (
                <li key={player.id}> 
                <input type="checkbox" checked={this.props.players.online} onChange={() => console.log("clicked")}/>
                  {player.name}
                </li>
            ))}
          </ul>
        )
      }
 }

 export default Sidebar