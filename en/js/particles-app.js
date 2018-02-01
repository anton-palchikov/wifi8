/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */



const conf_1 = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "move": {
      "enable": true,
      "speed": .5,
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#11c7ef",
      "opacity": 0.4,
      "width": 2
    },
    "color": {
      "value": "#11c7ef"
    }
  }
};
const conf_2 = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "move": {
      "enable": true,
      "speed": .5,
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#11c7ef",
      "opacity": 0.4,
      "width": 2
    },
    "color": {
      "value": "#11c7ef"
    }
  }
};
const conf_3 = {
  "particles": {
    "number": {
      "value": 320,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "move": {
      "enable": true,
      "speed": 2,
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#11c7ef",
      "opacity": 0.4,
      "width": 2
    },
    "color": {
      "value": "#11c7ef"
    }
  }
};
const conf_4 = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "move": {
      "enable": true,
      "speed": .5,
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#11c7ef",
      "opacity": 0.4,
      "width": 2
    },
    "color": {
      "value": "#11c7ef"
    }
  }
};


let conf = [
  conf_1,
  conf_2,
  conf_3,
  conf_4,
];

let elems = document.querySelectorAll('.particles-js');

elems.forEach(function (item, i, arr) {

  item.setAttribute('id', 'particles-js-' + i);

  let pJSfunc = particlesJS('particles-js-' + i, conf[i]);

});