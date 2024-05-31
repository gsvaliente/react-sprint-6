interface ModalProps {
  title: string;
  info: string;
  children: React.ReactNode;
}

export function Modal({ title, info, children }: ModalProps) {
  return (
    <>
      <button
        className='btn'
        onClick={() =>
          (
            document.getElementById('my_modal_1') as HTMLDialogElement
          )?.showModal()
        }
      >
        {children}
      </button>
      <dialog
        id='my_modal_1'
        className='modal'
      >
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className='py-4'>{info}</p>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
