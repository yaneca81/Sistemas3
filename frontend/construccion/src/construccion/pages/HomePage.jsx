import { ListBulletIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Image from '../../assets/construction.svg';
import { NavLink } from 'react-router-dom';

const links = [
    { name: 'Oportunidades de Trabajo"', href: '#' },
    { name: 'Programa de Prácticas', href: '#' },
    { name: 'Nuestros Valores', href: '#' },
    { name: 'Nuestro Equipo', href: '#' },
]
const stats = [
    { name: 'Oficinas en el mundo', value: '50+' },
    { name: 'Empleados apasionados y dedicados', value: '300+' },
    { name: 'Clientes satisfechos y casos de éxito', value: '20+' },
    { name: 'Proyectos exitosos', value: '50+' },
]

export const HomePage = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="flex items-center justify-center p-4">
                    <div className="max-w-7xl w-full bg-white overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            {/* Left column - Text content */}
                            <div className="md:w-1/2 p-8">
                                <h1 className="text-4xl font-bold mb-4">
                                    Bienvenido a Construct7
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    En Construct7, nuestro compromiso es entregar resultados rápidos y de alta calidad en cada proyecto. Nos especializamos en transformar ideas en realidades tangibles con la mayor eficiencia posible. Con una vasta experiencia en la industria de la construcción, nuestro equipo se dedica a superar las expectativas y cumplir con los plazos más exigentes. Desde proyectos residenciales hasta comerciales, aplicamos innovación y precisión para garantizar que cada tarea se complete a tiempo y con la máxima excelencia.
                                </p>
                                <div className="flex space-x-4">
                                    <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition duration-300">
                                        Nuestros Servicios
                                    </button>
                                    <NavLink to="/Contact" className=" text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                                        Contacta con Nosotros
                                    </NavLink>
                                </div>
                            </div>
                            {/* Right column - Illustration */}
                            <div className="md:w-1/2 p-8 ">
                                <img src={Image} alt="Construction" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative isolate overflow-hidden bg-white py-10 sm:py-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">Únete a Nuestro Equipo</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                En Construct7, estamos siempre en búsqueda de talento apasionado y dedicado. Ofrecemos una variedad de oportunidades de carrera para quienes desean crecer profesionalmente y contribuir a proyectos innovadores. Ya sea que estés buscando un rol a tiempo completo o una experiencia enriquecedora a través de nuestro programa de prácticas, tenemos algo para ti. Explora nuestras oportunidades y da el siguiente paso en tu carrera con nosotros.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                                {links.map((link) => (
                                    <a key={link.name} href={link.href} className='hover:text-indigo-600'>
                                        {link.name} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                ))}
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.name} className="flex flex-col-reverse">
                                        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                        <dd className="text-2xl font-bold leading-9 tracking-tight text-indigo-600">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg font-semibold leading-8 text-indigo-600">
                            Nuestros Socios y Clientes
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                alt="Transistor"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Reform"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Tuple"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="SavvyCal"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            />
                            <img
                                alt="Statamic"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            <div className="max-w-xl lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Suscríbete a Nuestro Boletín</h2>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    Mantente al día con nuestras últimas noticias y actualizaciones. Recibe información exclusiva, ofertas especiales y mucho más directamente en tu bandeja de entrada. ¡No te lo pierdas!
                                </p>
                                <div className="mt-6 flex max-w-md gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Introduce tu correo electrónico"
                                        autoComplete="email"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Suscribirse
                                    </button>
                                </div>
                            </div>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-indigo-100 p-2 ring-1 ring-indigo-300">
                                        <ListBulletIcon aria-hidden="true" className="h-6 w-6 text-gray-900" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-indigo-600">Servicios</dt>
                                    <dd className="mt-2 leading-7 text-gray-600">
                                        Descubre la gama completa de servicios que ofrecemos para ayudarte a alcanzar tus objetivos.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-indigo-100 p-2 ring-1 ring-indigo-300">
                                        <QuestionMarkCircleIcon aria-hidden="true" className="h-6 w-6 text-gray-900" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-indigo-600">Soporte</dt>
                                    <dd className="mt-2 leading-7 text-gray-600">
                                        Nuestro equipo de soporte está disponible para asistirte en cualquier momento.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
