const TripCard = (props) => {
  return (
    <div className="trip-card__container">
      <img src={props.imageUrl} alt=""/>
      <section className="trip-card__info">
        <p>{props.location} <a href={props.googleMapsUrl}></a></p>
        <h1>{props.title}</h1>
        <h4>{props.startDate} - {props.endDate}</h4>
        <p>{props.description}</p>
      </section>
    </div>
  )
}

export default TripCard
