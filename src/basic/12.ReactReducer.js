import { useReducer } from "react";

export default function ReactReducer() {

    const [count, dispatcher] = useReducer(reducer, 0);

    function decrement() { dispatcher('decrement'); }
    function increment() { dispatcher('increment'); }
    function initialize() { dispatcher('initialize'); }

    return (
        <div>
            <p>
                <button value='-' onClick={decrement}>감소</button>
                <button value='0' onClick={initialize}>초기화</button>
                <button value='+' onClick={increment}>증가</button>
                &nbsp;<span>{count}</span>
            </p>
        </div>
    );

}

function reducer(count, action) {
    switch (action) {
        case 'decrement': return count - 1; break;
        case 'initialize': return 0; break;
        case 'increment': return count + 1;
        default : return 0;
    }
}

































