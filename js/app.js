document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item');

  const handleFormSubmit = function(event) {
    event.preventDefault();
    const form = this;

    const title = document.createTextNode(this.querySelector('#title').value);
    const developer = document.createTextNode(this.querySelector('#developer').value);
    const platform = document.createTextNode(this.querySelector('#platform').value);

    const titleCell = document.createElement('td');
    const developerCell = document.createElement('td');
    const platformCell = document.createElement('td');
    titleCell.appendChild(title);
    developerCell.appendChild(developer);
    platformCell.appendChild(platform);

    const row = document.createElement('tr');
    row.appendChild(titleCell);
    row.appendChild(developerCell);
    row.appendChild(platformCell);

    const table = document.querySelector('#game-list');
    table.appendChild(row);

    form.reset();
  };

  form.addEventListener('submit', handleFormSubmit);
});
