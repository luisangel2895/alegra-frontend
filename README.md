# Images of the world

[![logo](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/logo.png)](https://images-world.herokuapp.com/)

THis project is a test of Alegra Company, this project its similar to a browser when the user search images and when clicked in one image is considered that this image was selled and if the user clicked again is consider that the image is back, so in each search each seller only show 1 photo, but the user can sell whatever quantity of photos in each search, after the user can searh other word and buy again the photos that the user wants.

Each photo selled gives 3 points to the seller when is selled, so if one seller get 20 or more point appears and modal show us the winner seller, and inmediatily we can see the invoice create in the console.

We can see too in the console all the rating in real time, moreover we can see a table with rating of seller in the route Photographers in the navbar.

```
NOTE => The API that i use to the aplication in the current plan only support 20 searchs per hour, so please be careful when the aplication is tested , bacause could fail if you search more than 20 searches per hour.
```

## Project Desing

I inspired the design of the project in other importants sites that sell images like pixabay, unsplash, etc, here you can see a litle basic design of the project designed in figma.

![image-desgin](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_7.png)

[Go To design in figma](https://www.figma.com/file/V0sGXEnJ7PoicYW402tjx8/Images-of-the-World?node-id=0%3A1)

Finally I modify some colors and messures to the basic design, and the final design of the aplication is:

![image-home](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_1.png)

![image-photograpers](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_2.png)

## View Layout

For the view layout i use css scoped in each component in Vue.js and a global styles called styles.css in this file we can change the main colors, font and messures in the aplication.

Thew view layout was developed in "BEM Naming Convention".

## Stack of the project

For this project I choose the next stack:

- Vue.js 3
- Vue-class-component
- Vue router 4
- Vuex
- Typescript
- VuexPersistence
- Jest
- Cypress

I choose this stack because i consider that is the most powerfull stack into vuejs environment and its the stack that gives us the better implementation with typescript.

## Backend Project

For this project its nessesary the implementation of two API:

- Serp API
- Alegra API

Also problem with the Serp API for images apart the maximun petitions per hour is that the server of this API is protected by CORS, because want more cybersecurity. And the solution for this type of problems is create a reverse Proxy in the part of backend that simulate be the same server that Serp API, that is basically what the backend does.

You can see the backend of this aplication in the link: [Go to backend](https://github.com/luisangel2895/alegra-backend)

## Run the Project

So we can run the project run the backend in one port like documentation in the backend says, and run the aplication in the traditional por 8080 with the command:

```js
npm i
```

```js
npm run serve
```

### Compiles and minifies for production

Also if we want to run the project in production we need to run the command:

```js
npm run build
```

After that push the /dist folder into public/ folder in the backend.

## Unit testing

For unit testing I use like tecnoloty jest, and i created a test in typescript for the most importants components and services in the critical path of the aplication.

To the organizacion of the test i follow the standard to create the same structure of the /src folder but into the test/unit/ folder as we can see:

![image-structure-project](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_3.png)

![image-structure-test](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_4.png)

```
npm run test:unit
```

Finally we can run the all unit test with te command:

```js
npm run test:unit
```

And we can see that the all test passed successfully.

![test-passed](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_6.png)

## End to end testing

For integration tests i use Cypress because the results are so fancy, for this project i developed 4 main integration test that execute consecuently.

We can run the test in the console with the comand:

```js
npm cypress run
```

And we can see that all tests passed:

![test-passed-cypress](https://github.com/luisangel2895/alegra-frontend/blob/67e954f0c616d55c65062f172c3aa23ca3948a43/images/Screenshot_5.png)

And finally we can see the video generated by Crypress for this integration test.


https://user-images.githubusercontent.com/16966767/155645494-7d741f23-850b-42be-b881-8599133e9d18.mp4


Other e2e testing

video-working ...

Other 2e2 testing

video-working2 ...
