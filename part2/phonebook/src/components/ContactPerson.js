const ContactPerson = ({id, name, number}) => {
    return (
        <tr key={id}>
            <td> {name} </td>
            <td> {number} </td>
        </tr>
    );
}
export default ContactPerson;