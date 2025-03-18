function ProductCard({name, image, description}){
    return (
        <div style={styles.card}>
            <h2>{name}</h2>
            <img src={image} alt={name} style={styles.image} /> 
            <p>{description}</p>
        </div>
    );
}

const styles={
    card: {
        border: "3px solid black",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center",
        width: "400px",
        margin: "10px",
        
    },
    image: {
        width: "100%",
        borderRadius: "8px",
    },
}

export default ProductCard;