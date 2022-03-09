import BasicJsonApiCall from "./basicFetcher";

const BASE_NEWS_URL = "/api/mcServerInfo"

const  mcServerInfoSource={

    apiCall(params) {
        // The actual fetch
        return BasicJsonApiCall({baseUrl:BASE_NEWS_URL});
    },

    getServerInfo(){
        return mcServerInfoSource.apiCall().then(result=>{return result})
    }
}

export default mcServerInfoSource;
