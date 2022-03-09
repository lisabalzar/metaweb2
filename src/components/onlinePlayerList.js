import './onlinePlayerList.css';
import {useEffect, useState} from "react";
import mcServerInfoSource from "../api/msServerInfo";


function OnlinePlayerList() {

    const [data, setData] = useState(null);
    useEffect(()=>{
        mcServerInfoSource.getServerInfo().then(res=>{setData(res)})
    },[])

    return(
        <div>
            
            {data &&
            <div>
                <div className={"topRowPlayerList"}>
                    <p>{data.minecraftInfo.players.online}</p>
                </div>
                <div>
                    {data.minecraftInfo.players.list.map((p, index)=>{
                        return(<p className={"playerLabel"} key={"k-"+p}>{p}</p>)
                    })}
                </div>
            </div>}
        </div>
    )

}
export default OnlinePlayerList;
