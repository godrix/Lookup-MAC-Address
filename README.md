<h1 align="center">
    <img alt="Look Mac Address" title="#LookMacAddress" src="./.github/banner.png" width="100%" />
</h1>

<h4 align="center">
	🚀 Lookup Mac Address 🚀
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/godrix/lookup-mac-address?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/godrix/lookup-mac-address">

  <a href="https://www.linkedin.com/in/carlosgodri/">
    <img alt="Made by Godrix" src="https://img.shields.io/badge/made%20by-Godrix-%2304D361">
  </a>

  <a href="https://github.com/godrix/lookup-mac-address/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/godrix/lookup-mac-address">
  </a>

  <a href="https://github.com/godrix/lookup-mac-address/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/godrix/lookup-mac-address">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-project">Project</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-apidoc">Api Doc</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## 💻 Project

Find the vendor/manufacturer of a device by its MAC Address with our lookup api


## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](https://knexjs.org/)

## :dart: Endpoint

#### :arrow_right: Request
type ```get``` with parameter the mac address [https://example.com/74:DA:DA](https://look-mac-anddrees.herokuapp.com/74DADA).

#### :arrow_left: Response

if the data matches a mac address from the database the return is this

```json
{
  "mac": "74DADA",
  "vendor": "D-Link International"
}
```

otherwise a json with an error message is returned

```json
{
  "error": "The search term did not return any results"
}
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/godrix/lookup-mac-address/issues).
- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## Show your support

Give a ⭐️ if this project helped you!

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Godrix :wave: [Get in touch!](https://www.linkedin.com/in/carlosgodri/)
