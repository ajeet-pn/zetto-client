import React from 'react'

function MarqueeNotification() {
    const clientdomainSettingData = JSON.parse(localStorage.getItem('clientdomainSetting'));
    return (
        <section className='h-[30px] bg-[var(--white)] flex items-center '>
            <div className="w-full flex justify-start items-center overflow-hidden">
                    <div className="w-[38px] min-w-[30px] px-[3px] !bg-white z-50 flex justify-center items-center">
                        <img src='/images/zetto/speaker.png' className="w-[22px] h-[30px]" />
                    </div>
                    <div className="w-[96%]">
                        <div className='px-[2px]  text-black bg-[var(--white)] '>
                            <div className=" px-1 py-[2px] font-semibold tracking-wide animate-[marquee_40s_linear_infinite]  text-black text-[11px] whitespace-nowrap  ">
                                {clientdomainSettingData?.clientNotification !== undefined && clientdomainSettingData?.clientNotification !== null ? clientdomainSettingData?.clientNotification :
                                    "🏏 THE HUNDRED WOMEN'S & MEN'S CUP WINNER🏆 AND FANCY MARKET STARTED IN OUR EXCHANGE 🏏 🎾 ATP TORONTO & WTA MONTREAL 🏆 CUP WINNER BETS STARTED IN OUR EXCHANGE 🎾 🏏 OUR EXCLUSIVE PREMIUM MARKET FOR (SRL) IS NOW STARTED IN OUR EXCHANGE 🏏 DREAM BIG WIN BIG "
                                }
                            </div>
                            <style>
                                {`  @keyframes marquee {
                       0% { transform: translateX(100%); }
                      100% { transform: translateX(-100%); }
                  }`}
                            </style>
                        </div>
                    </div>
            </div>
        </section>

    )
}

export default MarqueeNotification;