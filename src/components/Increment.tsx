import { useEffect, useState } from "react"
import styled from "styled-components"

interface IIncrement {
  handler: (val: number) => void
}

// Styles
export const NumberWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 155px;
`
const NumberBox = styled.input.attrs({ type: "number" })`
  background: var(--color-light);
  border: 0;
  border-radius: 10px;
  display: inline-block;
  font-family: var(--ff);
  font-size: var(--fs);
  font-weight: 700;
  height: 54px;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: center;
  width: 100%;
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
const NumberBtn = styled.button`
  background: 0;
  border: 0;
  width: 40px;
  color: var(--color-orange);
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  height: 54px;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-appearance: none;
  &.right { left: auto; right: 0; }
`

const Increment: React.FC<IIncrement> = ({ handler }) => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    handler(count)
  }, [count])

  return (
    <NumberWrap>
      <NumberBtn onClick={() => setCount(prev => prev > 0 ? prev - 1 : prev = 0)}>-</NumberBtn>
      <NumberBox
        value={count}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))}
      />
      <NumberBtn className="right" onClick={() => setCount(prev => prev + 1)}>+</NumberBtn>
    </NumberWrap>
  )
}

export default Increment
