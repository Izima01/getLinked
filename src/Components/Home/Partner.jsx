import assured from '../../assets/assured.png';
import liberty from '../../assets/Liberty.png';
import Winwise from '../../assets/Winwise.png';
import whisper from '../../assets/whisper.png';
import Paybox from '../../assets/Paybox.png';
import Vizual from '../../assets/Vizual.png';

const Partner = () => {
  return (
    <section id="partners" className="px-[7%] mx-auto flex flex-col w-full items-center border-b py-14 border-b-slate-600 relative overflow-x-hidden">
        <h3 className="font-bold text-2xl mb-4">Partners and Sponsors</h3>
        <p className="mb-12 sm:w-8/12 md:w-5/12 text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <section className="w-full border border-[#D434FE]">
            <div className="w-3/4 mx-auto my-16 grid grid-cols-3 items-center gap-10">
                <img className='mx-auto' src={assured} alt="" />
                <img className='mx-auto' src={liberty} alt="" />
                <img className='mx-auto' src={Winwise} alt="" />
                <img className='mx-auto' src={whisper} alt="" />
                <img className='mx-auto' src={Paybox} alt="" />
                <img className='mx-auto' src={Vizual} alt="" />
            </div>
        </section>
    </section>
  )
}

export default Partner