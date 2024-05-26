import downArrow from "../assets/download.png";
import upArrow from "../assets/up-arrow.png";

function Changes({employee}) {
  return (
	<div className='name-container'>
		{employee.change >=0 ? <img src={upArrow} className='updown' /> : <img src={downArrow} className='updown' />}
		{Math.abs(employee.change)}
	</div>
  )
}

export default Changes