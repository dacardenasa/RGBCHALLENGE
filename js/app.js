// array to save colors, score to save progress
var colors = [], score = 0, correct;

// Function generate color
var generateColor = function() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

// Function to load options
var loadRandomColors = function(){
  colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(generateColor());
  }
  correct = colors[Math.floor(Math.random()*2)];
  $('.question').text(correct);
}

// function to set colors in options
var loadOptions = function() {
  $('.option').each(function(index) {
    $(this).css('background-color', `${colors[index]}`);
  });
}

// Function to check answer
var checkAnswer = function(selector) {
  $(`${selector}`).bind('click', function(){
    $(this).addClass('scale');

    if ( $(this).css('background-color') === correct) {
      $('.result.won').show();
      score++;
    } else {
      $('.result.lose').show();
      score = 0;
    }

    $('.score-text p span').text(score);
  });
}

$(document).ready(function () {
  // Load question - DOM
  loadRandomColors();

  // Load options into the DOM
  loadOptions();

  // Check user answers
  checkAnswer(".option");

  //
  $('.close a').on('click', function(){
    $('.result').hide();
    $('.option').removeClass('scale');

    loadRandomColors();
    loadOptions();
  })

});

