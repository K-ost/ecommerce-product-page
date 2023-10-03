import { useState } from "react"
import { CartType, ProductType } from "../types"
import Btn, { BtnBox } from "./Btn"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { setOrder } from "../store/reducer"
import styled from "styled-components"
import Increment, { NumberWrap } from "./Increment"
import InfoSkelets from "./InfoSkelets"

interface IInformation {
  el: ProductType | null
}

// Styles
const InformationBox = styled.div`
  padding-top: 56px;
  @media screen and (max-width: 900px) {
    padding: 0 20px 40px;
  }
`
const Desc = styled.div`
  margin: 0 0 24px;
`
const Brandname = styled.div`
  color: var(--color-orange);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 16px;
  text-transform: uppercase;
`
const Price = styled.div`
  margin: 0 0 32px;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const PriceTop = styled.div`
  display: flex;
  span { color: var(--color-black); font-size: 30px; font-weight: 700; margin: 0 14px 0 0; }
`
const OldPrice = styled.div`
  color: var(--color-gray); font-size: 16px; font-weight: 700; margin-top: 10px; text-decoration: line-through;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`
const Discount = styled.div`
  background: var(--color-pale-orange);
  border-radius: 6px;
  color: var(--color-orange);
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  padding: 3px 8px;
`
const Meta = styled.div`
  display: flex;
  ${BtnBox} { flex: 1; margin-left: 16px; }
  @media screen and (max-width: 900px) {
    display: block;
    ${NumberWrap} { width: 100%; margin: 0 0 15px; }
    ${BtnBox} { width: 100%; margin: 0; }
  }
`
const Error = styled.div`
  color: var(--color-orange);
  padding-top: 10px;
`
// Styles

const Information: React.FC<IInformation> = ({ el }) => {
  if (!el) return <InfoSkelets />

  const [counter, setCounter] = useState<number>(0)
  const dispatch = useDispatch<AppDispatch>()
  const discount = el.oldprice && Math.round(el.price * 100 / el.oldprice)
  const [error, setError] = useState<boolean>(false)

  // addToCart
  const addToCart = () => {
    setError(false)
    if (counter > 0) {
      const newItem = {
        id: Date.now(),
        count: counter,
        img: el.img[0],
        price: el.price,
        title: el.title
      } as CartType
      dispatch(setOrder({ count: counter, el: newItem }))
    } else {
      setError(true)
    }
  }

  
  return (
    <InformationBox>
      <Brandname>{el.brand}</Brandname>
      <h1>{el.title}</h1>
      <Desc dangerouslySetInnerHTML={{__html: el.description!}}></Desc>
      <Price>
        <PriceTop>
          <span>${el.price.toFixed(2)}</span>
          {discount && <Discount>{discount}%</Discount>}
        </PriceTop>
        <OldPrice>${el.oldprice?.toFixed(2)}</OldPrice>
      </Price>
      <Meta>
        <Increment handler={setCounter} />
        <Btn title="Add to cart" style="cart" handler={addToCart} />
      </Meta>
      {error && <Error>You've got to change a number first. At least to 1 point.</Error>}
    </InformationBox>
  )
}

export default Information
