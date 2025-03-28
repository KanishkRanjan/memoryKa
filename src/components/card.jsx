const Card = ({ totalMoves , cardInfo, flippedIndex, setFlippedHandler, setMoves , totalSolved , setTotalSolved , endGame ,required }) => {
    const cardStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const handleCardClick = (flippedIndex , cardInfo) => {
        console.log(totalSolved);
        setMoves(totalMoves+1)

        if(flippedIndex.includes(cardInfo) || flippedIndex.length > 1 || cardInfo.isSolved ){
            setFlippedHandler([]);
            return
        }
        if(flippedIndex.length == 1 ){
            if(flippedIndex[0].emoji == cardInfo.emoji ){
                console.log("mapped");
                flippedIndex[0].isSolved = true
                cardInfo.isSolved = true
                if(totalSolved+1 == required){
                    endGame(true)
                    console.log("tjos");
                }
                setTotalSolved(totalSolved+1)

            }
            setTimeout(()=>{setFlippedHandler([]);} , 1000)

        }
        flippedIndex = [...flippedIndex, cardInfo]
        setFlippedHandler([...flippedIndex]);
    }

    return (
        <div
            style={cardStyle}
            className={`emoji-container ${flippedIndex.includes(cardInfo) || cardInfo.isSolved ? 'flipped' : ''} ${cardInfo.isSolved ? 'matched' : ''}`}
            onClick={() => { 
                handleCardClick(flippedIndex, cardInfo);
            }}
        >
            <span>{cardInfo.emoji}</span> 
        </div>
    );
};

export default Card;
