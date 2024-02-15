import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactData', JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };
  return (
    <div className='container'>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
          className="input-field"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
          className="input-field"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
          className="input-field"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
