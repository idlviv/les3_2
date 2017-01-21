/**
 * Created by igor on 21.01.17.
 */
window.addEventListener('load',function wLoader() {

  var get = document.querySelector('.get');
  var post = document.querySelector('.post');
  var weird = document.querySelector('.weird');
  var url = 'https://cors-test.appspot.com/test';
  var xhrG;
  var xhrP;
  var xhrW;
  var json = JSON.stringify({
    status: 'ok'
  });

  function aMethod(method, pref) {
    if (pref.status != 200){
      console.log('Помилка, статус код - ', pref.status, ', статус текст - ', pref.statusText);
      return;
    }
    if (pref.readyState != pref.DONE){
      return;
    }
    if (JSON.parse(pref.responseText).status === 'ok'){
    }
    method.classList.remove ('failed');
    method.classList.add ('ok');

  }
  xhrG = new XMLHttpRequest();
  xhrG.open ('GET', url);
  xhrG.send();
  get.innerHTML = '';
  get.classList.add ('failed');
  xhrG.addEventListener('readystatechange', function getL () {
    aMethod(get, xhrG);
  });

  xhrP = new XMLHttpRequest();
  xhrP.open ('POST', url);
  xhrP.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhrP.send(json);
  post.innerHTML = '';
  post.classList.add ('failed');
  xhrP.addEventListener('readystatechange', function postL () {
    aMethod(post, xhrP);
  });
  
  xhrW = new XMLHttpRequest();
  xhrW.open ('WEIRD', url);
  xhrW.send();
  weird.innerHTML = '';
  weird.classList.add ('failed');
  xhrW.addEventListener('readystatechange', function getL () {
    aMethod(weird, xhrW);
  });

});
