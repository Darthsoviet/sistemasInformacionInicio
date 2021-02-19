
import actions from "./actions"
const reducer =(state,action)=>{

   switch(action.type){

      case actions.SET_USER:
         return {...state,user:action.payload}
      
      case actions.SET_PRODUCTOS:
         return {...state,productos:action.payload}
      case actions.ADD_CARRITO:
         return {
            ...state,
            carrito:[...state.carrito,action.payload]
         }
      case actions.TOGGLE_CARRITO:
         return {
            ...state,
            carrito:
            state.carrito.some(item=>item.producto._id===action.payload.producto._id)
            ?state.carrito.filter(item=>item.producto._id!==action.payload.producto._id)
            :[...state.carrito,action.payload]
         }
      case actions.SET_CARRITO:
         return{
            ...state,
            carrito:action.payload
         }
      case actions.UPDATE_CARRITO:
         return{
            ...state,
            carrito:
            state.carrito.some(item=>item.producto._id===action.payload.producto._id)
            ?[...state.carrito.filter(item=>item.producto._id!==action.payload.producto._id),action.payload]
            :state.carrito
         }
      case actions.SET_PEDIDOS:
         return {...state,pedidos:action.payload}
      

      default: return {...state}


   }

   



}
export default reducer