import React from "react"
import "./Detail.css"


class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }

    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { year, title, summary, poster } = location.state
            return (
                <div className="movie__detail">
                    <img src={poster} alt={title} title={title}></img>
                    <h3 className="detail__title">{title}</h3>
                    <h5 className="detail__year">{year}</h5>
                    <p className="detail__summary">{summary}</p>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;