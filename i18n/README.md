# i18n

Each time you add a new language, you should run the utilities in this folder, and update the appropriate files.

## Translating

Translations are taken from spreadsheets in Google Sheets on the [haveyougotpaper@gmail.com](mailto:haveyougotpaper@gmail.com) account.

They are converted using the [translate.html](./utils/translate.html) file in the `utils` sub-folder.

Simply copy and paste the translation data from the Google sheet to the input panel in the translation utility:

```
Area	Key	English	Translation
			
site			
	title	Got paper?	Tu as de PQ?
	subtitle	Calculate your actual toilet paper needs	Calculer tes besoins réelles en papier de toilette
	description	A cheeky desktop, tablet and mobile app to calculate you and your family's toilet paper needs during the Coronavirus pandemic	Une application mobile choux pour calculer tes besoins en papier toilette et ceux de ta famille pendant la pandémie de coronavirus. Dispo sur ordi, tablette et mobile!
			
nav			
	home	Home	Accueil
	about	About	Nous Connaître
	press	Press	Actualités
	contact	Contact	Contactez-nous
	privacy	Privacy	Confidentialité
	...
```

Note that the text MUST contain tabs (spaces are not recognised)!

The text will be converted into JavaScript, and you can simply click the output field and copy.

```js
export default {
  site: {
    title: 'Tu as de PQ?',
    subtitle: 'Calculer tes besoins réelles en papier de toilette',
    description: 'Une application mobile choux pour calculer tes besoins en papier toilette et ceux de ta famille pendant la pandémie de coronavirus. Dispo sur ordi, tablette et mobile!'
  },
  nav: {
    home: 'Accueil',
    about: 'Nous Connaître',
    press: 'Actualités',
    contact: 'Contactez-nous',
    privacy: 'Confidentialité'
  }
}
```

Save the text to a file in the `locales/` folder named after the country code, i.e. `fr.js`.

For language variants, name the file `<lang>-<variant>.js` 


## Development

The `index.js` file allows you to choose which translation routes / pages to generate in development (note that showing *more* translations **slows down** the development server).

Simply choose the translations to be worked on using the `only()` method:

```js
const config = {
  locales: isProd
    ? locales.prod
    : locales.only('en cs'), // choose translations here
  ...
}
```


## Netlify redirects

Netlify can redirect to the correct path based on the visitor's IP:

- https://docs.netlify.com/routing/redirects/redirect-options/#redirect-by-country-or-language

To save you creating the redirects by hand, a small Node script in the utilities folder will analyse your locales, and create the entries for you.

Just run this command from the route:

```
node i18n/utils/netlify.js
```

Copy and paste the output into the file:

```
netlify/_redirects
```
