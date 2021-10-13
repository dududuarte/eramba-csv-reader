import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Charts from './Charts';
import styles from './Dashboard.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import DataParser from './DataParser';

class Dashboard extends React.Component {
  /*  [
        1    "Title",
        2    "Description",
        3    "Stakeholder", -> para o PieChart
        4    "Risk Owner", -> para o PieChart
        5    "Review Date",
        6    "Review Expired",
        7    "Risk Anaylsis Classification", ?ligar com o 7?
        8    "Risk Analysis Score", -> para o PieChart
        9    "Asset", -> para o PieChart
        10    "Risk Treatment Classification", ?mesmo que 6?
        11    "Risk Treatment Score", ?mesmo que 6?
        12    "Risk Treatment" - Valor
        ] */

  /*
  Remoto = 1
  Eventual = 2
  Ocasional = 3
  Provável = 4
  Frequente = 5
  */

  constructor(props) {
    super(props);
    this.data = this.props.csv;
    this.data.pop();
    this.risks = [];
    this.riskValue1 = [];
    this.riskValue2 = [];
    this.riskValue3 = [];
    this.riskValue4 = [];
    this.riskValue5 = [];

    this.cel5_1 = React.createRef();
    this.cel5_2 = React.createRef();
    this.cel5_3 = React.createRef();
    this.cel5_4 = React.createRef();
    this.cel5_5 = React.createRef();

    this.cel4_1 = React.createRef();
    this.cel4_2 = React.createRef();
    this.cel4_3 = React.createRef();
    this.cel4_4 = React.createRef();
    this.cel4_5 = React.createRef();

    this.cel3_1 = React.createRef();
    this.cel3_2 = React.createRef();
    this.cel3_3 = React.createRef();
    this.cel3_4 = React.createRef();
    this.cel3_5 = React.createRef();

    this.cel2_1 = React.createRef();
    this.cel2_2 = React.createRef();
    this.cel2_3 = React.createRef();
    this.cel2_4 = React.createRef();
    this.cel2_5 = React.createRef();

    this.cel1_1 = React.createRef();
    this.cel1_2 = React.createRef();
    this.cel1_3 = React.createRef();
    this.cel1_4 = React.createRef();
    this.cel1_5 = React.createRef();
    this.arrayAtivos = [];
    this.arrayOwners = [];
    this.arrayStakeholders = [];
    this.newUpload = this.newUpload.bind(this);

    let count = 1;
    this.data.slice(1).map(element => {
      let probValue = 0;
      switch (element.data[6].split(',').at(-1).replace(/\s/g, '')) {
        case 'Remoto':
          probValue = 1
          break;
        case 'Eventual':
          probValue = 2
          break;
        case 'Ocasional':
          probValue = 3
          break;
        case 'Provável':
          probValue = 4
          break;
        case 'Frequente':
          probValue = 5
          break;
      }
      let riskObject = {
        id: count,
        title: element.data[0],
        description: element.data[1],
        stakeholder: element.data[2],
        owner: element.data[3],
        asset: element.data[8],
        cia: element.data[6],
        prob: probValue,
        value: (parseInt(element.data[7]) / 3)
      };
      this.arrayAtivos.push(riskObject.asset);
      this.arrayOwners.push(riskObject.owner);
      this.arrayStakeholders.push(riskObject.stakeholder);
      switch (riskObject.value) {
        case 1:
          this.riskValue1.push(riskObject);
          break;
        case 2:
          this.riskValue2.push(riskObject);
          break;
        case 3:
          this.riskValue3.push(riskObject);
          break;
        case 4:
          this.riskValue4.push(riskObject);
          break;
        case 5:
          this.riskValue5.push(riskObject);
          break;
        default:
          break;
      }
      count++;
    });
    this.risks = [].concat(this.riskValue1, this.riskValue2, this.riskValue3, this.riskValue4, this.riskValue5);
    console.log(this.risks);
  }

