import styled from "styled-components"
import useOutsideClick from "../hooks/useOutside"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import CartItem from "./CartItem"
import Btn from "./Btn"

// Styles
const BasketDropdown = styled.div<{ $show: boolean }>`
  background: var(--color-white);
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--color-grayish-blue);
  right: 0;
  position: absolute;
  width: 360px;
  transition: var(--animate);
  opacity: ${props => props.$show ? '1' : '0'};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  @media screen and (max-width: 900px) {
    width: auto;
    left: 20px;
    right: 20px;
    margin-top: 20px;
  }
`
const BasketDropdownHeader = styled.div`
  border-bottom: 1px solid var(--color-gray);
  color: var(--color-black);
  padding: 20px;
`
const BasketDropdownBody = styled.div`
  padding: 20px;
`
const EmptyCart = styled.div`
  font-weight: 700;
  padding: 20px 0;
  text-align: center;
`

const Cart: React.FC = () => {
  const { ref, isActive, setIsActive } = useOutsideClick(false)
  const orders = useSelector((state: RootState) => state.cart.orders)
  const count = orders.reduce((acum, el) => acum += el.count, 0)
  
  return (
    <div className="headerBasket" ref={ref}>
      <button className="basketBtn" onClick={() => setIsActive(!isActive)}>
        {count > 0 && <span>{count}</span>}
      </button>
      <BasketDropdown $show={isActive}>
        <BasketDropdownHeader>Cart</BasketDropdownHeader>
        <BasketDropdownBody>
          {orders.length
            ? <>
                {orders.map(el => <CartItem key={el.id} el={el} />)}
                <Btn title="Checkout" expand />
              </>
            : <EmptyCart>Cart is empty</EmptyCart>
          }
        </BasketDropdownBody>
      </BasketDropdown>
    </div>
  )
}

export default Cart
