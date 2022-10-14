$("#boton").click(() => {
  $("ul").empty();
  $.get("http://localhost:5000/amigos", (response) => {
    response.forEach((element) => {
      $(`<li> ${element.name} </li>`).appendTo("#lista");
    });
  });
});

$("#search").click(() => {
  var id = document.getElementById("input").value;
  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    var text = document.getElementById("amigo");
    text.innerHTML = response.name;
  });
});

$("#delete").click(() => {
  var id = document.getElementById("inputDelete").value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: () => {
      $("#success").html("Eliminado correctamente");
    },
    error: () => {
      $("#success").html("No se elimino");
    },
  });
});
