const TripCard = (props) => {
  return (
    <div className="trip-card__container">
      <div className="trip-card__container-content">
        <img className="trip-card__img" src={props.imageUrl} alt=""/>
        <section>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {props.location.toUpperCase()}
            <a className="trip-card__link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </p>
          <h1 className=".trip-card__header">{props.title}</h1>
          <h4 className=".trip-card__header .trip-card__dates">{props.startDate} - {props.endDate}</h4>
          <p>{props.description}</p>
        </section>
      </div>
      <hr />
    </div>
  )
}

export default TripCard
