import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.userId;
  } catch (err) {
    console.error("Error decoding token: ", err);
    return null;
  }
};
