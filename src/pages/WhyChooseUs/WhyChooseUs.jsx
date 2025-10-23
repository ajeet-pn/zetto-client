import React, { useEffect, useState } from 'react';
import { domainName } from '../../config/Auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
    const user = JSON.parse(localStorage.getItem(`user_info_${domainName}`));
    const navigate = useNavigate();

   
    

    return (
        <div>
          <div class="mb-4"><h1 style={{textAlign: "center"}}>BECAUSE WE ARE <strong>UNCONVENTIONAL</strong></h1>
<p style={{textAlign: "left"}}><span style={{fontSize: "14pt"}}>At Zetto, we believe in being ‘UNCONVENTIONAL’</span></p>
<p style={{textAlign: "left"}}><span style={{fontSize: "14pt"}}>Right from offering you the best in class customer service (that actually responds to you) to giving you the highest possible Welcome Bonus Gift at a whopping 100%, here at Zetto, we do things differently.</span></p>
<p style={{textAlign: "left"}}><span style={{fontSize: "14pt"}}>With zapping fast gaming experience (fast loading technology), choice of trusted payment options (UPI &amp; more), and 10K+ games to entertain you - you will feel the difference. </span><span style={{fontSize: "14pt"}}>And that is not all,</span></p>
<p><img src="https://prod-cms-api-s3-bucket.s3.ap-south-1.amazonaws.com/1715156640277%7C%7Cinfographics-phone-2.jpg" alt="" width="600" height="2187"/></p>
<p><span style={{fontSize: "14pt"}}>We're not afraid to shake things up and try new things, and we're always looking for ways to surprise and delight our users.</span></p>
<p><span style={{fontSize: "14pt"}}>We're Zetto, and we're here to change the way you play.</span></p>
<p><span style={{fontSize: "14pt"}}>So, </span><strong><span style={{fontSize: "18pt"}}>Zet. Set. Go.</span></strong></p></div>
        </div>
    );
};


export default WhyChooseUs;