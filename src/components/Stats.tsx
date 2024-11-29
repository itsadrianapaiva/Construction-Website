import React from 'react'
import { stats } from '../constants';
import Counter from './Counter';

const Stats: React.FC<{ className: string}> = ({className}) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">See how we've made an impact over the years</h5>
      <ul className="flex">
        {stats.map((stat, index) => (
           <li className="flex flex-col items-center justify-center flex-1 h-[8.5rem]" key={index}>
            <div className="h2">
              <Counter end={stat.end} />{stat.operator}
            </div>
            <p className="body-2 text-n-1/50">{stat.description}</p>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default Stats;
