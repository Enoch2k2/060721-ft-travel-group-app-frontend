import React from 'react'

const Filter = () => {
    return (
    <div className='filter-wrapper'>

        <div className='filter-type'>
            <legend aria-hidden="true" className='font-bold'>Filter by</legend>
            <legend aria-hidden="true">Popular filters</legend>

            <input type="checkbox" id='filter1'/>
            <label htmlFor ='filter1'
            >rating
            </label>
            
            <input type="checkbox" id='filter3'/>
            <label htmlFor ='filter3'
            >Pool
            </label>
            <input type="checkbox" id='filter4'/>
            <label htmlFor ='filter4'
            >Pet friendly
            </label>
            <input type="checkbox" id='filter5'/>
            <label htmlFor ='filter5'
            >Breakfast included
            </label>
            
            <legend aria-hidden="true" className='font-bold'>Your budget</legend>
            <input type="checkbox" id='filter13'/> 
            <label htmlFor ='filter13'
            > Less than $75
            </label>
            <input type="checkbox" id='filter2'/>
            <label htmlFor ='filter2'
            >$700 - $1000
            </label>
            <input type="checkbox" id='filter14'/>
            <label htmlFor ='filter14'
            > $75 to $125
            </label>
            <input type="checkbox" id='filter15'/>
            <label htmlFor ='filter15'
            > $125 to $200
            </label>
            <input type="checkbox" id='filter16'/>
            <label htmlFor ='filter16'
            > $200 to $300
            </label>
            <input type="checkbox" id='filter17'/>
            <label htmlFor ='filter17'
            >Greater than $300
            </label>
            <legend aria-hidden="true" className='font-bold'>Star rating</legend>
            <legend aria-hidden="true" className='font-bold'> Guest rating</legend>
            <input type="checkbox" id='filter6'/>
            <label htmlFor ='filter6'
            >Any
            </label>
            <input type="checkbox" id='filter7'/>
            <label htmlFor ='filter7'
            >Bad 2-
            </label>
            <input type="checkbox" id='filter8'/>
            <label htmlFor ='filter8'
            >Average 2.5
            </label>
            <input type="checkbox" id='filter9'/>
            <label htmlFor ='filter9'
            >Good 3.5+
            </label>
            <input type="checkbox" id='filter10'/>
            <label htmlFor ='filter10'
            >Very Good 4+
            </label>
            <legend aria-hidden="true" className='font-bold'>Traveler experience</legend>
            <input type="checkbox" id='filter11'/>
            <label htmlFor ='filter11'
            >Family friendly
            </label>
            <input type="checkbox" id='filter12'/>
            <label htmlFor ='filter12'
            >Business friendly
            </label>
        </div>
    </div>
    )

   
} 
export default Filter
