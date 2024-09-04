import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const DashboardPage = ({ children }) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const principalPages = [
        { name: 'Inicio', href: '/' },
    ]
    const secondaryPages = [
        {
            id: 'project',
            name: 'Proyectos',
            links: [
                { name: 'Registrar Proyecto', href: 'registerProject' },
                { name: 'Lista de Proyectos', href: 'listProjects' }
            ],
        },
        {
            id: 'task',
            name: 'Tareas',
            links: [
                { name: 'Registrar Tarea', href: 'registerTask' },
                { name: 'Lista de Tareas', href: 'listTasks' },
            ],
        },
        {
            id: 'supply',
            name: 'Insumo',
            links: [
                { name: 'Registrar Insumo', href: 'registerSupply' },
                { name: 'Lista de Insumos', href: 'listSupplies' },
            ],
        },
        {
            id: 'release',
            name: 'Avance',
            links: [
                { name: 'Registrar Avance', href: 'registerRelease' },
                { name: 'Lista de Avances', href: 'listReleases' },
            ],
        },
        {
            id: 'comsume',
            name: 'Uso de Recursos',
            links: [
                { name: 'Registrar Uso', href: 'registerConsume' },
                { name: 'Lista Usos', href: 'listConsume' },
            ],
        }
    ]
    return (
        <div className="container mx-auto bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />
                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel transition className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-indigo-600">Menu</h2>
                                <button type="button" onClick={() => setMobileFiltersOpen(false)} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-indigo-600">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-indigo-600" />
                                </button>
                            </div>

                            {/* principal pages */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Principal Pages</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    {principalPages.map((item) => (
                                        <li key={item.name}>
                                            <NavLink to={item.href} className={({ isActive }) => (isActive ? 'block px-2 py-3 text-blue-600' : 'block px-2 py-3 text-gray-800 hover:text-blue-500')} >{item.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>

                                {secondaryPages.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-md px-2 py-3 text-gray-500 hover:text-gray-600">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.links.map((link) => (
                                                    <div key={link.name} className="flex items-center">
                                                        <NavLink to={link.href} className={({ isActive }) => (isActive ? 'ml-3 min-w-0 flex-1 text-blue-600' : 'ml-3 min-w-0 flex-1 text-gray-600 hover:text-blue-500')} >{link.name}</NavLink>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-6 pt-10">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-800">Dashboard</h1>
                        <div className="flex items-center">
                                <button type="button" onClick={() => setMobileFiltersOpen(true)} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span className="sr-only">Links</span>
                                    <Bars3Icon aria-hidden="true" className="h-6 w-6 text-blue-600" />
                                </button>
                            </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Links */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {principalPages.map((item) => (
                                        <li key={item.name}>
                                            <NavLink to={item.href} className={({ isActive }) => (isActive ? 'text-sm text-blue-600' : 'hover:text-blue-500')} >{item.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                                {secondaryPages.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6 hover:text-blue-600">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-md p-3 text-sm ">
                                                <span className="font-medium">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.links.map((item) => (
                                                    <div key={item.name} className="flex items-center">
                                                        <NavLink to={item.href} className={({ isActive }) => `ml-3 text-sm ${(isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500')}`}>{item.name}</NavLink>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                            <div className="lg:col-span-3">
                                {/* Your content */}
                                {children}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
