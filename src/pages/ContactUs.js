import React from 'react'

const ContactUs = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (
        <div className="h-[100vh] flex-col flex justify-center items-center">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
          <label htmlFor="message">Message</label>
          <textarea name="message" onChange={(e) => handleChange} />
          <button className="bg-pink-300 rounded-xl py-4 px-7" type="submit">
            Submit
          </button>
        </form>
      </div>
  )
}

export default ContactUs