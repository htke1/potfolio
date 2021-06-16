import Card from './card'
import './styles.css'
import Memo from './media/memo.jpg'
import Social from './media/social.png'
import Shopify from './media/shopify.jpg'
import Chat from './media/chat.jpg'
function Projects(){
    
    return(
        <div id="project-div">
            
            <center>
  <p className="lead">PROJECT</p>
</center>
        <section id="project">
            <div className="container">
            <div className="row">
                <div className="col-6 col-md-4">
        <Card img={Memo} title="Memo-MERN"/>
        </div>
        
        <div className="col-6 col-md-4">
        <Card img={Social}  title="Social-Mediocre"/>
        </div>
        <div className="col-6 col-md-4">
        <Card img={Shopify}  title="Shopifi-React-App"/>
        </div>
        
        <div className="col-6 col-md-4">
        <Card img={Chat}  title="Chat-App"/>
        </div>
        </div>
        </div>
        </section>
        </div>
    )
}

export default Projects;