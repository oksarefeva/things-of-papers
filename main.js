i18next
    .use(i18nextHttpBackend)
    .init({
        lng: 'en',
        fallbackLng: 'cs',
        backend: {
            loadPath: 'locales/{{lng}}/translation.json'
        }
    })
    .then(() => {
        updateContent();
        console.log('lang:', lng);
    });

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
        console.log('jazyk:', i18next.t(key))
    });
}

document.querySelectorAll('.dropdown-item')
    .forEach(item => {
        item.addEventListener('click', e => {
            i18next.changeLanguage(e.currentTarget.dataset.lang).then(updateContent);
        });
    });