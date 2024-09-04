import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading, setIsLoadingDelete, setIsSaving, setAlertMessage } from '../store/global/globalSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

const API_URL = 'https://localhost:7019/api/Tarea';

export const useTask = () => {
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();

    const getTasks = useCallback(async () => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/Listar`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Tareas'));
            }else{
                const data = await response.json();
                setTasks(data);
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Tareas'));
        } finally {
            dispatch(setIsLoading(false));
        }
    }, [dispatch]);

    const saveTask = async (task) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/Insertar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (response.ok === false) {
                dispatch(setAlertMessage('Error al registrar Tarea'));
            } else {
                dispatch(setAlertMessage('Tarea registrado exitosamente'));
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al registrar Tarea'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    const deleteTask = async (id) => {
        const response = await Swal.fire({
            title: '¿Desea eliminar la Tarea?',
            showDenyButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: 'No, cancelar',
            icon: 'warning',
        });

        if (response.isConfirmed) {
            dispatch(setIsLoadingDelete(true));
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok === false) {
                    dispatch(setAlertMessage('Error al eliminar Tarea'));
                } else {
                    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
                    dispatch(setAlertMessage('Tarea eliminado exitosamente'));
                }

            } catch (error) {
                dispatch(setAlertMessage('Error al eliminar Tarea'));
            } finally {
                dispatch(setIsLoadingDelete(false));
            }
        }
    };

    const getTaskById = async (id) => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Tarea'));
            }else{
                const data = await response.json();
                return data;
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Tarea'));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
    const updateTask = async (id, task) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (response.ok == false) {
                dispatch(setAlertMessage('Error al actualizar Tarea'));
            }else{
                dispatch(setAlertMessage('Tarea actualizado exitosamente'));
                await getTasks();
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al actualizar Tarea'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    return { tasks, getTasks, saveTask, deleteTask, getTaskById, updateTask };
};