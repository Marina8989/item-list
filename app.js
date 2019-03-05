var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);

//  Add item
function addItem(e) {
  e.preventDefault();

  //  Get input value
  var newItem = document.getElementById("item").value;

  // create new list element
  var li = document.createElement("li");
  // add class name to it
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create del button element
  var deleteButton = document.createElement("button");
  // add classes to button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";

  // append text node
  deleteButton.appendChild(document.createTextNode("X"));
  //   append button to li
  li.appendChild(deleteButton);
  // append li to list
  itemList.appendChild(li);
}

// Delete event
itemList.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter
var filter = document.getElementById("filter");

// filter event
filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  //   convert text to lowercase
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName("li");
  //   convert to array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
