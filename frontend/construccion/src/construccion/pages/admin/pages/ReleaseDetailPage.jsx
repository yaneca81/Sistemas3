import { ArrowLongRightIcon, BriefcaseIcon, CalendarIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Loading } from '../../../../assets/Loading';
import { useSelector } from 'react-redux';
import { useRelease } from '../../../../hooks/useRelease';
import { DocumentTextIcon } from '@heroicons/react/16/solid';

export const ReleaseDetailPage = () => {
  const { releaseId } = useParams();
  const [release, setRelease] = useState({});
  const { isLoading } = useSelector(state => state.globalStates);
  const { getReleaseById } = useRelease();
  const getById = async () => {
    const data = await getReleaseById(releaseId);
    setRelease(data);
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
                  <h2 className="text-sm font-semibold text-gray-500 mb-2">Detalles de la Avance.</h2>
                  <div className="bg-green-100 rounded-lg p-3 flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <strong className="mr-2">Porcentaje: </strong>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-in-out" style={{ width: `${release.porcentaje}%` }}>
                        <div className="text-xs font-medium text-white text-center p-0.5 leading-none" style={{ width: `${release.porcentaje}%` }}>
                          {release.porcentaje}%
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-500 mb-2">Fechas</h2>
                  <div className="space-y-3">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <CalendarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="font-semibold">Fecha de actualizacion</span>
                      </div>
                      <div className="text-xs text-gray-500">Ultima Actualizacion</div>
                      <div className="text-xs text-gray-500">{release.fecha}</div>
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
                          <DocumentTextIcon className="h-5 w-5 text-purple-500 mr-2" />
                          <span className="font-semibold">Descripcion de la Tarea</span>
                        </div>
                      </div>
                      <div className="text-sm">{release.tarea?.descripcion}</div>
                    </div>

                    <div className="bg-purple-100 rounded-lg p-3">

                      <NavLink
                        to={`../detailTask/${release.tarea?.id}`}
                        className="text-sm text-blue-600 hover:underline hover:cursor-pointer flex items-center gap-2"
                      >
                        mas información <ArrowLongRightIcon className='h-5 w-5' />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-500 mb-2">Sobre el Avance:</h2>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <BriefcaseIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="font-semibold">Observaciones: </span>
                    </div>
                    <div className="text-sm">{release.observaciones}</div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
