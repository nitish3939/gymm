import React from 'react'
import CustomDropdown from "./../CustomDropdown";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const LeadTypes = () => {
   

    const selectOptions = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            centerText: {
                display: true,
                text: "280"
            },
        },
    };

    
   

    const data = {
        labels: ['Hot Leads', 'Warm Leads', 'Cold Leads'],
        datasets: [
            {
                label: '# of Votes',
                data: [30, 30, 40],
                backgroundColor: [
                    '#F59757',
                    '#44C5FF',
                    '#E74E3A',
                ],
                borderWidth: 0,
                cutout: '75%',

            },
        ],
      
    };

    
    
    return (
        <>
            <div className="leadTypesWrapper">
                <div className='tableHeading'>
                    <h2 className='h2'> Lead Types </h2>
                    <CustomDropdown options={selectOptions} title="Last 3 months" />
                </div>
                <div className='donnutChartWrapper'>
                    <Doughnut  data={data} options={options} />
                    <div className='donnutData'> 168k</div>
                </div>
                <div className='leadTypesListWrapper'>
                    <div className='leadTypesList'>
                        <div className='title hot'>
                            <span className="material-icons">
                                person
                            </span>
                            Hot Leads
                        </div>
                        <div className='num'>5642872</div>
                    </div>
                    <div className='leadTypesList'>
                        <div className='title warm'>
                            <span className="material-icons">
                                person
                            </span>
                            Warm Leads
                        </div>
                        <div className='num'>2382893</div>
                    </div>
                    <div className='leadTypesList'>
                        <div className='title cold'>
                            <span className="material-icons">
                                person
                            </span>
                            Cold Leads
                        </div>
                        <div className='num'>78782</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LeadTypes