  populateMatrix() {
    if (this.riskValue1.length) {
      this.riskValue1.forEach(element => {
        switch (element.prob) {
          case 1:
            this.cel1_1.current.innerHTML += element.id + " ";
            break;
          case 2:
            this.cel1_2.current.innerHTML += element.id + " ";
            break;
          case 3:
            this.cel1_3.current.innerHTML += element.id + " ";
            break;
          case 4:
            this.cel1_4.current.innerHTML += element.id + " ";
            break;
          case 5:
            this.cel1_5.current.innerHTML += element.id + " ";
            break;
        }
      });
    }
    if (this.riskValue2.length) {
      this.riskValue2.forEach(element => {
        switch (element.prob) {
          case 1:
            this.cel2_1.current.innerHTML += element.id + " ";
            break;
          case 2:
            this.cel2_2.current.innerHTML += element.id + " ";
            break;
          case 3:
            this.cel2_3.current.innerHTML += element.id + " ";
            break;
          case 4:
            this.cel2_4.current.innerHTML += element.id + " ";
            break;
          case 5:
            this.cel2_5.current.innerHTML += element.id + " ";
            break;
        }
      });
    }
    if (this.riskValue3.length) {
      this.riskValue3.forEach(element => {
        switch (element.prob) {
          case 1:
            this.cel3_1.current.innerHTML += element.id + " ";
            break;
          case 2:
            this.cel3_2.current.innerHTML += element.id + " ";
            break;
          case 3:
            this.cel3_3.current.innerHTML += element.id + " ";
            break;
          case 4:
            this.cel3_4.current.innerHTML += element.id + " ";
            break;
          case 5:
            this.cel3_5.current.innerHTML += element.id + " ";
            break;
        }
      });
    }
    if (this.riskValue4.length) {
      this.riskValue4.forEach(element => {
        switch (element.prob) {
          case 1:
            this.cel4_1.current.innerHTML += element.id + " ";
            break;
          case 2:
            this.cel4_2.current.innerHTML += element.id + " ";
            break;
          case 3:
            this.cel4_3.current.innerHTML += element.id + " ";
            break;
          case 4:
            this.cel4_4.current.innerHTML += element.id + " ";
            break;
          case 5:
            this.cel4_5.current.innerHTML += element.id + " ";
            break;
        }
      });
    }
    if (this.riskValue5.length) {
      this.riskValue5.forEach(element => {
        switch (element.prob) {
          case 1:
            this.cel5_1.current.innerHTML += element.id + " ";
            break;
          case 2:
            this.cel5_2.current.innerHTML += element.id + " ";
            break;
          case 3:
            this.cel5_3.current.innerHTML += element.id + " ";
            break;
          case 4:
            this.cel5_4.current.innerHTML += element.id + " ";
            break;
          case 5:
            this.cel5_5.current.innerHTML += element.id + " ";
            break;
        }
      });
    }
  }

  newUpload() {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Deseja realizar upload de um novo ficheiro?',
      text: "Irá ser direcionado para o ecrã inicial",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        ReactDOM.render(<DataParser />, document.getElementById('root'));
      }
    })
  }

  componentDidMount() {
    // Get Risk Values
    this.populateMatrix();
  }

