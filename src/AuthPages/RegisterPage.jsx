import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterPage = () => {

    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const clearError = () => {
        setRegisterError('');
        setSuccess('');
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        setRegisterError('');
        setSuccess('');

        if(password.length < 6){
            setRegisterError('Password must be at least 6 characters');
            toast.error('Password must be at least 6 characters');
            return;
        }

        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password must contain at least one capital letter.');
            toast.error('Password must contain at least one capital letter');
            return;
        }

        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setRegisterError('Password must contain at least one special character.');
            toast.error('Password must contain at least one special character');
            return;
        }

        else if(!terms){
            setRegisterError('Please accept the terms and conditions');
            toast.error('Please accept the terms and conditions');
            return;
        }
        const simpleEncrypt = (text, key) => {
            let result = '';
            for (let i = 0; i < text.length; i++) {
              result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
            }
            return result;
          };
        const user_name = name;
        const user_email = email;
        const user_password = simpleEncrypt(password,"getJob");
        const newUser = {user_name, user_email, user_password};
        console.log(newUser);

        

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('User is created successfully');

            updateProfile(result.user, {
                displayName: name, 
                photoURL: "https://img.icons8.com/fluency/48/user-male-circle--v1.png"
            })
            .then( () => fetch('http://localhost:4050/addUser', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    console.log('User is created successfully')
                }
            }))
            .catch()
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <section className="bg-base-300 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-base-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create Your Account
              </h1>
              <form onSubmit={handleRegister} className="space-y-4 md:space-y-6 text-left" action="#">
                    <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input onFocus={clearError} type="text" name="fullName" id="fullName" placeholder="Your Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onFocus={clearError} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div className='relative form-control'>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                      <input onFocus={clearError} type={showPassword?"text":"password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                      <span className="absolute mx-[268px] md:mx-[344px] lg:mx-[348px] my-10 text-2xl" onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
            }
          </span>
                  </div>
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" name='terms' aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-[#00008B] hover:bg-white hover:text-[#662549] hover:border border-[#662549]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> <Link to='/'>Login here</Link></a>
                  </p>
              </form>
              {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
          </div>
      </div>
  </div>
</section>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default RegisterPage;