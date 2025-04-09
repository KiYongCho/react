export default function ReactEvent() {
    const message = 'From ReactEvent : ';
    return (
        <>
            <p>
                <a href='https://www.naver.com' onClick={gotoLink}>네이버</a>
            </p>
            <select onChange={selChange}>
                <option value=''>--선택--</option>
                <option value='ko'>한국</option>
                <option value='cn'>중국</option>
                <option value='jp'>일본</option>
            </select>
            <p>
                남성 : <input type='checkbox' name='cb'
                    value='male' onClick={cbClick} />&nbsp;
                여성 : <input type='checkbox' name='cb'
                    value='female' onClick={cbClick} />
            </p>
            <p>
                입력 : <input type='text' onKeyUp={txtChange} />
            </p>
            <Article onChangeMode={
                function(e) {
                    console.log(message + e.target.value);
                }
            } />
        </>
    );
}

function gotoLink(e) {
    e.preventDefault();
    window.location.href = 'https://www.google.com';
}

function selChange(e) {
    const value = e.target.value;
    if (value) {
        console.log(value);
    }
}

function cbClick(e) {
    console.log(e.target.value);
}

function txtChange(e) {
    console.log(e.target.value);
}

function Article(props) {
    return (
        <textarea onKeyUp={props.onChangeMode}></textarea>
    );
}