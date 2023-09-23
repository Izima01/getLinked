import award from '../../assets/9486889 1.png'
import Blur from './Molecules/Blur'
import MedalBox from './Molecules/MedalBox'

const Prizes = () => {
  return (
    <section id="prizes" className="px-[5%] sm:px-[7%] mx-auto flex flex-col md:flex-row gap-12 w-full items-center border-b py-10 border-b-slate-600 relative overflow-x-hidden overflow-y-clip">
        <div className='relative w-1/2'>
            <img src={award} className='md:w-3/4' alt="" />
            <Blur top='-2%' left='-5%' />
        </div>
        <section className='w-full md:w-1/2 flex flex-col items-center justify-center gap-16 relative'>
            <Blur top='10%' right='-5%' />
            <div className='md:w-8/12 text-center md:text-left'>
                <h4 className="text-2xl font-bold">Prizes and</h4>
                <h4 className="text-2xl font-bold text-[#d434fe] mb-4">Rewards</h4>
                <p className=''>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>

            <div className='w-full grid grid-cols-3 gap-3 sm:gap-6 mt-20 md:mt-16 items-center justify-center'>
                <MedalBox type='silver' />
                <MedalBox type='gold' />
                <MedalBox type='bronze' />
            </div>
        </section>
    </section>
  )
}

export default Prizes