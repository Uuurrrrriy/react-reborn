import React from 'react';
import { BrowserRouter,
  Switch,
  Route,
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch
}
  from 'react-router-dom'
import './App.css';

const NavBar = ({links}) => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  console.log(history,location,match);
  return (
      <div className='nav'>
        {
          links.map(el => <NavLink key={el.to} exact to={el.to} className='link' activeClassName='activeLink'> {el.label} </NavLink> )
        }
        <button onClick={()=>{
          history.goBack();
        }}> go back </button>
        <button onClick={()=>{
          history.goForward();
        }}> go forward </button>
      </div>
  )
};

const Home = ()=>{
  return (
      <div>
        Hello this is home page
      </div>
  )
};


const About = ()=>{
  return (
      <div>
        Hello this is About page
      </div>
  )
};


const Details = (props)=>{
  console.log(props);
  return (
      <div>
        <button onClick={()=>{
          props.history.goBack();
        }}> go back </button>
        <button onClick={()=>{
          props.history.go(-2);
        }}> go  </button>
        <h1>
          Hello this is Details page inside Main page
        </h1>
      </div>
  )
};


const Order = ()=>{
  return (
      <div>
        Hello this is Order page inside Main page
      </div>
  )
};

const Main = ()=>{
  const links = [
      {
        to:'/main',
        label: 'Main'
      },
      {
        to:'/main/product-details',
        label:'Details'
      },
      {
        to:'/main/product-order',
        label: 'Order'
      }
    ];
  return (
      <BrowserRouter>
        <div>
          <h1>
            Hello this is Main page
          </h1>
          <NavBar links={links}/>
          <Switch>
            <Route exact path='/main/' render={()=><div> inner switch </div>}/>
            <Route  path='/main/product-details' component={Details}/>
            <Route  path='/main/product-order' component={Order}/>
          </Switch>
        </div>
      </BrowserRouter>

  )
};


function App() {
  const links = [
    {
      to:'/',
      label: 'Home'
    },
    {
      to:'/main',
      label: 'Main'
    },
    {
      to:'/about',
      label:'About'
    }
  ];
  return (
    <BrowserRouter>
      <div>
        <NavBar links={links}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/main' component={Main}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
