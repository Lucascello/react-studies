import React from "react";

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        // React Ref are a system to give direct access to single DOM element that is rendered by a component. like -> document.querySelector("img").clientHeight.
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log("image Ref:", this.imageRef);
        // This console.log below prints the height of the image befor it has been loaded, that's why it initially comes back at 0
        // console.log("image Ref:", this.imageRef.current.clientHeight);

        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        // console.log(
        //     "image Ref inside the setSpans function:",
        //     this.imageRef.current.clientHeight
        // );

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}
