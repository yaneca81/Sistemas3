import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading, setIsLoadingDelete, setIsSaving, setAlertMessage } from '../store/global/globalSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

const API_URL = 'https://localhost:7019/api/Avance';

export const useRelease = () => {
    const [releases, setReleases] = useState([]);
    const dispatch = useDispatch();

    const getReleaes = useCallback(async () => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/Listar`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Avances'));
            } else {
                const data = await response.json();
                setReleases(data);
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Avances'));
        } finally {
            dispatch(setIsLoading(false));
        }
    }, [dispatch]);

    const saveRelease = async (release) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/Insertar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(release),
            });

            if (response.ok === false) {
                dispatch(setAlertMessage('Error al registrar Avance'));
            } else {
                dispatch(setAlertMessage('Avance registrado exitosamente'));
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al registrar Avance'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    const deleteRelease = async (id) => {
        const response = await Swal.fire({
            title: '¿Desea eliminar el Avance?',
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
                    dispatch(setAlertMessage('Error al eliminar Avance'));
                } else {
                    setReleases(prevReleases => prevReleases.filter(release => release.id !== id));
                    dispatch(setAlertMessage('Avance eliminado exitosamente'));
                }

            } catch (error) {
                dispatch(setAlertMessage('Error al eliminar Avances'));
            } finally {
                dispatch(setIsLoadingDelete(false));
            }
        }
    };

    const getReleaseById = async (id) => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Avance'));
            } else {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Avance'));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
    const updateRelease = async (id, release) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(release),
            });

            if (response.ok == false) {
                dispatch(setAlertMessage('Error al actualizar Avance'));
            } else {
                dispatch(setAlertMessage('Avance actualizado exitosamente'));
                await getReleaes();
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al actualizar Avance'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    return { releases, getReleaes, saveRelease, deleteRelease, getReleaseById, updateRelease };
};