import {Table} from "../../components/Table/Table"

export const ClienteList=()=>{
    const columns=['ID', 'Nombre', 'Telefono', 'Email', 'Direccion', 'Estado'];
    const clientes=[
        {
            ID: 1,
            Nombre: 'Mateo', 
            Telefono: '123456789', 
            Email: 'efpyi@example.com', 
            Direccion: 'Calle 123', 
            Estado: 'Activo',
            actions: [
                {name: 'Editar', fill: true, action: ()=> window.location.href='/clientes'},
                { name: 'Delete', fill: false, action: () => console.log('Delete')}

            ]
        },
        {
            ID: 2,
            Nombre: 'Juan', 
            Telefono: '123456789', 
            Email: 'efpyi@example.com', 
            Direccion: 'Calle 123', 
            Estado: 'Activo',
            actions: [
                {name: 'Editar', fill: true, action: ()=> window.location.href='/clientes/create'},
                { name: 'Delete', fill: false, action: () => console.log('Delete')}
            ]
            }
       

    ]
    return <>
        <Table data={clientes} columns={columns} title="Clientes" createLink="create" createText="Crear Cliente" label="Buscar Cliente"/>
    </>
}