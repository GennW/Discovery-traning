// подключение cusomSelect
customSelect('select');

//подключение календаря 

const picker = new easepick.create({
    element: document.getElementById('when'),
    css: [
      './libs/easepick/index.css',
    ],
  });