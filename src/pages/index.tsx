"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return (
    <div className={styles.page}>
      <h1>Basic page</h1>
      <p>Connected as {session?.address}</p>
    </div>
  );
}
