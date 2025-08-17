import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">Welcome to Clerk Authentication</h1>
        
        <SignedOut>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-lg text-center">Please sign in or sign up to continue</p>
            <div className="flex gap-4">
              <SignInButton>
                <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#5a3ad6] transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <AuthenticatedContent />
        </SignedIn>
      </main>
    </div>
  );
}

function AuthenticatedContent() {
  const { user } = useUser();
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-semibold">Welcome, {user?.emailAddresses[0]?.emailAddress}!</h2>
      <p className="text-lg text-center">You are successfully authenticated.</p>
      <div className="flex items-center gap-4">
        <span>Your Profile:</span>
        <UserButton />
      </div>
    </div>
  );
}
