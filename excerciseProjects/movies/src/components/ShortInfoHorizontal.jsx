import React from 'react'
import ReactDOM from 'react-dom'

class ShortInfoHorizontal extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="title">
                    Latest Originals.
                </div>
                <div className="horizontal">
                    <div className="btn1">
                        <span class="material-icons">
                            arrow_back_ios
                </span>
                    </div>
                    <div className="shortinfo">
                        <div class="movieImg">
                            <img className="img1" src="https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/1318x742.webp" />
                        </div>

                        <div className="text">

                            <div className="category">
                                Kids & Family
                    </div>

                            <div className="title">
                                Pretzel-and-the-puppies
                    </div>

                            <div className="summary">
                                Meet a loveable dacchshund family ready to "make their bark" on the world
                    </div>

                        </div>
                    </div>
                    <div className="shortinfo">

                        <img className="img2" src="https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/1318x742.webp" />


                        <div className="text">

                            <div className="category">
                                Kids & Family
                    </div>

                            <div classNmae="title">
                                Pretzel-and-the-puppies
                    </div>

                            <div className="summary">
                                Meet a loveable dacchshund family ready to "make their bark" on the world
                    </div>

                        </div>
                    </div>

                    <div className="btn2">
                        <span class="material-icons">
                            arrow_forward_ios
                </span>
                    </div>
                </div>
            </div>
        )



    }
}
export default ShortInfoHorizontal;