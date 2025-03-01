// ** import config
import { llm_client } from "@/config/llm.ts";

// ** import utils
import { convertFileToBase64 } from "@/utils/convert-to-base64.ts";
import { isUnexpected } from "npm:@azure-rest/ai-inference";


interface AnalyzeFigmaFrameInput {
    files: File[]; // Array of raw image files
}

interface FigmaFrameAnalysisResponse {
    content: string; // The detailed breakdown of the design
}

/**
 * Analyze Figma frame design using Llama Vision-Instruct and return detailed feedback.
 *
 * @param input - The input containing raw image files for analysis.
 * @returns The detailed analysis of the Figma frame design.
 */
export const analyzeFigmaFrameDesign = async (
    input: AnalyzeFigmaFrameInput
): Promise<FigmaFrameAnalysisResponse> => {
    const { files } = input;

    // Convert files to base64 and build message objects dynamically
    const fileMessages = await Promise.all(
        files.map(async (file) => {
            const base64Image = await convertFileToBase64(file);
            return {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `Analyzing the following image: ${file.name}`,
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:${file.type};base64,${base64Image}`,
                            // Optional: Azure might support detail level
                            detail: "auto" // or "low", "high" if supported
                        },
                    },
                ],
            };
        })
    );

    // Define the messages array with explicit typing
    const messages = [
        {
            role: "system",
            content: `You are a helpful assistant that provides detailed design analysis. Please thoroughly analyze the Figma frame design and provide a detailed breakdown of each element, one by one, explaining:
            
1. The content used in the design, including typography, colors, and imagery.
2. The design flow, including any patterns, textures, or other visual elements used to guide the user's attention.

Please use clear and specific language, avoiding ambiguity and ensuring that each element is fully explained. The goal is to provide a comprehensive understanding of the design, including its components and how they work together to create the desired visual effect.`
        },
        ...fileMessages,
    ];

    try {
        // Use the Azure client syntax
        const response = await llm_client.path("/chat/completions").post({
            body: {
                messages,
                model: "Llama-3.2-11B-Vision-Instruct",
                // Optional parameters you might want to add:
                // temperature: 0.7,
                // max_tokens: 1000,
            }
        });

        // Check for unexpected response
        if (isUnexpected(response)) {
            throw new Error(response.body.error?.message || "Unexpected response from API");
        }

        const responseContent = response.body.choices[0]?.message?.content;
        if (!responseContent) {
            throw new Error("No response content received from Azure API.");
        }

        return { content: responseContent };
    } catch (error) {
        console.error("Error analyzing Figma frame design:", error);
        throw new Error("Failed to analyze the Figma frame design. See logs for more details.");
    }
};
