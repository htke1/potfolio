import './styles.css'
function Contact(){
    return(
        <section id="contact">
            <div id="linkedIn"></div>
            <div id="linkedIn"> <a class="btn btn-dark me-2 contact-btn" target="_blank" href="https://www.linkedin.com/in/tenzin-sherap-2776b3204/" role="button"> <i class="bi bi-linkedin" size="3x"></i> LinkedIn</a></div>
            <div id="gitHub"> <a class="btn btn-dark me-2 contact-btn" target="_blank" href="https://www.github.com/htke1" role="button"> <i class="bi bi-github" > </i>GitHub</a></div>
            <div id="gram"> <a class="btn btn-dark me-2 contact-btn" target="_blank"  href="mailto:sheraptenzin98@gmail.com" role="button"> <i class="bi bi-google"></i> Gmail</a></div>

        </section>
    )
}

export default Contact;