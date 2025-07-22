import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.html',
  styleUrls: ['./otp.css']
})
export class OtpComponent {
  otp = ['', '', '', '', '', ''];

  submitOTP() {
    const finalOtp = this.otp.join('');
    if (finalOtp === '123456') {
      alert('OTP Verified!');
    } else {
      alert('Invalid OTP');
    }
  }
}
