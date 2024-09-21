import { 
    CopilotRuntime, 
    AnthropicAdapter, 
    copilotRuntimeNextJSAppRouterEndpoint 
} from "@copilotkit/runtime";
import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
   
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
const serviceAdapter = new AnthropicAdapter({ anthropic });
const runtime = new CopilotRuntime();
   
export const POST = async (req: NextRequest) => {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime,
        serviceAdapter,
        endpoint: "/api/copilotkit",
    });

    return handleRequest(req);
};