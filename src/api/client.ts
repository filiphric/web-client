import axios from \"axios\";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? \"http://localhost:8000\";

export interface UserDTO {
  user_id: number;
  user_name: string;
  email: string;
  is_active: boolean;
}

export async function fetchUser(userId: number): Promise<UserDTO> {
  const { data } = await axios.get<UserDTO>(`${API_BASE}/api/users/${userId}`);
  return data;
}
