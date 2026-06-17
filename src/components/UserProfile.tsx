import { useEffect, useState } from \"react\";
import { fetchUser, UserDTO } from \"../api/client\";

function mapUser(raw: UserDTO) {
  return {
    id: raw.user_id,
    displayName: raw.user_name,
    email: raw.email,
    active: raw.is_active,
  };
}

export default function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<ReturnType<typeof mapUser> | null>(null);

  useEffect(() => {
    fetchUser(userId).then((raw) => setUser(mapUser(raw)));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <span>{user.active ? \"Active\" : \"Inactive\"}</span>
    </div>
  );
}
