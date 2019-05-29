import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import update from 'immutability-helper';

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
    }

    handleChangeDs(e) {
        this.props.onHdDs(e.target.value, this.state.index);
        this.setState({dailySalary: e.target.value})
    }

    render() {
        let nmb = this.props.numberOfWorkingDays;
        let ds = this.props.dailySalary;
        return <tr>
            <td>{this.state.index+1}</td>
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
        };
        this.sums = this.sums.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

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
            var listIt = this.state.items;
            console.log(numb);
            console.log(index);
            console.log(listIt);
            this.updateItem(index, {'numberOfWorkingDays': numb});
            console.log('update');
            console.log(numb);
            console.log(index);
            console.log(listIt);
        }
    }

    onChangeDs(ds, index) {
        if (typeof(this.state.items) != 'undefined') {
                var listIt = this.state.items;
                console.log(ds);
                console.log(index);
                console.log(listIt);
                this.updateItem(index, {'dailySalary': ds});
        }
    }

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


ReactDOM.render(<ItemsList title=" Отчет о заработной плате работников."></ItemsList>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
