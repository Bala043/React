 // Replace with env variable!
import { InferenceClient } from "@huggingface/inference";
import { Hugging_API } from '../utils/constants'

const client = new InferenceClient( Hugging_API);


export default client;