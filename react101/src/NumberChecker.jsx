function NumberChecker(props) {
    const result = props.value % 2 === 0 ? "Even" : "Odd";
    return (
        <div style ={{ padding: "20px", backgroundColor: "#e0e0e0", margin: "20px 0" }}>
            <h3>the number {props.value} is an {result} number.</h3>
        </div>
    );
}
export default NumberChecker;