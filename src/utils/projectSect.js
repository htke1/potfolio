import Card from './card'
import './styles.css'
import Memo from './memo.jpg'
import Social from './social.png'
function Projects(){
    return(
        <div id="project-div">
            <center><h2 id="project-heading"><span className="badge badge-warning">PROJECT</span></h2></center>
        <section id="project">
            <div className="container">
            <div className="row">
                <div className="col-6 col-md-4">
        <Card img={Memo} title="Memo-MERN"/>
        </div>
        
        <div className="col-6 col-md-4">
        <Card img={Social}  title="SocialMediocre"/>
        </div>
        <div className="col-6 col-md-4">
        <Card img={Memo}  title="Memo-MERN"/>
        </div>
        
        <div className="col-6 col-md-4">
        <Card img={Social}  title="socialMediocre"/>
        </div>
        </div>
        </div>
        </section>
        </div>
    )
}

export default Projects;