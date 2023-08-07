import './index.css';
import movie1 from './god.jpg';
import movie2 from './incepttion.jpg';
import movie3 from './interstellar.jpg';
import movie4 from './jokerr.jpg';



export function Movie1({ mname, year, rating }) {
    return (
      <div className="card">
        <img src={movie1} alt=""></img>
        <p><b>Movie Name:&nbsp;</b>{mname}</p>
        <p><b>Release Year:&nbsp;</b>{year}</p>
        <p><b>Rating:&nbsp;</b>{rating}</p>
      </div>
    );
  }



export function Movie2({ mname, year, rating }) {
  return (
    <div className="card">
      <img src={movie2} alt=""></img>
      <p><b>Movie Name:&nbsp;</b>{mname}</p>
      <p><b>Release Year:&nbsp;</b>{year}</p>
      <p><b>Rating:&nbsp;</b>{rating}</p>
    </div>
  );
}
export function Movie3({ mname, year, rating }) {
  return (
    <div className="card">
      <img src={movie3} alt=""></img>
      <p><b>Movie Name:&nbsp;</b>{mname}</p>
      <p><b>Release Year:&nbsp;</b>{year}</p>
      <p><b>Rating:&nbsp;</b>{rating}</p>
    </div>
  );
}
export function Movie4({ mname, year, rating }) {
  return (
    <div className="card">
      <img src={movie4} alt=""></img>
      <p><b>Movie Name:&nbsp;</b>{mname}</p>
      <p><b>Release Year:&nbsp;</b>{year}</p>
      <p><b>Rating:&nbsp;</b>{rating}</p>
    </div>
  );
}

