import React, { Component } from 'react'
import base from '../base'

class AdminCampanhas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campanhas: {}
    }
    this.renderCampanha = this.renderCampanha.bind(this)
    this.removeCampanha = this.removeCampanha.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  componentDidMount() {
    base.syncState('campanhas', {
      context: this,
      state: 'campanhas',
      asArray: false
    })
  }
  removeCampanha(key){
   /* outra forma de se fazer. correct.
    const { [key]: undefined, ...newCampanhas } = this.state.campanhas
    this.setState({
      campanhas: newCampanhas
  
      
    })
  */
  base.remove('campanhas/'+key, err => {
    console.log(err)
  })
}
 handleSave(){
  const nome = this.name.value
  const descricao = this.descricao.value

  base.push('campanhas', {
    data: { nome, descricao },
   
  }, err => {
    console.log(err)
  })
}

  
  renderCampanha(key, campanha){
        return(
        <li key={key}>
        {campanha.nome}
        <button onClick={()=>{}}>Editar</button>
        <button onClick={()=>this.removeCampanha(key)}>Remover</button>
        
        
        </li>
        )
  }
  render(){
    return(
      <div>
        <h1>Campanhas</h1>
        <h2>Nova Campanha</h2>
        Campanha: <input type='text' ref={ref => this.name = ref} /><br />
        Descrição: <textarea ref={ref => this.descricao = ref} ></textarea><br/>
        <button onClick={this.handleSave}> Salvar Nova Campanha</button>
        <ul>
          { 
            Object
            .keys(this.state.campanhas)
            .map(key => this.renderCampanha(key, this.state.campanhas[key]))
          }
    
        </ul>
      </div>
    )
  }
}



export default AdminCampanhas