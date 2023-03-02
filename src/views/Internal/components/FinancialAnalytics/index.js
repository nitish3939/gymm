import React from 'react';
import CustomDropdown from "./../CustomDropdown";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function FinancialAnalytics() {
    const selectOptions = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const options = {
        responsive: true,
        bezierCurve: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                borderColor: '#17C0B7',
                backgroundColor: 'rgba(23, 192, 183, 0.4)',
                lineTension: 0.5,
            },
            {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                borderColor: '#E7783A',
                backgroundColor: 'rgba(231, 120, 58, 0.4)',
                lineTension: 0.5,
            },
            {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                borderColor: '#E74E3A',
                backgroundColor: 'rgba(231, 78, 58, 0.4)',
                lineTension: 0.5,
            }
        ],
    };

    return (
        <>


            <div className="financialAnalyticsWrapper">
                <div className="membersTrendWrapper">
                    <div className='tableHeading'>
                        <h2 className='h2'>Financial Analytics</h2>
                        <CustomDropdown options={selectOptions} title="Last 3 months" />
                    </div>
                    <div className='revenueListWrapper'>
                        <div className='revenueList mint'>
                            <span className="material-icons">
                                fiber_manual_record
                            </span>
                            Total Revenue
                        </div>
                        <div className='revenueList orange'>
                            <span className="material-icons">
                                fiber_manual_record
                            </span>
                            Pending Payment
                        </div>
                        <div className='revenueList red'>
                            <span className="material-icons">
                                fiber_manual_record
                            </span>
                            Total Expenses
                        </div>
                        <div className='revenueList green'>
                            <span className="material-icons">
                                fiber_manual_record
                            </span>
                            Total Profit
                        </div>

                    </div>
                    <div className='areaChartWrapper'>
                        <Line options={options} data={data} />
                    </div>

                    <div className='revenueDetailsListWrapper'>
                        <div className='revenueDetailsListHover'> 
                           <div className='revenueDetailsList'>
                            <div className='title mint'>
                                <span className="material-icons">
                                    fiber_manual_record
                                </span>
                                Total Revenue 
                            </div>
                            <div className='num'>
                                 ₹560,850.09
                            </div>
                            <div className='smallTxt mint'>Manage Revenue</div>
                        </div>
                     </div>
                     <div className='revenueDetailsListHover'> 
                        <div className='revenueDetailsList '>
                            <div className='title orange'>
                                <span className="material-icons">
                                    fiber_manual_record
                                </span>
                                Pending Payment
                            </div>
                            <div className='num'>
                            ₹72,600.09
                            </div>
                            <div className='smallTxt orange'>Manage Pending Payment</div>
                        </div>
                        </div>
                        <div className='revenueDetailsListHover'> 
                        <div className='revenueDetailsList '>
                            <div className='title red'>
                                <span className="material-icons">
                                    fiber_manual_record
                                </span>
                                Total Expenses
                            </div>
                            <div className='num'>
                            ₹56,900.09
                            </div>
                            <div className='smallTxt red'>Manage Expenses</div>
                        </div>
                        </div>
                        <div className='revenueDetailsListHover'> 
                        <div className='revenueDetailsList'>
                            <div className='title green'>
                                <span className="material-icons">
                                    fiber_manual_record
                                </span>
                                Total Profit
                            </div>
                            <div className='num'>
                                ₹168,331.09
                            </div>
                            <div className='smallTxt green'>Manage Profit</div>
                        </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default FinancialAnalytics