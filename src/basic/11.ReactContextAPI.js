import { createContext, useContext } from "react";

const obj = {
    name: '홍길동',
    age: 20
};

const context = createContext(obj);

export default function ReactContextAPI() {
    return (
        <GrandParentComponent />
    );
}

function GrandParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{name:'강감찬', age:30}}>
            <div id='grandParent'>
                <p>GrandParentComponent : {useCon.name} {useCon.age}</p>
                <ParentComponent />
            </div>
        </context.Provider>
    );
}

function ParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{name: '이순신', age:50}}>
            <div id='parent'>
                <p>ParentComponent : {useCon.name} {useCon.age}</p>
                <ChildComponent />
            </div>
        </context.Provider>
    );
}

function ChildComponent() {
    const useCon = useContext(context);
    return (
        <div id='child'>
            <p>ChildComponent : {useCon.name} {useCon.age}</p>
        </div>
    );
}






































