import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading, setIsLoadingDelete, setIsSaving, setAlertMessage } from '../store/global/globalSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

const API_URL = 'https://localhost:7019/api/Insumo';

export const useSupply = () => {
    const [supplies, setSupplies] = useState([]);
    const dispatch = useDispatch();

    const getSupplies = useCallback(async () => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/Listar`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Insumos'));
            } else {
                const data = await response.json();
                setSupplies(data);
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Insumos'));
        } finally {
            dispatch(setIsLoading(false));
        }
    }, [dispatch]);

    const saveSupply = async (supply) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/Insertar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(supply),
            });

            if (response.ok === false) {
                dispatch(setAlertMessage('Error al registrar Insumo'));
            } else {
                dispatch(setAlertMessage('Insumo registrado exitosamente'));
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al registrar Insumo'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    const deleteSuplly = async (id) => {
        const response = await Swal.fire({
            title: '¿Desea eliminar el Insumo?',
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
                    dispatch(setAlertMessage('Error al eliminar Insumo'));
                } else {
                    setSupplies(prevSupplies => prevSupplies.filter(supply => supply.id !== id));
                    dispatch(setAlertMessage('Insumo eliminado exitosamente'));
                }

            } catch (error) {
                dispatch(setAlertMessage('Error al eliminar Insumo'));
            } finally {
                dispatch(setIsLoadingDelete(false));
            }
        }
    };

    const getSupplyById = async (id) => {
        dispatch(setIsLoading(true));
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (response.ok == false) {
                dispatch(setAlertMessage('Error al obtener Insumo'));
            } else {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            dispatch(setAlertMessage('Error al obtener Insumo'));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
    const updateSupply = async (id, supply) => {
        dispatch(setIsSaving(true));
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(supply),
            });

            if (response.ok == false) {
                dispatch(setAlertMessage('Error al actualizar Insumo'));
            } else {
                dispatch(setAlertMessage('Insumo actualizado exitosamente'));
                await getSupplies();
            }

        } catch (error) {
            dispatch(setAlertMessage('Error al actualizar Insumo'));
        } finally {
            dispatch(setIsSaving(false));
        }
    };

    return { supplies, getSupplies, saveSupply, deleteSuplly, getSupplyById, updateSupply };
};