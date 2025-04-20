
import 'dotenv/config';
import {get} from 'env-var'

export const envs = {
    PORT: get('PORT').default(3000).asPortNumber(), // Default to 3000 if not set
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(), // Default to 'public' if not set


}