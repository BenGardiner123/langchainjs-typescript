import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
dotenv.config();
if (!process.env.OPENAI_API_KEY) {
  // if you are missing the OPENAI_API_KEY environment variable you probably need to create your .env file in the root of the project
  throw new Error("Missing OPENAI_API_KEY environment variable");
}
export const run = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const res = await model.call("What is the meaning of life ?");
  console.log({ res });
};

run();
