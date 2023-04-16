import React from 'react'

export default function SellerProfile() {
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                    Profile
                </span>

                Name: 
                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input className="input100" type="text" name="username" value="#"  />
                    <span className="focus-input100"></span>
                </div>

                Email: 
                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="password" name="pass" placeholder="Email"/>
                    <span className="focus-input100"></span>
                </div>
                Username:  
                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
                    <input className="input100" type="password" name="pass" placeholder="Username"/>
                    <span className="focus-input100"></span>
                </div>
            
                Change Password
                
                    <button className="login100-form-btn m-b-16 m-t-16">
                        Save and Update
                    </button>
            
            </form>
        </div>
    </div>
</div>
  )
}
