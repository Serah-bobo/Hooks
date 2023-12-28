import { useState } from "react"
 const initialForm={
  name:'',
  email:'',
  message:''
 }
const Contact = () => {
  const [formData, setFormData]=useState(initialForm)

  //function  for handling event
  function handleChange (e){
    const {name, value}=e.target;
    setFormData((prevFormData)=>({ ...prevFormData, [name]:value}))
    }
   return (
    <div className="max-w-md mx-auto my=8 p=6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold" mb-4>Contact us</h2>
      
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log('form data:', formData);
        setFormData({name:'', email:'', message:''});
      }}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
          <textarea
          id="message"
          name="mesage"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 " rows="4"></textarea>
        </div>
        <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-600">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
