// apogee
var v_apo1 = 0;
var v_apo2 = 0;
var v_apo3 = 0;
var v_apo4 = 0;
var v_apo5 = 0;
var c_apo1 = document.querySelector(".apo1");
var c_apo2 = document.querySelector(".apo2");
var c_apo3 = document.querySelector(".apo3");
var c_apo4 = document.querySelector(".apo4");
var c_apo5 = document.querySelector(".apo5");
var return_types = [];
// form
var form = document.querySelector('#form');
// tableau
var table = document.querySelector('#tbody');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let datas = getFormDatas();
    table.append( addLine(datas) );
    v_apo1++;
    updateApo();
});

function getFormDatas() {
    return [
        form.querySelector('#id1').value,
        form.querySelector('#id2').value,
        form.querySelector('#id3').value,
        form.querySelector('#id4').value,
    ];
}

function addLine(datas) {
    let line = document.createElement('tr');
    line.setAttribute('id', 'line_'+v_apo1);
    let cell1 = document.createElement('td');
    cell1.innerHTML = datas[0];
    line.append(cell1);
    let cell2 = document.createElement('td');
    cell2.innerHTML = datas[1];
    v_apo4 += parseInt(datas[1]);
    line.append(cell2);
    let cell3 = document.createElement('td');
    cell3.innerHTML = datas[2];
    line.append(cell3);
    let cell4 = document.createElement('td');
    cell4.classList.add('returntype');
    cell4.innerHTML = datas[3];
    addType(datas[3]);
    line.append(cell4);
    let actions = document.createElement('td');
    let del_btn = document.createElement('button');
    del_btn.innerText = "DEL";
    del_btn.addEventListener('click', function(event){
        event.preventDefault();
        delLine(this.parentNode.parentNode.getAttribute('id'));
    });
    actions.append(del_btn);
    v_apo2 += countWords(datas[0]);
    v_apo2 += countWords(datas[2]);
    v_apo2 += countWords(datas[3]);
    v_apo3 += countLetters(datas[0]);
    v_apo3 += countLetters(datas[2]);
    v_apo3 += countLetters(datas[3]);
    line.append(actions);
    return line;
}

function updateApo() {
    c_apo1.innerHTML = v_apo1;
    c_apo2.innerHTML = v_apo2;
    c_apo3.innerHTML = v_apo3;
    c_apo4.innerHTML = v_apo1 != 0 ? v_apo4 / v_apo1 : 0;
    c_apo5.innerHTML = v_apo5;
}

function delLine(id) {
    let line = table.querySelector('#'+id);
    datas = line.querySelectorAll('td');
    v_apo2 -= countWords(datas[0].innerHTML);
    v_apo2 -= countWords(datas[2].innerHTML);
    v_apo2 -= countWords(datas[3].innerHTML);
    v_apo3 -= countLetters(datas[0].innerHTML);
    v_apo3 -= countLetters(datas[2].innerHTML);
    v_apo3 -= countLetters(datas[3].innerHTML);
    v_apo4 -= parseInt(datas[1].innerHTML);
    removeType(datas[3].innerHTML);
    line.remove();
    v_apo1--;
    updateApo();
}

function countWords(data) {
    data = data.toString().replace(/(^\s*)|(\s*$)/gi,"");
    data = data.toString().replace(/[ ]{2,}/gi," ");
    data = data.toString().replace(/\n /,"\n");
    return data.split(' ').length;
}

function countLetters(data) {
    data = data.toString().replace(/(^\s*)|(\s*$)/gi,"");
    data = data.toString().replace(/[ ]{2,}/gi,"");
    data = data.toString().replace(/\n /,"\n");
    return data.length;
}

function addType(datas) {
    if( !return_types.includes(datas) ) {
        return_types.push(datas);
    }
    v_apo5 = return_types.length;
    updateApo();
    return true
}

function removeType(data) {

    let tds = table.querySelectorAll(".returntype");
    let count = 0;

    tds.forEach(td => {
        if(td.innerText == data) { count++ }
    })

    if(count <= 1) {
        return_types.pop(data);
        v_apo5 = return_types.length;
        updateApo();
    }
}


// initialisation
updateApo();


