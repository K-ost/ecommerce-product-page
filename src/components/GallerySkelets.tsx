import styled from "styled-components"

const SkeletsBig = styled.div`
  background: #ededed;
  border-radius: 12px;
  height: 300px;
  margin: 0 0 30px;
`
const SkeletsThumbs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const SkeletsThumb = styled.div`
  background: #ededed;
  border-radius: 12px;
  height: 90px;
`

const GallerySkelets: React.FC = () => {
  return (
    <div>
      <SkeletsBig />
      <SkeletsThumbs>
        <SkeletsThumb />
        <SkeletsThumb />
        <SkeletsThumb />
        <SkeletsThumb />
      </SkeletsThumbs>
    </div>
  )
}

export default GallerySkelets
