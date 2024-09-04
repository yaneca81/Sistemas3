
import { ArrowLongRightIcon, CalendarIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Loading } from '../../../../assets/Loading';
import { useSelector } from 'react-redux';
import { useConsume } from '../../../../hooks/useConsume';
import { ArrowTrendingUpIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid';
export const ConsumeDetailPage = () => {
    const { consumeId } = useParams();
    const [consume, setConsume] = useState({});
    const { isLoading } = useSelector(state => state.globalStates);
    const { getConsumeById } = useConsume();
    const getById = async () => {
        const data = await getConsumeById(consumeId);
        setConsume(data);
    }
    useEffect(() => {
        getById();
    }, [])
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
                {
                    isLoading ?
                        <div className='flex justify-center items-center'>
                            <Loading />
                        </div>
                        :
                        <div className="flex flex-col gap-4">
                            <div className="space-y-6 w-full">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Detalles del Uso.</h2>
                                    <div className="bg-green-100 rounded-lg p-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <strong className="mr-2">Descripcion: </strong>
                                            <span className="font-semibold">{consume.descripcion}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Fechas</h2>
                                    <div className="space-y-3">
                                        <div className="bg-yellow-100 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <CalendarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold">Fecha de Asignacion</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Fecha estimada de la Tarea</div>
                                            <div className="text-xs text-gray-500">{consume.fecha}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 w-full">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Información de la Tarea</h2>
                                    <div className="space-y-3">
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <UserIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Descripcion</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{consume.tarea?.descripcion}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">

                                            <NavLink
                                                to={`../detailTask/${consume.tarea?.id}`}
                                                className="text-sm text-blue-600 hover:underline hover:cursor-pointer flex items-center gap-2"
                                            >
                                                mas información <ArrowLongRightIcon className='h-5 w-5' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Información del Insumo</h2>
                                    <div className="space-y-3">
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <WrenchScrewdriverIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Nombre</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{consume.insumo?.nombre}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <ArrowTrendingUpIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Cantidad</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{consume.insumo?.cantidad}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <UserIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Proveedor</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{consume.insumo?.proveedor}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
