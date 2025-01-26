import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <h1>
      <SignedOut>
            <SignInButton>
              <Button>
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </h1>
  );
}
