import { useForm } from 'react-hook-form';
import { useRelease } from '../../../../hooks/useRelease';
import { useTask } from '../../../../hooks/useTask';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loading } from '../../../../assets/Loading';
import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';

export const ReleaseEditPage = () => {
  const { releaseId } = useParams();
  const { isLoading, isSaving } = useSelector(state => state.globalStates);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { getReleaseById, updateRelease } = useRelease();
  const { tasks, getTasks } = useTask();

  const getById = async () => {
    const data = await getReleaseById(releaseId);
    reset(data);
  }

  useEffect(() => {
    getById();
    getTasks();
  }, []);

  const handleSave = async (release) => {
    await updateRelease(releaseId, release);
  };

  const onSubmit = (data) => {
    handleSave(data);
  };
  return (
    <div className='container mx-auto p-6'>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Actualizar de Avance</h1>
        <p className="text-sm text-gray-500">Por favor, complete la información requerida</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-10">
          <div className="border-b border-gray-200 pb-10">
            {/* Porcentaje */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="porcentaje" className="block text-sm font-medium text-gray-700">Porcentaje</label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="porcentaje"
                    id="porcentaje"
                    placeholder='Ej: 75'
                    min={0}
                    max={100}
                    {...register("porcentaje", {
                      required: "El porcentaje es obligatorio",
                      min: { value: 0, message: "El porcentaje debe ser al menos 0" },
                      max: { value: 100, message: "El porcentaje no puede ser mayor a 100" },
                    })}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.porcentaje && <p className="text-red-500 text-sm mt-1">{errors.porcentaje.message}</p>}
                </div>
              </div>

              {/* Fecha de Actualización */}
              <div className="sm:col-span-3">
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha de Actualización</label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    {...register("fecha", {
                      required: "La fecha de actualización es obligatoria"
                    })}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.fecha && <p className="text-red-500 text-sm mt-1">{errors.fecha.message}</p>}
                </div>
              </div>

              {/* Tarea */}
              <div className="sm:col-span-3">
                <label htmlFor="idtarea" className="block text-sm font-medium text-gray-700">Tarea</label>
                <div className="mt-2">
                  {
                    isLoading ?
                      <div className="flex justify-center">
                        <Loading />
                      </div>
                      :
                      <>
                        <select
                          name="idtarea"
                          id="idtarea"
                          {...register("idtarea", {
                            required: "La tarea es obligatoria"
                          })}
                          className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                        >
                          <option value="">Seleccione una tarea</option>
                          {
                            tasks.map((task) => (
                              <option key={task.id} value={task.id}>{task.descripcion}</option>
                            ))
                          }
                          {/* Agrega más opciones según sea necesario */}
                        </select>
                        {errors.idtarea && <p className="text-red-500 text-sm mt-1">{errors.idtarea.message}</p>}
                      </>
                  }
                </div>
              </div>

              {/* Observaciones */}
              <div className="sm:col-span-6">
                <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">Observaciones</label>
                <div className="mt-2">
                  <textarea
                    name="observaciones"
                    id="observaciones"
                    rows="4"
                    placeholder="Escriba aquí las observaciones"
                    maxLength={200}
                    {...register("observaciones", {
                      maxLength: { value: 200, message: "Las observaciones no pueden tener más de 200 caracteres" },
                    })}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.observaciones && <p className="text-red-500 text-sm mt-1">{errors.observaciones.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4">
          <button type="submit" className="flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            {
              isSaving && <ArrowPathIcon className="h-5 w-5 animate-spin" />
            }
            Actualizar Avance
          </button>
        </div>
      </form>
    </div>
  )
}
