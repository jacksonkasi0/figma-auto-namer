import ModelClient, { isUnexpected } from "npm:@azure-rest/ai-inference";
import { AzureKeyCredential } from "npm:@azure/core-auth";


const token = Deno.env.get("GITHUB_TOKEN");
const endpoint = Deno.env.get("AZURE_AI_ENDPOINT") || "https://models.inference.ai.azure.com";

export const llm_client = ModelClient(
    endpoint,
    new AzureKeyCredential(token)
);