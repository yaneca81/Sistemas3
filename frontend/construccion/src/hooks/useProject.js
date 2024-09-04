import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading, setIsLoadingDelete, setIsSaving, setAlertMessage } from '../store/global/globalSlice';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const API_URL = 'https://localhost:7019/api/Proyecto';

export const useProject = () => {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  const getProjects = useCallback(async () => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetch(`${API_URL}/Listar`);
      if (!response.ok) {
        dispatch(setAlertMessage('Error al obtener proyectos'));
      } else {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      dispatch(setAlertMessage('Error al obtener proyectos'));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  const saveProject = async (project) => {
    dispatch(setIsSaving(true));
    try {
      const response = await fetch(`${API_URL}/Insertar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        dispatch(setAlertMessage('Error al registrar el proyecto'));
      } else {
        dispatch(setAlertMessage('Proyecto registrado exitosamente'));
        await getProjects();
      }
    } catch (error) {
      dispatch(setAlertMessage('Error al registrar el proyecto'));
    } finally {
      dispatch(setIsSaving(false));
    }
  };

  const deleteProject = async (id) => {
    const response = await Swal.fire({
      title: '¿Desea eliminar el proyecto?',
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
          dispatch(setAlertMessage('Error al eliminar el proyecto'));
        } else {
          setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
          dispatch(setAlertMessage('Proyecto eliminado exitosamente'));
        }
      } catch (error) {
        dispatch(setAlertMessage('Error al eliminar el proyecto'));
      } finally {
        dispatch(setIsLoadingDelete(false));
      }
    }
  };

  const getProjectById = async (id) => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        dispatch(setAlertMessage('Error al obtener el proyecto'));
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      dispatch(setAlertMessage('Error al obtener el proyecto'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const updateProject = async (id, project) => {
    dispatch(setIsSaving(true));
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        dispatch(setAlertMessage('Error al actualizar el proyecto'));
      } else {
        dispatch(setAlertMessage('Proyecto actualizado exitosamente'));
        await getProjects();
      }
    } catch (error) {
      dispatch(setAlertMessage('Error al actualizar el proyecto'));
    } finally {
      dispatch(setIsSaving(false));
    }
  };

  return { projects, getProjects, saveProject, deleteProject, getProjectById, updateProject };
};
