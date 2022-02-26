import React from 'react'
import ReactDOM from 'react-dom'

class ShortMovie extends React.Component {
    render() {
        return (
            <div className="shortInfoMovie">

                <div className="image1">
                    <img src={this.props.url} />
                </div>


                <div className="info">
                    <div className="category">
                        {this.props.category}
                    </div>
                    <div className="title">
                        {this.props.title}


                    </div>
                    <div className="summary">
                        {this.props.summary}
                    </div>

                </div>

            </div>
        )

    }
}

export default ShortMovie;