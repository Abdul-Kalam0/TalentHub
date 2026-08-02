import { askHiringAssistantService } from "../services/ai.service.js";

export const askHiringAssistantController = async (request, response, next) => {
  try {
    const { jobId } = request.params;

    const { prompt } = request.body;

    const recruiterId = request.user._id;

    const aiResponse = await askHiringAssistantService(
      recruiterId,
      jobId,
      prompt,
    );

    return response.status(200).json({
      success: true,
      message: "AI response generated successfully.",
      data: aiResponse,
    });
  } catch (error) {
    next(error);
  }
};
