import React, { useEffect, useState } from 'react';
const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
// Llamar a la función para obtener la lista de usuarios
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch('https://6660a1d15425580055b4af2d.mockapi.io/Usuarios');
const data = await response.json();
setUsers(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
};

return (
<div>
<h1>Lista de Usuarios</h1>
{/* Mostrar lista de usuarios */}
<ul>
{users.map((user) => (
<li key={user.id}>{user.name} - {user.email}</li>
))}
</ul>
</div>
);
};

export default UserList;