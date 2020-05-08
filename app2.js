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

const createElement = (tag, content, className=null) => {
    const element = document.createElement(tag);
    if(typeof content === 'object'){
        element.appendChild(content)
    }else{
        element.innerText = content;
    }
    element.className = className?className:'';
    return element;
}

const appendArray = (htmlEl, arrayEls) => {
    arrayEls.map(el => htmlEl.appendChild(el))
    return htmlEl;
}

const button = createElement('button','Delete','btn-btn-danger');

const innerTablesRows = users.map((el,i) => {
    return appendArray(
    document.createElement('tr'),
    [
        {tag:'th', value:i + 1},
        {tag:'td', value:el.name},
        {tag:'td', value:el.gender},
        {tag:'td', value:el.salary},
        {tag:'td', value:createElement('button','Delete','btn-btn-danger')}
    ].map(el => createElement(el.tag,el.value))
    );
});

const tbody = document.createElement('tbody');
innerTablesRows.map(el => tbody.appendChild(el));

const tr = appendArray(document.createElement('tr'),[
    '#','Name','Gender','Salary','Action',
]
    .map(el => createElement('th',el))
);

const thead = appendArray(document.createElement('thead'),[tr]);

const table = appendArray(createElement('table','','table'),[thead,tbody]);

document.getElementsByClassName('col-12')[0].appendChild(table);

document.querySelector('button')
.addEventListener('click', () => {
    console.log('click')
})
