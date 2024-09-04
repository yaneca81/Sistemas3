import { useForm } from 'react-hook-form';
export const ContactPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
    };
    return (
        <div className="container mx-auto p-6">
            <div className='container mx-auto max-w-2xl p-4'>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-indigo-600">Formulario de Contacto</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-10">
                        {/* Nombre y Apellido */}
                        <div className="border-b border-gray-200 pb-10">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            autoComplete="off"
                                            placeholder='Ej: Juan'
                                            maxLength={50}
                                            {...register("nombre", {
                                                required: "El nombre es obligatorio",
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
                                <div className="sm:col-span-1">
                                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            autoComplete="off"
                                            placeholder='Ej: Pérez'
                                            maxLength={50}
                                            {...register("apellido", {
                                                required: "El apellido es obligatorio",
                                                maxLength: { value: 50, message: "El apellido no puede tener más de 50 caracteres" },
                                                minLength: { value: 2, message: "El apellido debe tener al menos 2 caracteres" },
                                                pattern: {
                                                    value: /^[a-zA-ZÀ-ÿ\s]+$/,
                                                    message: "El apellido solo puede contener letras (incluidos acentos) y espacios"
                                                },
                                                validate: {
                                                    noLeadingTrailingSpaces: value => !/^\s|\s$/.test(value) || "El apellido no puede comenzar o terminar con espacios",
                                                    noConsecutiveSpaces: value => !/\s{2,}/.test(value) || "El apellido no puede contener espacios consecutivos"
                                                }
                                            })}
                                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        />
                                        {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Compañía */}
                        <div className="border-b border-gray-200 pb-10">
                            <div className="grid grid-cols-1">
                                <div>
                                    <label htmlFor="compania" className="block text-sm font-medium text-gray-700">Compañía</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="compania"
                                            id="compania"
                                            autoComplete="off"
                                            placeholder='Ej: ABC Corp'
                                            maxLength={100}
                                            {...register("compania", {
                                                maxLength: { value: 100, message: "La compañía no puede tener más de 100 caracteres" }
                                            })}
                                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        />
                                        {errors.compania && <p className="text-red-500 text-sm mt-1">{errors.compania.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Correo electrónico */}
                        <div className="border-b border-gray-200 pb-10">
                            <div className="grid grid-cols-1">
                                <div>
                                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="correo"
                                            id="correo"
                                            autoComplete="off"
                                            placeholder='Ej: ejemplo@dominio.com'
                                            {...register("correo", {
                                                required: "El correo electrónico es obligatorio",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "El correo electrónico no es válido"
                                                }
                                            })}
                                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        />
                                        {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Número de teléfono */}
                        <div className="border-b border-gray-200 pb-10">
                            <div className="grid grid-cols-1">
                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="telefono"
                                            id="telefono"
                                            autoComplete="off"
                                            placeholder='Ej: +1234567890'
                                            pattern="[0-9]{10}"
                                            {...register("telefono", {
                                                required: "El número de teléfono es obligatorio",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "El número de teléfono solo puede contener dígitos"
                                                }
                                            })}
                                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        />
                                        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="border-b border-gray-200 pb-10">
                            <div className="grid grid-cols-1">
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                    <div className="mt-2">
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows="4"
                                            placeholder='Escriba su mensaje aquí'
                                            {...register("mensaje", {
                                                required: "El mensaje es obligatorio",
                                                maxLength: { value: 500, message: "El mensaje no puede tener más de 500 caracteres" }
                                            })}
                                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        />
                                        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-4">
                        <button type="submit" className="flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
