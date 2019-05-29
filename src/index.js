import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import update from 'react-addons-update';
import update from 'immutability-helper';

/*class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index , name: this.props.name,   surname: this.props.surname,
            numberOfWorkingDays: this.props.numberOfWorkingDays,  dailySalary: this.props.dailySalary
        };

        this.handleChangeNumWrk = this.handleChangeNumWrk.bind(this);
        this.handleChangeDs = this.handleChangeDs.bind(this);
    }

    handleChangeNumWrk(event) {
        this.setState({numberOfWorkingDays: event.target.value})
        this.props.onChNm(event.target.value);
    }

    handleChangeDs(event) {
        this.setState({dailySalary: event.target.value})
        this.props.onChDs(event.target.value);
    }

    render() {
        return <tr>
            <td>{this.state.index}</td>
            <td>{this.state.name}</td>
            <td>{this.state.surname}</td>
            <td><input type='text' name='nwd' value={this.state.numberOfWorkingDays}
                       onChange={this.handleChangeNumWrk}/></td>
            <td><input type='text' name='ds' value={this.state.dailySalary}
                       onChange={this.handleChangeDs}/></td>
            <td>{this.state.dailySalary*this.state.numberOfWorkingDays}</td>
        </tr>;
    }
}*/

/*class ItemsList extends React.Component {
    render() {
        return(
            <table>
                <caption>{this.props.title}</caption>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Кол-во отработанных дней</th>
                    <th>Ставка за день</th>
                    <th>Итого</th>
                </tr>
                <Item index="1" name="Ivan" surname="Ivanov" numberOfWorkingDays="3" dailySalary="500"/>
                <Item index="2" name="Petr" surname="Petrov" numberOfWorkingDays="4" dailySalary="600"/>
                <Item index="3" name="Vasiliy" surname="Vasilev" numberOfWorkingDays="5" dailySalary="700"/>
                <Item index="4" name="Anna" surname="Olegovna" numberOfWorkingDays="6" dailySalary="800"/>
                <Item index="5" name="Rita" surname="Ivanova" numberOfWorkingDays="7" dailySalary="900"/>
                <Item index="6" name="Yulia" surname="Petrova" numberOfWorkingDays="8" dailySalary="1000"/>
                <Item index="7" name="Albert" surname="Kozlov" numberOfWorkingDays="9" dailySalary="1200"/>
                <Item index="8" name="Zhanna" surname="Palmirova" numberOfWorkingDays="11" dailySalary="1400"/>
                <Item index="9" name="Ivan" surname="Smirnov" numberOfWorkingDays="3" dailySalary="800"/>
                <Item index="10" name="Sergey" surname="Sidorov" numberOfWorkingDays="3" dailySalary="500"/>
            </table>);
    }
}*/

/*class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Ivan',   surname: 'Ivanov',   numberOfWorkingDays: 3,  dailySalary: 500},
                { name: 'Petr',   surname: 'Petrov',   numberOfWorkingDays: 4,  dailySalary: 600},
                { name: 'Vasiliy',surname: 'Vasilev',  numberOfWorkingDays: 5,  dailySalary: 700},
                { name: 'Anna',   surname: 'Olegovna', numberOfWorkingDays: 6,  dailySalary: 800},
                { name: 'Rita',   surname: 'Ivanova',  numberOfWorkingDays: 7,  dailySalary: 900},
                { name: 'Yulia',  surname: 'Petrova',  numberOfWorkingDays: 8,  dailySalary: 1000},
                { name: 'Albert', surname: 'Kozlov',   numberOfWorkingDays: 9,  dailySalary: 500},
                { name: 'Zhanna', surname: 'Palmirova',numberOfWorkingDays: 10, dailySalary: 600},
                { name: 'Ivan',   surname: 'Smirnov',  numberOfWorkingDays: 11, dailySalary: 700},
                { name: 'Sergey', surname: 'Sidorov',  numberOfWorkingDays: 12, dailySalary: 800}
            ]
           ,
            commonSum:0

        //,
            // cntWrkDay:0,
            // payForDay: 0,
            // sumPay: 0
        };
        this.sums = this.sums.bind(this);
        this.setState({numberOfWorkingDays: event.target.value})
        //thisthis.state.commonSum = this.sums();
    }

    sums(){
        let sum = 0;
        this.state.items.map((item, index) => {
            sum += item.numberOfWorkingDays*item.dailySalary;
        });
        return sum;
    }

    render() {
        var divStyle = {
            paddingLeft: '450px'
        };
        const list = this.state.items.map((item, index) => {
            return <Item index={index+1} name={item.name} surname={item.surname}
                         numberOfWorkingDays={item.numberOfWorkingDays} dailySalary= {item.dailySalary}/>;
        });

        return <div>
            <table>
                <caption>{this.props.title}</caption>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Кол-во отработанных дней</th>
                    <th>Ставка за день</th>
                    <th>Итого</th>
                </tr>
                {list}
            </table>
          <div style={divStyle}>Общая сумма: {this.sums()}</div>
        </div>;
    }
}*/

