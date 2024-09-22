import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Products() {
  // input to put username and bio
  // and send it to supabase
  const { data: session } = useSession();

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  console.log(
    "Going to supabase with session",
    session,
    supabaseURL,
    supabaseAnonKey
  );

  const supabase = createClient(supabaseURL, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${session?.supabaseAccessToken}`,
      },
    },
  });

  const handleSave = async () => {
    console.log("save");
    const { data, error } = await supabase
      .from("profiles")
      .update({ username: username, bio: bio });
  };
  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
