# Got Paper

> The official Got Paper? app

## Summary

[Got Paper](https://got-paper.com) is a Vue / Nuxt application to calculate personal toilet roll usage, in response to the panic-buying situation that characterised the spread of the Coronavirus pandemic in early 2020.

![mobile ui](https://got-paper.com/images/ui/mobile.png)

The application was initially developed in 9 hours, then released within 24 hours on social media. It spread rapidly in round the world with 150K users in the first week, was [featured](https://got-paper.com/press) in national and international press, and [translated](https://got-paper.com/translations)  into 12 languages.

![translations](https://got-paper.com/images/ui/translations.png)

See the live site for the [full back story](https://got-paper.com/about).


## Open Source

Having mainly accomplished its goal of both raising awareness and providing a useful tool, it has now been Open Sourced so others may either use the codebase as a foundation to develop additional applications quickly, or simply as a learning resource.

The application solved a lot of problems in a very short space of time, committing mainly to master and sometimes pushing things live as soon as possible. Not all the code or commits are perfect, but much of it is to a high standard, following best-practices, and should give developers new or learning Vue or Nuxt an idea of how to code an app that can reach 100s of thousands of people.

If you want to show your appreciation, you are very welcome to...

<a href='https://ko-fi.com/A0A31IKU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Features

Application:

- Highly granular controls / calculation
- Supports varying usage, people and product
- 3 modes: buying, sharing, hoarding
- Custom UI, design and branding 

Technical:

- Runs as a static-rendered, progressive web app
- Mobile-optimised / responsive design
- Translated into 12 languages

## Technical

Build

- [Vue JS](https://vuejs.org/) - application framework
- [Nuxt](https://nuxtjs.org/) - static site generation (a huge thanks to [Alex Lichter](https://github.com/manniL)!)

Packages

- [Vee Validate](https://logaretm.github.io/vee-validate/) - validation library
- [Vue Agile](https://lukaszflorczak.github.io/vue-agile/) - carousel component
- [Vue i18n](https://kazupon.github.io/vue-i18n/) - translations library
- [Portal Vue](https://portal-vue.linusb.org/) - for modals

Resources

- [Bootstrap 4](https://getbootstrap.com/docs/4.0/) - UI framework
- [Adobe Fonts](https://fonts.adobe.com/) - Brandon Grotesque font
- [Unicons](https://iconscout.com/unicons/explore/line) - SVG icons
- [Flag Icons](https://www.iconfinder.com/iconsets/195-flat-flag-psd-icons) - by Muharrem Şenyıl
- [50 Bathroom Icons](https://elements.envato.com/50-bathroom-toilet-icons-DCDEVA) - from Envato Marketplace

Hosting

- [Netlify](https://www.netlify.com/) - free static site hosting
- [Google Domains](https://domains.google/) - domain management
- [Google Analytics](https://analytics.google.com/) - analytics

Technologies

- [JavaScript](https://www.javascript.com/)
- [WebPack](https://webpack.js.org/)
- [Node JS](https://nodejs.org/en/)
- [SCSS](https://sass-lang.com/documentation/syntax)

## Release timeline

Got Paper was created and released over a very short time period:

| Release                                                      | Timescale | Description                                                  |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| [Alpha](https://github.com/davestewart/got-paper/releases/tag/v1.0-alpha) | 2 hours   | Initial Vue PWA, design and calculations                     |
| [Beta](https://github.com/davestewart/got-paper/releases/tag/v1.0-beta) | 9 hours   | Initial Vue SPA / PWA                                        |
| [1.0](https://github.com/davestewart/got-paper/releases/tag/v1.0) | 24 hours  | Additional pages, branding, polish, etc                      |
| 1.x                                                          | 5 days    | Multi-person calculations, buy / share / hoard modes, press page, etc |
| [2.0](https://github.com/davestewart/got-paper/releases/tag/v2.0) | 1 week    | Migration to SSR / Nuxt                                      |
| 2.x                                                          | 2 weeks   | Translation to 12 languages, media, video                    |

What is missing above is the additional effort to manage design, branding, press and translations, etc but it gives a rough idea of the development timeline between 15th and 26th March 2020.

Tagged releases (with screenshots) available here:

-  https://github.com/davestewart/got-paper/releases


## Development

v2.x (Nuxt SSR)

```bash
# development server
yarn run dev
``` 

v1.x (Vue SPA)

```bash
# development server
npm run serve
``` 

## License

This software is MIT licenced, which means you can pretty much do whatever you want with it, but I would request that you don't use:

- the original branding, which includes:
   - font choice of Adobe Brandon Grotesque
   - the Got Paper? design, logo, icon and marques

- any software ids or keys which may be in the source code, including:
    - Amazon
    - Google Analytics
    - Google AdSense

- any emails or URLs that relate or refer to Got Paper or http://got-paper.com

## Last words

Finally, this project was a lot of fun to make and promote, even if fairly gruelling at times.

If you feel like you benefited from the sharing of source code and you'd like to say thanks, you can "buy me a coffee" via the donations site Ko-fi:

<a href='https://ko-fi.com/A0A31IKU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Otherwise, feel free to follow me on Twitter at:

- [@dave_stewart](https://twitter.com/dave_stewart)

Thank you, and enjoy!
