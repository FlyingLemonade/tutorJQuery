var oldTitle = "";
var oldText = "";

function addNotes() {
  let title = $("#note-title").val();
  let text = $("#note-text").val();
  $("#inputCol").append(
    `<div class="col-md-4 mt-3 d-flex justify-content-center z-1" data-bs-toggle="modal" data-bs-target="#editModal">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">` +
      title +
      `</h5>
          <button type="button" onclick="deleteNote(this)" class="btn mb-5 z-3">x</button>
        </div>
        <h6 class="card-subtitle mb-2 text-body-secondary">` +
      text +
      `</h6>
      </div>
    </div>
  </div>`
  );
}

function deleteNote(button) {
  $("#editModal").modal("hide");
  $(button).closest(".col-md-4").remove();
}

function editNote() {
  let newTitle = $("#edit-note-title").val();
  let newText = $("#edit-note-text").val();

  oldTitle.text(newTitle);
  oldText.text(newText);
}

function record(event) {
  let card = $(event.relatedTarget);
  oldTitle = card.find(".card-title");
  oldText = card.find(".card-subtitle");
}

$(document).on("show.bs.modal", ".modal", record);
