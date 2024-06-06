interface ErrorAlertProps {
  message: string;
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className='toast toast-top toast-center'>
      <div className='alert alert-error'>
        <span>{message}</span>
      </div>
    </div>
  );
}
