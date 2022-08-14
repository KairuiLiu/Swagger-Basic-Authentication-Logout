chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if (document.getElementById('swagger-ui') == null) {
    response(false);
    return;
  }
  if (window[Symbol.for('Swagger-Basic-Authentication-Logout')]) return;
  response(true);

  new Promise((resolve) => {
    const interval = setInterval(() => {
      if (document.querySelector('.operation-tag-content')) {
        resolve();
        clearInterval(interval);
      }
    }, 1000);
  }).then(() => {
    window[Symbol.for('Swagger-Basic-Authentication-Logout')] = true;
    const apiInfo = Array.from(
      document.querySelector('.operation-tag-content').children
    ).map((d, i) => ({
      href: null,
      method: d
        .querySelector('.opblock-summary-method')
        .innerText.toLowerCase(),
      button: getButton(i),
      apiContent: d,
    }));

    function tryLogout(idx) {
      const button = apiInfo[idx].button;
      button.innerText = 'Logout...';
      button.disabled = true;
      fetch(apiInfo[idx].href, {
        method: apiInfo[idx].method,
        headers: {
          Authorization: 'Basic ' + btoa('log:out'),
        },
      })
        .then(
          (d) => {
            button.innerText = d.status == '401' ? 'OK!' : 'Error!';
            return;
          },
          () => (button.innerText = 'Request Failed!')
        )
        .then(() => {
          setTimeout(() => {
            button.innerText = 'Logout';
            button.disabled = false;
          }, 1000);
        });
    }

    function getButton(idx) {
      const button = document.createElement('button');
      button.innerText = 'Logout';
      button.onclick = tryLogout.bind(null, idx);
      button.className = 'btn try-out__btn try-logout hidden';
      return button;
    }

    function update() {
      apiInfo.forEach((d, i) => {
        if (!d.apiContent.querySelector('.request-url pre')) return;
        const tryout = d.apiContent.querySelector('.try-out');
        if (tryout.children.length === 1) tryout.appendChild(d.button);
        const code = Number.parseInt(
          d.apiContent.querySelector('.response .response-col_status')
            .innerText,
          10
        );
        d.button.classList.add('hidden');
        if (!(400 <= code && code < 500)) {
          d.href = d.apiContent.querySelector('.request-url pre').innerText;
          d.button.classList.remove('hidden');
        }
      });
    }
    setInterval(update, 1000);
  });
});
