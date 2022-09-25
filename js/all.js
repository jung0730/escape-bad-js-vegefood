const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let category = '';
let data;

const renderData = (render) => {
  let str = '';
  render.forEach((b) => {
    const content = `<tr><td>${b.作物名稱
    }</td><td>${b.市場名稱
    }</td><td>${b.上價
    }</td><td>${b.中價
    }</td><td>${b.下價
    }</td><td>${b.平均價
    }</td><td>${b.交易量
    }</td></tr>`;
    str += content;
  });
  table.innerHTML = str;
};

/* global axios */
axios.get(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    renderData(data);
  });

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    const showData = data.filter((i) => i.種類代碼 === category);
    renderData(showData);
  }
}
filter.addEventListener('click', filterCategory);
