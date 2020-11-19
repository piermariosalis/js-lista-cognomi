// Lista cognomi //

// Chiedi all'utente il cognome
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
//console.log(surnameList.length);

var inputSend = document.getElementById('send');
// Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'

inputSend.addEventListener("click", function() {

    var surnameInput = document.getElementById('surname_user').value;
  
    var x = surnameList.length;
    surnameList[x] = surnameInput;
    surnameList.sort();
    console.log(surnameList);
  
    var j = 1;
  
    for (var i = 0; i < surnameList.length; i++) {
  
  
      var item = surnameList[i];
      var listContent = document.getElementById('username_list').innerHTML;
      document.getElementById('username_list').innerHTML = listContent + "<li>" + item + "</li>";
  
      if (surnameList[i] == surnameInput) {
        document.getElementById('human_position').innerHTML = "Il cognome è posizionato al posto " + j;
        console.log("Il cognome è posizionato al posto " + j);
      }
      j++;
    }
  
  });