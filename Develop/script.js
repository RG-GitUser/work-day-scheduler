


var timeBlocks = [
  {
    id: "hour-9",
    hour: 9
  },
  {
    id: "hour-10",
    hour: 10
  },
  {
    id: "hour-11",
    hour: 11
  },
  {
    id: "hour-12",
    hour: 12
  },
  {
    id: "hour-13",
    hour: 13
  },
  {
    id: "hour-14",
    hour: 14
  },
  {
    id: "hour-15",
    hour: 15
  },
  {
    id: "hour-16",
    hour: 16
  },
  {
    id: "hour-17",
    hour: 17
  }

]




//time display

var timeDisplayEl = $('#time-display');
var hourNow = dayjs().hour();


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}




function setClasses() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var currentBlock = timeBlocks[i];

    
    if (hourNow === currentBlock.hour) {
  
      var className = "present"
    } else if (hourNow < currentBlock.hour) {
      var className = "future";
    
    } else if (hourNow > currentBlock.hour) {
      var className = "past";
    }

    $("#" + currentBlock.id).removeClass("past present future");
    $("#" + currentBlock.id).addClass(className);

    var task = localStorage.getItem(currentBlock.id) || "";
    $("#" + currentBlock.id + " textarea").val(task)

    if (className = "present") {
      var blockId = currentBlock.id 
      return blockId 
    }
  }
}




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// const saveInput = document.querySelector('.present');

// const text = document.querySelector('.text');

// const button = document.querySelector('.button');

// saveInput.addEventListener('input', letter => {
//   console.log(letter)
//   text.textContent = letter.target.value
// })




function save() {
  var timeDiv = document.getElementById(setClasses());
console.log('timeBlock', timeDiv.innerText);
var textarea = timeDiv.getElementsByTagName('textarea');
var textvalue = textarea[0]
console.log('timeBlock', textvalue);
console.log('test');
localStorage.setItem('save', textvalue.value);


if (localStorage.getItem('save')) {
  }
}

save();

// var old_save = JSON.parse(localStorage.getItem('save')) || [];
// console.log('old_save', old_save); 


// localStorage.setItem('save', JSON.stringify(old_save));


$('.saveBtn').on('click', function () {
  console.log($(this).siblings('.description').val())
  console.log("Button pressed")
})



const taskArray = []
localStorage.setItem('task', JSON.stringify(taskArray))

const userTask = JSON.parse(localStorage.getItem('task'));
console.log(userTask)




// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

displayTime();
setInterval(displayTime, 1000);


