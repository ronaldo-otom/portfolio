import React from 'react'
import SkillsComponent from './components/skills/skillsComponent'
import NavbarLayout from './components/layout/NavbarLayout'
import TitleComponent from './components/title/titleComponent'
import ProjectsComponent from './components/projects/projectsComponent'
import ContactComponent from './components/contacts/contactComponent'
import FooterLayout from './components/layout/footerLayout'

export function Index(props) {
    return (
        <>
            <NavbarLayout />
            <section id="home">
                <TitleComponent />
            </section>
            <section id="skills">
                <SkillsComponent />
            </section>
            <section id="projects">
                <ProjectsComponent />
            </section>
            <section id="contacts">
                <ContactComponent />
            </section>
            <FooterLayout />
        </>
    )
}
