import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = () => {
    return(
          <ul className="pagination">
              <li className="disabled"><Link to="/"><i className="material-icons">chevron_left</i></Link></li>
            <li className="active"><Link to="#!">1</Link></li>
            <li className="waves-effect"><Link to="#!">2</Link></li>
            <li className="waves-effect"><Link to="#!">3</Link></li>
            <li className="waves-effect"><Link to="#!">4</Link></li>
            <li className="waves-effect"><Link to="#!">5</Link></li>
            <li className="waves-effect"><Link to="#!"><i className="material-icons">chevron_right</i></Link></li>
          </ul>
    )
}
export default Pagination

