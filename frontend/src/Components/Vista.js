import React, { Component } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Vista extends Component {

    state = {
        userAgent: '"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36',
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
        const options = {
            headers: {
                'User-Agent': this.state.userAgent,
            }
        };
        const res = await axios.get('http://localhost:4000/api/users/', options);
        swal(res.data.message);
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
                                    value="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36">
                                    Chrome - Android Mobile
                                </option>
                                <option
                                    value="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36">
                                    Chrome - Windows
                                </option>
                                <option
                                    value="Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0">
                                    Firefox - Windows
                                </option>
                                <option
                                    value="Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4">
                                    Firefox - iPhone
                                </option>
                                <option
                                    value="Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0">
                                    Firefox - Windows
                                </option>
                                <option
                                    value="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48">
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
