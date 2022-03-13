// if(localStorage.getItem('hambdark') === 'true') {
//   // darkMode()
//   console.log('holilil');
//   document.getElementById('cardprimero').classList.add('hambdark');
// }

document.getElementById('minimizar').classList.add('removeminimizar');
document.getElementById('encender').classList.add('removeminimizar');
document.getElementById('encender').style.display = "none";
document.getElementById('reproductor').style.display = "none";



// textoFooter();
if(localStorage.getItem('music') === 'true') {
  document.getElementById('encender').classList.add('fa-volume-down');
  document.getElementById('encender').classList.remove('fa-volume-mute');
  document.getElementById('audio').style.display = 'flex';
  document.getElementById('minimizar').style.display = 'flex';
} else {
  document.getElementById('encender').classList.remove('fa-volume-down');
  document.getElementById('encender').classList.add('fa-volume-mute');
  document.getElementById('audio').style.display = 'none';
  document.getElementById('minimizar').style.display = 'none';
}

if(localStorage.getItem('navegacion') === 'true') {
  console.log('holas')
  document.getElementById('navegacion').classList.add('mostrarnav');
}
if(localStorage.getItem('footeractivo') === 'true') {
footer.classList.add('activo');
if(localStorage.getItem('footeractivo') === 'true')
    document.getElementById('footeractivo').classList.add('fa-window-close')
} else {
  footer.classList.remove('activo');
}
if(localStorage.getItem('dark-mode') === 'true') {    
  footer.classList.add('footerlight')
  document.getElementById('imgsobremi').classList.add('borderdark');
  document.getElementById('luna').classList.toggle('fa-sun')
  document.getElementById('minimizar').classList.toggle('variantehambdark')
  } else {
    document.getElementById('minimizar').classList.remove('variantehambdark')
    document.getElementById('imgsobremi').classList.remove('borderdark');

  }

