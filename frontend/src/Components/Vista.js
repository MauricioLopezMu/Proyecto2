import React, { Component } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Vista extends Component {

    state = {
        userAgent: '1',
        respuesta: '',
        cargando: false,
        empty: ''
    }

    onChange = async (e) => {
        this.setState({ userAgent: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            cargando: true
        });
        const res = await axios.get('http://localhost:4000/api/users/' + this.state.userAgent);
        swal(res.data);
        this.setState({
            cargando: false
        });

    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-7 offset-md-2 p-4">
                        <div className="form-group">
                            <select
                                name="userAgent"
                                value={this.state.userAgent}
                                onChange={this.onChange}
                                className="form-control"
                            >
                                <option
                                    defaultValue
                                    value="1">
                                    Chrome - Android Mobile
                                </option>
                                <option
                                    value="2">
                                    Chrome - Windows
                                </option>
                                <option
                                    value="3">
                                    Firefox - Windows
                                </option>
                                <option
                                    value="4">
                                    Firefox - iPhone
                                </option>
                                <option
                                    value="5">
                                    Firefox - Windows
                                </option>
                                <option
                                    value="6">
                                    Opera - Windows
                                </option>
                            </select>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} className="col-md-2 p-4">
                        <button type="submit" className="btn btn-primary">
                            Consultar
                        </button>
                    </form>
                    {this.state.cargando ?
                        <Spinner />
                        :
                        this.state.empty
                    }
                </div>
            </div>
        )
    }
}
