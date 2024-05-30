import { useState } from 'react';

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

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type='text'
          placeholder='John Doe'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type='text'
          placeholder='111111111'
          value={data.telephone}
          onChange={(e) => setData({ ...data, telephone: e.target.value })}
        />
        <input
          type='email'
          placeholder='j.doe@gmail.com'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button>Request budget</button>
      </form>
    </div>
  );
}
