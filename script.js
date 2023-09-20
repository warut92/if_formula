
// ฟังก์ชันค้นหาสตริง (ชื่อเซลล์เดิม)
// เซลล์ หมายถึง เซลล์ในโปรแกรม Excel

let con_num;
let con_ex;
let cell_name;

function genConditions() {
  con_num = document.getElementById('conNum').value;
  con_ex = document.getElementById('conEx').value;
  cell_name = document.getElementById('cellName').value;
  let myConInputTag = '<input type=\"text\" class=\"firstValue\">' + '<input value=\"'+ con_ex + '\">' + '<input class="conVal">' + '<br>'
    myConInputTag = myConInputTag.repeat(con_num)
    console.log('MYCONINPUTTAG', myConInputTag)
  document.getElementById('ConDiv').innerHTML = myConInputTag;
}

function genFormula() {

  let if_formula = "="
  let body_formula = ""
  let firstValue_node = document.querySelectorAll('.firstValue');
  let conVal_node = document.querySelectorAll('.conVal');
  for (let i = 0; i < firstValue_node.length; i++) {
    body_formula += "IF(" + cell_name + con_ex + firstValue_node[i].value + "," + conVal_node[i].value + ","
  }

  let close_formula = ")"
  close_formula = close_formula.repeat(con_num)
  let complete_formula = if_formula + body_formula + "\"\"" + close_formula

  document.getElementById('formula').innerHTML = complete_formula;
}

document.addEventListener('input', function(e) {
  genFormula()
});

 // เรียกสูตรปัจจุบัน สำหรับฟังก์ชันรีเซต
function reset() {
  document.getElementById('formula').innerHTML = "โปรดกรอกข้อมูลให้สมบูรณ์"
 }


 function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("formula");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  document.getElementById("alert").innerHTML = "คัดลอก!!: " + copyText.value;
}
