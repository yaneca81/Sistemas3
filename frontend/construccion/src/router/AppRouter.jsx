import { Route, Routes } from "react-router-dom"
import { useEffect, useReducer } from "react";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ConstruccionRoutes } from "../construccion/routes/ConstruccionRoutes"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import { useDispatch, useSelector } from "react-redux";
import { setAlertMessage } from "../store/global/globalSlice";
export const AppRouter = () => {
  const { alertMessage } = useSelector(state => state.globalStates);
  const dispatch = useDispatch();
  useEffect(() => {
    if (alertMessage.length > 0) {
      const isError = alertMessage.toLowerCase().includes('error');
      Swal.fire({
        title: isError ? 'Error' : 'Operación exitosa',
        text: alertMessage,
        icon: isError ? 'error' : 'success',
        confirmButtonText: 'Continuar',
        // iconColor: isError ? '#dc3545' : '#003399'
      }).then(() => {
        dispatch(setAlertMessage(''));
      });
    }
  }, [alertMessage]);

  return (
    <Routes>
      <Route path='/*' element={<ConstruccionRoutes />} />
      <Route path='/auth/*' element={<AuthRoutes />} />
    </Routes>
  )
}
