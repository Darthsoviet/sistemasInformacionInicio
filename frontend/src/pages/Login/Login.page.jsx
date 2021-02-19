import React,{useState} from 'react'
import { useAuth } from "../../providers/Authentication"
import { useHistory } from "react-router";
import actions from "../../reducer/actions";
import {loginService} from "../../services/LoginService";
import {useGlobalStateContext } from "../../providers/State"
import "./Login.styles.css";



export function LoginPage() {

   const { login } = useAuth();
   const history = useHistory();
   const { dispatch } = useGlobalStateContext();

   const [formValue, setFormValue] = useState({});

   const onChangeForm = ({ target: { name, value } }) => {
      setFormValue({ ...formValue, [name]: value });
   };
   function authenticate(event) {
      event.preventDefault();
      loginService(formValue.username, formValue.password)
         .then((user) => {
            login();
            dispatch({ type: actions.SET_USER, payload: user });
            history.push("/");
         })
         .catch((e) => console.log(e));
   }

   return (
      <section className="login">
         <h1>Welcome back!</h1>
         <form onSubmit={authenticate} className="login-form">
            <div className="form-group">
               <label htmlFor="username">
                  <strong>username </strong>
                  <input
                     onChange={onChangeForm}
                     required
                     type="text"
                     id="username"
                     name="username"
                  />
               </label>
            </div>
            <div className="form-group">
               <label htmlFor="password">
                  <strong>password </strong>
                  <input
                     onChange={onChangeForm}
                     required
                     type="password"
                     id="password"
                     name="password"
                  />
               </label>
            </div>
            <button type="submit">login</button>
         </form>
      </section>
   )
}
