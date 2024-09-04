import { CalendarDateRangeIcon, CalendarIcon, MapPinIcon, QueueListIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { useProject } from '../../../../hooks/useProject';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../../assets/Loading';
import { useSelector } from 'react-redux';

export const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    const { isLoading } = useSelector(state => state.globalStates);
    const { getProjectById } = useProject();
    const getById = async () => {
        const data = await getProjectById(projectId);
        setProject(data);
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
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Detalles del Proyecto.</h2>
                                    <div className="bg-green-100 rounded-lg p-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <strong className="mr-2">Nombre: </strong>
                                            <span className="font-semibold">{project.nombre}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Fechas</h2>
                                    <div className="space-y-3">
                                        <div className="bg-yellow-100 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <CalendarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold">Fecha de Inicio del Proyecto</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Fecha estimada del proyecto</div>
                                            <div className="text-xs text-gray-500">{project.inicio}</div>
                                        </div>
                                        <div className="bg-yellow-100 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <CalendarDateRangeIcon className="h-5 w-5 text-yellow-500 mr-2" />
                                                <span className="font-semibold">Fecha final del proyecto</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Fecha final del proyecto</div>
                                            <div className="text-xs text-gray-500">{project.fin}</div>
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
                                                    <UserIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Cliente</span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{project.cliente}</div>
                                        </div>
                                        <div className="bg-purple-100 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center">
                                                    <MapPinIcon className="h-5 w-5 text-purple-500 mr-2" />
                                                    <span className="font-semibold">Ubicacion: </span>
                                                </div>
                                            </div>
                                            <div className="text-sm">{project.ubicacion}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500 mb-2">Sobre el Proyecto:</h2>
                                    <div className="bg-blue-100 rounded-lg p-3">
                                        <div className="flex items-center mb-1">
                                            <QueueListIcon className="h-5 w-5 text-blue-500 mr-2" />
                                            <span className="font-semibold">Observaciones: </span>
                                        </div>
                                        <div className="text-sm">{project.observaciones}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
