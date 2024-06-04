interface ButtonProps {
  func: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
}

export function ButtonExtras({ func, text }: ButtonProps) {
  return (
    <button
      className={'btn btn-circle btn-outline btn-xs'}
      onClick={func}
    >
      {text}
    </button>
  );
}
