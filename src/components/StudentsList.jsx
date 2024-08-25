import { useState } from "react";
import TableRow from "./TableRow";

function StudentsList(props) {
    const data = [
        { id: 1, name: "Rajan", fees: 25000, course: "Python", gender: "male" },
        { id: 2, name: "Vibha", fees: 15000, course: "C++", gender: "female" },
        { id: 3, name: "Sumit", fees: 30000, course: "Java", gender: "male" },
        { id: 4, name: "Harleen", fees: 20000, course: "PHP", gender: "female" },
        { id: 5, name: "Neeraj", fees: 15000, course: "Digital Marketing", gender: "male" }
    ]

    const [studentData, setStudentData] = useState(data);

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Fees</th>
                        <th>Course</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((item, index) => {
                            return (
                                // <tr key={item.id}>
                                //     <td>{item.id}</td>
                                //     <td>{item.name}</td>
                                //     <td>{item.fees}</td>
                                //     <td>{item.course}</td>
                                //     <td>{item.gender}</td>
                                // </tr>
                                <TableRow item={item} />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default StudentsList;