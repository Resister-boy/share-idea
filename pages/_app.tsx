import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/components/layout/Header"
import { ApolloProvider } from "@apollo/client"
import client from './../apollo-client'
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps: 
  { session, ...pageProps }}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Toaster />
        <div className="h-screen overflow-scroll bg-slate-200">
          <Header />
            <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  )
}
