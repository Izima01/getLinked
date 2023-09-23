import pic from '../../../assets/blur.svg';

// eslint-disable-next-line react/prop-types
const Blur = ({ top="unset", left="unset", width=560, z=-2, right='unset', bottom='unset' }) => {
  return (
    <img src={pic} className='absolute' style={{ top, left, right, bottom, zIndex: z }} width={width} />
  )
}

export default Blur