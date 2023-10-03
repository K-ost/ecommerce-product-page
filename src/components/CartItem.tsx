import { useDispatch } from "react-redux"
import { CartType } from "../types"
import { AppDispatch } from "../store/store"
import { removeOrder } from "../store/reducer"
import styled from "styled-components"
import trash from "../assets/trash.svg"

interface ICartItem {
  el: CartType
}

// Styles
const CartEl = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
  &>div {flex: 1;}
  img { border-radius: 6px; min-width: 50px; height: 50px; display: block; margin: 0 15px 0 0; }
  b { color: var(--color-black); font-weight: 700; }
`
const CartElTitle = styled.div`
  line-height: 20px;
  margin: 0 0 4px;
`
const CartElDelete = styled.button`
  background: url(${trash}) center center / 20px no-repeat;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  opacity: 0.5;
  outline: none;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 32px;
  -webkit-appearance: none;
  transition: var(--animate);
  &:hover { opacity: 1; }
`

const CartItem: React.FC<ICartItem> = ({ el }) => {
  const dispatch = useDispatch<AppDispatch>()
  const total = (el.price * el.count).toFixed(2)

  return (
    <CartEl>
      <img src={el.img} alt="" />
      <div>
        <CartElTitle>{el.title}</CartElTitle>
        <div>${el.price.toFixed(2)} x {el.count} &mdash; <b>${total}</b></div>
      </div>
      <CartElDelete onClick={() => dispatch(removeOrder(el.title))}></CartElDelete>
    </CartEl>
  )
}

export default CartItem
