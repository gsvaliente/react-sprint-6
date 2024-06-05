import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

interface UserData {
  name: string;
  telephone: string;
  email: string;
}

export function AddingBudget() {
  const [data, setData] = useState<UserData>({
    name: '',
    telephone: '',
    email: '',
  });

  const { handleAddBudgetList } = useContext(AppContext) || {};

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    if (handleAddBudgetList) {
      handleAddBudgetList(data.name, data.telephone, data.email);
    }
    setData({ name: '', telephone: '', email: '' });
  };

  return (
    <form
      className='flex flex-col items-center justify-center p-5 bg-stone-200 rounded-lg shadow-lg'
      onSubmit={onHandleSubmit}
    >
      <h2 className='text-2xl font-bold mb-3 uppercase'>Request a budget</h2>
      <div className='join join-vertical lg:join-horizontal'>
        <input
          className='input input-bordered join-item'
          type='text'
          placeholder='John Doe'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          className='input input-bordered join-item'
          type='text'
          placeholder='111111111'
          value={data.telephone}
          onChange={(e) => setData({ ...data, telephone: e.target.value })}
        />
        <input
          className='input input-bordered join-item'
          type='email'
          placeholder='j.doe@gmail.com'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button className='btn btn-neutral join-item rounded-r-full'>
          Submit budget
        </button>
      </div>
    </form>
  );
}
