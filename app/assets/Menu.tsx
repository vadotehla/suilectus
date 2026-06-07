import Link from "next/link";
import { useState } from "react";

import "@/app/assets/Menu.css";

export default function Menu({ current = "Home" }: { current?: string }) {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <menu>
      <nav>
        <ul>
          <Link className={current === "Home" ? "current" : "link"} href="/">
            Home
          </Link>
          <Link
            href="/profile"
            className={current === "Profile" ? "current" : "link"}
            prefetch={profileActive ? null : false}
            // onMouseEnter={() => setProfileActive(true)}
          >
            Your Profile
          </Link>
        </ul>
      </nav>
    </menu>
  );
}
