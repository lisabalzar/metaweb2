import React from "react"
import Sidebar from "./sidebar.js";

/**
 * Container for the whole page
 */

const Playerdata = [
    {
      id: 1,
      name: "Username1",
      online: true
    },
    {
      id: 2,
      name: "Username2",
      online: false
    },
    {
      id: 3,
      name: "Username3",
      online: false
    },
    {
      id: 4,
      name: "Username3",
      online: false
    },
    {
      id: 5,
      name: "Username3",
      online: false
    },
    {
      id: 6,
      name: "Username3",
      online: false
    }
  ];

function Container() {
        return (
        <div className="container">
            <ul>
                <Sidebar player={Playerdata}/>
            </ul>
        </div>
        )
  }

export default Container