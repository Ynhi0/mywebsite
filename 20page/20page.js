let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


const ratingInputs = document.querySelectorAll('.rating input');
const ratingCount = document.getElementById('ratingCount');
let totalRatings = 0;

ratingInputs.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings++;
    ratingCount.textContent = totalRatings + (totalRatings === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});

//--------------------------
const ratingInputs2 = document.querySelectorAll('.rating2 input');
const ratingCount2 = document.getElementById('ratingCount2');
let totalRatings2 = 0;

ratingInputs2.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings2++;
    ratingCount2.textContent = totalRatings2 + (totalRatings2 === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});
//-------------------------
const ratingInputs3 = document.querySelectorAll('.rating3 input');
const ratingCount3 = document.getElementById('ratingCount3');
let totalRatings3 = 0;

ratingInputs3.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings3++;
    ratingCount3.textContent = totalRatings3 + (totalRatings3 === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});
//---------------------------------
const ratingInputs4 = document.querySelectorAll('.rating4 input');
const ratingCount4 = document.getElementById('ratingCount4');
let totalRatings4 = 0;

ratingInputs4.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings4++;
    ratingCount4.textContent = totalRatings4 + (totalRatings4 === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});
//----------------------------------
const ratingInputs5 = document.querySelectorAll('.rating5 input');
const ratingCount5 = document.getElementById('ratingCount5');
let totalRatings5 = 0;

ratingInputs5.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings5++;
    ratingCount5.textContent = totalRatings5 + (totalRatings5 === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});
//----------------------------------
const ratingInputs6 = document.querySelectorAll('.rating6 input');
const ratingCount6 = document.getElementById('ratingCount6');
let totalRatings6 = 0;

ratingInputs6.forEach(input => {
  input.addEventListener('change', () => {
    totalRatings6++;
    ratingCount6.textContent = totalRatings6 + (totalRatings6 === 1 ? ' người đã đánh giá' : ' người đã đánh giá');
  });
});
