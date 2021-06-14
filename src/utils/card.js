function Card(props){
    return(
        <div class="card" >
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"><span class="badge badge-pill badge-primary">Primary</span>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
}
export default Card;