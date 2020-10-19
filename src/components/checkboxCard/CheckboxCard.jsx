import React, { Component } from "react";

class CheckboxCard extends Component {
    render() {
        let { title, data, type } = this.props;
        return (
            <div className="card_box checkbox-card">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12 ">
                        <h5>{title}</h5>
                    </div>
                    {data && data.length > 0 && data.map((obect, index) => (
                        <div className="col-md-12 " key={index}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name={obect.name} onChange={(event) => this.props.onChange(event, type, index) } checked={obect.checked} id={obect.name} required />
                                <label className="custom-control-label" for={obect.name}  > {obect.title}</label>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export default CheckboxCard;
