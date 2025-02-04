import {useState} from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    setTimeout(() => {
      
      alert("Login Successful OTP:" + otp);
    }, 1000);
  };

  return (
    <div className='container-sm'>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <div className="d-flex">
            <input className="form-control me-2" type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            maxLength={10}
            />
            <button className="btn btn-outline-success" type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;