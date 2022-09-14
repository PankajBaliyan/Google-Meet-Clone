let header_join_btn = document.getElementById("header_join_btn")
let join_meeting_input = document.getElementById("join_meeting_input");

header_join_btn.addEventListener("click", function(e) {
    join_meeting_input.focus();
})