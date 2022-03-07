import React from "react"
import Sidebar from "./sidebar.js";

/**
 * Container for the whole page
 */



class Container extends React.Component {
    state = {
        players: [
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
          },
        ]
       };
    handleChange = () => {console.log("clicked");};
    render() {
        return (
        <div className="container">
            <ul>
                <Sidebar players={this.state.players} handleChangeProps={this.handleChange} />
            </ul>
        </div>
        )
  }
}
export default Container