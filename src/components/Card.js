import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {
    
    if(loadingData){
        return  <Spinner />;
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            
                        </div>

                    </div>

                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }



        </div>

    );
}

export default Card;