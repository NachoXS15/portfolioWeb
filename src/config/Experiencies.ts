
type ExperienceProps = { 
    cliente: string
    rol?: string
    since: string
    actual: boolean
    desc: string,
    web?: string
    time?: string
}

const experiences: ExperienceProps[]  = [
    {
        "cliente": "Desarrollador Freelance",
        "since": "2021 - 2025",
        "actual": true,
        "desc": "Planificación, diseño y desarrollo de páginas y aplicaciones web, en base a los requerimientos de diversos clientes, sean particulares, o pequeñas o medianas empresas."
    },
    {
        "cliente": "Organización y Desarrollo",
        "rol": "Diseñador Multimedial y Desarrollador Web",
        "since": "2024-2025",
        "actual": true,
        "desc": "Mis actividades consiste en desarrollar propuestas estéticas para diversas marcas y empresas, otorgando originalidad a la vez que calidad en todas mis tareas. A su vez, he desarrollado una landing page con el objetivo de mostrar y difundir sus objetivos y proyectos.",
        "web": "https://www.instagram.com/organizacionydesarrollo/",
        "time": "Part-Time"
    },
    {
        "cliente": "TravelGit",
        "rol": "Diseñador Multimedial y Desarrollador Web",
        "since": "2024-2025",
        "actual": true,
        "desc": "Creación de contenido audiovisual para redes sociales. Creación, desarrollo y mantenimiento de su página web, actualmente activa y abierta al público.",
        "web": "https://www.instagram.com/travelgitoficial/",
        "time": "Part-Time"
    },
    {
        "cliente": "LeCoffee",
        "rol": "Diseñador Multimedial",
        "since": "2024-2025",
        "actual": true,
        "desc": "Creación de contenido audiovisual para redes sociales.",
        "web": "https://www.instagram.com/lecoffee.lr/",
        "time": "Part-Time"
    },
    {
        "cliente": "Lartech Ingenieria",
        "rol": "Diseñador Multimedial",
        "since": "2024-2025",
        "actual": true,
        "desc": "Creación de contenido audiovisual para redes sociales.",
        "web": "https://www.instagram.com/lartech_ingenieria/",
        "time": "Part-Time"
    },
    {
        "cliente": "XS-TCH",
        "rol": "Técnico en Reparación de Computadoras",
        "since": "2022 - 2025",
        "actual": true,
        "desc": "Revisión, Diagnóstico, Limpieza, Reparación y Mantenimiento en equipos informáticos.",
        "web": "https://instagram.com/xs.tch_",
        "time": "Part-Time"
    },
    {
        "cliente": "UNLAR",
        "rol": "Ayudante de Cátedra",
        "since": "2022 - 2025",
        "actual": true,
        "desc": "Mi rol es poder asistir al docente en tareas como otorgar tutorías y estar en constante contacto con los alumnos, manejo de recurso humano dentro del equipo de catedra, mantiendo una afinidad con los estudiantes y realizar un constante seguimiento de los proyectos de estos. En estas cátedras abarcamos HTML, CSS, JavaScript, PHP y MySQL.",
        "time": "Part-Time"
    },
]

export default experiences