import React from 'react';
import { render } from "react-dom";
import {Pie, Doughnut} from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import './styles/App.css';


export default class All extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gphc:'col-sm-7 tpad',
            clsr:'row bg-light',
            legend:true,
            list:[],
            s:[{labels:[],datasets:[{label:'',data:[],backgroundColor:[]}]}],
            isLoaded:false,
            placeholder:"Loading"
        };

        this.plot = this.plot.bind(this);

    }


    plot(api){
        console.log(api)
        fetch(api)
            .then(res => res.json())
                .then(
                    (result) => {
                    console.log(result[0].labels);
                        this.setState({
                            list:[result[0].ac, result[0].cc, result[0].wtc, result[0].wtd],
                            s:[{labels: result[0].labels, datasets: [{label:'World Major Deaths', data:result[0].data, backgroundColor:result[0].clr}]}],

                            isLoaded: true
                        });
                    },
                    (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                });
            }
        )

    }
    componentDidMount() {
    if(window.innerWidth<1000){
                    this.setState(
                    {
                        legend:false,
                        clsr:'bg-light',
                        gphc:'tpad'
                    }
                    )
                }
                else{
                this.setState({
                        legend:true,

                        clsr:'bg-light row bgrow',
                        gphc:'col-sm-6 tpad'
                    }
                    )
                }

        window.addEventListener('resize', () => {
            if(window.innerWidth<1000){
                    this.setState(
                    {
                        legend:false
                    }
                    )
                }
                else{
                this.setState({
                        legend:true
                    }
                    )
                }

        }, false);

        this.plot('datar/all')
        console.log(window.innerWidth);

    }

    render() {
        return (
            <div className={this.state.clsr}>
                <div className="col-sm-1">
                </div>
                <div className={this.state.gphc}>
                    <div className="bg-light">
                        <div className="w relg">
                            <Doughnut
                              data={this.state.s[0]}
                              options={{
                                title:{
                                  display:true,
                                  text:this.state.s[0].datasets[0].label,
                                  fontSize:20
                                },
                                legend:{
                                  display:this.state.legend,
                                  position:'bottom'
                                }
                              }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="pad">
                        <div className="card text-center car sw">
                            <div className="card-body">
                                <h5 className="card-title">World Details</h5>
                                <h6 className="card-subtitle mb-2  text-muted"></h6><hr/>
                                <div className="row">
                                    <p className="card-text col-sm-6">Cases</p>
                                    <p className="card-text col-sm-6">Deaths</p>
                                </div>
                                <div className="row">
                                    <p className="card-text col-sm-6">{this.state.list[2]}</p>
                                    <p className="card-text col-sm-6">{this.state.list[3]}</p>
                                </div>
                                <hr/>
                                <small href="#" className="card-link">Active Cases: {this.state.list[0]}</small><br/>
                                <small href="#" className="card-link">Critical Cases: {this.state.list[1]}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
