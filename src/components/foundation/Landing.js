import React from 'react'

const Landing = () => {
    return (
        <div>
            <div class="bg-clip-content flex-row-reverse text-left">
                <button>Log In</button>
            </div>

            <div>
                <h1 class="text-center">Introduction</h1>
            </div>

            <div class="col-md-5 padding-0\">
                <div class="bg-clip-padding p-6 bg-gray-100 border-4 border-purple-100 border-dashed items-stretch overflow-auto">
                    <img class="float-left object-contain h-2/4 w-2/4" src="https://i.ibb.co/CzqyvyD/antique-binoculars.jpg" alt="default" />

                    <h2 class="text-right">
                        Set your destination.
                    </h2>
                </div>


            </div>

            <div class="col-md-5 padding-0">
                <div class="bg-clip-padding p-6 bg-gray-100 border-4 border-indigo-100 border-dashed items-stretch overflow-auto">
                    <img class="float-right object-contain h-2/4 w-2/4" src="https://i.ibb.co/H2TktZv/international-money.jpg" alt="default" />
                
                    <h2 class="text-left">
                        Manage your budget.
                    </h2>
                
                </div>
            </div>


            <div class="col-md-5 padding-0\">
                <div class="bg-clip-padding p-6 bg-gray-100 border-4 border-purple-100 border-dashed items-stretch overflow-auto">
                    <img class="float-left object-contain h-2/4 w-2/4" src="https://www.founderjar.com/wp-content/uploads/2020/11/Bucket-List-Ideas-101-Epic-Things-to-Do-Before-You-Die_.jpg" alt="default" />

                    <h2 class="text-right">
                        Check-off your bucket list.
                    </h2>
                </div>
            </div>


        </div>
    )
}

export default Landing
