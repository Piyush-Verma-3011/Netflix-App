const Card =(props)=>{
    return(
    <>
    <div className='cards'>
    <div className='card'>
      <img src={props.imgsrc} alt="myPic" className="card__img"/>
      <div className='card__info'>
        <span className='card__category'>{props.title}
          <h3 className='card__title'>
                {props.sname}
          </h3>
          <a href={props.link}>
            <button>
              Watch Now
            </button>
          </a>
        </span>
      </div>
    </div>
  </div>
  </>);
  }
  export default Card;



