type Props = {
  title: string
  onClick?: () => void
  disabled?: boolean
}

const Button2 = ({title, onClick, disabled }: Props) => {
  return (
    <button className='counter-button'
            onClick={onClick}
            disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button2;