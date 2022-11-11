import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoDocumentTextSharp } from 'react-icons/io5';

const ResultItems = ({user}) => {
  const { name, email, phone, policyNo } = user;

  return (
    <li>
    {
      <>
          <div className='fullName'>{name}</div>
          <div>
              <span><FaPhoneAlt className='icons' />{phone}</span>
              <span><MdOutlineAlternateEmail className='icons' />{email}</span>
              <span><IoDocumentTextSharp className='icons' />Policy No. {policyNo} | {policyNo}</span>
          </div>
      </>
    }
    </li>
  );
}

export default ResultItems