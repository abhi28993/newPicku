import { useState } from 'react';

const OTP = () => {
  const [otp, setOtp] = useState('');

  const verifyOtp = (e) => {
    e.preventDefault();
    // OTP logic here
    alert('OTP verified: ' + otp);
  };

  return (
    <form onSubmit={verifyOtp}>
      <h2>Enter OTP</h2>
      <input maxLength={6} placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
      <button type="submit">Verify</button>
    </form>
  );
};

export default OTP;
