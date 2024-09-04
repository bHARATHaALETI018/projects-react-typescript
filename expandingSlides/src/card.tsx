type Props = {
  link: string;
    text: string;
    isActive: boolean,
    change: ()=>void
};

const Card = (props: Props) => {
  return (
    <div
      className={`card  ${props.isActive && "openCard"}`}
      style={{ backgroundImage: `url(${props.link})` }}
      onClick={props.change}
    >
      <p className="display">{props.text}</p>
    </div>
  );
};

export default Card;
