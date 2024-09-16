

export const todosPage = () => {
  // Crear el contenedor principal
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gray-200"
  );

  // Botón para volver a Home
  const btnHome = document.createElement("button");
  btnHome.classList.add(
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-blue-600",
    "mb-4"
  );
  btnHome.textContent = "Home";
  btnHome.addEventListener("click", () => {
    window.location.pathname = "/home";
  });

  // Botón para agregar una tarea
  const botonAgregarTarea = document.createElement("button");
  botonAgregarTarea.textContent = "Agregar Tarea";
  botonAgregarTarea.classList.add("p-2", "rounded", "text-white", "bg-green-500");
  botonAgregarTarea.addEventListener("click", () => {
    modalAgregarTarea.classList.remove("hidden");
  });

  // Modal para agregar una nueva tarea
  const modalAgregarTarea = document.createElement("div");
  modalAgregarTarea.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    "bg-gray-900",
    "bg-opacity-50",
    "hidden"
  );
  

  const modalAgregarContenido = document.createElement("div");
  modalAgregarContenido.classList.add(
    "bg-white",
    "p-6",
    "rounded",
    "shadow-lg",
    "w-1/3"
  );

  const modalAgregarTitulo = document.createElement("h2");
  modalAgregarTitulo.classList.add("text-2xl", "font-bold", "mb-4");
  modalAgregarTitulo.textContent = "Agregar Tarea";

  const inputAgregarTitulo = document.createElement("input");
  inputAgregarTitulo.classList.add("border", "w-full", "p-2", "mb-4", "rounded");
  inputAgregarTitulo.type = "text";
  inputAgregarTitulo.placeholder = "Título de la tarea";

  const etiquetaAgregarCompletada = document.createElement("label");
  etiquetaAgregarCompletada.classList.add("block", "mb-2");
  etiquetaAgregarCompletada.textContent = "Completada";

  const inputAgregarCompletada = document.createElement("input");
  inputAgregarCompletada.type = "checkbox";
  inputAgregarCompletada.classList.add("mr-2");

  const botonAgregarGuardar = document.createElement("button");
  botonAgregarGuardar.classList.add(
    "bg-green-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-green-600"
  );
  botonAgregarGuardar.textContent = "Guardar";

  const botonAgregarCancelar = document.createElement("button");
  botonAgregarCancelar.classList.add(
    "bg-gray-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-gray-600",
    "ml-4"
  );
  botonAgregarCancelar.textContent = "Cancelar";

  modalAgregarContenido.appendChild(modalAgregarTitulo);
  modalAgregarContenido.appendChild(inputAgregarTitulo);
  modalAgregarContenido.appendChild(etiquetaAgregarCompletada);
  modalAgregarContenido.appendChild(inputAgregarCompletada);
  modalAgregarContenido.appendChild(botonAgregarGuardar);
  modalAgregarContenido.appendChild(botonAgregarCancelar);
  modalAgregarTarea.appendChild(modalAgregarContenido);

  container.appendChild(modalAgregarTarea);

  botonAgregarCancelar.addEventListener("click", () => {
    modalAgregarTarea.classList.add("hidden");
  });

  // Modal para editar una tarea
  const modalEditarTarea = document.createElement("div");
  modalEditarTarea.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    "bg-gray-900",
    "bg-opacity-50",
    "hidden"
  );

  const modalEditarContenido = document.createElement("div");
  modalEditarContenido.classList.add(
    "bg-white",
    "p-6",
    "rounded",
    "shadow-lg",
    "w-1/3"
  );

  const modalEditarTitulo = document.createElement("h2");
  modalEditarTitulo.classList.add("text-2xl", "font-bold", "mb-4");
  modalEditarTitulo.textContent = "Editar Tarea";

  const inputEditarTitulo = document.createElement("input");
  inputEditarTitulo.classList.add("border", "w-full", "p-2", "mb-4", "rounded");
  inputEditarTitulo.type = "text";
  inputEditarTitulo.placeholder = "Título de la tarea";

  const etiquetaEditarCompletada = document.createElement("label");
  etiquetaEditarCompletada.classList.add("block", "mb-2");
  etiquetaEditarCompletada.textContent = "Completada";

  const inputEditarCompletada = document.createElement("input");
  inputEditarCompletada.type = "checkbox";
  inputEditarCompletada.classList.add("mr-2");

  const botonEditarGuardar = document.createElement("button");
  botonEditarGuardar.classList.add(
    "bg-green-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-green-600"
  );
  botonEditarGuardar.textContent = "Guardar";

  const botonEditarCancelar = document.createElement("button");
  botonEditarCancelar.classList.add(
    "bg-gray-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-gray-600",
    "ml-4"
  );
  botonEditarCancelar.textContent = "Cancelar";

  modalEditarContenido.appendChild(modalEditarTitulo);
  modalEditarContenido.appendChild(inputEditarTitulo);
  modalEditarContenido.appendChild(etiquetaEditarCompletada);
  modalEditarContenido.appendChild(inputEditarCompletada);
  modalEditarContenido.appendChild(botonEditarGuardar);
  modalEditarContenido.appendChild(botonEditarCancelar);
  modalEditarTarea.appendChild(modalEditarContenido);

  container.appendChild(modalEditarTarea);

  botonEditarCancelar.addEventListener("click", () => {
    modalEditarTarea.classList.add("hidden");
  });

  // Título de la página
  const title = document.createElement("h1");
  title.classList.add("text-3xl", "font-bold", "mb-4");
  title.textContent = "Lista de Tareas";

  // Crear la tabla
  const table = document.createElement("table");
  table.classList.add(
    "w-1/2",
    "bg-white",
    "shadow-md",
    "h-[700px]",
    "overflow-y-scroll"
  );

  // Cabecera de la tabla
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const headers = ["ID", "Título", "Completada", "Owner Id", "Acciones"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.classList.add("border", "px-4", "py-2");
    th.textContent = header;
    trHead.appendChild(th);
  });

  thead.appendChild(trHead);

  // Cuerpo de la tabla
  const tbody = document.createElement("tbody");
  tbody.classList.add("text-center");

  table.appendChild(thead);
  table.appendChild(tbody);

  // Añadir elementos al contenedor
  container.appendChild(btnHome);
  container.appendChild(botonAgregarTarea);
  container.appendChild(title);
  container.appendChild(table);

  // Fetch para obtener los todos
  fetch("http://localhost:4000/todos", {
    credentials: "include"
  })
    .then((response) => response.json())
    .then((data) => {
      tbody.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevas filas

      data.todos.forEach((todo) => {
        if (todo.id > 10) return;

        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.classList.add("border", "px-4", "py-2");
        tdId.textContent = todo.id;

        const tdTitulo = document.createElement("td");
        tdTitulo.classList.add("border", "px-4", "py-2");
        tdTitulo.textContent = todo.title;

        const tdCompletado = document.createElement("td");
        tdCompletado.classList.add("border", "px-4", "py-2");
        tdCompletado.textContent = todo.completed ? "Sí" : "No";

        const tdOwner = document.createElement("td");
        tdOwner.classList.add("border", "px-4", "py-2");
        tdOwner.textContent = todo.owner;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add(
          "bg-red-500",
          "text-white",
          "px-4",
          "py-2",
          "rounded",
          "hover:bg-red-600"
        );
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
          fetch(`http://localhost:4000/todos/${todo.id}`, {
            method: "DELETE",
            credentials: "include"
          }).then(() => {
            tr.remove(); // Elimina la fila de la tabla
          });
        });

        

        const botonEditar = document.createElement("button");
        botonEditar.classList.add(
          "bg-yellow-500",
          "text-white",
          "px-4",
          "py-2",
          "rounded",
          "hover:bg-yellow-600"
        );
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
          // Mostrar el modal de editar tarea
          inputEditarTitulo.value = todo.title;
          inputEditarCompletada.checked = todo.completed;
          modalEditarTarea.classList.remove("hidden");

          botonEditarGuardar.addEventListener("click", () => {
            fetch(`http://localhost:4000/todos/${todo.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: inputEditarTitulo.value,
                completed: inputEditarCompletada.checked,
                owner: todo.owner
              }),
              credentials: "include"
            }).then(() => {
              // Actualizar la fila de la tabla
              tdTitulo.textContent = inputEditarTitulo.value;
              tdCompletado.textContent = inputEditarCompletada.checked ? "Sí" : "No";
              modalEditarTarea.classList.add("hidden");
            });
          });
        });

        const tdAcciones = document.createElement("td");
        tdAcciones.classList.add("border", "px-4", "py-2");
        tdAcciones.appendChild(botonEliminar);
        tdAcciones.appendChild(botonEditar);

        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdCompletado);
        tr.appendChild(tdOwner);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
      });
    });

  // Agregar el formulario de agregar tarea al contenedor
  const formularioAgregarTarea = document.createElement("form");
  formularioAgregarTarea.classList.add("space-y-4");

  formularioAgregarTarea.appendChild(inputAgregarTitulo);
  formularioAgregarTarea.appendChild(etiquetaAgregarCompletada);
  formularioAgregarTarea.appendChild(inputAgregarCompletada);
  formularioAgregarTarea.appendChild(botonAgregarGuardar);
  formularioAgregarTarea.appendChild(botonAgregarCancelar);
  modalAgregarContenido.appendChild(formularioAgregarTarea);


  botonAgregarGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    const nuevaTarea = {
      title: inputAgregarTitulo.value,
      completed: inputAgregarCompletada.checked,
      owner: "user"
    };

    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTarea),
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.classList.add("border", "px-4", "py-2");
        tdId.textContent = data.todo.id;

        const tdTitulo = document.createElement("td");
        tdTitulo.classList.add("border", "px-4", "py-2");
        tdTitulo.textContent = nuevaTarea.title;

        const tdCompletado = document.createElement("td");
        tdCompletado.classList.add("border", "px-4", "py-2");
        tdCompletado.textContent = nuevaTarea.completed ? "Sí" : "No";

        const tdOwner = document.createElement("td");
        tdOwner.classList.add("border", "px-4", "py-2");
        tdOwner.textContent = nuevaTarea.owner;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add(
          "bg-red-500",
          "text-white",
          "px-4",
          "py-2",
          "rounded",
          "hover:bg-red-600"
        );
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
          fetch(`http://localhost:4000/todos/${data.todo.id}`, {
            method: "DELETE",
            credentials: "include"
          }).then(() => {
            tr.remove(); // Elimina la fila de la tabla
          });
        });

        const botonEditar = document.createElement("button");
        botonEditar.classList.add(
          "bg-yellow-500",
          "text-white",
          "px-4",
          "py-2",
          "rounded",
          "hover:bg-yellow-600"
        );
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
          // Mostrar el modal de editar tarea
          inputEditarTitulo.value = nuevaTarea.title;
          inputEditarCompletada.checked = nuevaTarea.completed;
          modalEditarTarea.classList.remove("hidden");

          botonEditarGuardar.addEventListener("click", () => {
            fetch(`http://localhost:4000/todos/${data.todo.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: inputEditarTitulo.value,
                completed: inputEditarCompletada.checked,
                owner: nuevaTarea.owner
              }),
              credentials: "include"
            }).then(() => {
              // Actualizar la fila de la tabla
              tdTitulo.textContent = inputEditarTitulo.value;
              tdCompletado.textContent = inputEditarCompletada.checked ? "Sí" : "No";
              modalEditarTarea.classList.add("hidden");
            });
          });
        });

        const tdAcciones = document.createElement("td");
        tdAcciones.classList.add("border", "px-4", "py-2");
        tdAcciones.appendChild(botonEliminar);
        tdAcciones.appendChild(botonEditar);

        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdCompletado);
        tr.appendChild(tdOwner);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);

        // Limpiar el formulario y ocultar el modal
        inputAgregarTitulo.value = '';
        inputAgregarCompletada.checked = false;
        modalAgregarTarea.classList.add("hidden");
      });
  });

  return container;
};
