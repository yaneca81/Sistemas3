import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.png';

const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Sobre Nosotros', href: '/about', current: false },
    { name: 'Contacto', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const NavbarComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-[data-open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-[data-open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={Logo}
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        to={item.href}
                                        key={item.name}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive
                                                    ? 'bg-indigo-500 text-white' // Estilo para el enlace activo
                                                    : 'text-gray-900 hover:bg-gray-200 hover:text-gray-900', // Estilo para enlaces inactivos
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-white p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={Profile}
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <MenuItem>
                                    <NavLink to='/dashboard' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        Dashboard
                                    </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <button className='w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        Cerrar sesión
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                classNames(
                                    isActive
                                        ? 'bg-indigo-500 text-white'
                                        : 'text-gray-900 hover:bg-gray-200 hover:text-gray-900',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )
                            }
                        > {item.name}</NavLink>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
