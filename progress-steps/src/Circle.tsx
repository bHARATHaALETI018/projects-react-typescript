
type Props = {
    num: number,
    present: number
}

const Circle = (props: Props) => {
  return (
      <div
          className={`circle ${props.num <= props.present ? 'active' : ''}`}
      >
          {props.num}
      </div>
  )
}
export default Circle;