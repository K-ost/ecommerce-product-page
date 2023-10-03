import styled from "styled-components"
import cart from "../assets/icon-cart-white.svg"

interface IBtn {
  handler?: () => void
  style?: 'cart'
  expand?: boolean
  title: string
}

export const BtnBox = styled.button<{ $style: 'cart', $expand: boolean }>`
  background: var(--color-orange);
  border: 0;
  border-radius: 8px;
  box-shadow: 0 8px 10px var(--color-pale-orange);
  color: var(--color-white);
  cursor: pointer;
  font-family: var(--ff);
  font-size: var(--fs);
  line-height: 24px;
  font-weight: 700;
  margin: 0;
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  transition: var(--animate);
  -webkit-appearance: none;
  ${props => props.$expand ? 'width: 100%;' : ''}
  &:hover { opacity: 0.8; }
  ${props => {
    if (props.$style === 'cart') {
      return `span {
        background: url(${cart}) left center / 18px no-repeat;
        display: inline-block;
        padding-left: 30px;
      }`
    }
  }}
`

const Btn: React.FC<IBtn> = ({ handler, style, title, expand = false }) => {
  return (
    <BtnBox onClick={handler} $style={style!} $expand={expand}>
      {style !== 'cart'
        ? <>{title}</>
        : <span>{title}</span>
      }
    </BtnBox>
  )
}

export default Btn
