import React from 'react';
import { render } from "react-dom";
import { Line, Bar} from 'react-chartjs-2';
import Dropdown from 'react-dropdown';
import './styles/App.css';









export default class Country extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            line_d:[],
            stk_d:[{
                                labels:[],
                                datasets: [
                                            {
                                                label:'Old Cases',
                                                backgroundColor: ['blue', 'green', 'orange'],
                                                data:[]
                                            },
                                            {
                                                label: 'new cases',
                                                backgroundColor: ['skylue', 'lightgreen', 'lightyellow'],
                                                data:[]
                                            }
                                ]


                            }],
            car:'col-sm-5',
            gphc:'col-sm-6 tpad',
            clsr:'row ',
            cdr:[],
            line:'col-sm-8',
            sel_c:'India',
            options:[['Afghanistan', 'Afghanistan'], ['Albania', 'Albania'], ['Algeria', 'Algeria'], ['Andorra', 'Andorra'], ['Angola', 'Angola'], ['Anguilla', 'Anguilla'], ['Antigua and Barbuda', 'Antigua and Barbuda'], ['Argentina', 'Argentina'], ['Armenia', 'Armenia'], ['Aruba', 'Aruba'], ['Australia', 'Australia'], ['Austria', 'Austria'], ['Azerbaijan', 'Azerbaijan'], ['Bahamas', 'Bahamas'], ['Bahrain', 'Bahrain'], ['Bangladesh', 'Bangladesh'], ['Barbados', 'Barbados'], ['Belarus', 'Belarus'], ['Belgium', 'Belgium'], ['Belize', 'Belize'], ['Benin', 'Benin'], ['Bermuda', 'Bermuda'], ['Bhutan', 'Bhutan'], ['Bolivia', 'Bolivia'], ['Bosnia and Herzegovina', 'Bosnia and Herzegovina'], ['Botswana', 'Botswana'], ['Brazil', 'Brazil'], ['British Virgin Islands', 'British Virgin Islands'], ['Brunei', 'Brunei'], ['Bulgaria', 'Bulgaria'], ['Burkina Faso', 'Burkina Faso'], ['Burundi', 'Burundi'], ['CAR', 'CAR'], ['Cabo Verde', 'Cabo Verde'], ['Cambodia', 'Cambodia'], ['Cameroon', 'Cameroon'], ['Canada', 'Canada'], ['Caribbean Netherlands', 'Caribbean Netherlands'], ['Cayman Islands', 'Cayman Islands'], ['Chad', 'Chad'], ['Channel Islands', 'Channel Islands'], ['Chile', 'Chile'], ['China', 'China'], ['Colombia', 'Colombia'], ['Comoros', 'Comoros'], ['Congo', 'Congo'], ['Costa Rica', 'Costa Rica'], ['Croatia', 'Croatia'], ['Cuba', 'Cuba'], ['Curaçao', 'Curaçao'], ['Cyprus', 'Cyprus'], ['Czechia', 'Czechia'], ['DRC', 'DRC'], ['Denmark', 'Denmark'], ['Diamond Princess', 'Diamond Princess'], ['Djibouti', 'Djibouti'], ['Dominica', 'Dominica'], ['Dominican Republic', 'Dominican Republic'], ['Ecuador', 'Ecuador'], ['Egypt', 'Egypt'], ['El Salvador', 'El Salvador'], ['Equatorial Guinea', 'Equatorial Guinea'], ['Eritrea', 'Eritrea'], ['Estonia', 'Estonia'], ['Eswatini', 'Eswatini'], ['Ethiopia', 'Ethiopia'], ['Faeroe Islands', 'Faeroe Islands'], ['Falkland Islands', 'Falkland Islands'], ['Fiji', 'Fiji'], ['Finland', 'Finland'], ['France', 'France'], ['French Guiana', 'French Guiana'], ['French Polynesia', 'French Polynesia'], ['Gabon', 'Gabon'], ['Gambia', 'Gambia'], ['Georgia', 'Georgia'], ['Germany', 'Germany'], ['Ghana', 'Ghana'], ['Gibraltar', 'Gibraltar'], ['Greece', 'Greece'], ['Greenland', 'Greenland'], ['Grenada', 'Grenada'], ['Guadeloupe', 'Guadeloupe'], ['Guatemala', 'Guatemala'], ['Guinea', 'Guinea'], ['Guinea-Bissau', 'Guinea-Bissau'], ['Guyana', 'Guyana'], ['Haiti', 'Haiti'], ['Honduras', 'Honduras'], ['Hong Kong', 'Hong Kong'], ['Hungary', 'Hungary'], ['Iceland', 'Iceland'], ['India', 'India'], ['Indonesia', 'Indonesia'], ['Iran', 'Iran'], ['Iraq', 'Iraq'], ['Ireland', 'Ireland'], ['Isle of Man', 'Isle of Man'], ['Israel', 'Israel'], ['Italy', 'Italy'], ['Ivory Coast', 'Ivory Coast'], ['Jamaica', 'Jamaica'], ['Japan', 'Japan'], ['Jordan', 'Jordan'], ['Kazakhstan', 'Kazakhstan'], ['Kenya', 'Kenya'], ['Kuwait', 'Kuwait'], ['Kyrgyzstan', 'Kyrgyzstan'], ['Laos', 'Laos'], ['Latvia', 'Latvia'], ['Lebanon', 'Lebanon'], ['Liberia', 'Liberia'], ['Libya', 'Libya'], ['Liechtenstein', 'Liechtenstein'], ['Lithuania', 'Lithuania'], ['Luxembourg', 'Luxembourg'], ['MS Zaandam', 'MS Zaandam'], ['Macao', 'Macao'], ['Madagascar', 'Madagascar'], ['Malawi', 'Malawi'], ['Malaysia', 'Malaysia'], ['Maldives', 'Maldives'], ['Mali', 'Mali'], ['Malta', 'Malta'], ['Martinique', 'Martinique'], ['Mauritania', 'Mauritania'], ['Mauritius', 'Mauritius'], ['Mayotte', 'Mayotte'], ['Mexico', 'Mexico'], ['Moldova', 'Moldova'], ['Monaco', 'Monaco'], ['Mongolia', 'Mongolia'], ['Montenegro', 'Montenegro'], ['Montserrat', 'Montserrat'], ['Morocco', 'Morocco'], ['Mozambique', 'Mozambique'], ['Myanmar', 'Myanmar'], ['Namibia', 'Namibia'], ['Nepal', 'Nepal'], ['Netherlands', 'Netherlands'], ['New Caledonia', 'New Caledonia'], ['New Zealand', 'New Zealand'], ['Nicaragua', 'Nicaragua'], ['Niger', 'Niger'], ['Nigeria', 'Nigeria'], ['North Macedonia', 'North Macedonia'], ['Norway', 'Norway'], ['Oman', 'Oman'], ['Pakistan', 'Pakistan'], ['Palestine', 'Palestine'], ['Panama', 'Panama'], ['Papua New Guinea', 'Papua New Guinea'], ['Paraguay', 'Paraguay'], ['Peru', 'Peru'], ['Philippines', 'Philippines'], ['Poland', 'Poland'], ['Portugal', 'Portugal'], ['Qatar', 'Qatar'], ['Romania', 'Romania'], ['Russia', 'Russia'], ['Rwanda', 'Rwanda'], ['Réunion', 'Réunion'], ['S. Korea', 'S. Korea'], ['Saint Kitts and Nevis', 'Saint Kitts and Nevis'], ['Saint Lucia', 'Saint Lucia'], ['Saint Martin', 'Saint Martin'], ['Saint Pierre Miquelon', 'Saint Pierre Miquelon'], ['San Marino', 'San Marino'], ['Sao Tome and Principe', 'Sao Tome and Principe'], ['Saudi Arabia', 'Saudi Arabia'], ['Senegal', 'Senegal'], ['Serbia', 'Serbia'], ['Seychelles', 'Seychelles'], ['Sierra Leone', 'Sierra Leone'], ['Singapore', 'Singapore'], ['Sint Maarten', 'Sint Maarten'], ['Slovakia', 'Slovakia'], ['Slovenia', 'Slovenia'], ['Somalia', 'Somalia'], ['South Africa', 'South Africa'], ['South Sudan', 'South Sudan'], ['Spain', 'Spain'], ['Sri Lanka', 'Sri Lanka'], ['St. Barth', 'St. Barth'], ['St. Vincent Grenadines', 'St. Vincent Grenadines'], ['Sudan', 'Sudan'], ['Suriname', 'Suriname'], ['Sweden', 'Sweden'], ['Switzerland', 'Switzerland'], ['Syria', 'Syria'], ['Taiwan', 'Taiwan'], ['Tajikistan', 'Tajikistan'], ['Tanzania', 'Tanzania'], ['Thailand', 'Thailand'], ['Timor-Leste', 'Timor-Leste'], ['Togo', 'Togo'], ['Trinidad and Tobago', 'Trinidad and Tobago'], ['Tunisia', 'Tunisia'], ['Turkey', 'Turkey'], ['Turks and Caicos', 'Turks and Caicos'], ['UAE', 'UAE'], ['UK', 'UK'], ['USA', 'USA'], ['Uganda', 'Uganda'], ['Ukraine', 'Ukraine'], ['Uruguay', 'Uruguay'], ['Uzbekistan', 'Uzbekistan'], ['Vatican City', 'Vatican City'], ['Venezuela', 'Venezuela'], ['Vietnam', 'Vietnam'], ['Western Sahara', 'Western Sahara'], ['World', 'World'], ['Yemen', 'Yemen'], ['Zambia', 'Zambia'], ['Zimbabwe', 'Zimbabwe']],
            list:[],
            s:[{labels:[],datasets:[{label:'',data:[],backgroundColor:[]}]}],
            isLoaded:false,
            Loaded:false,
            placeholder:"Loading"
        };
        this.submit = this.submit.bind(this);
        this.plot = this.plot.bind(this);
        this.plotline = this.plotline.bind(this);
    }


    submit = (e) => {
        console.log(e.target.value);
        this.setState({sel_c:e.target.value});
        this.plot("/datar/"+e.target.value);
        this.plotline("/all/"+e.target.value);
    }


    plotline(api){
        fetch(api)
            .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            line_d:result[0],
                            Loaded: true
                        });
                    },
                    (error) => {
                    this.setState({
                        Loaded: true,
                        error
                });

            }
        )

    }


    plot(api) {
        fetch(api)
            .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({

                            stk_d:[{
                                labels:result[0].labels,
                                datasets: [
                                            {
                                                label:'Old Cases',
                                                backgroundColor: ['blue', 'green', 'orange'],
                                                data:[result[0].stk_d[0],result[0].stk_d[1],result[0].stk_d[2]]
                                            },
                                            {
                                                label: 'new cases',
                                                backgroundColor: ['skyblue', 'lightgreen', 'lightyellow'],
                                                data:[result[0].stk_d[3],result[0].stk_d[4],result[0].stk_d[5]]
                                            }
                                ]


                            }],



                            cdr:result[0].cdr,
                            list:[result[0].ac, result[0].cc, result[0].wtc, result[0].wtd],
                            s:[{labels: result[0].labels, datasets: [{label:this.state.sel_c, data:result[0].data, backgroundColor:result[0].clr}]}],
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
    componentDidMount(){

        if(window.innerWidth<1560){
            this.setState(
            {clsr:'',
             gphc:'tpad',
             car:'',
             line:''
            }
            )
        }
        else{
        this.setState(
            {clsr:'bgrow row',
             gphc:'col-sm-6 tpad',
             car:'col-sm-5',
             line:'col-sm-8'

            }
            )
        }
        window.addEventListener('resize', () => {
        console.log(this.state.line_d)
            if(window.innerWidth<1000){
                    this.setState(
                    {clsr:'bg-light',
                     gphc:'tpad',
                     ne:'row',
                     car:'',
                     line:''
                    }
                    )
                }
                else{
                this.setState(
                    {clsr:'bg-light row',
                     gphc:'col-sm-6 tpad',
                     car:'col-sm-5',
                     line:'col-sm-8'
                    }
                    )
                }

        }, false);
        this.plot("/datar/India");
        this.plotline("/all/India");
    }

    render() {
            let countriesList = this.state.options.length > 0
                && this.state.options.map((item, i) => {
                return (
                    <option key={i} value={item[0]}>{item[1]}</option>
                )
            }, this);
        return (
            <div>
                <div className={this.state.clsr}>
                    <div className={this.state.car}>

                        <div className="pad">
                            <select className="sel border rounded" onChange={this.submit}>
                                <option value="" disabled selected>Choose a Country</option>
                                {countriesList}
                            </select>
                            <div className="card car relg text-center sw">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.sel_c}</h5>
                                    <h6 className="card-subtitle mb-2  text-muted"></h6><hr/>

                                        <p className="card-text f">Cases: {this.state.cdr[0]}</p>
                                        <p className="card-text f">Recovered: {this.state.cdr[2]}</p>
                                        <p className="card-text f">Deaths: {this.state.cdr[1]}</p><hr/>
                                        <p className="card-text f">New Cases: {this.state.stk_d[0].datasets[1].data[0]}</p>
                                        <p className="card-text f">New Deaths: {this.state.stk_d[0].datasets[1].data[1]}</p><hr/>
                                        <p className="card-text f">{this.state.cdr[3]} out of {this.state.cdr[5]} people die here</p>
                                        <p className="card-text f">{this.state.cdr[4]}% Mortality Rate</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.gphc}>
                        <div className="bg-light">
                            <div className="container relg w">
                                <Bar
                                  data={this.state.stk_d[0]}
                                  options={{
                                  scales: {
                                        xAxes: [{
                                            stacked: true
                                        }],
                                        yAxes: [{
                                            stacked: true
                                        }]
                                    },
                                    title:{
                                      display:true,
                                      text:this.state.s[0].datasets[0].label,
                                      fontSize:20
                                    },
                                    legend:{
                                      display:false,
                                      position:'bottom'
                                    }
                                  }}
                                />
                            </div>
                        </div>
                    </div>
                </div><hr/>
                <div className="bg-">
                <div className={this.state.clsr}>
                    <div className="col-sm-2">
                    </div>
                    {console.log(this.state.line_d)}
                    <div className={this.state.line}>
                        <Line data={this.state.line_d} options={
                            {
                                fill:false,
                                title:{
                                  display:true,
                                  text:'Curve of '+this.state.sel_c,
                                  fontSize:20
                                },
                                legend:{
                                  display:false,
                                  position:'bottom'
                                }
                              }

                        }/>
                    </div>
                </div>
                </div>
            </div>
            );
        }
    }
