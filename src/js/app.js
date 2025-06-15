import TableGenerator from "./components/TableGenerator";

const data = [
  { address: '0.0.0.0', mask: '0.0.0.0', interface: 'Подключение Ethernet' },
  { address: '10.30.0.24', mask: '0.0.0.0', interface: 'Гостевая сеть' },
  { address: '192.168.1.1.24', mask: '0.0.0.0', interface: 'Домашняя сеть' },
  { address: '193.174.1.24', mask: '0.0.0.0', interface: 'Подключение Ethernet' },
  { address: '193.175.0.25', mask: '193.174.10', interface: 'Подключение Ethernet' },
  { address: '193.175.22.32', mask: '193.174.1', interface: 'Подключение Ethernet' },
  { address: '193.175.22.33', mask: '193.174.1', interface: 'Подключение Ethernet' },
  { address: '193.175.22.34', mask: '193.174.1', interface: 'Подключение Ethernet' },
  { address: '193.175.22.35', mask: '193.174.1', interface: 'Подключение Ethernet' }
];

document.addEventListener("DOMContentLoaded", () => new TableGenerator('.table-container', data))