function darkMode() {

  if(localStorage.getItem('music') === 'true') {
    document.getElementById('encender').classList.add('fa-volume-down');
    document.getElementById('encender').classList.remove('fa-volume-mute');
    document.getElementById('audio').style.display = 'flex';
    document.getElementById('minimizar').style.display = 'flex';
  } else {
    document.getElementById('encender').classList.remove('fa-volume-down');
    document.getElementById('encender').classList.add('fa-volume-mute');
    document.getElementById('audio').style.display = 'none';
    document.getElementById('minimizar').style.display = 'none';
  }

  const sol = document.getElementById('luna')
  sol.classList.toggle('fa-sun');

    document.querySelector('.far');
    document.body.classList.toggle('dark-mode');
    document.querySelector('.titulo')
    document.body.classList.toggle('titulocolor');

    const mute = document.getElementById('encender')
    mute.classList.toggle('hambdark')

    const cv = document.getElementById('cv1');
    cv.classList.toggle('textcvdark');

    const minimizar = document.getElementById('minimizar')
    minimizar.classList.toggle('variantehambdark')

    const audio = document.getElementById('audio')
    audio.classList.toggle('audiodark');
    
    const darkBtn = document.querySelector('.fas')
    darkBtn.classList.toggle('hambdark');

    const darkBtnLuna = document.querySelector('.far')
    darkBtnLuna.classList.toggle('hambdark');

    const cvBorderDark = document.querySelector('.imagensobremi');
    cvBorderDark.classList.toggle('borderdark');

    const logosBtn = document.querySelector('.fa-linkedin')
    logosBtn.classList.toggle('hambdark2');
    const logosBtn2 = document.querySelector('.fa-instagram-square')
    logosBtn2.classList.toggle('hambdark2');

    const footer = document.getElementById('footer')
    footer.classList.toggle('footerlight')

    const logoFace = document.getElementById('face')
    logoFace.classList.toggle('hambdark2');

    const navitem = document.querySelector('.navitem1');
    navitem.classList.toggle('hambdark');

    const borderCard = document.getElementById('cardprimero');
    borderCard.classList.toggle('hambdark');

    const borderCard1 = document.getElementById('1');
    borderCard1.classList.toggle('hambdark');

    const borderCard2 = document.getElementById('2');
    borderCard2.classList.toggle('hambdark');

    const borderCard3 = document.getElementById('3');
    borderCard3.classList.toggle('hambdark');

    const borderCard4 = document.getElementById('4');
    borderCard4.classList.toggle('hambdark');

    const borderCard5 = document.getElementById('5');
    borderCard5.classList.toggle('hambdark');

    const borderCard6 = document.getElementById('6');
    borderCard6.classList.toggle('hambdark');

    const navitem3 = document.querySelector('.navitem3');
    navitem3.classList.toggle('hambdark');    

    const navitem4 = document.querySelector('.navitem4');
    navitem4.classList.toggle('hambdark');

     // Guardar LocalStorage
    //BODY 
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
      } else {
        localStorage.setItem('dark-mode', 'false');
      } 

      //MUSICA 
      if (document.getElementById('audio').classList.contains('audiodark')) {
        localStorage.setItem('fondoreproductor', 'true');
      } else {
        localStorage.setItem('fondoreproductor', 'false');
      }

      if(localStorage.getItem('fondoreproductor') === 'true') {
        document.getElementById('audio').classList.add('audiodark')
        document.getElementById('audio').classList.remove('audiolight')
      } else {
        document.getElementById('audio').classList.remove('audiodark')
        document.getElementById('audio').classList.add('audiolight')
      }

      //COMODIN BorderDark
      if (document.getElementById('linkedin').classList.contains('borderdark')) {
        localStorage.setItem('borderdark', 'true');
      } else {
        localStorage.setItem('borderdark', 'false');
      }
      //TEXTO CV
      if(document.getElementById('cv1').classList.contains('textcvdark')) {
      localStorage.setItem('cv', 'true');
      } else {
      localStorage.setItem('cv', 'false');
      }

      //TITULO 
      if (document.body.classList.contains('titulocolor')) {
        localStorage.setItem('titulocolor', 'true');
      } else {
        localStorage.setItem('titulocolor', 'false');
      }
      //IMGSOBREMI
      if (document.getElementById("imgsobremi").classList.contains('borderdark')) {
        localStorage.setItem('borderdark', 'true');
      } else {
        localStorage.setItem('borderdark', 'false');
      }
      //ITEM 1 NAVEGADOR
      if(document.getElementById('item1').classList.contains('hambdark')) {
        localStorage.setItem('navitem1', 'true');
      } else {
        localStorage.setItem('navitem1', 'false');
      }
      // //ITEM 2 NAVEGADOR
      // if(document.getElementById('item2').classList.contains('hambdark')) {
      //   localStorage.setItem('navitem2', 'true');
      // } else {
      //   localStorage.setItem('navitem2', 'false');
      // }
      //ITEM 3 NAVEGADOR
      if(document.getElementById('item3').classList.contains('hambdark')) {
        localStorage.setItem('navitem3', 'true');
      } else {
        localStorage.setItem('navitem3', 'false');
      }
      //ITEM 4 NAVEGADOR
      if(document.getElementById('item4').classList.contains('hambdark')) {
        localStorage.setItem('navitem4', 'true');
      } else {
        localStorage.setItem('navitem4', 'false');
      }
      //LUNA 
      if(document.getElementById('luna').classList.contains('hambdark')) {
        localStorage.setItem('luna', 'true');
      } else {
        localStorage.setItem('luna', 'false');
      }
      //MENU HAMBURGUESA
      if(document.getElementById('hamburguesa').classList.contains('hambdark')) {
        localStorage.setItem('hamburguesa', 'true');
      } else {
        localStorage.setItem('hamburguesa', 'false');
      }
      //LOGO LINKEDIN
      if(document.getElementById('linkedin').classList.contains('hambdark2')) {
        localStorage.setItem('linkedin', 'true');
      } else {
        localStorage.setItem('linkedin', 'false');
      }
      //LOGO INSTAGRAM
      if(document.getElementById('instagram').classList.contains('hambdark2')) {
        localStorage.setItem('instagram', 'true');
      } else {
        localStorage.setItem('instagram', 'false');
      }
      //LOGO FACE
      if(document.getElementById('face').classList.contains('hambdark2')) {
        localStorage.setItem('face', 'true');
      } else {
        localStorage.setItem('face', 'false');
      }

      // DESCARGA HAMBDARK
      //CARD 
    if(document.getElementById('cardprimero').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    //CARD 1
    if(document.getElementById('1').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    // CARD 2
    if(document.getElementById('2').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    // CARD 3
    if(document.getElementById('3').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    // CARD 4
    if(document.getElementById('4').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }// CARD 5
    if(document.getElementById('5').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    // CARD 6
    if(document.getElementById('6').classList.contains('hambdark')) {
      localStorage.setItem('hambdark', 'true');
    } else {
      localStorage.setItem('hambdark', 'false');
    }
    }

// Obtener Local Storage 

// BODY
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('encender').classList.add('hambdark');
    document.getElementById('audio').classList.remove('audiolight');
    document.getElementById('audio').classList.add('audiodark');
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('encender').classList.remove('hambdark');
    document.getElementById('audio').classList.add('audiolight');
    document.getElementById('audio').classList.remove('audiodark');
  }
  // TITULO
  if(localStorage.getItem('titulocolor') === 'true') {
    document.body.classList.add('titulocolor')
    } else {
      document.body.classList.remove('titulocolor')
    }
    //COMODIN borderdark
    if(localStorage.getItem('borderdark') === 'true') {
    document.getElementById("linkedin").classList.add('borderdark')
    } else {
    document.getElementById("linkedin").classList.remove('borderdark')
    }
    //IMGSOBREMI
    if(localStorage.getItem('borderdark') === 'true') {
    document.getElementById("imgsobremi").classList.add('borderdark')
    } else {
    document.getElementById("imgsobremi").classList.remove('borderdark')
    }
  //ITEM 1 NAVEGADOR
  if(localStorage.getItem('navitem1') === 'true') {
    document.getElementById("item1").classList.add('hambdark')
    } else {
      document.getElementById("item1").classList.remove('hambdark')
    }
  // //ITEM 2 NAVEGADOR
  // if(localStorage.getItem('navitem2') === 'true') {
  //   document.getElementById("item2").classList.add('hambdark')
  //   } else {
  //     document.getElementById("item2").classList.remove('hambdark')
  //   }
  //ITEM 3 NAVEGADOR
  if(localStorage.getItem('navitem3') === 'true') {
    document.getElementById("item3").classList.add('hambdark')
    } else {
      document.getElementById("item3").classList.remove('hambdark')
    }
  //ITEM 4 NAVEGADOR
  if(localStorage.getItem('navitem4') === 'true') {
    document.getElementById("item4").classList.add('hambdark')
    } else {
      document.getElementById("item4").classList.remove('hambdark')
    }
  //LUNA
  if(localStorage.getItem('luna') === 'true') {
    document.getElementById('luna').classList.add('hambdark')
  } else {
    document.getElementById('luna').classList.remove('hambdark')
  }
  //HAMBURGUESA
  if(localStorage.getItem('hamburguesa') === 'true') {
    document.getElementById('hamburguesa').classList.add('hambdark')
  } else {
    document.getElementById('hamburguesa').classList.remove('hambdark')
  }
  // LOGO LINKEDIN
  if(localStorage.getItem('linkedin') === 'true') {
    document.getElementById('linkedin').classList.add('hambdark2')
  } else {
    document.getElementById('linkedin').classList.remove('hambdark2')
  }
  //LOGO INSTAGRAM
  if(localStorage.getItem('instagram') === 'true') {
    document.getElementById('instagram').classList.add('hambdark2')
  } else {
    document.getElementById('instagram').classList.remove('hambdark2')
  }
  //TEXTO CV
if(localStorage.getItem('cv') === 'true') {
  // document.getElementById('cv1').classList.remove('textcv');
  document.getElementById('cv1').classList.add('textcvdark');
} else {
  // document.getElementById('cv1').classList.add('textcv');
  document.getElementById('cv1').classList.remove('textcvdark');
}
  //FACE
  if(localStorage.getItem('face') === 'true') {
    document.getElementById('face').classList.add('hambdark2')
  } else {
    document.getElementById('face').classList.remove('hambdark2')
  }
  // CARD
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('cardprimero').classList.add('hambdark')
} else {
  document.getElementById('cardprimero').classList.remove('hambdark')
}
// CARD 1
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('1').classList.add('hambdark')
} else {
  document.getElementById('1').classList.remove('hambdark')
}
// CARD 2
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('2').classList.add('hambdark')
} else {
  document.getElementById('2').classList.remove('hambdark')
}
// CARD 3
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('3').classList.add('hambdark')
} else {
  document.getElementById('3').classList.remove('hambdark')
}
// CARD 4
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('4').classList.add('hambdark')
} else {
  document.getElementById('4').classList.remove('hambdark')
}
// CARD 5
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('5').classList.add('hambdark')
} else {
  document.getElementById('5').classList.remove('hambdark')
}
// CARD 6
if(localStorage.getItem('hambdark') === 'true') {
  document.getElementById('6').classList.add('hambdark')
} else {
  document.getElementById('6').classList.remove('hambdark')
}
  

