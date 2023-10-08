import React from "react";
import Header from './components/header'
import Footer from "./components/footer"
import Projects from "./components/projects"


function ProjectsPage () { 

    return ( 

        <>
        <div>
            <div>
                <Header></Header>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        </div>

        </>
    )
}

export default ProjectsPage