import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { getUserIdFromToken } from "./authToken";

export const decodeTokenAndSetUserId = async () => {
  try {
    const token = await AsyncLocalStorage.getItem("token");

    if (!token) {
      console.error("Token not found.");
      return null;
    }

    const decodedUserId = getUserIdFromToken(token);

    if (!decodedUserId) {
      console.error("Failed to decode User ID from token.");
      return null;
    }

    return decodedUserId;
  } catch (err) {
    console.error("Error fetching User Information", err.message);
    return null;
  }
};
