export const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
 export const userIsLoggedIn = () =>{
return true ;
  };

  export  const onValid = () => {
      localStorage.setItem('authToken', 'admin'); // Remplacez 'votre_jeton' par la valeur réelle du jeton.

      // Récupérez le authToken à partir du stockage local.
      const authToken = localStorage.getItem('authToken');
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cinRegex = /^\d{8}$/;
    const phoneRegex = /^\d{8}$/;
    const nameRegex = /^[A-Za-z]+$/;
    export function isEmailValid(email) {
      return emailRegex.test(email);
    }
    
    export function isCinValid(cin) {
      return cinRegex.test(cin);
    }
    
    export function isPhoneValid(phone) {
      return phoneRegex.test(phone);
    }
    
    export function isNameValid(name) {
      return nameRegex.test(name);
    }
    
    