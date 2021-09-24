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
import searchBar from '../Assets/img/searchBar.png'


class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      text: 'MSFT',
      setSearchBar: props.searchBar ? "" : "hidden"     //class for hidding search bar 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("searchBar-", props.searchBar)
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.fetchStock();
  }


  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointertoThis = this;
    const API_KEY = "QX592D9EY21SBAMB";
    let StockSymbol = this.state.text;
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


    const labelStyle = {
      backgroundColor: "black",
      textColor: "white",
    }
    return (
      <div className="max-w-full justify-items-stretch m-3">
        <h1 className="ml-16 mb-4 text-lg">{this.state.text}</h1>
        <ResponsiveContainer minWidth="80%" aspect={3} minHeight="80%">
          {
            <LineChart data={data} margin={{ top: 0, left: 0 }}>
              <CartesianGrid />
              <XAxis dataKey="student" interval={"preserveStartEnd"} />
              <YAxis type="number" domain={[('dataMin', 'dataMax')]} />
              <Tooltip cursor={{ stroke: '#28ffbf', strokeWidth: 1 }} />
              <Line type="line" dataKey="open" stroke="#ffc75f" dot={false} strokeWidth="2" />
            </LineChart>
          }
        </ResponsiveContainer>
        <div class="p-8" class={`${this.state.setSearchBar}`}>
          <div class="bg-white flex items-center rounded-full shadow-xl">
            <input list="org" name="org" id="org" class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search Stock"
              value={this.state.text}
              onChange={this.handleChange}
            />
            {console.log("text-", this.state.text)}
            <div class="p-4">
              <button class="bg-transparent text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                onClick={this.handleSubmit} >
                <img src={searchBar}/>
              </button>
            </div>
          </div>
          <div>
            <datalist id="org">
              <option value="Edge">
              </option><option value="MSFT">
              </option><option value="AAPL">
              </option><option value="TSLA">
              </option><option value="NDAQ">
              </option><option value="RELI">
              </option></datalist>
          </div>
        </div>
          </div>
      


    );
  }
}

export default Stock;
