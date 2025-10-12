import React from 'react'

function MarqueeNotification() {
    const clientdomainSettingData = JSON.parse(localStorage.getItem('clientdomainSetting'));
    return (
        <section className='py-2 bg-[var(--white)] '>
            <div className="w-full flex justify-start items-center overflow-hidden">
                    <div className="w-[4%] px-[3px]">
                        <img src='/subHeader/commentary.png' className="w-[22px] h-[22px]" />
                    </div>
                    <div className="w-[96%]">
                        <div className='px-[2px] text-black bg-[var(--white)] '>
                            <div className=" px-1 py-[2px] font-[700] tracking-wide animate-[marquee_40s_linear_infinite]  text-black text-[12px] whitespace-nowrap uppercase  ">
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