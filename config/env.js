import {DEV_SERVER_URL, PROD_SERVER_URL, GOOGLE_API_KEY} from "@env";


const devEnvVars = {
	SERVER_URL:DEV_SERVER_URL,
	GOOGLE_API_KEY: GOOGLE_API_KEY, 
}
const prodEnvVars = {
	SERVER_URL:PROD_SERVER_URL, 
}

export default __DEV__ ? devEnvVars:prodEnvVars;


