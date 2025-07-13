import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState({ title: '', description: '' });
  const [history, setHistory] = useState([]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.post('/api/daily-data', { date, data }, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     alert('Data updated');
  //     loadHistory();
  //   } catch (err) {
  //     alert(err.response.data.message);
  //   }
  // };

  // const loadHistory = async () => {
  //   const token = localStorage.getItem('token');
  //   const res = await axios.get('/api/daily-data/history', {
  //     headers: { Authorization: `Bearer ${token}` }
  //   });
  //   setHistory(res.data);
  // };

  // useEffect(() => {
  //   loadHistory();
  // }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <form >
        <input type="date" onChange={e => setDate(e.target.value)} required />
        <input placeholder="Title" onChange={e => setData({ ...data, title: e.target.value })} />
        <textarea placeholder="Description" onChange={e => setData({ ...data, description: e.target.value })} />
        <button type="submit">Submit</button>
      </form>

      <h3>History</h3>
      <ul>
        {history.map((item) => (
          <li key={item._id}>
            {new Date(item.date).toLocaleDateString()} - {item.data.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
