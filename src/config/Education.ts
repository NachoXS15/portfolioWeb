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
        title: 'Lic. Diseño y Producción Multimedial',
        institute: "Universidad Nacional de La Rioja",
        since: "2020 - actualidad",
        grade: "Universitario",
        ongoing: true,
        degree: "https://drive.google.com/file/d/1LpHy8xn9yUdXWqgmpKQqwTq1yPInFQFJ/view?usp=sharing"
    },
    {
        title: 'Introducción a la Ciberseguridad',
        institute: "Educacion IT",
        since: "2025",
        grade: "Curso",
        ongoing: false,
        degree: "https://drive.google.com/file/d/1fs7J5gvivAOo7O1CLAxgpyyIZPL3FNPj/view?usp=sharing"
    },
    {
        title: 'MERN Stack',
        institute: "Polo Tecnológico",
        since: "2023",
        grade: "Curso",
        ongoing: false,
        degree: "https://drive.google.com/file/d/1fs7J5gvivAOo7O1CLAxgpyyIZPL3FNPj/view?usp=sharing"
    },
    {
        title: 'Programación Web con JavaScript',
        institute: "Universidad Tecnológica Nacional",
        since: "2022",
        grade: "Curso",
        ongoing: false,
        degree: "https://drive.google.com/file/d/1SBy1Kweo0J1E_1MSkbf0LYm5H_3etbgB/view?usp=sharing"
    },
    {
        title: 'Diseño Gráfico Digital',
        institute: "Universidad Tecnológica Nacional",
        since: "2022",
        grade: "Curso",
        ongoing: false,
        degree: "https://drive.google.com/file/d/15sVOEqpnHJbVrg3tENhFEGd015hdlf-h/view?usp=sharing"
    },
    {
        title: 'Técnico en Reparación de Computadoras',
        institute: "Universidad Tecnológica Nacional",
        since: "2021",
        grade: "Curso",
        ongoing: false,
        degree: "https://drive.google.com/file/d/1TT34VGgXa59ljrInZM0nVNSdrXJbfQ6S/view?usp=sharing"
    },
    {
        title: 'Formación Secundaria Completa',
        institute: "Colegio San Francisco de Asis - La Rioja",
        since: "Promoción 2019",
        grade: "Secundario",
        ongoing: false
    },
]

export default education