interface ModalProps {
  title: string;
  info: string;
  children: React.ReactNode;
  id: number;
}

export function Modal({ title, info, children, id }: ModalProps) {
  return (
    <>
      <button
        className='btn'
        onClick={() =>
          (
            document.getElementById(`my_modal_${id}`) as HTMLDialogElement
          )?.showModal()
        }
      >
        {children}
      </button>
      <dialog
        id={`my_modal_${id}`}
        className='modal'
      >
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className='py-4'>{info}</p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
