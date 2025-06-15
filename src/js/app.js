const tableHeader = Array.from(document.querySelectorAll("th"))
tableHeader.forEach(th => {
  th.addEventListener("click", () => sortTable(th.textContent))
})


function sortTable(field) {
  const table = document.querySelector(".route-table");
  const rows = Array.from(table.querySelectorAll('tbody tr'));

  rows.sort((a, b) => {
    const aValue = a.querySelector(`td:nth-child(${field === 'address' ? 1 : field === 'mask' ? 2 : 3})`).textContent;
    const bValue = b.querySelector(`td:nth-child(${field === 'address' ? 1 : field === 'mask' ? 2 : 3})`).textContent;

    if (field === 'address' || field === 'mask') {
      return aValue.localeCompare(bValue);
    } else {
      return aValue.localeCompare(bValue);
    }
  });

  rows.forEach(row => table.querySelector('tbody').appendChild(row));
}