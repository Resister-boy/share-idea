import { Inter } from 'next/font/google'
import Head from 'next/head'
import Feed from '@/components/common/post/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Syi | Home</title>
        <link rel='icon' href='/favicon' />
      </Head>
      <main className='my-7 max-w-5xl mx-auto'>
        <div className='flex'>
          <Feed />
        </div>
      </main>
    </>
  )
}
