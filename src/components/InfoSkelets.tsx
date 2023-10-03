import styled from "styled-components"

const Skelet = styled.div`
  background: #ededed;
  border-radius: 12px;
  height: 30px;
  margin: 0 0 20px;
  @media screen and (max-width: 900px) {
    margin: 0 20px 20px;
  }
`

const InfoSkelets: React.FC = () => {
  return (
    <div>
      <Skelet />
      <Skelet />
      <Skelet />
      <Skelet />
      <Skelet />
    </div>
  )
}

export default InfoSkelets
