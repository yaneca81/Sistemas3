import { useForm } from "react-hook-form";
import { useProject } from "../../../../hooks/useProject";
import { Loading } from "../../../../assets/Loading";
import { useSelector } from "react-redux";
import { useTask } from "../../../../hooks/useTask";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export const TaskRegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, isSaving } = useSelector(state => state.globalStates);
    const { projects, getProjects } = useProject();
    const { saveTask } = useTask();

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    const handleSave = async (project) => {
        await saveTask(project);
    };

    const onSubmit = (data) => {
        handleSave(data);
    };
    return (
        <div className='container mx-auto p-6'>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Registro de Tarea</h1>
                <p className="text-sm text-gray-500">Por favor, complete la información requerida</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-200 pb-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Descripción */}
                            <div className="sm:col-span-3">
                                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="descripcion"
                                        id="descripcion"
                                        placeholder='Ej: Descripción detallada de la tarea'
                                        maxLength={100}
                                        {...register("descripcion", {
                                            required: "La descripción es obligatoria",
                                            maxLength: { value: 100, message: "La descripción no puede tener más de 100 caracteres" },
                                            minLength: { value: 10, message: "La descripción debe tener al menos 10 caracteres" }
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    />
                                    {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion.message}</p>}
                                </div>
                            </div>

                            {/* Fecha de Inicio */}
                            <div className="sm:col-span-3">
                                <label htmlFor="inicio" className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="inicio"
                                        id="inicio"
                                        {...register("inicio", {
                                            required: "La fecha de inicio es obligatoria"
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    />
                                    {errors.inicio && <p className="text-red-500 text-sm mt-1">{errors.inicio.message}</p>}
                                </div>
                            </div>

                            {/* Fecha Estimada de Fin */}
                            <div className="sm:col-span-3">
                                <label htmlFor="fin" className="block text-sm font-medium text-gray-700">Fecha Estimada de Fin</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="fin"
                                        id="fin"
                                        {...register("fin", {
                                            required: "La fecha estimada de fin es obligatoria"
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    />
                                    {errors.fin && <p className="text-red-500 text-sm mt-1">{errors.fin.message}</p>}
                                </div>
                            </div>

                            {/* Estado */}
                            <div className="sm:col-span-3">
                                <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
                                <div className="mt-2">
                                    <select
                                        name="estado"
                                        id="estado"
                                        {...register("estado", {
                                            required: "El estado es obligatorio"
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione el estado</option>
                                        <option value="en curso">En Curso</option>
                                        <option value="terminado">Terminado</option>
                                    </select>
                                    {errors.estado && <p className="text-red-500 text-sm mt-1">{errors.estado.message}</p>}
                                </div>
                            </div>

                            {/* Seleccionar Proyecto */}
                            <div className="sm:col-span-3">
                                <label htmlFor="idproyecto" className="block text-sm font-medium text-gray-700">Proyecto</label>
                                <div className="mt-2">
                                    {
                                        isLoading === true ?
                                            <div className="flex justify-center">
                                                <Loading />
                                            </div>
                                            :
                                            <>
                                                <select
                                                    name="idproyecto"
                                                    id="idproyecto"
                                                    {...register("idproyecto", {
                                                        required: "El proyecto es obligatorio"
                                                    })}
                                                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione un proyecto</option>
                                                    {
                                                        projects.map((project) => (
                                                            <option key={project.id} value={project.id}>{project.nombre}</option>
                                                        ))
                                                    }
                                                </select>
                                                {errors.idproyecto && <p className="text-red-500 text-sm mt-1">{errors.idproyecto.message}</p>}
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
                                        maxLength={200}
                                        {...register("observaciones", {
                                            maxLength: { value: 200, message: "Las observaciones no pueden tener más de 200 caracteres" }
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
                        Registrar Tarea
                    </button>
                </div>
            </form>
        </div>

    )
}
