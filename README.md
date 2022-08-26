## NFT Front End Tech Stack:

tailwindcss postcss autoprefixer

React + Tailwand css + react icon+ context+ MetaMask + ehters(fetch,ajax,axios)

```
## run the project
yarn start
```

Context---> tailwand --> other



Component---> relationship between component --> props -->

get the logic of code 



find the cra version from react-scripts in package.json, then choose the tutorial to install the tailwand



Create-react-app 5.0

Create-react-app 4.0



[How do I check the create-react-app version that my app used?](https://www.reddit.com/r/reactjs/comments/hm6fum/how_do_i_check_the_createreactapp_version_that_my/)

[在react脚手架中使用tailwind css](https://juejin.cn/post/7043714956516130846#heading-2)

## Feature highlight

1.Mint the NFT

2.NFT balance on single account Check

3.Deposit NFT

4.Withdraw NFT 



Check the Ethereum Scan address

[0x225626b64e9077786d5a0580b96f8bc374cba6deb79d124f97f5e4f2e135c4b8](https://rinkeby.etherscan.io/tx/0x225626b64e9077786d5a0580b96f8bc374cba6deb79d124f97f5e4f2e135c4b8)



Check the NFT Item

[0xc5d404183cb9de6a14eccb849f44a862a43c2c05/13](https://testnets.opensea.io/assets/rinkeby/0xc5d404183cb9de6a14eccb849f44a862a43c2c05/13)



[Tutorial: Building a web3 frontend with React](https://medium.com/scrappy-squirrels/tutorial-building-a-web3-frontend-with-react-e0a87ea3bad)

## run the   project:

### npm install the project:
```
npm install
```

### Back end:
```
npm run server
```

### Front end:
```
npm start
```



## The reason why your bind button does not manage the
form page open and close"
Go to the button.js, add the onClick eventlistener
```
<button className='btn' onClick = {onClick} style={{backgroundColor:color} } >{text}</button>   
```
[作为prop传递的onClick方法没有执行](https://www.5axxw.com/questions/content/mrbu1v)   
## use state
```
const [tasks,setTasks] = useState([
```
[Using the State Hook](https://reactjs.org/docs/hooks-state.html)

## PropTypes
```
Header.propTypes = {
    title: PropTypes.string.isRequired
}
```
[Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)   

## CSS in React
```
// const headingStyle = {
//     color:"red", 
//     backgroundColor:"black"
// }
```
[Styling React Using CSS](https://www.w3schools.com/react/react_css.asp)   
## Code:Key={}
```
  <Task key={task.id} task={task}
```
[Warning: Each child in a list should have a unique "key" prop](https://sentry.io/answers/unique-key-prop/)   
## Code snipte:Map
```
 {tasks.map((task) => (
          <Task key={task.id} task={task}
          />)
          )}
```
[JavaScript Array map() Method](https://www.w3schools.com/jsref/jsref_map.asp)   
## code snipte:Props
```
<h2>{props.title}</h2>
```
[Pass Data](https://www.w3schools.com/react/react_props.asp)  
##  code snipte:default props
```
// Header.defaultProps ={
//     title:"Task Tracker"
```
[Default Prop Values](https://reactjs.org/docs/typechecking-with-proptypes.html)  
## Test the React document code in your text editor:
1.clean all the inini file, you buitl from the "creat react",
2. then change the get Element by Id code to"root"
```
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);

```

## Resource:
## Video:
[React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8)  
[source code](https://github.com/bradtraversy/react-crash-2021)  
