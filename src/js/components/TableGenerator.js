export default class TableGenerator {
    constructor(containerId, data) {
        this.container = document.querySelector(containerId);
        this.data = data;
        this.table = null;
        this.sortDirection = {};
        this.generateTable();
    }

    generateTable() {
        if (this.table) this.container.removeChild(this.table);

        this.table = document.createElement('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Адрес назначения', 'Шлюз', 'Интерфейс'];
        headers.forEach((header, index) => {
            const th = document.createElement('th');
            th.textContent = header;
            th.setAttribute('data-field', index === 0 ? 'address' : index === 1 ? 'mask' : 'interface');
            th.setAttribute('data-sort-direction', 'asc');
            th.addEventListener('click', () => this.sortTable(th.getAttribute('data-field')));
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        this.table.appendChild(thead);

        const tbody = document.createElement('tbody');
        this.data.forEach(route => {
            const row = document.createElement('tr');
            row.appendChild(document.createElement('td')).textContent = route.address;
            row.appendChild(document.createElement('td')).textContent = route.mask;
            row.appendChild(document.createElement('td')).textContent = route.interface;
            tbody.appendChild(row);
        });
        this.table.appendChild(tbody);

        this.container.appendChild(this.table);
    }

    sortTable(field) {

        const direction = this.sortDirection[field] === 'asc' ? 'desc' : 'asc';
        this.sortDirection[field] = direction;

        this.data.sort((a, b) => {
            const aValue = a[field];
            const bValue = b[field];

            return direction === 'asc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        });

        this.generateTable();
    }
}
