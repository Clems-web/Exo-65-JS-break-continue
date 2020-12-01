let para = document.getElementsByClassName("paragraphe");
console.log(para);

for (i = 0; i <= para.length; i++) {
    para[i].innerHTML = "paragraphe " + i;
}