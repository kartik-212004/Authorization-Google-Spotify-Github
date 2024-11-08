import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Spotify from "next-auth/providers/spotify"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Email",
          input: "email",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          input: "password",
        },
      },
      async authorize(credentials: any) {
        const email = credentials.email
        const password = credentials.password
        return { id: "kartik", name: "kartik", email, password }
      },
    }),
  ],
  callbacks: {
    session: ({ token, session, user }) => {
      if (session && session.user) {
        session.user.id = token.sub
        session.user.image = "sex"
      }
      console.log(session.user)
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
