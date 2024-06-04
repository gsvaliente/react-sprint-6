import { IoMdInformationCircleOutline } from 'react-icons/io';
import { ButtonExtras } from './ui/ButtonExtras';
import { Modal } from './ui/Modal';

interface ExtraInputsProps {
  extras: {
    pages: number;
    languages: number;
  };
  handleIncreaseExtras: (field: 'pages' | 'languages') => void;
  handleDecreaseExtras: (field: 'pages' | 'languages') => void;
}

export function ExtraInputs({
  extras,
  handleDecreaseExtras,
  handleIncreaseExtras,
}: ExtraInputsProps) {
  return (
    <div className='flex justify-end mt-4 pb-5 mr-2'>
      <div>
        {/* PAGES */}
        <div className='space-x-2'>
          <Modal
            info='This allows the team to create multiple pages to the desired website, we can create upto 3 new pages'
            title='Pages Help'
            id={1}
          >
            <IoMdInformationCircleOutline />
          </Modal>
          <label className='text-sm'>pages</label>
          <ButtonExtras
            func={() => handleDecreaseExtras('pages')}
            text='-'
          />
          <input
            type='number'
            readOnly
            value={extras.pages}
            className='w-10 text-center'
          />
          <ButtonExtras
            func={() => handleIncreaseExtras('pages')}
            text='+'
          />
        </div>
        {/* LANGUAGES */}
        <div className='space-x-2 mt-1'>
          <Modal
            info='When the team creates a website, we also are able to add multiple languages. You can select upto 3 new languages'
            title='Language Help'
            id={2}
          >
            <IoMdInformationCircleOutline />
          </Modal>
          <label className='text-sm pl-1'>langs</label>
          <ButtonExtras
            text='-'
            func={() => handleDecreaseExtras('languages')}
          />
          <input
            type='number'
            readOnly
            value={extras.languages}
            className='w-10 text-center'
          />
          <ButtonExtras
            text='+'
            func={() => handleIncreaseExtras('languages')}
          />
        </div>
      </div>
    </div>
  );
}
