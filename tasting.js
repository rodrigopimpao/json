"use strict";

function toggleRecModal() {
  $('#rec_modal_container').toggleClass('closed opened');
}
$(document).on('keyup', function (e) {
  if (e.key == "Escape") {
    if ($('#rec_modal_container').hasClass('opened')) {
      $('#rec_modal_container').toggleClass('closed opened');
    }
  }
});
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var cd = urlParams.get('cd');
$(document).ready(function () {
  $("head").append("<style>#myDIV,#rec_modal_container{top:0;z-index:100!important}#myDIV,.flutuar{position:fixed;right:0}#rec_modal_container{position:fixed;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;transition:opacity .2s}#rec_modal_container.closed{display:none;opacity:0}#rec_modal_container.open{display:flex;opacity:1}#myDIV{background-color:#394162;width:30%;height:100%}@media(max-width:768px){.text-margin{margin-left:0px!important}.bla{width:100vw!important;overflow-y:auto}}.fundo{background-color:#0ff}.fcards{background-color:#1d2339;color:#fff}.card,.fecha{background-color:transparent!important}.fcard{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='red' class='bi bi-box-arrow-up-right' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'/%3E%3Cpath fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position-y:top;background-position-x:right}.card{padding:0!important;width:100%!important;margin:0!important}.rosa{color:#f27979!important}.fechar{color:#fff}.flutuar{width:16px;height:16px}.card-img-top{width:100%;background-size: 100% 100%}.centered {color:#fff;display:flex;height:100%;width:100%;justify-content:center;align-items:center;}.text-margin{margin-left:20px}</style>");
  $("body").append('<div id="rec_modal_container" class="closed"> <div class="album bla py-2 px-2" id="myDIV"> <div class="container"> <div class="row g-3"> <div class="fecha"><a class="rosa" onclick="toggleRecModal()" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style="cursor: pointer !important;" class="bi bi-x-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></a></div><div class="fechar"> <h4><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clipboard-check-fill rosa" viewBox="0 0 16 16"> <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/> </svg> Títulos semelhantes</h4> </div></div><div id="conteudo-especial" class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3"> </div><div id="conteudo-geral" class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style="margin-top:0.5rem ;"> </div><div class="row py-3"> <div class="fechar"> <h4><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search-heart-fill rosa" viewBox="0 0 16 16"> <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/> </svg> Outros títulos:</h4> </div></div><div id="conteudo-extra" class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3"> </div></div></div></div><button type="button" class="btn voar" onclick="toggleRecModal()" style="position: fixed; top:15%;right: 0.1%;"> <img src="https://catalogcdns3.ulife.com.br/DisciplineFiles/icons/desperta.png"/></button>');
  fetch("https://raw.githubusercontent.com/rodrigopimpao/json/master/tasting.json").then(function (mockResponses) {
    return mockResponses.json();
  }).then(function (diarios) {
    diarios = diarios[0];
    var findUserById = function findUserById(id) {
      var key = Object.keys(diarios.diarios).find(function (diario) {
        if (diarios.diarios[diario].id == id) {
          return diario;
        }
      });
      return diarios.diarios[key];
    };
    var diario = findUserById(cd);
    if (diario) {
      var r = /\d+/;
      var myList = [];
      
      $('select option').each(function () {
        var atual = diario.disciplines[$(this).val().match(r)];
        //console.log(''+$(this).val().match(r));
        if (atual && atual.link_ecom) {
          //console.log(''+$(this).val().match(r));
          delete atual.link_ecom;
        }
      });
      var sorted = Object.keys(diario.disciplines).sort(function (a, b) {
        if (diario.disciplines[a].perc > diario.disciplines[b].perc) {
          return -1;
        }
      });
      var count = 0;
      sorted.forEach(function (discipline) {
        var contentModal = '';
        var link = '';
        var textImg = '';
        if (diario.disciplines[discipline].link_ecom) {
          link = diario.disciplines[discipline].link_ecom;
        } else {
          link = diario.disciplines[discipline].link_disc;
        }
        if (!diario.disciplines[discipline].img) {
          textImg = diario.disciplines[discipline].titulo;
        }
        if (count == 0) {
          contentModal = '<div class="col"><div class="card shadow-sm borda-cima"><a href="' + link + '" target="_blank" class="card-img-top" style="background-image:url(' + diario.disciplines[discipline].img + '), linear-gradient(#2f54d3, #2748b9); height: 150px;"><div class="card-text centered">' + textImg + '</div></a><div class="card-body fcards"><div class="fcard"><p class="card-text" style="color:#6bbb39 ;"><b>Semelhança:</b> ' + diario.disciplines[discipline].perc + '%</p><p class="card-text">' + diario.disciplines[discipline].titulo + '</p></div></div></div></div>';
          $('#conteudo-especial').html(contentModal);
        } else {
          if (count < 3) {
            contentModal = '<div class="col"><div class="card shadow-sm borda-cima"><a href="' + link + '" target="_blank" class="card-img-top" style="background-image:url(' + diario.disciplines[discipline].img + '), linear-gradient(#2f54d3, #2748b9); height: 100px;"><div class="card-text centered text-margin">' + textImg + '</div></a><div class="card-body fcards"><div class="fcard"><p class="card-text" style="color:#6bbb39 ;"><b>Semelhança:</b> ' + diario.disciplines[discipline].perc + '%</p><p class="card-text">' + diario.disciplines[discipline].titulo + '</p></div></div></div></div>';
            $('#conteudo-geral').append(contentModal);
          } else {
            if (count < 5) {
              contentModal = '<div class="col"><div class="card shadow-sm borda-cima"><a href="' + link + '" target="_blank" class="card-img-top" style="background-image:url(' + diario.disciplines[discipline].img + '), linear-gradient(#2f54d3, #2748b9); height: 100px;"><div class="card-text centered text-margin">' + textImg + '</div></a><div class="card-body fcards"><div class="fcard"><p class="card-text" style="color:#6bbb39 ;"><b>Semelhança:</b> ' + diario.disciplines[discipline].perc + '%</p><p class="card-text">' + diario.disciplines[discipline].titulo + '</p></div></div></div></div>';
              $('#conteudo-extra').append(contentModal);
            }
          }
        }
        count++;
      });
    } else {
      var contentModal = '<p>Não há recomendações para esse curso</p>';
      $("#myDIV").html(contentModal);
    }
  });
});