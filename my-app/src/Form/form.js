import React, { useState } from 'react';
import './form.css';

const StudioForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    startDate: '',
    rentalDays: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (formData.fullName.trim() === '') {
      formErrors.fullName = 'Поле ФИО обязательно для заполнения';
    }
    if (formData.startDate === '') {
      formErrors.startDate = 'Поле "Дата начала аренды" обязательно для заполнения';
    }
    if (formData.rentalDays === '') {
      formErrors.rentalDays = 'Поле "Количество дней" обязательно для заполнения';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert(`Форма успешно отправлена:
        ФИО: ${formData.fullName}
        Телефон: ${formData.phone || 'Не указан'}
        Email: ${formData.email || 'Не указан'}
        Дата начала аренды: ${formData.startDate}
        Количество дней: ${formData.rentalDays}`
      );
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        startDate: '',
        rentalDays: ''
      });
      setErrors({});
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Заполните форму для аренды фотостудии</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">ФИО</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>
        <div>
          <label htmlFor="phone">Телефон</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="startDate">Дата начала аренды</label>
          <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
          {errors.startDate && <div className="error">{errors.startDate}</div>}
        </div>
        <div>
          <label htmlFor="rentalDays">Количество дней</label>
          <input type="number" id="rentalDays" name="rentalDays" value={formData.rentalDays} onChange={handleChange} />
          {errors.rentalDays && <div className="error">{errors.rentalDays}</div>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default StudioForm;
