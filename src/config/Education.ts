type EducationProps = {
    title: string
    institute: string
    since: string
    grade: string
    ongoing: boolean
    degree?: string
}

const education: EducationProps[] = [
    {
        title: 'Diseño y Producción Multimedial',
        institute: "Universidad Nacional de La Rioja",
        since: "2020 - actualidad",
        grade: "Universitario",
        ongoing: true
    },
    {
        title: 'Formación Secundaria Completa',
        institute: "Colegio San Francisco de Asis",
        since: "Promoción 2019",
        grade: "Secundario",
        ongoing: false
    },
    {
        title: 'MERN Stack',
        institute: "Polo Tecnológico",
        since: "2023",
        grade: "Curso",
        ongoing: false,
    },
    {
        title: 'Programación Web con JavaScript',
        institute: "Universidad Tecnológica Nacional",
        since: "2022",
        grade: "Curso",
        ongoing: false
    },
    {
        title: 'Diseño Gráfico Digital',
        institute: "Universidad Tecnológica Nacional",
        since: "2022",
        grade: "Curso",
        ongoing: false
    },
    {
        title: 'Técnico en Reparación de Computadoras',
        institute: "Universidad Tecnológica Nacional",
        since: "2022",
        grade: "Curso",
        ongoing: false
    },
]

export default education