import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./upload-button";

export function TopNav() {

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href={"/"}>Gallery</Link> 
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
