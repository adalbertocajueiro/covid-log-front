import React from 'react'

import {Route,Switch,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Home from './views/Home'
import Entidade from './views/Entidade'
import Doador from './views/Doador'
import CadastroInicial from './views/CadastroInicial'
import Sobre from './views/Sobre'

function Principal() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row h-100'>
				<div className='col d-flex'>
				    <div className='col-2 flex-column'>
						<div className='pt-5'/>
						<Link to='/home' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Home</Button></Link>
						<Link to='/entidade' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Entidade</Button></Link>
						<Link to='/doador' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Doador</Button></Link>
						<Link to='/cadastro' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Cadastro</Button></Link>
						<Link to='/sobre' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Sobre</Button></Link>
					</div>
					<div className='pt-5 mr-4 px-2 w-100'>
					    <Switch>
				          	<Route path='/' component={Home} exact />
				          	<Route path='/home' component={Home}/>
				          	<Route path='/entidade' component={Entidade}/>
				          	<Route path='/doador' component={Doador}/>
				          	<Route path='/cadastro' component={CadastroInicial}/>
				          	<Route path='/sobre' component={Sobre}/>
				        </Switch>
			        </div>
				</div>
			</div>
  		</div>
  );
}

export default Principal;