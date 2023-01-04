import "./SignUpFormStyles.css"

function SignUpForm() {
    return (
        <div className="form-container">
           <h1>Register with us to get more services!</h1>
           
           <form>
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
              <input type="email" placeholder="E-mail"/>
              <input type="text" placeholder="Contact Number"/>
              <input type="password" placeholder="Password"/>
              <input type="password" placeholder=" Re-enter Password"/>
              <button>Sign Up</button>
           </form>

        </div>
    )
}

export default SignUpForm;