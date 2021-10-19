import React, {Component} from 'react';

class Jogger extends Component {
    constructor() {
        super();
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // this.time = ;

        var today = new Date(),
            // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            date = today.getDate() + " " +(this.monthNames[today.getMonth()])+" "+today.getFullYear(),
            day= this.days[today.getDay()]
            // time = today.getHours() + ":" + today.getMinutes();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            // console.log(ampm);
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            this.time = hours+':'+minutes+' '+ampm;
            
        

        this.state = {
            date: date,
            day:day,
            time:this.time
        };
       
        
    }
    

    render() {
        return (
            <div className="Jogger-component">
                <div className="main">
                    <p name='calendar' >{this.state.date}</p>
                    <h7 name="date">{this.state.day}</h7>
                </div>   
                 {/* <p>This is Jogger-Component</p> */}
                 {/* <img src="https://i0.wp.com/shop.truefitness.com/wp-content/…tock_000009285219_Large.jpg?fit=2594%2C1921&ssl=1"/> */}
                 <i className="bi-arrow-left" id="left-arrow" style={{color:'rgb(76, 132, 236)'}}></i>
                 <h1>YOGA</h1>
                 <i className="bi-arrow-right" id="right-arrow" style={{color:'rgb(76, 132, 236)'}}></i>
                    <div className="div1">
                        <h4 className="weather">WEATHER</h4>
                            
                        <h4 className="distance">DISTANCE</h4>
                        <h4 className="time">{this.state.time}</h4>
                    </div> 
                    <div className="values">
                        <h5 className="degrees">30&deg;C</h5>
                         
                        <h5 className="kms">21KM</h5>
                    </div>       
                    <div className="nav-bars">
                        <a href="">BEGINNER</a>
                        <a href="">ADVANCED</a>
                        <a href="">EXPERT</a>
                    </div>
                    {/* <div className="d-grid gap-2 d-md-block">
                     <button type="button" class="btn btn-success">Login</button>
                     <button type="button" class="btn btn-success">SignUp</button>
                    </div> */}
                 
            </div>
        )
    }
    
    
    
    }
    
    export default Jogger;