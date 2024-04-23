'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import ImageGallery from '@/components/ImageGallery'

export default function Page({ params }) {
  return (
    <>
      <Header></Header>
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </>
  )
  // return <div>My Post: {params.product}</div>
}
