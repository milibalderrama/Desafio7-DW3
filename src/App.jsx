import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
const [users, setUsers] = useState([]);

const addUser = async (newUser) => {
// Agregar nuevo usuario al estado
try {
const response = await fetch('https://6660a1d15425580055b4af2d.mockapi.io/Usuarios', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newUser),
});
if (response.ok) {
// Obtener la respuesta y agregar usuario al estado
const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
    <div>
    <h1>Lista de Usuarios</h1>
    <UserForm addUser={addUser} />
    {/* Mostrar lista de usuarios */}
    <ul>
    {users.map((user, index) => (
    <li key={index}>{user.name} - {user.email}</li>
    ))}
    </ul>
    </div>
    );
    };

export default App;