import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function FoodForm() {
  const refForm = useRef(null);

  const initialFormData = {
    nameEn: '',
    nameAr: '',
    category: '',
    refuse: '',
    water: '',
    energy: '',
    protein: '',
    fat: '',
    ash: '',
    fiber: '',
    carbohydrate: '',
    sodium: '',
    potassium: '',
    calcium: '',
    phosphorus: '',
    magnesium: '',
    iron: '',
    zinc: '',
    copper: '',
    vitaminA: '',
    vitaminC: '',
    thiamin: '',
    riboflavin: '',
  };

  const [data, setData] = useState(initialFormData);

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('nameEn', data.nameEn);
    formData.append('nameAr', data.nameAr);
    formData.append('category', data.category);
    formData.append('refuse', data.refuse);
    formData.append('water', data.water);
    formData.append('energy', data.energy);
    formData.append('protein', data.protein);
    formData.append('fat', data.fat);
    formData.append('ash', data.ash);
    formData.append('fiber', data.fiber);
    formData.append('carbohydrate', data.carbohydrate);
    formData.append('sodium', data.sodium);
    formData.append('potassium', data.potassium);
    formData.append('calcium', data.calcium);
    formData.append('phosphorus', data.phosphorus);
    formData.append('magnesium', data.magnesium);
    formData.append('iron', data.iron);
    formData.append('zinc', data.zinc);
    formData.append('copper', data.copper);
    formData.append('vitaminA', data.vitaminA);
    formData.append('vitaminC', data.vitaminC);
    formData.append('thiamin', data.thiamin);
    formData.append('riboflavin', data.riboflavin);

    axios
      .post('http://localhost:8000/food', formData, {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      })
      .then(res => {
        toast.success(`${res.data.result.nameAr} اتعمل يا بيه`, {
          position: 'top-right',
          autoClose: 250,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .then(() => {
        refForm.current.reset();
      })
      .catch(err => {
        toast.error(err.message + '', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    // e.target.reset(); without useRef
  };
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={250}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit} className='container mt-1' ref={refForm}>
        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='nameEn'>
              NameEn
            </label>
            <input
              name='nameEn'
              type='text'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='nameAr'>
              NameAr
            </label>
            <input
              name='nameAr'
              type='text'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='category'>
              Category
            </label>
            <input
              name='category'
              type='text'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='refuse'>
              Refuse
            </label>
            <input
              name='refuse'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='water'>
              Water
            </label>
            <input
              name='water'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='energy'>
              Energy
            </label>
            <input
              name='energy'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='protein'>
              Protein
            </label>
            <input
              name='protein'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='fat'>
              Fat
            </label>
            <input
              name='fat'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='ash'>
              Ash
            </label>
            <input
              name='ash'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='fiber'>
              Fiber
            </label>
            <input
              name='fiber'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='carbohydrate'>
              Carbohydrate
            </label>
            <input
              name='carbohydrate'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='sodium'>
              sodium
            </label>
            <input
              name='sodium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='potassium'>
              potassium
            </label>
            <input
              name='potassium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='calcium'>
              calcium
            </label>
            <input
              name='calcium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='phosphorus'>
              phosphorus
            </label>
            <input
              name='phosphorus'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4 fs-4' htmlFor='magnesium'>
              magnisum
            </label>
            <input
              name='magnesium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4' htmlFor='iron'>
              iron
            </label>
            <input
              name='iron'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4' htmlFor='zinc'>
              zinc
            </label>
            <input
              name='zinc'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4' htmlFor='copper'>
              copper
            </label>
            <input
              name='copper'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-1 col'>
            <label className='form-label fs-4' htmlFor='vitaminA'>
              vitaminA
            </label>
            <input
              name='vitaminA'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='vitaminC'>
              vitaminC
            </label>
            <input
              name='vitaminC'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='thiamin'>
              thiamin
            </label>
            <input
              name='thiamin'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='riboflavin'>
              riboflavin
            </label>
            <input
              name='riboflavin'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <button type='submit' className='btn btn-dark btn-block mb-2 col-2 mx-auto'>
            Create Food Item
          </button>
        </div>
      </form>
    </>
  );
}

export default FoodForm;
