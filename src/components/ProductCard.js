
function ProductCard(props){
    return (
        <div style={styles.card}>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} style={styles.image} /> 
            <p>{props.description}</p>
        </div>
    );
}

const styles={
    card: {
        border: "3px solid gray",
        borderRadius: "15px",
        padding: "20px",
        textAlign: "center",
        width: "350px",
        margin: "20px",
        backgroundColor: "white",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // đổ bóng
    },
    image: {
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        objectFit: "cover", //cắt ảnh nhưng giữ tỉ lệ
    },
};

export default ProductCard;