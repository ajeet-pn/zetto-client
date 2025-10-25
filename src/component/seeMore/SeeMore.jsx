import React, { useState } from 'react';

const SeeMoreLess = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div className='mx-5 md:mx-20' >
      <div className='text-[20px] font-bold text-start'>Online Sports Betting Exchange</div>
      <p className='text-[12px] py-2 '>
        India’s online betting exchange and casino company, Bhimexch, is more than just a platform for betting enthusiasts,
        it transcends traditional betting by blending excitement and entertainment into every interaction.
      </p>
      <p className='text-[12px] py-2 '>
        We've mixed the thrill of betting exchange with the excitement of a sport and casino, creating an awesome
        experience just for you. We've got something for everyone, so your time with Bhimexch is always special.
      </p>
      <p className='text-[12px] py-2 '>
        Our team, made up of experts, works hard to stay on top of the games, ensuring you're part of the most fun.
      </p>

      {showMore && (
        <div>
          <h4>3. Why does a user want to bet on the Bhimexch exchange in India?</h4>
          <p className='text-[12px] py-2 '>
            That’s because online sports betting exchange offers better odds, the ability to lay bets and act as a
            bookmaker, the flexibility to set your own odds, and the potential for higher returns due to the absence
            of a traditional bookmaker's margin.
          </p>

          <h4>4. Is the Bhimexch betting exchange safe in India?</h4>
          <p className='text-[12px] py-2 '>
            Certainly! Bhimexch withdrawals are not only safe but also provide a seamless experience in India. We take
            pride in offering guaranteed withdrawals within 45 minutes. Players have a multitude of options to
            conveniently withdraw their winnings using our encrypted and secure payment methods. Rest assured, our
            reliability and speed are second to none. Although withdrawal times may vary based on the chosen method,
            you can expect a prompt and efficient process throughout.
          </p>

          <h4>5. Can I place in-play (live) bets on the Bhimexch betting exchange platform?</h4>
          <p className='text-[12px] py-2 '>
            Yes, Bhimexch allows in-play betting, enabling users to place bets while the event is in progress.
          </p>
        </div>
      )}
      <div className='flex justify-center pb-12'>
        <button className=''
          onClick={handleToggle}
          style={{
            marginTop: '10px',
            padding: '4px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'semibold'
          }}
        >
        {showMore ? 'See Less' : 'See More'}
      </button>
      </div>
    </div>
  );
};

export default SeeMoreLess;
