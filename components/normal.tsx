"use client"
import { useSession } from "next-auth/react"
export default function Normal() {
  const session = useSession()
  const value = JSON.stringify(session)
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <ul className="flex flex-col">
          <li>{value}</li>
        </ul>
      </div>
    </div>
  )
}
