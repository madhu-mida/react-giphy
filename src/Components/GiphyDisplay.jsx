
const GiphyDisplay = (props) => {
    return (
        <div className="giphy-display">
            <img src={props.giphyData.data.images.downsized.url} />
        </div>
    );
}

export default GiphyDisplay;