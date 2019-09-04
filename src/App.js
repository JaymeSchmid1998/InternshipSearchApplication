import React from 'react';
import './App.css';
import './content.css'

 const people=[
{
  id:1,
  first:"bob",
last:"asdad",
age:"12",


},

{
  id:2,
  first:"bob12",
last:"assdsfdd",
age:"134",


},
{
  id:3,
  first:"james",
last:"assdsfdd",
age:"134",


},
{
  id:4,
  first:"john",
last:"assdsfdd",
age:"134",


},


 ]

function searchingfor(term){
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
function searching(SearchTerm){
  return function(x){
    return x.name.toLowerCase().includes(SearchTerm.toLowerCase()) || !SearchTerm;
  }
}

const API = 'https://api.github.com/search/repositories?q=subject';
const DEFAULT_QUERY = 'redux';



class App extends React.Component{
  constructor(props){
super(props);
this.state={
  SearchWord:null,
  Data12:[],
  people:people,
  term:'',
  SearchTerm:''
}


this.getvalue=this.getvalue.bind(this);
this.searchhandler=this.searchhandler.bind(this);
this.searchinghandler=this.searchinghandler.bind(this);
this.changeS=this.changeS.bind(this);
  }
  componentDidMount(){

    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ Data12: data.items }));
      console.log(this.Data12);

  }
 
  
  searchhandler(event){
    this.setState({term:event.target.value});
  }
  searchinghandler(event){
    this.setState({SearchTerm:event.target.value});
  }


  
//on change listener 
handlechange(event){

 this.setState({
   SearchWord:event.target.value
  })
  console.log(this.state.SearchTerm);
  }
changeS(event){
  console.log(this.state.SearchTerm)
    let API1 = 'https://api.github.com/search/repositories?q=' + this.state.SearchTerm;
  console.log(API1)
    fetch(API1)
  .then(response => response.json())
  .then(data => this.setState({ Data12: data.items }));
    console.log(this.Data12);

}




getvalue(){
//alert(this.state.data+"this is working");
this.setState({
  SearchWord:this.refs.word.value
 })


console.log(this.state.SearchWord);
}
  
  



render() {
let filteredSearch= this.props.Data12;
const{term,people,SearchTerm}=this.state;

  return (
    <div className="App">
     <h2 className="header">Search  Git hub </h2>







<form>
  <input placeholder="Search..."className="inpt12"type="text"onChange={this.searchinghandler} value={SearchTerm}></input> 
  <input  className="btn1"type="button" onClick={this.changeS} value="search git hub"></input>
</form>



<ul>{this.state.Data12.filter(searching(SearchTerm)).map(data =>

<div className="content12">
  <div key={data.id}>
  <a className="link" href={data.html_url}>
  <h1>{data.name}</h1>

  <img className="img12" src={data.owner.avatar_url} />
  <div className="content2">
  <ul className="list">
  <li className="list1">
  <h3>Created By</h3>
 
    </li>
  <li className="list1">
  <h2>{data.owner.login}</h2>
  </li>


  </ul>

<ul className="list">
  <li className="list1">
  <h3>Stargazers</h3>
 
    </li>
  <li className="list1">
  <h2>{data.stargazers_count}</h2>
  </li>


  </ul>
  
  <ul className="list">
  <li className="list1">
  <h3>Watchers count</h3>
 
    </li>
  <li className="list1">
  <h2>{data.watchers_count}</h2>
  </li>


  </ul>



  
  
  </div>
  </a>

  </div>
</div>
)

  }</ul>














    </div>
  );
}
}
export default App;
