import { useEffect, useRef, useState } from 'react';
import Button from '../Components/Button';
import walk1 from '../assets/walking1.svg'
import walk2 from '../assets/walking2.svg'
import useFetchCategories from '../Hooks/useFetchCategories';

const info = {
    team_name: '',
    phone_number: '',
    email: '',
    project_topic: '',
    category: 0,
    group_size: 0,
    privacy_poclicy_accepted: false
};

const cat = [
  {
    "id": 1,
    "name": "MOBILE"
  },
  {
    "id": 2,
    "name": "WEB"
  },
  {
    "id": 3,
    "name": "UI/UX"
  }
];

const RegisterBox = () => {
    const formRef = useRef(null);
    // const { categories, error } = useFetchCategories();
    const [data, setData] = useState(info);

    const { team_name, phone_number, email, project_topic, category, group_size, privacy_poclicy_accepted } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.name == 'privacy_poclicy_accepted' ? e.target.checked : e.target.value});
    }

    const handleSubmit = () => {
        console.log(data);
        if (!team_name || !phone_number || !email || !project_topic || !category || !group_size || !privacy_poclicy_accepted) return;

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backend.getlinked.ai/hackathon/registration',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(data)
        };

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }
 
    return (
        <section className='bg-[rgba(255,255,255,0.05)] rounded-xl backdrop-blur-md px-[6%] py-10 w-full md:w-7/12 flex flex-col s shadow-md'>
            <h3 className='text-2xl font-semibold text-[#d434fe] mb-6'>Register</h3>
            <p className='mb-3'>
                Be part of this movement
                <span className='border-b border-[#D434FE] border-dashed inline-flex px-4 ml-1'>
                    <img src={walk1} alt="" />
                    <img src={walk2} alt="" />
                </span>    
            </p>
            <h3 className='text-xl font-semibold'>CREATE YOUR ACCOUNT</h3>
            <form className='grid grid-cols-2 gap-7 mt-8' ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="team_name" className='mb-2 inline-block'>Team's Name</label>
                    <input required type="text" name="team_name" value={team_name} onChange={(e) => handleChange(e)} placeholder='Enter the name of your group' className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm placeholder:text-[#ffffff3f] border border-slate-300 w-full rounded-md outline-none' />
                </div>

                <div>
                    <label htmlFor="phone_number" className='mb-2 inline-block'>Phone</label>
                    <input required type="tel" name="phone_number" value={phone_number} onChange={(e) => handleChange(e)} placeholder='Enter your phone number' className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm placeholder:text-[#ffffff3f] border border-slate-300 w-full rounded-md outline-none' />
                </div>

                <div>
                    <label htmlFor="email" className='mb-2 inline-block'>Email</label>
                    <input required type="email" name="email" value={email} onChange={(e) => handleChange(e)} placeholder='Enter your email address' className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm placeholder:text-[#ffffff3f] border border-slate-300 w-full rounded-md outline-none' />
                </div>

                <div>
                    <label htmlFor="project_topic" className='mb-2 inline-block'>Project Topic</label>
                    <input required type="text" name="project_topic" value={project_topic} onChange={(e) => handleChange(e)} placeholder='What is your group project project_topic' className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm placeholder:text-[#ffffff3f] border border-slate-300 w-full rounded-md outline-none' />
                </div>

                <div>
                    <label htmlFor="category" className='mb-2 inline-block'>Category</label>
                    <select required name="category" placeholder="Select your category" value={category} onChange={(e) => handleChange(e)} className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm placeholder:text-[#ffffff3f] border border-slate-300 w-full rounded-md outline-none'>
                        <option value="" className='text-black' disabled>Select your category</option>
                        {cat.map((item) => (
                            <option key={item.id} value={item.id} className='text-black'>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="group_size" className='mb-2 inline-block'>Group Size</label>
                    <select required name="group_size" value={group_size} onChange={(e) => handleChange(e)} className='py-3 px-6 bg-transparent leading-tight placeholder:text-sm border border-slate-300 w-full rounded-md outline-none'>
                        {[1, 2, 3, 4, 5, 6].map(item => (
                            <option value={item} className='text-black'>{item}</option>
                        ))}
                    </select>
                </div>
                
            </form>
            <em className='text-[#FF26B9] mt-6 text-sm'>Please review your registration details before submitting</em>
            <div className='flex items-center gap-4 mt-4'>
                <input required type="checkbox" value={privacy_poclicy_accepted} onChange={(e) => handleChange(e)} name='privacy_poclicy_accepted' className='inline-block outline-none border-none' />
                <label htmlFor="privacy_poclicy_accepted" className='text-sm'>I agreed with the event terms and conditions and privacy policy</label>
            </div>
            <Button classes='w-full mt-5' handleClick={handleSubmit}>Register now</Button>
        </section>
    )
}

export default RegisterBox