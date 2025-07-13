import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const sendResetLink = async (e) => {
    e.preventDefault();
    try {
      // Call your API to send OTP or reset link
      alert('Reset link sent to ' + email);
    } catch (err) {
      alert('Error sending reset link');
    }
  };

  return (
    <form onSubmit={sendResetLink}>
      <h2>Forgot Password</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
