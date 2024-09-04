import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading, setIsLoadingDelete, setIsSaving, setAlertMessage } from '../store/global/globalSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const API_URL = 'https://localhost:7019/api/Uso';

export const useConsume = () => {
    const [consumes, setConsumes] = useState([]);
    const dispatch = useDispatch();

    const getConsumes = useCallback(async () => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/Listar`);
            if (!response.ok) {
                dispatch(setAlertMessage('Error al obtener Usos'));
            } else {
                const data = await response.json();
                setConsumes(data);
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Usos'));
        } finally {
            dispatch(setIsLoading(false));
        }
    }, [dispatch]);

    const saveConsume = async (consume) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/Insertar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(consume),
            });

            if (!response.ok) {
                dispatch(setAlertMessage('Error al registrar el Uso'));
            } else {
                dispatch(setAlertMessage('Uso registrado exitosamente'));
                await getConsumes();
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al registrar el Uso'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    const deleteConsume = async (id) => {
        const response = await Swal.fire({
            title: '¿Desea eliminar el Uso?',
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

                if (!response.ok) {
                    dispatch(setAlertMessage('Error al eliminar el Uso'));
                } else {
                    setConsumes(prevConsumes => prevConsumes.filter(consume => consume.id !== id));
                    dispatch(setAlertMessage('Uso eliminado exitosamente'));
                }
            } catch (error) {
                dispatch(setAlertMessage('Error al eliminar el Uso'));
            } finally {
                dispatch(setIsLoadingDelete(false));
            }
        }
    };

    const getConsumeById = async (id) => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
                dispatch(setAlertMessage('Error al obtener el Uso'));
            } else {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener el Uso'));
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    const updateConsume = async (id, consume) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(consume),
            });

            if (!response.ok) {
                dispatch(setAlertMessage('Error al actualizar el Uso'));
            } else {
                dispatch(setAlertMessage('Uso actualizado exitosamente'));
                await getConsumes();
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al actualizar el Uso'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    return { consumes, getConsumes, saveConsume, deleteConsume, getConsumeById, updateConsume };
};
