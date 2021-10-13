import React from "react";
import { Doughnut } from "react-chartjs-2";
/*

*/
class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: {
        labels: Object.keys(this.extractValues(props.assets)),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.extractValues(props.assets)),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            width: 2,
            height: 1,
          },
        ],
        text: '23%',
      },

      owners: {
        labels: Object.keys(this.extractValues(props.owners)),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.extractValues(props.owners)),//extractValues(this.props.owners),//[12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            width: 2,
            height: 1,
          },
        ],
        text: '23%',
      },

      stakeholders: {
        labels: Object.keys(this.extractValues(props.stakeholders)),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.extractValues(props.stakeholders)),//extractValues(this.props.assets),//,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            width: 2,
            height: 1,
          },
        ],
        text: '23%',
      },
    };
  }

  extractValues = (data) => {
    const counts = {};
    data.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts;
  }

  render() {
    const options = {
        plugins: {
            legend: {
              display: false
            }
          }
    };
    return (
        <div>
    <div className="thefiveDoughnuts" style={{marginLeft: '10rem'}}>
        <h3 style={{textAlign: 'center'}}>Ativos</h3>
        <Doughnut data={this.state.assets} options={options}
      />
      </div>
      <div className="thefiveDoughnuts">
      <h3 style={{textAlign: 'center'}}>Owners</h3>
      <Doughnut data={this.state.owners} options={options}
      />
           </div>
           <div className="thefiveDoughnuts">
           <h3 style={{textAlign: 'center'}}>Stakeholders</h3>
           <Doughnut data={this.state.stakeholders} options={options}
      />
           </div>
           </div>
    );
  }
}

export default Charts;