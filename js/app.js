

document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function(event) {
    event.preventDefault();
    const form = this;

    const title = this.querySelector('#title').value;
    const developer = this.querySelector('#developer').value;
    const platform = this.querySelector('#platform').value;


    const titleCell = document.createElement('td');
    const developerCell = document.createElement('td');
    const platformCell = document.createElement('td');
    titleCell.appendChild(document.createTextNode(title));
    developerCell.appendChild(document.createTextNode(developer));
    platformCell.appendChild(document.createTextNode(platform));

    const row = document.createElement('tr');
    row.appendChild(titleCell);
    row.appendChild(developerCell);
    row.appendChild(platformCell);

    const table = document.querySelector('#game-list');
    table.appendChild(row);

    form.reset();
  };
  const form = document.querySelector('#new-item');
  form.addEventListener('submit', handleFormSubmit);

  const handleDeleteAll = function(event) {
    const table = document.querySelector('#game-list');
    while(table.firstChild){
      table.removeChild(table.firstChild);
    }
  };

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

});
