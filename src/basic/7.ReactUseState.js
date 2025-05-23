import { useState } from 'react';

export default function ReactUseState() {

    // usetState 훅을 사용해 데이터와 세터, 데이터기본값 설정
    // count:데이터, setCount:세터, 1:데이터기본값
    const [count, setCount] = useState(1);
    const [num2, setNum2] = useState([0, 0, 0]);
    const contentArr = [
        'Javascript Content...',
        'Typescript Content...',
        'React Content...'
    ];
    const [content, setContent] = useState(contentArr[0]);
    let [data, setData] = useState('');

    return (
        <div>
            <h2>1. 카운터</h2>
            <p>
                <button onClick={increaseCount}>클릭</button>&nbsp;
                <span id='counter'>{count}</span>
            </p>
            <h2>2. State연동</h2>
            <p>
                <button onClick={startNum2}>클릭</button>
            </p>
            <p>
                <span data-key='0'>{num2[0]}</span>&nbsp;
                <span data-key='1'>{num2[1]}</span>&nbsp;
                <span data-key='2'>{num2[2]}</span>
            </p>
            <h2>3. 컨텐츠 변경</h2>
            <ul onClick={changeContent}>
                <li data-key='0'>Javascript</li>
                <li data-key='1'>Typescript</li>
                <li data-key='2'>React</li>
            </ul>
            <p>
                <span id='contents'>{content}</span>
            </p>
            <h2>4. 데이터 가져오기</h2>
            <p>
                <button onClick={changeData}>전체데이터</button>
            </p>
            <p>
                <span id='data'>{data}</span>
            </p>
        </div>
    );

    function increaseCount() {
        setCount(count + 1);
    }
    
    function startNum2() {
        setNum2([
            num2[0] = num2[0] + 1,
            num2[1] = num2[0] + num2[1],
            num2[2] = num2[1] + num2[2]
        ]);
    }
    
    function changeContent(e) {
        setContent(contentArr[e.target.dataset.key]);
    }
    
    function changeData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setData(JSON.stringify(result)))
    }

}

