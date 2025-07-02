 let fila = [];

    function atualizarFila() {
      $('#fila').empty();
      $.each(fila, function (i, item) {
        $('#fila').append('<li>' + item + '</li>');
      });
    }

    $('#adicionar').click(function () {
      const valor = $('#item').val().trim();
      if (valor) {
        fila.push(valor); // entra no fim da fila
        $('#item').val('');
        atualizarFila();
      }
    });

    $('#remover').click(function () {
      if (fila.length > 0) {
        fila.shift(); // remove da frente
        atualizarFila();
      } else {
        alert("Fila vazia!");
      }
    });

    // Enter para adicionar
    $('#item').keypress(function (e) {
      if (e.which === 13) {
        $('#adicionar').click();
      }
    });