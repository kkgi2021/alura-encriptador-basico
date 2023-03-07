const btCriptografar = document.getElementById("bt-criptografar")
btCriptografar.onclick = criptografar

const btDescriptografar = document.getElementById("bt-descriptografar")
btDescriptografar.onclick = descriptografar

const btCopiar = document.getElementById("bt-copiar")
btCopiar.onclick = copiar

resultadoOnOff()

function resultadoOnOff() {
  let resultado = document.getElementById("criptografia")
  if (resultado.value == "") {
    document.querySelector(".cripto-on").style.display = "none"
    document.querySelector(".cripto-off").style.display = "block"
  } else {
    document.querySelector(".cripto-off").style.display = "none"
    document.querySelector(".cripto-on").style.display = "block"
  }
}

function criptografar() {
  let codigo = document.getElementById("criptografia")
  if (codigo.value != "") {
    codigo = codigo.value.replace(/e/g, "enter")
    codigo = codigo.replace(/i/g, "imes")
    codigo = codigo.replace(/a/g, "ai")
    codigo = codigo.replace(/o/g, "ober")
    codigo = codigo.replace(/u/g, "ufat")
    document.querySelector("#resultado").value = codigo
    resultadoOnOff()
    document.querySelector("#criptografia").value = ""
  }
}

function descriptografar() {
  let codigo = document.getElementById("criptografia")
  if (codigo.value != "") {
    codigo = codigo.value.replace(/enter/g, "e")
    codigo = codigo.replace(/imes/g, "i")
    codigo = codigo.replace(/ai/g, "a")
    codigo = codigo.replace(/ober/g, "o")
    codigo = codigo.replace(/ufat/g, "u")
    document.querySelector("#resultado").value = codigo
    resultadoOnOff()
    document.querySelector("#criptografia").value = ""
  }
}

function copiar() {
  let copiar = document.getElementById("resultado")
  copiar.select()
  copiar.setSelectionRange(0, 99999)
  document.execCommand("copy")
  document.querySelector("#resultado").value = ""
  resultadoOnOff()
}
