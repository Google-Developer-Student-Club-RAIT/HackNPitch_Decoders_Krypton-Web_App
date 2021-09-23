import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      text: 'MSFT'
    };
  }

  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointertoThis = this;
    const API_KEY = "QX592D9EY21SBAMB";
    let StockSymbol = "MSFT";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${API_KEY}`;
    let stockChartXValuesfunction = [];
    let stockChartYValuesfunction = [];
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (5min)"]) {
          stockChartXValuesfunction.push(key);
          stockChartYValuesfunction.push(
            data["Time Series (5min)"][key]["2. high"]
          );
        }


        pointertoThis.setState({
          stockChartXValues: stockChartXValuesfunction,
          stockChartYValues: stockChartYValuesfunction
        });
      });
  }

  render() {
    const data = [];

    for (let i = 0; i < this.state.stockChartYValues.length; i++) {
      let d = {
        open: this.state.stockChartYValues[i],
        student: this.state.stockChartXValues[i]
        // value: { x: Math.random() * (rand + 50) + 100 }
      };

      data.push(d);
    }
    
  
    const labelStyle={
        backgroundColor: "black",
        textColor: "white",
    }
    return (
      <div className="max-w-full justify-items-stretch m-3">
        <h1 className="ml-16 mb-4 text-lg">{this.state.text}</h1>
        <ResponsiveContainer minWidth="80%" aspect={3} minHeight="80%">
          {
            <LineChart data={data} margin={{ top: 0, left: 0 }}>
              <CartesianGrid/>
              <XAxis dataKey="student" interval={"preserveStartEnd"} />
              <YAxis type="number" domain={[('dataMin', 'dataMax')]}/>
              <Tooltip cursor={{ stroke: '#28ffbf', strokeWidth: 1}} />
              <Line type="line"  dataKey="open" stroke="#ffc75f" dot={false} strokeWidth="2" />
            </LineChart>
          }
        </ResponsiveContainer>
        {/* <div class="p-8">
  <div class="bg-white flex items-center rounded-full shadow-xl">
    <input class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search Stock"/>
    <div class="p-4">
      <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        icon
      </button>
      </div>
          </div>
          </div> */}
          
      </div>
      
          
    );
  }
}

export default Stock;
