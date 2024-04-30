import React, { useState, useEffect } from 'react';
import MobileRanking from '../components/RankingPage/MobileRanking';

const RankingPage = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-12 m-0">
                <MobileRanking />
            </div>
        </div>
    );
};

export default RankingPage;