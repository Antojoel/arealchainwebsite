import { apiJSON } from "../pages/api/api";

export interface BuyTokenResponse {
  success: boolean;
  message: string;
  isAlreadySubmitted?: boolean;
  status?: string;
  data?: any;
}

export const postBuyTokenDetails = async (
  formData: FormData
): Promise<BuyTokenResponse> => {
  try {
    const response = await apiJSON.post(`user/token/buy/test`, formData);

    return {
      success: true,
      message: "Buy Token submitted successfully",
      data: response.data,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to submit Buy Token";

    return {
      success: false,
      message: errorMessage,
      isAlreadySubmitted: true,
      status: error.response?.data?.status || "Waiting for approval",
    };

    // For other errors, still throw
    throw new Error(errorMessage);
  }
};

export const getTokenPrice = async (): Promise<BuyTokenResponse> => {
  try {
    const response = await apiJSON.get(`user/token/price`);
    return {
      success: true,
      message: "Token price fetched successfully",
      data: response.data,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch token price";
    return {
      success: false,
      message: errorMessage,
    };
  }
};
