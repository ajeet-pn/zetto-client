import React, { useState } from 'react';

const SeeMoreLess = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div >
      <h2>Online Sports Betting Exchange</h2>
      <p>
        India’s online betting exchange and casino company, Zetto, is more than just a platform for betting enthusiasts,
        it transcends traditional betting by blending excitement and entertainment into every interaction.
      </p>
      <p>
        We've mixed the thrill of betting exchange with the excitement of a sport and casino, creating an awesome
        experience just for you. We've got something for everyone, so your time with Zetto is always special.
      </p>
      <p>
        Our team, made up of experts, works hard to stay on top of the games, ensuring you're part of the most fun.
      </p>

      {showMore && (
        <div>
          <h4>3. Why does a user want to bet on the Zetto exchange in India?</h4>
          <p>
            That’s because online sports betting exchange offers better odds, the ability to lay bets and act as a
            bookmaker, the flexibility to set your own odds, and the potential for higher returns due to the absence
            of a traditional bookmaker's margin.
          </p>

          <h4>4. Is the Zetto betting exchange safe in India?</h4>
          <p>
            Certainly! Zetto withdrawals are not only safe but also provide a seamless experience in India. We take
            pride in offering guaranteed withdrawals within 45 minutes. Players have a multitude of options to
            conveniently withdraw their winnings using our encrypted and secure payment methods. Rest assured, our
            reliability and speed are second to none. Although withdrawal times may vary based on the chosen method,
            you can expect a prompt and efficient process throughout.
          </p>

          <h4>5. Can I place in-play (live) bets on the Zetto betting exchange platform?</h4>
          <p>
            Yes, Zetto allows in-play betting, enabling users to place bets while the event is in progress.
          </p>
        </div>
      )}

      <button
        onClick={handleToggle}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default SeeMoreLess;
