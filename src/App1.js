import "./styles.css";
import {useEffect, useState} from "react"
import Card from "./Card"
import logo from './Assets/logo.png'
import { FaGreaterThan,FaLessThan } from 'react-icons/fa';
import gitbg1 from './Assets/gitbg1.png'
import gitbg2 from './Assets/gitbg2.jpg'
import gitbg3 from './Assets/gitbg3.jpeg'
import userimg from './Assets/userimg4.jpg'

function App() {
  var [index,setIndex] = useState(0);  
  const [user,setUser] = useState(
    [
      {id:0,name:"",email:"",username:""}]
    );
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(res => {
      setUser(res)
     })
  },[])
  const {id,name,username,email} = user[index];
  
  return (
      <div className="gitpage">
      <div className="navbar">
        <div className="navlogo"> <img src={logo} className="logo"></img><span className="logotitle">Github</span></div>
        <nav>
            <ul className="navlinks">
                <li><a href=""> Login</a></li>
                <li><a href="">Signup</a> </li>
            </ul>
        </nav>
      </div>


      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div id="cimage" class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000" >
      <img src={gitbg3} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item" data-bs-interval="1000" >
      <img src={gitbg2} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item" >
      <img src={gitbg1} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="userslist">
      <h1 className="header">Our Top Users</h1>
      <div className="card">
      <div className="userimg"><img className="userimage" src={userimg}></img> </div>
        <div className="userdetails">
        <div className = "name">
        <h1>Name : {name}</h1>
        </div>
        <div className = "age">
         <h3>UserName : {username}</h3>
        </div>
        <div className = "age">
         <h3>ID : {id}</h3>
        </div>
        <div className = "age">
         <h3>Email : {email}</h3></div>
        </div></div>
      
      <div className="buttons">
      <button onClick={
        () => {
          if(index <= 0){
            index = user.length;
            setIndex(--index)  
          }
          else{
            setIndex(--index)
          }}}><FaLessThan/></button>
      <button onClick={
       () => {
        console.log("index value = ",index);
         if(index >= user.length - 1){
           index = -1;
           setIndex(++index);
         }
         else{
          setIndex(++index);
         }}}> <FaGreaterThan/></button>
      </div>
      </div>    
      </div> 
  );}

  export default App;