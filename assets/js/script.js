let idIncrement = 5;
const descripciones = [
    { id: Date.now(), nombre: "Lavar ropa", estado: false },
    { id: Date.now() + idIncrement, nombre: "Hacer la cama", estado: false },
    { id: Date.now() + idIncrement * 2, nombre: "Pasar la aspiradora", estado: false }
];

const botonAgregar = document.querySelector(".btn.btn-success");
const descripcion = document.querySelector(".descripcion");
const listaTareas = document.getElementById("lista-tareas");
const totalSpan = document.querySelector(".total-span");
const realizadasSpan = document.querySelector(".realizadas-span");

const actualizarLista = () => {
    let template = "";
    descripciones.forEach((tarea, index) => {
        template += `
            <tr>
                <td class="id-generada" style="color: ${tarea.estado ? 'green' : 'black'};"><p>${tarea.id}</p></td>
                <td class="tarea-ingresada" style="color: ${tarea.estado ? 'green' : 'black'}; max-width: 600px;">${tarea.nombre}</td>
                <td><input type="checkbox" ${tarea.estado ? 'checked' : ''} onclick="cambiarEstado(${index})"></td>
                <td><i class="fa-regular fa-circle-xmark eliminar" onclick="eliminarTarea(${index})" style="cursor: pointer, color:red;"></i></td>
            </tr>
        `;
    });
    listaTareas.innerHTML = template;

    totalSpan.textContent = descripciones.length;
    realizadasSpan.textContent = descripciones.filter(tarea => tarea.estado).length;


    descripcion.value = "";
};

const eliminarTarea = (index) => {
    descripciones.splice(index, 1);
    actualizarLista();
};

const cambiarEstado = (index) => {
    descripciones[index].estado = !descripciones[index].estado;
    actualizarLista();
};

botonAgregar.addEventListener("click", () => {
    if (descripcion.value.trim() !== "") {
        descripcion.style.border = "solid 2px #bebebe";
        const nuevaTarea = {
            id: Date.now() + idIncrement * descripciones.length,
            nombre: descripcion.value,
            estado: false
        };
        descripciones.push(nuevaTarea);
        actualizarLista();
    } else {
        descripcion.style.border = "solid 2px #FF0000";
    }
});

actualizarLista();
