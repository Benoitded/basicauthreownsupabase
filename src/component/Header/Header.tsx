// src/components/Header.tsx
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import ByzantineLogo from "@/assets/byzantine/byzantineLogo.png";

import Whale from "@/assets/menu/whale.svg";
import Cubes from "@/assets/menu/cubes.svg";
import Disconnect from "@/assets/menu/disconnect.svg";
import CopyIcon from "@/assets/icons/copy.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import OpenIcon from "@/assets/icons/open.svg";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";

const Header: React.FC = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const menuRef = useRef<HTMLDivElement>(null);
  const [showLogoMenu, setShowLogoMenu] = useState(false);
  const logoMenuRef = useRef<HTMLDivElement>(null);
  const { open, close } = useAppKit();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} href={"/"}>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          <div className={styles.attributeLogo}>staker</div>
        </Link>
      </div>
      <div className={styles.menu}>
        <Link
          href={"/"}
          className={router.pathname === "/" ? styles.active : ""}
        >
          Home
        </Link>
        <Link
          href={"/products"}
          className={router.pathname === "/products" ? styles.active : ""}
        >
          Products
        </Link>
        <Link
          href={"/pricing"}
          className={router.pathname === "/pricing" ? styles.active : ""}
        >
          Pricing
        </Link>
      </div>
      {isClient ? (
        isConnected ? (
          <div className={styles.connect} onClick={() => open()}>
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </div>
        ) : (
          <div className={styles.connect} onClick={() => open()}>
            Connect Wallet
          </div>
        )
      ) : (
        <div className={styles.connect}>Connect Wallet</div>
      )}
    </header>
  );
};

export default Header;
