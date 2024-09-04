import { ArrowLongRightIcon, CalendarDateRangeIcon, CalendarIcon, QueueListIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Loading } from '../../../../assets/Loading';
import { useSelector } from 'react-redux';
import { useTask } from '../../../../hooks/useTask';
import { ChartPieIcon } from '@heroicons/react/16/solid';

export const TaskDetailPage = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    const { isLoading } = useSelector(state => state.globalStates);
    const { getTaskById } = useTask();
    const getById = async () => {
        const data = await getTaskById(taskId);
        setTask(data);
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
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Detalles de la Tarea.</h2>
                                    <div className="bg-green-100 rounded-lg p-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <strong className="mr-2">Descripcion: </strong>
                                            <span className="font-semibold">{task.descripcion}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Fechas</h2>
                                    <div className="space-y-3">
                                        <div className="bg-yellow-100 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <CalendarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold">Fecha de Inicio de la Tarea</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Fecha estimada de la Tarea</div>
                                            <div className="text-xs text-gray-500">{task.inicio}</div>
                                        </div>
                                        <div className="bg-yellow-100 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <CalendarDateRangeIcon className="h-5 w-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold">Fecha final de la Tarea</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Fecha final de la Tarea</div>
                                            <div className="text-xs text-gray-500">{task.fin}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 w-full">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Información del Proyecto</h2>
                                    <div className="space-y-3">
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <ChartPieIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Nombre del Proyecto</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{task.proyecto?.nombre}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <UserIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Cliente del Proyecto: </span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{task.proyecto?.cliente}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">

                                            <NavLink
                                                to={`../detailProject/${task.proyecto?.id}`}
                                                className="text-sm text-blue-600 hover:underline hover:cursor-pointer flex items-center gap-2"
                                            >
                                                mas información <ArrowLongRightIcon className='h-5 w-5' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Sobre la Tarea:</h2>
                                    <div className="bg-blue-100 rounded-lg p-3">
                                        <div className="flex items-center mb-1">
                                            <QueueListIcon className="h-5 w-5 text-blue-500 mr-2" />
                                            <span className="font-semibold">Observaciones: </span>
                                        </div>
                                        <div className="text-sm">{task.observaciones}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
