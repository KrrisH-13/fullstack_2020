import ContactPerson from './ContactPerson'
const ContactList = ({persons}) => {
    return(
        <table>
            <tbody>
            {persons.length? persons.map((person)=> 
                <ContactPerson key={person.id} name={person.name} number={person.number}/>)
                :<tr><td> No contacts matching searched filter. </td></tr>}
            </tbody>
        </table>
    );
}
export default ContactList;
