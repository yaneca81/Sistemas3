import { HeartIcon, ShieldCheckIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.svg';

export const AboutPage = () => {
  const features = [
    {
      name: 'Innovación',
      description:
        ' Nos esforzamos por estar a la vanguardia de la tecnología y las tendencias del mercado, buscando siempre nuevas formas de mejorar y ofrecer soluciones innovadoras.',
      icon: SparklesIcon,
    },
    {
      name: 'Compromiso',
      description:
        'Estamos dedicados a brindar un servicio excepcional y a cumplir con nuestros compromisos. La satisfacción del cliente es nuestra principal prioridad.',
      icon: HeartIcon,
    },
    {
      name: 'Colaboración',
      description:
        'Fomentamos un entorno de trabajo colaborativo, donde cada miembro del equipo contribuye con sus habilidades y conocimientos para alcanzar objetivos comunes.',
      icon: UsersIcon,
    },
    {
      name: 'Integridad',
      description:
        'Actuamos con honestidad y transparencia en todas nuestras interacciones. Creemos en hacer lo correcto, incluso cuando no es la opción más fácil.',
      icon: ShieldCheckIcon,
    },
  ]
  return (
    <div className='container mx-auto'>
      <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img alt="" src={Logo} className="mx-auto h-16" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “En Construct7, nuestra misión es transformar la manera en que las empresas abordan sus desafíos. Desde nuestra fundación, hemos estado comprometidos con la innovación, la excelencia y la satisfacción del cliente.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="mx-auto h-10 w-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Ana Pérez</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Directora de Innovación</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Descubre lo que nos impulsa.</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestros Valores Fundamentales
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conoce más sobre los valores y el enfoque que guían nuestro trabajo diario. Estamos aquí para hacer la diferencia y ayudarte a alcanzar tus metas con la máxima eficacia.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
