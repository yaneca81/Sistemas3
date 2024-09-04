import { ArrowPathIcon } from '@heroicons/react/16/solid';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useTask } from '../../../../hooks/useTask';
import { useSupply } from '../../../../hooks/useSupply';
import { useEffect } from 'react';
import { Loading } from '../../../../assets/Loading';
import { useConsume } from '../../../../hooks/useConsume';
import { useParams } from 'react-router-dom';

export const ConsumeEditPage = () => {
    const { consumeId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isSaving, isLoading } = useSelector(state => state.globalStates);
    const { updateConsume, getConsumeById } = useConsume();
    const { tasks, getTasks } = useTask();
    const { supplies, getSupplies } = useSupply();

    const getById = async () => {
        const data = await getConsumeById(consumeId);
        reset(data);
    }

    useEffect(() => {
        getById();
        getTasks();
        getSupplies();
    }, [])



    const handleUpdate = (consume) => {
        updateConsume(consumeId, consume);
    };

    const onSubmit = (data) => {
        handleUpdate(data);
    };
    return (
        <div className='container mx-auto p-6'>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Actualizar de Uso</h1>
                <p className="text-sm text-gray-500">Por favor, complete la información requerida</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-200 pb-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Cantidad */}
                            <div className="sm:col-span-3">
                                <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad</label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        id="cantidad"
                                        {...register("cantidad", {
                                            required: "La cantidad es obligatoria",
                                            min: { value: 1, message: "La cantidad debe ser mayor que 0" },
                                            max: { value: 1000, message: "La cantidad no puede exceder de 1000" },
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    />
                                    {errors.cantidad && <p className="text-red-500 text-sm mt-1">{errors.cantidad.message}</p>}
                                </div>
                            </div>

                            {/* Fecha */}
                            <div className="sm:col-span-3">
                                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        id="fecha"
                                        {...register("fecha", {
                                            required: "La fecha es obligatoria",
                                            validate: {
                                                validDate: (value) => {
                                                    const currentDate = new Date().toISOString().split("T")[0];
                                                    return value <= currentDate || "La fecha no puede ser futura";
                                                },
                                            },
                                        })}
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    />
                                    {errors.fecha && <p className="text-red-500 text-sm mt-1">{errors.fecha.message}</p>}
                                </div>
                            </div>

                            {/* Insumo */}
                            <div className="sm:col-span-3">
                                <label htmlFor="idinsumo" className="block text-sm font-medium text-gray-700">Insumo</label>
                                <div className="mt-2">
                                    {
                                        isLoading ?
                                            <div className="flex justify-center">
                                                <Loading />
                                            </div>
                                            :
                                            <>
                                                <select
                                                    id="idinsumo"
                                                    {...register("idinsumo", {
                                                        required: "El insumo es obligatorio",
                                                    })}
                                                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione un insumo</option>
                                                    {
                                                        supplies.map((supply) => (
                                                            <option key={supply.id} value={supply.id}>{supply.nombre}</option>
                                                        ))
                                                    }
                                                </select>
                                                {errors.idinsumo && <p className="text-red-500 text-sm mt-1">{errors.idinsumo.message}</p>}
                                            </>
                                    }
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
                                                    id="idtarea"
                                                    {...register("idtarea", {
                                                        required: "La tarea es obligatoria",
                                                    })}
                                                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione una tarea</option>
                                                    {
                                                        tasks.map((task) => (
                                                            <option key={task.id} value={task.id}>{task.descripcion}</option>
                                                        ))
                                                    }
                                                </select>
                                                {errors.idtarea && <p className="text-red-500 text-sm mt-1">{errors.idtarea.message}</p>}
                                            </>
                                    }
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
                        Actualizar Uso
                    </button>
                </div>
            </form>
        </div>
    )
}
