import Navbar from "../components/Navbar/Navbar";
import Hero  from "../components/Hero/Hero";
import RegisterImg from "../assets/Sign.jpg"
import Footer from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";

function SignUp() {
    return(
      <>
       <Navbar />
       <Hero 
         cName="heroMid"
         heroImg={RegisterImg}
         title = "Registration"
         btnClass="hide"
       />
       <SignUpForm />
       <Footer />
      </>
    )
}

export default SignUp;