render() {
    return (
      <div>
        <div style={{ width: '100vw' }}>
          <div class="riskMatrix">
            <h3 style={{ textAlign: 'center' }}>Matrix de Risco</h3>
            <table>
              <tbody>
                <tr>
                  <th rowSpan="7" class="labelLeft">Valor ativo</th>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="yellow" ref={this.cel5_1}></td>
                  <td class="yellow" ref={this.cel5_2}></td>
                  <td class="red" ref={this.cel5_3}></td>
                  <td class="red" ref={this.cel5_4}></td>
                  <td class="red" ref={this.cel5_5}></td>
                </tr>
                <tr>
                  <td >4</td>
                  <td class="yellow" ref={this.cel4_1}></td>
                  <td class="yellow" ref={this.cel4_2}></td>
                  <td class="yellow" ref={this.cel4_3}></td>
                  <td class="red" ref={this.cel4_4}></td>
                  <td class="red" ref={this.cel4_5}></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="green" ref={this.cel3_1}></td>
                  <td class="yellow" ref={this.cel3_2}></td>
                  <td class="yellow" ref={this.cel3_3}></td>
                  <td class="yellow" ref={this.cel3_4}></td>
                  <td class="red" ref={this.cel3_5}></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="green" ref={this.cel2_1}></td>
                  <td class="green" ref={this.cel2_2}></td>
                  <td class="yellow" ref={this.cel2_3}></td>
                  <td class="yellow" ref={this.cel2_4}></td>
                  <td class="yellow" ref={this.cel2_5}></td>
                </tr>
                <tr>
                  <td >1</td>
                  <td class="green" ref={this.cel1_1}></td>
                  <td class="green" ref={this.cel1_2}></td>
                  <td class="green" ref={this.cel1_3}></td>
                  <td class="yellow" ref={this.cel1_4}></td>
                  <td class="yellow" ref={this.cel1_5}></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th colSpan="7">Prob de Ocorrência</th>
                </tr>
              </tbody>
            </table>
          </div>
          <Charts assets={this.arrayAtivos} owners={this.arrayOwners} stakeholders={this.arrayStakeholders} />
          <button onClick={this.newUpload} className="btn-example" style={{position:'absolute', top:'1%', right:'1%'}}>Novo upload
      </button>
        </div>
        <div>
          <RisksTable
            risks={this.risks}
          />
        </div>
      </div>
    )
  }
}

//Tabela com detalhes de cada risco
const sortTypes = {
  upId: {
    class: 'sort-up',
    fn: (a, b) => a.id - b.id
  },
  downId: {
    class: 'sort-down',
    fn: (a, b) => b.id - a.id
  },
  upAsset: {
    class: 'sort-up',
    fn: (a, b) => a.asset.localeCompare(b.asset)
  },
  downAsset: {
    class: 'sort-down',
    fn: (a, b) => b.asset.localeCompare(a.asset)
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
}

class RisksTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: 'default',
      valueId: false,
      valueAsset: false,
    };
    
  }

    onSortChangeId = () => {
      const { currentSort } = this.state;
      let nextSort;

      if (currentSort === 'downId'){
        this.setState({
          valueAsset: true
        });
        nextSort = 'upId';
      }
      else if (currentSort === 'upId'){
        this.setState({
          valueAsset: false
        }); 
        nextSort = 'default';
      }
      else if (currentSort === 'default'){
        this.setState({
          valueAsset: true
        }); 
        nextSort = 'downId';
      }
        
      this.setState({
        currentSort: nextSort
      });
    };

    onSortChangeAsset = () => {
      const { currentSort } = this.state;
      let nextSort;

      if (currentSort === 'downAsset'){
        this.setState({
          valueId: true
        });
        nextSort = 'upAsset';
      }
      else if (currentSort === 'upAsset'){
        this.setState({
          valueId: false
        }); 
        nextSort = 'default';
      }
      else if (currentSort === 'default'){
        this.setState({
          valueId: true
        }); 
        nextSort = 'downAsset';
      }
      this.setState({
        currentSort: nextSort
      });
    };


render() {
  const { risks } = this.props;
  const { currentSort } = this.state;
  console.log("here");
  console.log(sortTypes[currentSort]);
    return (
      <table style={{ paddingTop: '2rem' }}>
        <thead>
          <tr>
            <th>ID
            <button disabled={this.state.valueId} onClick={this.onSortChangeId} style={{ backgroundColor: 'transparent',
                backgroundRepeat: 'no-repeat',
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                outline: 'none'}}>
									<i className={`fa fa-${sortTypes[currentSort].class}`} />
								</button>
            </th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ativo
            <button disabled={this.state.valueAsset} onClick={this.onSortChangeAsset} style={{ backgroundColor: 'transparent',
                backgroundRepeat: 'no-repeat',
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                outline: 'none'}}>
									<i className={`fa fa-${sortTypes[currentSort].class}`} />
								</button>
            </th>
            <th>Criador</th>
            <th>Stakeholders</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {[...risks].sort(sortTypes[currentSort].fn).map(risk => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.title}</td>
              <td>{risk.description}</td>
              <td>{risk.asset}</td>
              <td>{risk.owner}</td>
              <td>{risk.stakeholder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Dashboard;