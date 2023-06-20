import {Form, FormField} from "../../components/Form/Form"
import {Button} from "../../components/Button/Button"

export const ClientesCreate=()=>{
    const fieldsFormClientes : FormField[]=[
        {
            name: "name",
            label: "Nombre",
            type: "text",
        },
        {
            name: "apellido",
            label: "Apellido",
            type: "text",
        },
        {
            name: "email",
            label: "Email",
            type: "text",
        },
        {
            name: "telefono",
            label: "Teléfono",
            type: "text",
        },
        {
            name: "direccion",
            label: "Dirección",
            type: "text",
        },
        {
            name: "estado",
            label: "Estado",
            type: "select",
            options: 
            [
                { value: 'Activo', label: 'Activo' },
                { value: 'Inactivo', label: 'Inactivo' },
            ]
        } 

    ]
    return(
        <Form title="Crear Cliente" fields={fieldsFormClientes} onSubmit={e=>e.preventDefault} button={<Button text={"Crear Cliente"} onClick={()=> null}/>}/>
    )
}