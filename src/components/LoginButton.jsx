import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
           Please Log in to your account
            <button 
            className="bg-blue-300 my-4 px-2 rounded py-2"
            
            onClick={() => loginWithRedirect()}>CLick to Login</button>
          </h2>
        </div>
      
      </div>
    </div>
  );
};

export default LoginButton;
