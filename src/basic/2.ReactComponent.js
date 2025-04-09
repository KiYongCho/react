// function component
export default function ReactComponent() {
    const message = 'Function문법 컴포넌트';
    return (
        <h1>{message}</h1>
    );
}

// class component
// import {Component} from 'react';
// export default class ReactComponent extends Component {
//     render() {
//         const message = 'Class문법 컴포넌트';
//         return (
//             <h1>{message}</h1>
//         );        
//     }
// }