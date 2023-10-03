import Header from "./components/Header"
import { ProductType } from "./types"
import img1 from "./assets/image-product-1.jpg"
import img2 from "./assets/image-product-2.jpg"
import img3 from "./assets/image-product-3.jpg"
import img4 from "./assets/image-product-4.jpg"
import { useEffect, useState } from "react"
import Gallery from "./components/Gallery"
import Information from "./components/Information"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./store/store"
import { setOrders } from "./store/reducer"

// Data
const data = {
  id: 1,
  title: 'Fall Limited Edition Sneakers',
  brand: 'Sneaker company',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
  price: 125.00,
  oldprice: 250.00,
  img: [ img1, img2, img3, img4 ]
} as ProductType

function App() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const locale = localStorage.getItem('orders')
    const localeOrders = locale && JSON.parse(locale)
    if (localeOrders) {
      dispatch(setOrders(localeOrders))
    }
  }, [localStorage])

  useEffect(() => {
    setTimeout(() => {
      setProduct(data)
    }, 500)
  }, [])

  return (
    <div className="container">
      <Header />
      
      <div className="grid">
        <Gallery imgs={product?.img} />
        <Information el={product} />
      </div>

    </div>
  )
}

export default App
