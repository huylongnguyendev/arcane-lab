import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/arcane-lab-logo.png"

function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            src={logo}
            alt="arcane-lab-logo-img"
            priority
            width={80}
            height={80}
          />
        </Link>
      </div>
    </>
  );
}

export default Logo