function mostrarMenuResponsive() {   
  const hambBtn = document.querySelector('.navegacion');
  hambBtn.classList.toggle('mostrarnav');

  if (document.querySelector('.navegacion').classList.contains('mostrarnav')){
    localStorage.setItem('navegacion', 'true');
    console.log('Joyaa');
  } else {
    localStorage.setItem('navegacion', 'false');
  }

  // Obtener Storage 
  if(localStorage.getItem('navegacion') === 'true') {
    document.getElementById('navegacion').classList.add('mostrarnav')
  } else {
    document.getElementById('navegacion').classList.remove('mostrarnav')
  }
 }

function routingHome() {
 console.log('entrooo')
 window.location = "/index.html";
}
function direccionarLinkedin() {
    window.open ('https://www.linkedin.com/in/agustin-trezza-920a5358/.com', '_blank');
  }
  
  function direccionarInstagram() {
    window.open ('https://www.instagram.com/agustintrezza/?hl=es-la', '_blank');
  }

// Boton Flotante con el footer
const btnFlotante = document.querySelector('.btn-flotante');

btnFlotante.addEventListener('click', function() {
  console.log('esta andando');

    const ojo = document.getElementById('footeractivo')
    ojo.classList.toggle('fa-window-close');

    const footer = document.querySelector('.footer');


    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        // this.innerText = 'CONTACTO';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        // this.innerText = 'X OCULTAR';
    }
    if (document.body.classList.contains('dark-mode')){
      console.log('hola');
      document.getElementById('footer').classList.add('footerlight')
    } else {
        console.log('no');
        document.getElementById('footer').classList.remove('footerlight');
    }

    //Guardar en Local Storage

    if (document.getElementById('footeractivo').classList.contains('activo')){
      localStorage.setItem('footeractivo', 'true') 
   } else {
     localStorage.setItem('footeractivo', 'false')
   }  

   // Obtener del Storage
   if(localStorage.getItem('footeractivo') === 'true') {
    footer.classList.add('activo');
    } else {
      footer.classList.remove('activo');
    }
});



