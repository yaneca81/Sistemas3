import { ArrowPathIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useSupply } from '../../../../hooks/useSupply';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../../assets/Loading';

export const SupplyEditPage = () => {
    const { supplyId } = useParams();
    const { getSupplyById, updateSupply } = useSupply();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isSaving, isLoading } = useSelector(state => state.globalStates);

    const getById = async () => {
        const data = await getSupplyById(supplyId);
        reset(data);
    }
    useEffect(() => {
        getById();
    }, [])

    const handleUpdate = (task) => {
        updateSupply(supplyId, task);
    };

    const onSubmit = (data) => {
        handleUpdate(data);
    };
    return (
        <div className='container mx-auto p-6'>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Actualizar Insumo</h1>
                <p className="text-sm text-gray-500">Por favor, complete la información requerida</p>
            </div>
            {
                isLoading ?
                    <div className="flex justify-center">
                        <Loading />
                    </div>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-10">
                            <div className="border-b border-gray-200 pb-10">
                                {/* Nombre del Insumo */}
                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del Insumo</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="nombre"
                                                id="nombre"
                                                placeholder='Ej: Tornillos'
                                                maxLength={50}
                                                {...register("nombre", {
                                                    required: "El nombre del insumo es obligatorio",
                                                    maxLength: { value: 50, message: "El nombre no puede tener más de 50 caracteres" },
                                                    minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" },
                                                    pattern: {
                                                        value: /^[a-zA-ZÀ-ÿ\s]+$/,
                                                        message: "El nombre solo puede contener letras (incluidos acentos) y espacios"
                                                    },
                                                    validate: {
                                                        noLeadingTrailingSpaces: value => !/^\s|\s$/.test(value) || "El nombre no puede comenzar o terminar con espacios",
                                                        noConsecutiveSpaces: value => !/\s{2,}/.test(value) || "El nombre no puede contener espacios consecutivos"
                                                    }
                                                })}
                                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                            />
                                            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                                        </div>
                                    </div>

                                    {/* Cantidad */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad</label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="cantidad"
                                                id="cantidad"
                                                placeholder='Ej: 100'
                                                min={1}
                                                {...register("cantidad", {
                                                    required: "La cantidad es obligatoria",
                                                    min: { value: 1, message: "La cantidad debe ser al menos 1" },
                                                })}
                                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                            />
                                            {errors.cantidad && <p className="text-red-500 text-sm mt-1">{errors.cantidad.message}</p>}
                                        </div>
                                    </div>

                                    {/* Unidad de Medida */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="unidad" className="block text-sm font-medium text-gray-700">Unidad de Medida</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="unidad"
                                                id="unidad"
                                                placeholder='Ej: Kilogramos, Litros'
                                                maxLength={20}
                                                {...register("unidad", {
                                                    required: "La unidad de medida es obligatoria",
                                                    maxLength: { value: 20, message: "La unidad de medida no puede tener más de 20 caracteres" },
                                                })}
                                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                            />
                                            {errors.unidad && <p className="text-red-500 text-sm mt-1">{errors.unidad.message}</p>}
                                        </div>
                                    </div>

                                    {/* Proveedor */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700">Proveedor</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="proveedor"
                                                id="proveedor"
                                                placeholder='Ej: Ferretería XYZ'
                                                maxLength={50}
                                                {...register("proveedor", {
                                                    required: "El proveedor es obligatorio",
                                                    maxLength: { value: 50, message: "El nombre del proveedor no puede tener más de 50 caracteres" },
                                                })}
                                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                            />
                                            {errors.proveedor && <p className="text-red-500 text-sm mt-1">{errors.proveedor.message}</p>}
                                        </div>
                                    </div>

                                    {/* Fecha de Compra */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha de Compra</label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                name="fecha"
                                                id="fecha"
                                                {...register("fecha", {
                                                    required: "La fecha de compra es obligatoria"
                                                })}
                                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                            />
                                            {errors.fecha && <p className="text-red-500 text-sm mt-1">{errors.fecha.message}</p>}
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
                                Actualizar Insumo
                            </button>
                        </div>
                    </form>
            }
        </div>
    )
}
