$(document).ready(function () {
    var table = $('#example').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "pageLength": 3,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "search": "Buscar:",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });

    // Evento para eliminar filas
    $('#example tbody').on('click', '.delete-btn', function () {
        var row = table.row($(this).parents('tr'));
        row.remove().draw(); // Eliminar la fila y actualizar la tabla
    });

    // Evento para editar filas
    $('#example tbody').on('click', '.edit-btn', function () {
        var row = $(this).parents('tr');
        var tds = row.find('td').not(':last'); // Omitir la última columna de opciones

        // Convertir las celdas de texto en campos de entrada
        tds.each(function () {
            var content = $(this).text();
            $(this).html('<input type="text" value="' + content + '"/>');
        });

        // Cambiar el botón de edición a "Guardar"
        $(this).removeClass('edit-btn').addClass('save-btn').html('💾');
    });

    // Evento para guardar los cambios
    $('#example tbody').on('click', '.save-btn', function () {
        var row = $(this).parents('tr');
        var tds = row.find('td').not(':last'); // Omitir la última columna de opciones

        // Guardar los nuevos valores en las celdas
        tds.each(function () {
            var content = $(this).find('input').val();
            $(this).html(content);
        });

        // Cambiar el botón de guardar de nuevo a "Editar"
        $(this).removeClass('save-btn').addClass('edit-btn').html('✏️');
    });
});


