import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useProject } from "../../../../hooks/useProject";
export const ProjectRegisterPage = () => {
  const { saveProject } = useProject();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isSaving } = useSelector(state => state.globalStates);

  const handleSave = async (project) => {
    await saveProject(project);
  };

  const onSubmit = (data) => {
    handleSave(data);
  };
  return (
    <div className='container mx-auto p-6'>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Registro de Proyecto</h1>
        <p className="text-sm text-gray-500">Por favor, complete la información requerida</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-10">
          <div className="border-b border-gray-200 pb-10">
            {/* Nombre del Proyecto */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del Proyecto</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    autoComplete="off"
                    placeholder='Ej: Construcción de Edificio'
                    maxLength={50}
                    {...register("nombre", {
                      required: "El nombre del proyecto es obligatorio",
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

              {/* Nombre del Cliente */}
              <div className="sm:col-span-3">
                <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Nombre del Cliente</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cliente"
                    id="cliente"
                    autoComplete="off"
                    placeholder='Ej: Juan Pérez'
                    maxLength={50}
                    {...register("cliente", {
                      required: "El nombre del cliente es obligatorio",
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
                  {errors.cliente && <p className="text-red-500 text-sm mt-1">{errors.cliente.message}</p>}
                </div>
              </div>

              {/* Ubicación */}
              <div className="sm:col-span-3">
                <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">Ubicación</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ubicacion"
                    id="ubicacion"
                    autoComplete="off"
                    placeholder='Ej: La Paz, Bolivia'
                    maxLength={100}
                    {...register("ubicacion", {
                      required: "La ubicación es obligatoria",
                      maxLength: { value: 100, message: "La ubicación no puede tener más de 100 caracteres" },
                      minLength: { value: 5, message: "La ubicación debe tener al menos 5 caracteres" }
                    })}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.ubicacion && <p className="text-red-500 text-sm mt-1">{errors.ubicacion.message}</p>}
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
                <label htmlFor="estado" className="block text-sm font-medium text-gray-700">estado</label>
                <div className="mt-2">
                  <select
                    name="estado"
                    id="estado"
                    {...register("estado", {
                      required: "El estado del proyecto es obligatorio"
                    })}
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Seleccione un estado</option>
                    <option value="en scurso">En curso</option>
                    <option value="terminado">Terminado</option>
                    <option value="detenido">Detenido</option>
                  </select>
                  {errors.estado && <p className="text-red-500 text-sm mt-1">{errors.estado.message}</p>}
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
                    maxLength={500}
                    placeholder="Escriba cualquier observación relevante"
                    {...register("observaciones", {
                      maxLength: { value: 500, message: "Las observaciones no pueden tener más de 500 caracteres" }
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
            Registrar Proyecto
          </button>
        </div>
      </form>
    </div>
  )
}
