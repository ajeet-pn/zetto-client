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
        Our team, made up of experts, works hard to stay on top of the games, ensuring you're part of the most fun and thrilling experiences.
      </p>
      <p className='text-[12px] py-2 '>
        Make Your Move, Bet Now! Zet. Set. Go!
      </p>
      <p className='text-[16px] py-2 font-semibold '>
        Why Choose Zetto as Your Online Sports Betting Exchange Platform
      </p>
      <p className='text-[12px] py-2 '>
        With just one click, you can access live cricket, other sports, and casino betting on our user-friendly platform. Place Your Debut Bet with Zetto Exchange! 
      </p>
      <p className='text-[14px] py-2 font-semibold '>Unmatched Variety
      </p>
      <p className='text-[12px] py-2 '>
        Explore a diverse selection of sports events and find the perfect match for your betting preferences, Zetto has it all.
      </p>
      <p className='text-[14px] py-2 font-semibold '>
        Innovative Betting Exchange
      </p>
      <p className='text-[12px] py-2 '>Zetto goes beyond traditional sports betting with our revolutionary betting exchange platform. Experience the power to set your odds, trade bets with fellow enthusiasts, and take control of your betting journey like never before.
      </p>
      <p className='text-[14px] py-2 font-semibold '>Live Betting Experience

      </p>
      <p className='text-[12px] py-2 '>
        Feel the adrenaline rush with our live betting feature. Get in the action, place bets in real time, and witness the game-changing moments that can turn the odds in your favour.
      </p>
      <p className='text-[14px] py-2 font-semibold '>Secure and Transparent
      </p>
      <p className='text-[12px] py-2 '>
      At Zetto, we prioritise the safety and security of our users. Our robust platform ensures that your transactions are secure, and your data is protected. With transparent processes and fair play, you can bet with confidence, knowing that your success is determined by skill and strategy.
      </p>
      <p className='text-[14px] py-2 font-semibold '>Exclusive Bonuses/Promotions
      </p>
      <p className='text-[12px] py-2 '>Discover the great perks of our welcome offer and exciting promotional bonuses as you enjoy betting on global sports events.
      </p>
      <table className='border'>
        <thead>
          <tr>
            <td className='border border-black px-3 text-[12px] py-2'>Casino Bonus</td>
            <td className='border border-black px-3 text-[12px] py-2'>Welcome Bonus 500% upto ₹5000</td>
          </tr>
          <tr>
            <td className='border border-black px-3 text-[12px] py-2'>Re-Deposit Bonus</td>
            <td className='border border-black px-3 text-[12px] py-2'>Extra 3% upto ₹1500</td>
          </tr>
          <tr>
            <td className='border border-black px-3 text-[12px] py-2'>Refer & Earn</td>
            <td className='border border-black px-3 text-[12px] py-2'>₹1000</td>
          </tr>
        </thead>
      </table>
      <p className='text-[14px] py-2'>Additionally,
      </p>
      <ul className='ps-4'>
        <li className='list-disc text-[12px]'>We take pride in being one of the online betting companies accepting Indian rupees.</li>
        <li className='list-disc text-[12px]'>
          Our customer support is ready round the clock to help with any questions or worries.</li>
        <li className='list-disc text-[12px]'>You can trust that Zetto is a fully licensed and legal online sports betting company that follows all the rules and regulations.</li>
        <li className='list-disc text-[12px]'>Experience a high acceptance rate with our fastest matching bet feature, ensuring your odds are matched swiftly.</li>
        <p className='text-[14px] py-2'>
          Besides, we offer GUARANTEED WITHDRAWAL UNDER 45 MINUTES.
        </p>
      </ul>

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
