const search = document.querySelector("input[type=search]");
const addInput = document.querySelector("input[type=text]");
const submitBtn = document.querySelector("input[type=submit]");
const deleteBtns = document.querySelectorAll("button");
const form = document.querySelector("form");
const items = document.querySelector("ul");
let updateId = null;

form.addEventListener('submit', handleSubmit);
for (const btn of [...deleteBtns])
      btn.addEventListener('click', handleDelete);
for (const ite of [...items.children])
      ite.addEventListener('click', handleUpdate);
search.addEventListener('input', handleSearch);

function handleSubmit(e) {
      e.preventDefault();
      const value = addInput.value;
      for (const ite of [...items.children]) {
            if (ite.childNodes[0].data == value) {
                  alert("Already item exsits")
                  return;
            }
            if (ite.id === updateId) {
                  ite.childNodes[0].data = value;
                  updateId = null;
                  addInput.value = '';
                  return;
            }
      }
      if (value != '') {
            const item = document.createElement("li");
            item.innerText = value;
            item.addEventListener('click', handleUpdate);
            item.id = Math.random() * 1000;
            const dtBtn = document.createElement("button")
            dtBtn.innerText = "X";
            dtBtn.addEventListener('click', handleDelete)
            items.appendChild(item);
            item.appendChild(dtBtn);
            addInput.value = "";
      }

}

function handleUpdate(e) {
      addInput.value = e.target.childNodes[0].data;
      updateId = e.target.id;
      console.log(updateId);

}

function handleDelete(e) {
      e.stopPropagation();
      e.target.parentElement.remove();
}

function handleSearch(e) {
      const value = e.target.value;
      for (const ite of [...items.children]) {
            if (ite.childNodes[0].data.startsWith(value)) {
                  ite.style.display = 'flex';
            } else {
                  ite.style.display = 'none';
            }
      }


}


