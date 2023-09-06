flag = true;
    function checkWin() {
      x1 = document.getElementById('a');
      x2 = document.getElementById('b');
      x3 = document.getElementById('c');
      x4 = document.getElementById('d');
      x5 = document.getElementById('e');
      x6 = document.getElementById('f');
      x7 = document.getElementById('g');
      x8 = document.getElementById('h');
      x9 = document.getElementById('i');
      if ((x1.innerHTML === 'x') && (x2.innerHTML === 'x') && (x3.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x4.innerHTML === 'x') && (x5.innerHTML === 'x') && (x6.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x7.innerHTML === 'x') && (x8.innerHTML === 'x') && (x9.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x1.innerHTML === 'x') && (x5.innerHTML === 'x') && (x9.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x3.innerHTML === 'x') && (x5.innerHTML === 'x') && (x7.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x2.innerHTML === 'x') && (x5.innerHTML === 'x') && (x8.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x1.innerHTML === 'x') && (x4.innerHTML === 'x') && (x7.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x3.innerHTML === 'x') && (x6.innerHTML === 'x') && (x9.innerHTML === 'x')) {
        window.alert('x win');
      }
      else if ((x1.innerHTML === 'o') && (x2.innerHTML === 'o') && (x3.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x4.innerHTML === 'o') && (x5.innerHTML === 'o') && (x6.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x7.innerHTML === 'o') && (x8.innerHTML === 'o') && (x9.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x1.innerHTML === 'o') && (x5.innerHTML === 'o') && (x9.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x3.innerHTML === 'o') && (x5.innerHTML === 'o') && (x7.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x2.innerHTML === 'o') && (x5.innerHTML === 'o') && (x8.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x1.innerHTML === 'o') && (x4.innerHTML === 'o') && (x7.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if ((x3.innerHTML === 'o') && (x6.innerHTML === 'o') && (x9.innerHTML === 'o')) {
        window.alert('O win');
      }
      else if (!(x1.innerHTML === '') && !(x2.innerHTML === '') && !(x3.innerHTML === '') &&
        !(x4.innerHTML === '') && !(x5.innerHTML === '') && !(x6.innerHTML === '') &&
        !(x7.innerHTML === '') && !(x8.innerHTML === '') && !(x9.innerHTML === '')) {
        window.alert('this is a draw');
      }

      

    }
    function main1(element) {
      if (flag) {
        element.innerHTML = 'x';

      } else {
        element.innerHTML = 'o'

      }
      element.disabled = true;
      flag = !flag;
      checkWin();
    }
    function main2() {
      x1.innerHTML = ''
      x2.innerHTML = ''
      x3.innerHTML = ''
      x4.innerHTML = ''
      x5.innerHTML = ''
      x6.innerHTML = ''
      x7.innerHTML = ''
      x8.innerHTML = ''
      x9.innerHTML = ''
      flag = true;
    }