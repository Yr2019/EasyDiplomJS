/*jshint -W117*/
/*jshint -W083*/


function largeImage() {
  
function renderModal(element) {
  let modalCre = document.createElement('div');
  modalCre.classList.add('modal');
  modalCre.setAttribute("id", "myModal");
  let child = document.createElement('span');
  child.classList.add('close');
  child.innerHTML += "+";
  let child2 = document.createElement('img');
  child2.classList.add('modal-content');
  child2.setAttribute("id", "img01");
  child2.innerHTML = element;
  modalCre.appendChild(child);
  modalCre.appendChild(child2);
  document.body.appendChild(modalCre);
}
renderModal();

let images = document.querySelectorAll('body > section.works > div > div.row > div > a');
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");


function ChangeImage() {
  images.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      
      let target = event.target;
      modal.style.display = "block";
      modalImg.src = this.href;
    });
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}

  ChangeImage();

}


module.exports = largeImage;



// function largeImage() {
//   let images = document.querySelectorAll('body > section.works > div > div.row > div > a');
//   var modal = document.getElementById('myModal');
//   var modalImg = document.getElementById("img01");

//   images.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//       event.preventDefault();
//       let target = event.target;
//         modal.style.display = "block";
//         modalImg.src = this.href;
//     });
//   });

//   modal.addEventListener('click', function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });

//   var span = document.getElementsByClassName("close")[0];
//   span.onclick = function () {
//     modal.style.display = "none";
//   };

// }


//  module.exports = largeImage;