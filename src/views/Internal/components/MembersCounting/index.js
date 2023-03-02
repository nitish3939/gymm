import React from 'react';
import CustomDropdown from "./../CustomDropdown";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);





const MembersCounting = () => {
    const selectOptions = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const options = {
        tooltips: {
            mode: 'index'
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                backgroundColor: '#E74E3A',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                backgroundColor: '#E7783A',
            },
            {
                label: 'Dataset 3',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                backgroundColor: '#00AD8E',
            }
        ],
    };
    return (
        <>
            <div className="membersTrendWrapper">
                <div className='tableHeading'>
                    <h2 className='h2'>Members Counting by Trend</h2>
                    <CustomDropdown options={selectOptions} title="Last 3 months" />
                </div>
                <div className='membersTrendDetailsWrapper'>
                    <div className='membersTrendDetails mint'>
                        <span className="material-icons">
                            person
                        </span>
                        Active Members : 376k
                        <div className=''></div>
                    </div>
                    <div className='membersTrendDetails red'>
                        <span className="material-icons">
                            person
                        </span>
                        Inactive Members : 376k
                        <div className=''></div>
                    </div>
                    <div className='membersTrendDetails orange'>
                        <span className="material-icons">
                            person
                        </span>
                        Upcoming Members : 376k
                        <div className=''></div>
                    </div>

                </div>
                <div className='barChartWrapper'>
                    <Bar options={options} data={data} />
                </div>

            </div>



        </>
    )
}

export default MembersCounting