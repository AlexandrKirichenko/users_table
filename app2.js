 const sum = [...document.querySelectorAll('tr > td:last-child')].map(el => Number(el.innerHTML)).reduce((acc, el) => acc+el,0) //превратили в массив, и суммируем Salary
 console.log(sum);

 const html = document.createElement('div');
 html.innerText = sum + '$';
// document.getElementsByClassName('col-12')[0].appendChild(html);
document.querySelector('table > tbody > tr:last-child > td:last-child').appendChild(html);
// document.querySelector('table > tbody > tr:last-child > td:last-child')
// .innerText = sum + '$';

const users = [
    {name: 'Mark', gender: 'male', salary: '1500'},
    {name: 'Igor', gender: 'male', salary: '500'},
    {name: 'Anna', gender: 'female', salary: '1000'},
    {name: 'John', gender: 'male', salary: '2100'},
    {name: 'Oleh', gender: 'male', salary: '3000'},
    {name: 'Mary', gender: 'female', salary: '1500'},
    {name: 'Pit', gender: 'male', salary: '750'},
    {name: 'Bred', gender: 'male', salary: '1050'},
    {name: 'Tom', gender: 'male', salary: '1500'},
    {name: 'Jery', gender: 'female', salary: '1800'},
    {name: 'Serj', gender: 'male', salary: '2000'},
];
// Пробуем сгенерировать(получить) массив 
{/* <tr>
<th scope="row">1</th> 
<td>Mark</td>
<td>male</td>
<td>1500</td>
</tr> */}

const innerTablesRows = users.map((el,i) => {
    const tr = document.createElement('tr'); //наружная обертка

    const index = document.createElement('th');//т.е. мы каждую th или td запихнем в переменные
    index.innerText = i + 1;
    tr.appendChild(index);

    const name = document.createElement('td');
    name.innerText =el.name;
    tr.appendChild(name);

    const gender = document.createElement('td');
    gender.innerText = el.gender;
    tr.appendChild(gender);

    const salary = document.createElement('td');
    salary.innerText = el.salary;
    tr.appendChild(salary);

    return tr;
})
// map испульзуем потому, что нам надо вернуть массив внутренностей этой таблицы, 
// мы берем наш элемент, это наш человечек наш юзер каждый
const tbody = document.createElement('tbody');
innerTablesRows.map(el => tbody.appendChild(el));
/* <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Salary</th>
                      </tr>
</thead> */
const tr = document.createElement('tr');
const index = document.createElement('th');
    tr.appendChild(index);

    const name = document.createElement('th');
    name.innerText ='Name';
    tr.appendChild(name);

    const gender = document.createElement('th');
    gender.innerText = 'Gender';
    tr.appendChild(gender);

    const salary = document.createElement('th');
    salary.innerText = 'Salary';
    tr.appendChild(salary);

const thead = document.createElement('thead');
thead.appendChild(tr);

const table = document.createElement('table');
table.appendChild(thead);
table.appendChild(tbody);

document.getElementsByClassName('col-12')[0].appendChild(table);
