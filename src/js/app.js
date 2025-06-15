document.addEventListener('DOMContentLoaded', () => {
  const tableHeader = Array.from(document.querySelectorAll("th"));
  tableHeader.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute('data-field');
      const direction = th.getAttribute('data-sort-direction');
      sortTable(field, direction === 'asc' ? 'desc' : 'asc');
    });
  });
});

function sortTable(field, direction) {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const aValue = a.querySelector(`td:nth-child(${field === 'address' ? 1 : field === 'mask' ? 2 : 3})`).textContent;
    const bValue = b.querySelector(`td:nth-child(${field === 'address' ? 1 : field === 'mask' ? 2 : 3})`).textContent;

    if (field === 'address' || field === 'mask') {
      return direction === 'asc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
    } else {
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
  });

  tbody.innerHTML = '';

  rows.forEach(row => tbody.appendChild(row));

  const th = document.querySelector(`th[data-field="${field}"]`);
  th.setAttribute('data-sort-direction', direction);
}