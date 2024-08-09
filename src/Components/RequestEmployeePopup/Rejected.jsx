import React from 'react'
import { EmployeeWrap } from './EmployeePopup.styles'
import closeIcon from "../../assets/notification/close.png";
import Button from '../Button';
const Rejected = () => {
  return (
    <EmployeeWrap>
       <div className="reject">
       <img src={closeIcon} alt="close" />
       <h2>Request Rejected</h2>
       <h4>Reason of rejecting request</h4>
       <textarea className='text'/><br/>
       <Button width="128px">Submit</Button>
       </div>
    </EmployeeWrap>
  )
}

export default Rejected