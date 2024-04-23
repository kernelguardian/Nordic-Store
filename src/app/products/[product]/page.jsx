'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import ImageGallery from '@/components/ImageGallery'

export default function Page({ params }) {
  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
      <ImageGallery params={params}></ImageGallery>
      <div className="flex-grow"></div>
      <Footer></Footer>
    </div>
  )
  // return <div>My Post: {params.product}</div>
}