// ENCENDER AUDIO
// document.getElementById('audio').style.display = 'none';
// document.getElementById('minimizar').style.display = 'none';

function encenderAudio() {
  const mute = document.getElementById('encender')
  mute.classList.toggle('fa-volume-down')

  if (document.getElementById('encender').classList.contains('fa-volume-down')){
    localStorage.setItem('music', 'true') 
 } else {
   localStorage.setItem('music', 'false')
 }

 // Obtener del Storage
 if(localStorage.getItem('music') === 'true') {
  document.getElementById('encender').classList.add('fa-volume-down');
  document.getElementById('encender').classList.remove('fa-volume-mute');
  document.getElementById('audio').style.display = 'flex';
  document.getElementById('minimizar').style.display = 'flex';

  audio.play();
  } else {
  document.getElementById('encender').classList.remove('fa-volume-down');
  document.getElementById('encender').classList.add('fa-volume-mute');
  document.getElementById('audio').style.display = 'none';
  document.getElementById('minimizar').style.display = 'none';
  audio.pause();

  }
  }


  // MINIMIZAR AUDIO
  // document.getElementById('minimizar').style.display = 'none';

  function minimizarAudio() {
    console.log('Holiiii');
    document.getElementById('audio').style.display ='none';
     
    document.getElementById('minimizar').classList.toggle('positivo');

    if(document.getElementById('minimizar').classList.contains('positivo')) {
      document.getElementById('minimizar').classList.add('fa-plus')
    } else {
      document.getElementById('minimizar').classList.remove('fa-plus')
      document.getElementById('audio').style.display ='flex';
    }
    if(localStorage.getItem('dark-mode') === 'true') { 

  }
  }
  