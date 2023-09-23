import React, { useRef, useState } from 'react'
import Button from './Button'
import axios from 'axios';

const ContactBox = () => {
    const formRef = useRef(null);
    const [data, setData] = useState({ name: '', mail:'', message:'', phone:'' });
    const [res, setRes] = useState(0);
    const { name, mail, message, phone } = data;

    const handleSubmit =(e) => {
        e.preventDefault();
        if (!name || !mail || !message || !phone) return;

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backend.getlinked.ai/hackathon/contact-form',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                email: mail,
                phone_number: phone,
                first_name: name,
                message
            })
        };

        axios(config).then((response) => {
            console.log(response);
            if (res.status == 200|| 201) {
                alert('Message sent successfully');
                formRef.current.reset();
            };
        }).catch((error) => {
            console.log(error);
        });
    }
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    return (
        <form ref={formRef} className='bg-[rgba(255,255,255,0.05)] rounded-lg backdrop-blur-md px-[7%] py-10 w-full md:w-7/12 flex flex-col'>
            <h3 className='text-lg font-semibold text-[#d434fe]'>Questions or need assistance?</h3>
            <h3 className='text-lg font-semibold mb-7 text-[#d434fe]'>Let us know about it!</h3>
            <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} placeholder='First name' className='outline-none py-3 px-5 mb-6 w-full bg-transparent border border-slate-300 rounded-md text-white placeholder:text-white' />
            <input type="tel" name='phone' value={phone} onChange={(e) => handleChange(e)} placeholder='Phone number' className='outline-none py-3 px-5 mb-6 w-full bg-transparent border border-slate-300 rounded-md text-white placeholder:text-white' />
            <input type="email" name='mail' value={mail} onChange={(e) => handleChange(e)} placeholder='Mail' className='outline-none py-3 px-5 mb-6 w-full bg-transparent border border-slate-300 rounded-md text-white placeholder:text-white' />
            <textarea name='message' value={message} onChange={(e) => handleChange(e)} placeholder='Message' className='outline-none py-3 px-5 mb-8 w-full bg-transparent border border-slate-300 rounded-md text-white placeholder:text-white' rows={3}></textarea>
            <Button classes='mx-auto px-10' handleClick={handleSubmit}>Submit</Button>
        </form>
    )
}

export default ContactBox