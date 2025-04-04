const Card = (props) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={ props.imageurl } alt={ props.albumtitle }/>
            <div className="card-body">
                <h5 className="card-title">{ props.albumtitle }</h5>
                <p className="card-text">
                    { props.albumdescription }
                </p>
                <button href="#" className="btn btn-primary">
                    { props.buttontext }
                </button>
            </div>
        </div>
    )
}


export default Card;
