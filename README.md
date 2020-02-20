# Instanews
 One-page, responsive website that allows a user to filter top news story categories via the New York Times API.  

 ![](instanews-presentation.gif)

### Tech
  * Jquery 3.4.1
  * Jquery UI 1.12.1
  * Sass
  * Gulp

 ### Installation Prerequisites

 - Create the env.json file in the project root in the following format filled with your personal key NY_API_KEY
```json
{
    "NY_API_KEY": "your-ny-api-key"
}
```

### Installation

- Load the dependencies
```sh
$ npm install
```

- Run the project
```sh
$ gulp
```

### Stretch Goals

- Incorporate a select element with custom styles applied (you will need a jQuery plugin for this)
    * I used Jquery UI to build dropdown using selectmenu
- Incorporate a combination of jQuery and CSS3-based animation to animate the movement of the header on search submit
    * Header elements change location and size using css transiction
- Use CSS3 transitions to show and hide the article abstract on hover
    * Abstract text changes size in hover event