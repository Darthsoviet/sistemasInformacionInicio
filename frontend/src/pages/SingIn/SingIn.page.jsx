import React,{useState} from 'react'
import { useAuth } from "../../providers/Authentication"
import { useHistory } from "react-router";
import actions from "../../reducer/actions";
import {singService} from "../../services/SingInService";
import {useGlobalStateContext } from "../../providers/State"
import "./SingIn.styles.css";



export function SingInPage() {

   const { login } = useAuth();
   const history = useHistory();
   const { dispatch } = useGlobalStateContext();

   const [formValue, setFormValue] = useState({});

   const onChangeForm = ({ target: { name, value } }) => {
      setFormValue({ ...formValue, [name]: value });
   };
   function authenticate(event) {
      event.preventDefault();
      singService(formValue.username, formValue.password,formValue.nombre)
         .then((user) => {
            login();
            console.log(user);
            dispatch({ type: actions.SET_USER, payload: user });
            history.push("/");
         })
         .catch((e) => console.log(e));
   }

   return (
      <section className="login">
         <h1>Registrese en el sistema</h1>
         <form onSubmit={authenticate} className="login-form">
            <div className="form-group">
               <label htmlFor="nombre">
                  <strong>email </strong>
                  <input
                     onChange={onChangeForm}
                     required
                     type="email"
                     id="username"
                     name="username"
                  />
               </label>
            </div>
            <div className="form-group">
               <label htmlFor="">
                  <strong>nombre </strong>
                  <input
                     onChange={onChangeForm}
                     required
                     type="text"
                     id="nombre"
                     name="nombre"
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
