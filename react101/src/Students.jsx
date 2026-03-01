function Students (props){
    return (
        <div style ={{border : "1px solid black", padding : "10px", margin : "10px"}}>
            <h2> Student Details</h2>
            <p> <strong> Name :</strong> {props.name}</p>
            <p> <strong> Course :</strong> {props.course}</p>
            <p> <strong> Year :</strong> {props.year}</p>
        </div>
    );
}
export default Students;