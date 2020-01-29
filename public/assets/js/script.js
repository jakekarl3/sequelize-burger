$(".devoured-burger").on("click", function(event) {
  event.preventDefault();

  let burgerId = $(this).data("id");

  let newBurgerState = {
    devoured: true
  }

  $.ajax("/burgers/update/" + burgerId, {
    type: "PUT",
    data: newBurgerState
  }).then(function() {
    location.reload();
  });
});