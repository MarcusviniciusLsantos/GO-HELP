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
  const nome = this.nome.value
  const descricao = this.descricao.value
  const tipo = this.state.tipo
  const comoDoar = this.state.tipo === 'produtos' ? this.comoDoar.value : null
  const meta = this.state.tipo === 'doacao' ? this.meta.value : null
  const doado = this.state.tipo === 'doacao' ? this.doado.value : null

  base.push('campanhas', {
    data: { nome, descricao, tipo, comoDoar, meta, doado },
    then: err => {
        if(!err){
          this.nome.value = ''
          this.descricao.value = ''
          this.subTitulo.value = ''
          this.setState({tipo: ''})
          if(this.meta){
            this.meta = ''
          }
          if(this.doado){
            this.doado = ''
          }
          if (this.comoDoar) {
              this.comoDoar = ''
          }
    }
  }
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
        Campanha: <input type='text' ref={ref => this.nome = ref} /><br />
        Sub-título: <input type='text' ref={ref => this.subTitulo = ref} /><br />
        Descrição: <textarea ref={ref => this.descricao = ref} ></textarea><br/>
        Tipo: <br/>
            <input type='radio' name='tipo' onClick={()=> this.setState({ tipo: 'doacao'})}/>Doação <br/>
            <input type='radio' name='tipo' onClick={()=> this.setState({ tipo: 'produtos'})}/>Produtos<br/> 
        {this.state.tipo === 'doacao' && <div> 
          <h4>Doação</h4>
          Meta: <input type='text' ref={ref => this.meta = ref} /><br />
          Doado: <input type='text' ref={ref => this.doado = ref} defaultValue={0} /><br />
        </div>}
        {this.state.tipo === 'produtos' && <div>
          <h4>Produtos </h4>
          Como Doar: <input type='text' ref={ref => this.comoDoar = ref} /><br/>
        </div>}
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