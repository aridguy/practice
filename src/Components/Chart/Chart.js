import React from "react";

import { Bar } from "react-chartjs-2";

const Chart = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="contentsChart">
                        <p>jbdjfb</p>

                            <Bar
                                data={{
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                }}
                                height={400}
                                width={600}




                            />

                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}



export default Chart;