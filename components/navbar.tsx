"use client"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function Navbar() {
  const router = useRouter()
  return (
    <div className="flex flex-row justify-center p-5 space-x-4">
      <button
        onClick={() => {
          signIn()
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          signOut()
          router.push("/api/auth/signin")
        }}
      >
        logout
      </button>
    </div>
  )
}
