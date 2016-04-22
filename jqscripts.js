var modal;

window.onload = function(){

  $('.modal-link').click(displayModal);

function displayModal(event) {
    event.preventDefault();

    var modalTarget = $(this).data('modal-target');

    var modalcontainer = $('#' + modalTarget);
    modalcontainer.addClass('active');
  };

/*below is the Java script to shorten*/
clsmodal = document.getElementsByClassName('modal-close-btn');

for(var i = 0 ; i < clsmodal.length ; i++) { // let's create a loop so that we can attach an event to the link

  var clsmodallink = clsmodal[i];   // grab the current element that we are going to iterate through

  clsmodallink.addEventListener("click", closeModal); // letting js/browser know to listen out for a click on the trigger

};

function closeModal(event) {
  var clsetrigger = event.target; //grab the elment that was just clicked
  //var clsemodalTarget = clsetrigger.getAttribute("data-modal-target");

  var modalcontainer = clsetrigger.closest('.modal-container');
  modalcontainer.classList.remove("active");
};
