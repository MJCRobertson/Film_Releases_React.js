import React, {Component} from 'react'
import Film from './Film.js'

class FilmList extends Component {

  render() {

    const filmNodes = this.props.films.map(film => {
      return (
        <Film
          name={film.name}
          url={film.url}
          key={film.id}
        >
        </Film>
      )
    })

    return (
      <ul className='FilmList'>
        {filmNodes}
      </ul>
    )
  }
}

export default FilmList;
