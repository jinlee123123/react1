import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글변경] = useState(['남자코트추천','여자코트추천','빠르게오르는 추신수']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [ modal, setModal] =useState(0);
  let[titleNum, setTitleNum] = useState(0);
  let [input, setInput] = useState('');

  function 글정렬(){
    let copy2 =[...글제목];
    copy2.sort();
    글변경(copy2);
  }

  function 글추가(){
    let copy = [...글제목];
    copy.unshift(input);
    글변경(copy)
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <h4 style={{color : 'red',fontSize : '30px'}}> { post } </h4>

      <button onClick={글정렬}>가나다순 정렬</button>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1);}}>👍</span> { 따봉 }</h4>
        <button onClick={()=>{
          let copy = [...글제목];
          //[...]사용 기존 reference값을 독립적으로 만들어준다.
          copy[0] = '여자코트 추천';
          글변경(copy);
          }}>click</button>
        <p>2월 17일 발행</p>
      </div>
      {
        글제목.map((a,i)=>{
          return(
            <div className='list'>
            <h4 onClick={()=>{ setModal(modal+1); setTitleNum(i)}}>{ 글제목[i] }</h4>
            <h4><span onClick={()=>{
              let copy3 = [...따봉]
              copy3[i] += 1; 
              따봉변경(copy3)}}>👍</span> { 따봉[i] }</h4>
            <p>2월 17일 발행</p>
          </div>  
          )
        })
      }


          {
            modal%2 == 1  ? <Modal 글제목 ={ 글제목 } 글정렬 ={글정렬} titleNum ={titleNum}/> : ''
          }
      <input onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={글추가}>글추가</button>
      
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.글제목[props.titleNum]}</h4>
      <button onClick={props.글정렬}>글정렬</button>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