/*class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Ivan',   surname: 'Ivanov',   numberOfWorkingDays: 3,  dailySalary: 500},
                { name: 'Petr',   surname: 'Petrov',   numberOfWorkingDays: 4,  dailySalary: 600},
                { name: 'Vasiliy',surname: 'Vasilev',  numberOfWorkingDays: 5,  dailySalary: 700},
                { name: 'Anna',   surname: 'Olegovna', numberOfWorkingDays: 6,  dailySalary: 800},
                { name: 'Rita',   surname: 'Ivanova',  numberOfWorkingDays: 7,  dailySalary: 900},
                { name: 'Yulia',  surname: 'Petrova',  numberOfWorkingDays: 8,  dailySalary: 1000},
                { name: 'Albert', surname: 'Kozlov',   numberOfWorkingDays: 9,  dailySalary: 500},
                { name: 'Zhanna', surname: 'Palmirova',numberOfWorkingDays: 10, dailySalary: 600},
                { name: 'Ivan',   surname: 'Smirnov',  numberOfWorkingDays: 11, dailySalary: 700},
                { name: 'Sergey', surname: 'Sidorov',  numberOfWorkingDays: 12, dailySalary: 800}
            ]
            //,
            // cntWrkDay:0,
            // payForDay: 0,
            // sumPay: 0
        };
    }

    handleChangeNumWrk(event) {
        this.setState({nwd: event.target.value})
    }

    handleChangeDs(event) {
        this.setState({ds: event.target.value})
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td><input type='text' name='nwd' value={item.numberOfWorkingDays}
                           onChange={this.handleChangeNumWrk.bind(this)}/></td>
                <td><input type='text' name='ds' value={item.dailySalary}
                           onChange={this.handleChangeDs.bind(this)}/></td>
                <td>{item.dailySalary*item.numberOfWorkingDays}</td>
            </tr>;
        });

        return <table>
            <caption>Отчет о работниках</caption>
            <tr>
                <th>№</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Кол-во отработанных дней</th>
                <th>Ставка за день</th>
                <th>Итого</th>
            </tr>
            {list}
        </table>;
    }
}*/
class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index , name: this.props.name,   surname: this.props.surname,
            numberOfWorkingDays: this.props.numberOfWorkingDays,  dailySalary: this.props.dailySalary
        };

        this.handleChangeNumWrk = this.handleChangeNumWrk.bind(this);
        this.handleChangeDs = this.handleChangeDs.bind(this);
    }

    handleChangeNumWrk(e) {
        this.props.onHdWk(e.target.value, this.state.index);
        this.setState({numberOfWorkingDays: e.target.value})
        //this.props.onChNm(event.target.value);
    }

    handleChangeDs(e) {
        this.props.onHdDs(e.target.value, this.state.index);
        this.setState({dailySalary: e.target.value})
       // this.props.onChDs(event.target.value);
    }

    render() {
        let nmb = this.props.numberOfWorkingDays;
        let ds = this.props.dailySalary;
        return <tr>
            <td>{this.state.index}</td>
            <td>{this.state.name}</td>
            <td>{this.state.surname}</td>
            <td><input type='text' name='nwd' value={nmb}
                       onChange={this.handleChangeNumWrk}/></td>
            <td><input type='text' name='ds' value={ds}
                       onChange={this.handleChangeDs}/></td>
            <td>{this.state.dailySalary*this.state.numberOfWorkingDays}</td>
        </tr>;
    }
}

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, name: 'Ivan',   surname: 'Ivanov',   numberOfWorkingDays: 3,  dailySalary: 500},
                { id: 1, name: 'Petr',   surname: 'Petrov',   numberOfWorkingDays: 4,  dailySalary: 600},
                { id: 2, name: 'Vasiliy',surname: 'Vasilev',  numberOfWorkingDays: 5,  dailySalary: 700},
                { id: 3, name: 'Anna',   surname: 'Olegovna', numberOfWorkingDays: 6,  dailySalary: 800},
                { id: 4, name: 'Rita',   surname: 'Ivanova',  numberOfWorkingDays: 7,  dailySalary: 900},
                { id: 5, name: 'Yulia',  surname: 'Petrova',  numberOfWorkingDays: 8,  dailySalary: 1000},
                { id: 6, name: 'Albert', surname: 'Kozlov',   numberOfWorkingDays: 9,  dailySalary: 500},
                { id: 7, name: 'Zhanna', surname: 'Palmirova',numberOfWorkingDays: 10, dailySalary: 600},
                { id: 8, name: 'Ivan',   surname: 'Smirnov',  numberOfWorkingDays: 11, dailySalary: 700},
                { id: 9, name: 'Sergey', surname: 'Sidorov',  numberOfWorkingDays: 12, dailySalary: 800}
            ]
            ,
            commonSum:0

            //,
            // cntWrkDay:0,
            // payForDay: 0,
            // sumPay: 0
        };
        this.sums = this.sums.bind(this);
        this.updateItem = this.updateItem.bind(this);
        //this.onChangeNmb = this.onChangeNmb(this);
        //this.onChangeDs = this.onChangeDs(this);
        //this.update = this.update.bind(this);
       /* this.setState({numberOfWorkingDays: event.target.value})*/
        //thisthis.state.commonSum = this.sums();
    }

    /*componentWillMount() {
        /!*let items: [
            { id: 1, name: 'Ivan',   surname: 'Ivanov',   numberOfWorkingDays: 3,  dailySalary: 500},
            { id: 2, name: 'Petr',   surname: 'Petrov',   numberOfWorkingDays: 4,  dailySalary: 600},
            { id: 3, name: 'Vasiliy',surname: 'Vasilev',  numberOfWorkingDays: 5,  dailySalary: 700},
            { id: 4, name: 'Anna',   surname: 'Olegovna', numberOfWorkingDays: 6,  dailySalary: 800},
            { id: 5, name: 'Rita',   surname: 'Ivanova',  numberOfWorkingDays: 7,  dailySalary: 900},
            { id: 6, name: 'Yulia',  surname: 'Petrova',  numberOfWorkingDays: 8,  dailySalary: 1000},
            { id: 7, name: 'Albert', surname: 'Kozlov',   numberOfWorkingDays: 9,  dailySalary: 500},
            { id: 8, name: 'Zhanna', surname: 'Palmirova',numberOfWorkingDays: 10, dailySalary: 600},
            { id: 9, name: 'Ivan',   surname: 'Smirnov',  numberOfWorkingDays: 11, dailySalary: 700},
            { id: 10, name: 'Sergey', surname: 'Sidorov',  numberOfWorkingDays: 12, dailySalary: 800}
        ]}*!/
        this.setState({items:  [
                { id: 0, name: 'Ivan',   surname: 'Ivanov',   numberOfWorkingDays: 3,  dailySalary: 500},
                { id: 1, name: 'Petr',   surname: 'Petrov',   numberOfWorkingDays: 4,  dailySalary: 600},
                { id: 2, name: 'Vasiliy',surname: 'Vasilev',  numberOfWorkingDays: 5,  dailySalary: 700},
                { id: 3, name: 'Anna',   surname: 'Olegovna', numberOfWorkingDays: 6,  dailySalary: 800},
                { id: 4, name: 'Rita',   surname: 'Ivanova',  numberOfWorkingDays: 7,  dailySalary: 900},
                { id: 5, name: 'Yulia',  surname: 'Petrova',  numberOfWorkingDays: 8,  dailySalary: 1000},
                { id: 6, name: 'Albert', surname: 'Kozlov',   numberOfWorkingDays: 9,  dailySalary: 500},
                { id: 7, name: 'Zhanna', surname: 'Palmirova',numberOfWorkingDays: 10, dailySalary: 600},
                { id: 8, name: 'Ivan',   surname: 'Smirnov',  numberOfWorkingDays: 11, dailySalary: 700},
                { id: 9, name: 'Sergey', surname: 'Sidorov',  numberOfWorkingDays: 12, dailySalary: 800}
            ]});
    }*/

    updateItem (id, itemAttributes) {
        var index = this.state.items.findIndex(x=> x.id === id);
        if (index === -1){

        }
        else{
            this.setState({
                items: [
                    ...this.state.items.slice(0,index),
                    Object.assign({}, this.state.items[index], itemAttributes),
                    ...this.state.items.slice(index+1)
                ]
            });
        }
    }

    sums(){
        let sum = 0;
        this.state.items.map((item, index) => {
            sum += item.numberOfWorkingDays*item.dailySalary;
        });
        return sum;
    }

    onChangeNmb(numb, index) {
        if (typeof(this.state.items) != 'undefined') {
            //if (typeof(this.state.items.item(index).dailySalary)!= 'undefined'){
            var listIt = this.state.items;
            console.log(numb);
            console.log(index);
            console.log(listIt);
            // this.updateItem(index, {numberOfWorkingDays: numb});
            // this.state.items[index].numberOfWorkingDays = numb;
            this.updateItem(index, {'numberOfWorkingDays': numb});
            console.log('update');
            console.log(numb);
            console.log(index);
            console.log(listIt);
           // listIt: update(listIt, {index: {'numberOfWorkingDays': {$set: numb}}});
          //  this.setState({items: listIt});
        }
       // }
       /* var listIt = this.state.items;
       // this.updateItem(index, {numberOfWorkingDays: numb});
        // this.state.items[index].numberOfWorkingDays = numb;
        listIt: update(listIt, {index: {numberOfWorkingDays: {$set: numb}}});
        this.setState({items: listIt});*/
            /* this.setState({numberOfWorkingDay: numb});*/
    }

    onChangeDs(ds, index) {
        if (typeof(this.state.items) != 'undefined') {
            //let h = this.state.items.item(index);
            //var k = this.state.items.item(index).dailySalary;
            //if (typeof (k) != 'undefined') {
                var listIt = this.state.items;
                console.log(ds);
                console.log(index);
                console.log(listIt);
                this.updateItem(index, {'dailySalary': ds});
               // listIt: update(this.state.items, {index: {'dailySalary': {$set: ds}}});
            //this.setState({'dailySalary': ds});
                //this.setState({items: listIt});
           // }
        }
/*
        var listIt = this.state.items;
        //this.updateItem(index, {dailySalary: ds});
        listIt: update(this.state.items, {index: {dailySalary: {$set: ds}}});
        this.setState({items: listIt});*/
         //this.state.items[index].dailySalary = ds;
        /*this.setState({dailySalary: ds});*/
    }

    /*onChangeSpeedInMph(item) {
        this.setState({unit: 'MPH', speed});
    }*/

    render() {
        var divStyle = {
            paddingLeft: '450px'
        };
        const list = this.state.items.map((item, index) => {
            return <Item key={item.id}
                         index={index} name={item.name} surname={item.surname}
                         numberOfWorkingDays={item.numberOfWorkingDays}
                         dailySalary = {!!item.dailySalary && item.dailySalary}
                         onHdWk = {this.onChangeNmb.bind(this)}
                         onHdDs = {this.onChangeDs.bind(this)}/>;
        });

        return <div>
            <div>{this.props.title}</div>
            <table>
                <tbody >
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Кол-во отработанных дней</th>
                    <th>Ставка за день</th>
                    <th>Итого</th>
                </tr>
                {!!this.state.items && list}
                </tbody>
            </table>
            <div style={divStyle}>Общая сумма: {this.sums()}</div>
        </div>;
    }
}


ReactDOM.render(<ItemsList title="Отчет о заработной плате работников."></ItemsList>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
