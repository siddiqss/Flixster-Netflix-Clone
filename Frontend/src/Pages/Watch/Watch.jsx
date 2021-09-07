import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Watch.scss';

function Watch() {
    const location = useLocation();
    console.log(location);
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            <video src={movie.video} className="video" autoPlay progress controls />
        </div>
    )
}

export default Watch
