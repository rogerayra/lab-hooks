![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React | useState

## Introduction

You already know how to work with old React (with classes) and how React hooks has changed the frontend developer environment.

In this exercsie wi will use **Create React App** and we will handle a _Counter_ and a simple _Form_ with useState.

![](https://media.giphy.com/media/hVVLTXhMm4Q1souBHU/giphy.gif)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "your doubts"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

We will using the _Create React App CLI_, but don't worry about it, we already started the project :wink:

**DON'T FORGET, BY DEFAULT CRA INITIALIZE GIT IN THE PROJECT**

### Install the dependencies

```bash
$ npm install
or
$ yarn install
```

## Structure of our app

- Create the **`components`** folder inside the `src` folder.

* Inside the components folder create two new components, **`Counter.js`** and **`Form.js`**

```
lab-props-and-state
│   node_modules
│   public
└─── src
    └─── components
    │   └─── Counter.js
    │   └─── Form.js
    └─── App.css
    └─── App.js
    └─── App.test.js
    └─── index.css
    └─── index.js
    └─── logo.svg
    └─── serviceWorker.js
```

## Iteration 1 - Presentational components

Let's start with the basics: Let's put some pretty and _dumb_ HTML in our presentational components.

### Counter.js

- This component should be a **function component**.
- Should return only HTML:

  - Return an `<h2>`, the value of the count must be in this field.

  - Return an increment `<button>`, this button should increment the count in 1.

  - Return a decrement `<button>`, this button should decrement the count in 1.

- Since our component it's a dummie component and it's only for presentation purpose, should **recieve by props** the logic for
  increment and decrement the count, and the count itself.

### Form.js

- This component should be a **function component**.
- Should return only HTML:

  - Return 3 `<input>`, don't forget to give them a name, respectively.

  - Return 3 `<p>`, each _p_ should display the inputs value, respectively.

## Iteration 2 - The logic

Remember, there should always be only one component that manages the state of our application and through props can
communicate the information to the components that are designed for that.

So, let's do this. We will have all our logic in the `App.js`.

- Our `App.js` should have an state using hooks, with the following values:

```js
const [count, setCount] = useState(0)
const [name, setName] = useState('')
const [surname, setSurname] = useState('')
const [age, setAge] = useState('')
```

- Should be a function that can manage the increment of or counter, called **`increment`**.

- Should have a function that can manage the decrement of our counter, called **`decrement`**.

- Should have a function that can manage the values of our inputs, called **`handleChange`**.

**Remember which method we use to update our state**

## Iteration 3 - Magic!

In the **App.js**, you should return the `<Counter/>` component and the `<Form/>` component. **Don't forget to pass the
necessary props to these components**.

It should looks like this:

```jsx
...

render() {
    <div>
        <Counter {/* Here should be magic! (props) */} />
        <Form {/* Here should be magic! (props) */} />
    </div>
}

...
```

## Iteration 4 - Styles

Don't forget the CSS, add some styles to our application to make it look better.

Happy coding! ❤️

By: DiuriVJ :shipit:
