
## Password Generator App


![](https://github.com/PYAG1/password-gen/blob/main/src/assets/screenshot.png)


## The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

-  [Solution](https://github.com/PYAG1/password-gen)
- [Live site ](https://password-gen-drab.vercel.app/)


## Built with

This project was built with:

- [React](https://reactjs.org/) - JS library
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles
- TypeScript
- 
## What I learned
Through this project, I gained practical experience with styled-components, improving my ability to write clean, maintainable, and reusable CSS in a React application. This approach not only streamlined the styling process but also significantly enhanced the overall structure and readability of the codebase. The password generator app has a clean, responsive design with a user-friendly interface, demonstrating the benefits of using styled-components effectively.

##### What are styled components
[Styled Components](https://styled-components.com/) is a library for React and React Native that allows you to use component-level styles in your application. It leverages tagged template literals to style components.

#####  Benefits of Styled Components
- Scoped Styles: Styles are scoped to individual components, preventing CSS conflicts.
- Dynamic Styling: Easily apply dynamic styles based on component props and state.
- Maintainability:  Keeps CSS manageable by co-locating styles with their respective components.
- 
##### Implementation Details
Visit [Styled Components](https://styled-components.com/).
1. Setting Up Styled Components
```
npm install styled-components
```

2. Creating a styled component
- Example: Defining a stled button component.
```js
import styled from 'styled-components';

const GenerateButton = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.green};
  font-size: 1em;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1em 0;
  margin-top: 1em;
  gap: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};

    svg path {
      fill: #a4ffaf;
    }
  }
`;

```

3. Using Styled Components in the App
```js
import React from 'react';
import { GenerateButton } from './components/Button';

const App = () => (
  <div>
    <GenerateButton>Generate Password</GenerateButton>
  </div>
);

export default App;
```


## Installation

How ro Run the App Locally. It requires [Node.js](https://nodejs.org/) v10+ to run.

### Clone the Repository
```sh
https://github.com/PYAG1/password-gen.git
cd password-gen
```
Install the dependencies and devDependencies and start the server.

```sh
npm install
npm run dev
```
This will start the development server and open the app in your default web browser at http://localhost:5173.

## Contributing
If you would like to contribute to this project, follow these steps:
1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix:

```
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```
git commit -am 'Add your commit message here'
```
4. Push to your forked repository:
```
git push origin feature/your-feature-name
```
5. Create a new pull request from your forked repository to the original repository


 

### Useful resources

- [Styled Components](https://styled-components.com/) - This helped me get easily started with using styled components in react.
- [React Styled Components](https://www.youtube.com/watch?v=FSCSdAlLsYM&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM) 
- 

## Author

- Website - Agyeman-Gyekye Papa Yaw 
- Email - gyekyeyaw3@gmail.com




## License




