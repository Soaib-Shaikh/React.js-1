import React, { use, useState } from 'react'

const App = () => {

  const [user, setUser] = useState({});
  const [hobby, setHobby] = useState([]);
  const [list, setList] = useState([]);

  const cities=['Navsari', 'Surat', 'Vadodara', 'Ahmedabad', 'Rajkot'];

  const handleChange = (e) => {
    let {name, value} = e.target;

    if(name == "hobby"){
      let newData = hobby;

      if(newData.includes(value)){
        newData = newData.filter(val => val != value);
      }else{
        newData.push(value);
      }
      value = newData;
      setHobby(value);
    }

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      setList([...list, {user, id: Date.now()}]);
      setUser({});
      setHobby([]);
  }

  const handleReset = () => {
        setUser({});
        setHobby([]);
  }

  console.log(list);
  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2>Ragistration Form</h2>
              <div className="mb-3">
                <label htmlFor="username" className='form-label'>Username:</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={user.username || ''}  className='form-control' />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className='form-label'>Email:</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={user.email || ''}  className='form-control' />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className='form-label'>Password:</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={user.password || ''} className='form-control' />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className='form-label'>Gender:</label>
                <div className="form-chcek form-check-inline mx-2">
                  <input type="radio" name="gender" id="male" checked={user.gender == "male" ? true : false} onChange={handleChange} className='form-check-input' value='male' />
                  <label htmlFor="gender" className='form-check-label'>Male</label>
                </div>
                <div className="form-chcek form-check-inline mx-2">
                  <input type="radio" name="gender" value='female' checked={user.gender == "female" ? true : false} onChange={handleChange} id="female" className='form-check-input' />
                  <label htmlFor="gender" className='form-check-label'>Female</label>
                </div>
              </div>

              <div className="mb-3">
                  <label htmlFor="hobby" className='form-label'>Hobby:</label>
                  <div className="form-chcek form-check-inline mx-2">
                    <input type="checkbox" name="hobby" id="reading" checked={hobby.includes("reading")}
                     onChange={handleChange} value='reading' className='form-check-input' />
                    <label htmlFor="hobby" className='form-check-label'>Reading</label>
                  </div>
                  <div className="form-chcek form-check-inline mx-2">
                    <input type="checkbox" name="hobby" id="coding" checked={hobby.includes("coding")}
                      onChange={handleChange} value='coding' className='form-check-input' />
                    <label htmlFor="hobby" className='form-check-label'>Coding</label>
                  </div>
                  <div className="form-chcek form-check-inline mx-2">
                    <input type="checkbox" name="hobby" id="cricket" checked={hobby.includes("cricket")}
                     onChange={handleChange} value='cricket' className='form-check-input' />
                    <label htmlFor="gender" className='form-check-label'>Cricket</label>
                  </div>
                  
              </div>

              <div className="mb-3">
                <label htmlFor="city" className='form-label'>City:</label>
                <select className='form-select' value={user.city || ''} name='city' aria-label='Default select example' onChange={handleChange}>
                  <option value=""  disabled>--- select city ---</option>
                  {
                    cities.map((city)=>(
                      <option value={city} selected={user.city == city}>{city}</option>
                    ))
                  }
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="address" className='form-label'>Address:</label>
                <textarea name="address" id="addresss" onChange={handleChange} value={user.address || ''} className='form-control' rows={4}></textarea>
              </div>

              <button type="submit" className='btn btn-outline-primary me-3'>Submit</button>
              <button type="button" onClick={handleReset} className='btn btn-outline-secondary'>Reset</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
